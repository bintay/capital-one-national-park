/*
Make sure the API key variable exists, and grab it if it does
*/

const NATIONAL_PARK_API_KEY = process.env.NATIONAL_PARK_API_KEY;

if (!NATIONAL_PARK_API_KEY) {
   console.log("Error: Environment variable NATIONAL_PARK_API_KEY is not defined.");
   process.exit(1);
}

/*
Set up libraries
*/

const request = require("request");
const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.argv[2] || 4000;

const WHITELIST = new Set(["http://localhost:3000", "https://nationalpark.fun", "http://134.209.173.108"]);
app.use(cors({
   origin: (origin, callback) => {
      if (true || WHITELIST.has(origin)) {
         callback(null, true)
      } else {
         callback(new Error("Not allowed by CORS"))
      }
   }
}));

/*
Serve the front end
*/

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

/*
API proxies
*/

// get the park list on the home page
app.get("/api/parks", (req, res) => {
   const PAGE_SIZE = 10;
   const q = req.query.text;
   const stateCode = req.query.states || "";
   const start = (parseInt(req.query.page) - 1) * PAGE_SIZE || 1;
   const limit = PAGE_SIZE - 1; // why do we need to subtract one? Who knows, but this makes it work properly
   const designations = req.query.designations ? req.query.designations.split(",") : [];

   const URL = "https://developer.nps.gov/api/v1/parks";
   const PARAMETERS = `fields=images&q=${q}&start=${start}&limit=${limit}&stateCode=${stateCode}&api_key=${NATIONAL_PARK_API_KEY}`;

   // verify the parameter types and format
   if (  typeof q != "string"
      || typeof stateCode != "string"
      || typeof start != "number"
      || typeof designations != "object"
      || !(/^([a-zA-Z]{2}(,))*[a-zA-Z]{2}$/.test(stateCode) || stateCode == "")) {
      res.json({"error": "Invalid request"});
      return;
   }

   // send the request to the national park api
   request.get(`${URL}?${PARAMETERS}`, 
      (err, response, body) => {
         body = JSON.parse(body);

         // filter by designation (api does not have built in support)
         if (designations.length > 0) {
            const designationsSet = new Set(designations);
            body.data = body.data.filter(v => designationsSet.has(v.designation));
         }

         // sort data - if the query is in the name, it's more relevant
         // if both or either have the query in the name, sort alphabetically
         body.data = body.data.sort((a, b) => {
            const name1 = a.name.toLowerCase();
            const name2 = b.name.toLowerCase();
            const query = q.toLowerCase();

            if (name1.indexOf(query) !== -1 && name2.indexOf(query) === -1) {
               return -1;
            } else if (name1.indexOf(query) === -1 && name2.indexOf(query) !== -1) {
               return 1;
            } else {
               if (name1 < name2) {
                  return -1;
               } else if (name1 > name2) {
                  return 1;
               } else {
                  return 0;
               }
            }
         });

         res.json(body.data);
      }
   );
});

// get articles & news, visitor centers & campgrounds, people & places
app.get("/api/:first/:second", (req, res) => {
   const parkCode = req.query.parkCode;
   const limit = 4;

   const URL1 = `https://developer.nps.gov/api/v1/${req.params.first}`;
   const URL2 = `https://developer.nps.gov/api/v1/${req.params.second}`;
   const PARAMETERS = `parkCode=${parkCode}&api_key=${NATIONAL_PARK_API_KEY}&limit=${limit}`;

   let result = [];

   request.get(`${URL1}?${PARAMETERS}`,
      (err, response, body) => {
         body = JSON.parse(body);
         result = body.data.slice(0, limit / 2); // for some reason, limit doesn't always work
         request.get(`${URL2}?${PARAMETERS}`,
            (err, response, body) => {
               body = JSON.parse(body);
               result = result.concat(body.data).slice(0, limit);
               res.json(result);
            }
         );
      }
   );
});

// get events, alerts, etc
app.get("/api/:type", (req, res) => {
   const parkCode = req.query.parkCode;
   const limit = 4;

   const URL = `https://developer.nps.gov/api/v1/${req.params.type}`;
   const PARAMETERS = `parkCode=${parkCode}&api_key=${NATIONAL_PARK_API_KEY}&limit=${limit}`;

   request.get(`${URL}?${PARAMETERS}`,
      (err, response, body) => {
         body = JSON.parse(body)
         res.json(body.data.slice(0, limit));
      }
   );
});


// start the server
app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
});
