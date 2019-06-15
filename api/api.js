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

// set up express & middlewear
const express = require("express");
const app = express();
const PORT = process.argv[2] || 4000;

// other libraries
const request = require("request");

/*
API proxies
*/

// get the park list on the home page
app.get("/api/parks", (req, res) => {
   const q = req.query.text;
   const stateCode = req.query.states || "";
   const start = (parseInt(req.query.page) - 1) * 10 || 1;
   const limit = 20;
   const designations = req.query.designations ? req.query.designations.split(",") : [];

   const URL = "https://developer.nps.gov/api/v1/parks"
   const PARAMETERS = `fields=images&q=${q}&start=${start}&limit=${limit}&stateCode=${stateCode}&api_key=${NATIONAL_PARK_API_KEY}`

   // verify the parameter types and format
   if (  typeof q != "string"
      || typeof stateCode != "string"
      || typeof start != "number"
      || typeof designations != "object"
      || !(/^([a-z]{2}(,))*[a-z]{2}$/.test(stateCode) || stateCode == "")) {
      res.json({"error": "Invalid request"});
   }

   // send the request to the national park api
   request.get(`${URL}?${PARAMETERS}`,
      (err, response, body) => {
         body = JSON.parse(body);

         // filter by designation (api does not have built in support)
         if (designations.length > 0) {
            designationsSet = new Set(designations);
            body.data = body.data.filter(v => designationsSet.has(v.designation));
         }

         res.json(body.data);
      }
   );
});

// start the server
app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
});
