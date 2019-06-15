import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Results from "./components/results";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      parks: [
        //temp data
        {
          "states": "NY",
          "directionsInfo": "Take I-90 (NY Thruway) to Exit 33 (Verona-Rome). Turn Right onto Rt. 365 E. Follow Rt. 365, veering left as Rt. 365 merges with Rt 69 at the fork in the road. This will take you over an arterial bridge into the City of Rome. Fort Stanwix NM will be across Erie Blvd. on the right side of James Street.",
          "directionsUrl": "http://www.nps.gov/fost/planyourvisit/directions.htm",
          "url": "https://www.nps.gov/fost/index.htm",
          "weatherInfo": "The Park lies within a temperate zone and experiences four full seasons. Summer can become very hot and humid. Snow is common as late as May and as early as October. The fort area can become muddy in all seasons. With most activities outdoors, good closed-toe walking shoes and low heels are advised. Air conditioning and heating is limited to park visitor center most times in the year. Water and extra layers of clothing in all seasons are always recommended!",
          "name": "Fort Stanwix",
          "latLong": "lat:43.21053441, long:-75.45557626",
          "description": "For centuries, the Oneida Carrying Place, a six mile portage connecting the Mohawk River and Wood Creek, served as a vital link for those traveling by water from the ocean to the Great Lakes. When Europeans arrived, nations fought for control of the carry, the homelands of the Six Nations Confederacy, and the rich resources of North America. In this struggle, Fort Stanwix would play a vital role.",
          "images": [
            {
              "credit": "NPS Photo",
              "altText": "A park ranger directs a group of children thorugh the fort.",
              "title": "Which Adventure Will You Choose?",
              "id": "4706",
              "caption": "From ranger tours, to walking trails, to exploring history, there's plenty to do at Fort Stanwix!",
              "url": "https://www.nps.gov/common/uploads/structured_data/97622E69-1DD8-B71B-0BFA66595163F51F.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Children dance, jump, and skip on the parade ground of reconstructed Fort Stanwix.",
              "title": "Celebrate the Park! Fort Stanwix at 40 & the NPS Centennial!",
              "id": "4707",
              "caption": "The park is gearing up for the National Park Service Centennial. Find out what's going on and what's already been done!",
              "url": "https://www.nps.gov/common/uploads/structured_data/97B49B54-1DD8-B71B-0B182BEF64FAA577.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Small boxes in rows contain small artifacts, including broken pipes and glass bottles.",
              "title": "Objects From the Past: Museum Collection",
              "id": "4708",
              "caption": "Learn more about the objects in the park's museum collection.",
              "url": "https://www.nps.gov/common/uploads/structured_data/987D6EEA-1DD8-B71B-0BEBD381AE9D09C9.png"
            },
            {
              "credit": "NPS Photo",
              "altText": "A woman digs in a carefully excavated hole.",
              "title": "Uncovering the Past at Fort Stanwix",
              "id": "4709",
              "caption": "What evidence of the past has been found at Fort Stanwix? Stop through to find out!",
              "url": "https://www.nps.gov/common/uploads/structured_data/988ED0D8-1DD8-B71B-0B42050335B9C0C4.jpg"
            },
            {
              "credit": "NPS Photo/M. Hucko",
              "altText": "Soldiers stand in a neat row holding their muskets.",
              "title": "Fort Stanwix: History Happened Here!",
              "id": "4710",
              "caption": "Discover the vital role that Fort Stanwix/Schuyler, the fort that \"never surrendered\" played in the American Revolution.",
              "url": "https://www.nps.gov/common/uploads/structured_data/98ADC8DB-1DD8-B71B-0B6F8FEADD955234.jpg"
            }
          ],
          "designation": "National Monument",
          "parkCode": "fost",
          "id": "D57C8F0D-71E9-46D7-B00B-001BC7E39096",
          "fullName": "Fort Stanwix National Monument"
        },
        {
          "states": "OH",
          "directionsInfo": "The National Aviation Heritage Area has multiple sites located throughout eight counties in the Dayton, Ohio and western Ohio area. Please be sure to visit a specific National Aviation Heritage Area website for directions and/or maps to each location.",
          "directionsUrl": "http://www.aviationheritagearea.org/",
          "url": "https://www.nps.gov/avia/index.htm",
          "weatherInfo": "The National Aviation Heritage Area lies in a humid continental zone with a generally temperate climate. Winters are mildly cold with average temperatures around 39 degrees (F). Summers are hot and humid with an average temperature around 74 degrees (F). Average annual total rainfall is just above 41\". Snowfall in the winter is generally light with an average total snowfall of about 25\".",
          "name": "National Aviation",
          "latLong": "lat:39.9818229675293, long:-84.0711364746094",
          "description": "Aviation is chock-full of tradition & history and nowhere will you find a richer collection of aviation than here, the birthplace of aviation.  From the straightforward bicycle shops that fostered the Wright brothers' flying ambitions to the complex spacecraft that carried man to the moon, the National Aviation Heritage Area has everything you need to learn about this country’s aviation legacy.",
          "images": [
            {
              "credit": "NPS Photo / Tom Engberg",
              "altText": "Visitor center building in background with plaza in foreground",
              "title": "Dayton's National Park",
              "id": "3671",
              "caption": "The Wright-Dunbar Interpretive Center located just west of downtown Dayton",
              "url": "https://www.nps.gov/common/uploads/structured_data/DCB2628F-1DD8-B71B-0BD78D1063069C70.jpg"
            }
          ],
          "designation": "Heritage Area",
          "parkCode": "avia",
          "id": "C8C207D8-49C4-4891-9915-0007205A0284",
          "fullName": "National Aviation Heritage Area"
        },
        {
          "states": "DC",
          "directionsInfo": "DC295 South to the Exit for I-694/I-395/Capitol Hill then a left Exit 4B to 11th St SE/MLK Jr Ave.  Turn Left at light onto 11st/MLK JR. **\n\nI-295 North to Exit 4B to 11th St SE/MLK Jr Ave.  Turn Right at the light.  **\n\nFrom downtown DC: I-395 to I-695/SW Freeway, take Exit 1C 11th St SE. Turn Right onto 11th St **\n\n** At the  light turn Right onto Good Hope Road.  At the Stop Sign turn Left.  Turn Left at the next road way.",
          "directionsUrl": "http://www.nps.gov/nace/planyourvisit/directions.htm",
          "url": "https://www.nps.gov/nace/index.htm",
          "weatherInfo": "Summers are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit, high humidity, and scattered afternoon thunderstorms. \nWinters are generally cold, with nighttime lows frequently near freezing and occasional snowfall. \nWeather during spring and fall is generally moderate, but can change quickly.",
          "name": "National Capital Parks-East",
          "latLong": "lat:38.85301412, long:-76.98495791",
          "description": "Welcome to National Capital Parks-East. We invite you to journey to parks Beyond the Capital of Washington, D.C.  National Capital Parks-East is 13 park sites, parkways and statuary covering more than 8,000 acres of historic, cultural, and recreational parklands from Capitol Hill to the nearby Maryland suburbs",
          "images": [
            {
              "credit": "NPS photo",
              "altText": "The red barns and outbuildings at Oxon Hill Farm",
              "title": "Oxon Cove Park",
              "id": "3632",
              "caption": "The Barnyard at Oxon Hill Farm",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82B782-1DD8-B71B-0B692035768B7064.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Photo of the outside of the Mary McLeod Bethune Council House",
              "title": "Mary McLeod Bethune National Historic Site",
              "id": "3633",
              "caption": "Mary McLeod Bethune Council House in Washington D.C.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82B89F-1DD8-B71B-0B83D546B43BD349.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Cars driving on the Baltimore0Washington Parkway",
              "title": "Baltimore-Washington Parkway",
              "id": "3634",
              "caption": "Baltimore-Washington Parkway is managed by National Capital Park-East",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82BA2D-1DD8-B71B-0BD77C70BF37D1E9.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Image of a three red and white water lilies.",
              "title": "Kenilworth Aquatic Gardens",
              "id": "3635",
              "caption": "Water lilies that can be found at Kenilworth Aquatic Gardens",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82BB4D-1DD8-B71B-0B5854E45462FFF9.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Photo of Cedar Hill, home of Frederick Douglass",
              "title": "Frederick Douglass National Historic Site",
              "id": "3636",
              "caption": "Cedar Hill, Frederick Douglass' Washington D.C. home.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82BC63-1DD8-B71B-0B2640B5624E7EBA.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Image of Still Creek running through the trees at Greenbelt Park.",
              "title": "Greenbelt Park",
              "id": "3637",
              "caption": "Still Creek at Greenbelt Park",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82BD6B-1DD8-B71B-0B0E49552107D0B2.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Hundreds of audience member watching the Summer Theater program at Fort Dupont.",
              "title": "Fort Dupont",
              "id": "3638",
              "caption": "Summer Theater is an annual event at Fort Dupont Park.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82BF0F-1DD8-B71B-0BE15EDE790BE1D9.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "A photo of the Urban Tree House.  The tree house is a wooden outline of the United States.",
              "title": "Anacostia Park",
              "id": "3639",
              "caption": "The tree house is a wooden outline of the United States.  Used as an outdoor classroom.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82C0C7-1DD8-B71B-0BAE1553BC5451CD.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Photo of the parade ground inside the historic fort.",
              "title": "Fort Washington Park",
              "id": "3640",
              "caption": "Fort Washington's parade ground facing the main entrance.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82C1F2-1DD8-B71B-0BF244B97CE6E952.jpg"
            },
            {
              "credit": "NPS Photo/MJ Garcia",
              "altText": "Photo of Accokeek Creek Site, as the fog rises in the early morning.",
              "title": "Piscataway Park",
              "id": "3641",
              "caption": "Accokeek Creek Site is a part of Piscataway Park.  The boardwalk takes you over the wetlands.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C82C316-1DD8-B71B-0BD2336D2323D7EC.jpg"
            }
          ],
          "designation": "",
          "parkCode": "nace",
          "id": "BA3C1A1D-AA6A-49EB-9237-0222CEEE2670",
          "fullName": "National Capital Parks-East"
        },
        {
          "states": "TX",
          "directionsInfo": "Park Headquarter's is located 4 miles south of downtown San Antonio.\nThe four mission sites lay as a chain south of downtown. Mission Concepción is 3 miles, Mission San José and the park visitor center is 6 miles south, Mission San Juan is 3 miles south of San José, and Mission Espada lays another mile beyond. \nWritten directions and GPS addresses can be found at the link below.",
          "directionsUrl": "http://www.nps.gov/saan/planyourvisit/directions.htm",
          "url": "https://www.nps.gov/saan/index.htm",
          "weatherInfo": "Over the course of a year, the temperature typically varies from 40°F to 95°F and is rarely below 29°F or above 100°F. The warm season lasts from May through September with an average daily high temperature above 90°F and a low of 75°F. The cold season lasts from November through February with an average daily high below 68°F and an average low of 40°F.\nThe relative humidity ranges from 40-80% over the course of the year, which can be very uncomfortable to many people.",
          "name": "San Antonio Missions",
          "latLong": "lat:29.31262089, long:-98.4289522",
          "description": "After 10,000 years, the people of South Texas found their cultures, their very lives under attack. In the early 1700s Apache raided from the north, deadly diseases traveled from Mexico, and drought lingered. Survival lay in the missions. By entering a mission, they foreswore their traditional life to become Spanish, accepting a new religion and pledging fealty to a distant and unseen king.",
          "images": [
            {
              "credit": "NPS Photo",
              "altText": "Mission Concepción, World Heritage Site",
              "title": "Mission Concepción, World Heritage Site",
              "id": "1854",
              "caption": "Mission Concepción has colorful frescos inside that date to the 1750s.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C7D9A82-1DD8-B71B-0BDAE9A6D757367C.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Mission San José, World Heritage Site",
              "title": "Mission San José, World Heritage Site",
              "id": "1863",
              "caption": "Mission San José shows many aspects of a Spanish colonial mission.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C7DA93C-1DD8-B71B-0B219B223AE7D5FB.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Mission San Juan, World Heritage Site",
              "title": "Mission San Juan, World Heritage Site",
              "id": "1864",
              "caption": "Mission San Juan has a farm watered with an historic irrigation system.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C7DAABD-1DD8-B71B-0B484755647E2892.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "Mission Espada, World Heritage Site",
              "title": "Mission Espada, World Heritage Site",
              "id": "1865",
              "caption": "A part of Mission Espada's ranch is located 30 miles south-east, outside of Floresville, TX.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C7DAC12-1DD8-B71B-0B52A18E18ADF8B7.jpg"
            },
            {
              "credit": "NPS Photo",
              "altText": "The Rose Window, Mission San José",
              "title": "The Rose Window, Mission San José",
              "id": "1867",
              "caption": "Legend has Pedro Huizar constructing this window for his beloved Rosa, who died at sea on her way from Spain to join him in new Spain.",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C7DAED8-1DD8-B71B-0BAAC47C56428D9C.jpg"
            },
            {
              "credit": "NPS Photo.",
              "altText": "Park Ranger leads a tour through Mission San José",
              "title": "Tours of Mission San José",
              "id": "9021",
              "caption": "Catch a tour at Mission San José at 10:00, 11:00, 1:00 and 3:00 daily.",
              "url": "https://www.nps.gov/common/uploads/structured_data/A1F5E6C0-1DD8-B71B-0B23C3B88803DB0B.jpg"
            }
          ],
          "designation": "National Historical Park",
          "parkCode": "saan",
          "id": "CCE1AD17-9B13-4D74-9CAC-0278D5477316",
          "fullName": "San Antonio Missions National Historical Park"
        }
      ]
    };
  }

  handleSearchResults = (results) => {
    this.setState({ parks: results });
  }

  render = () => (
    <div>
      <Header handleSearchResults={this.handleSearchResults} />
      <Results parks={this.state.parks} />
    </div>
  )
}

export default App;
