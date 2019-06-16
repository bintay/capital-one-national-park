import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Gallery from "react-photo-gallery";
import "./image-gallery.css";
import "./loading.css";
import EventsList from "./events-list";
import AlertList from "./alert-list";
import NewsList from "./news-list";
import CenterList from "./center-list";
import EducationList from "./education-list";

class ParkInformationModal extends Component {
  constructor (props) {
    super(props);
    // temp data
    this.state = {
      alerts: [
        {
          "title": "Strong Winds and Hazard Trees",
          "id": "14782F36-1DD8-B71B-0BCA86558413B16E",
          "description": "Because of recent fires and forest die-back, some areas of the Monument can be dangerous during times of high winds. Use caution and stay alert when hiking on windy days, and backcountry camp well away from stands of dead or fire damaged trees.",
          "category": "Caution",
          "url": "",
          "parkCode": "band"
        },{
        "title": "Precautions for Zika Virus",
          "id": "0A624DA1-1DD8-B71B-0B010C099120ED6E",
          "description": "There are no areas of ongoing, active transmission of Zika by mosquitoes in Florida, yet please take appropriate personal protection measures including the use of insect repellent and wearing long-sleeved shirts and long pants during your park visit.",
          "category": "Information",
          "url": "https://www.nps.gov/articles/zika-virus.htm",
          "parkCode": "bisc"
        }
      ],
      news: [
        {
          "image": {
            "credit": "NPS",
            "altText": "",
            "title": "",
            "description": "",
            "caption": "",
            "url": "https://www.nps.gov/rich/learn/news/images/weapons-demonstration-CMS.jpg"
          },
          "parkCode": "rich",
          "releasedate": "2019-06-15 14:04:00.0",
          "title": "A Battle that Changed the Course of the Civil War - Richmond National Battlefield Park to Commemorate  Battle of Gaines’ Mill",
          "id": "6197862",
          "abstract": "On Saturday, June 29 and Sunday, June 30, Richmond National Battlefield Park will commemorate the 157th anniversary of the Battle of Gaines’ Mill with ranger-led programs and weapons demonstrations.",
          "url": "https://www.nps.gov/rich/learn/news/a-battle-that-changed-the-course-of-the-civil-war.htm"
        },
        {
          "image": {
            "credit": "NPS/RPaterson",
            "altText": "",
            "title": "",
            "description": "",
            "caption": "The upcoming Ash Mountain Prescribed Burn will reduce exotic grasses and other fuel loading near infrastructure in the hottest and driest part of the parks.",
            "url": "https://www.nps.gov/seki/learn/news/images/Burn-Scheduled-News-Release-Photo-NPS-RPaterson.jpg"
          },
          "parkCode": "seki",
          "releasedate": "2019-06-15 12:11:00.0",
          "title": "2019 Ash Mountain Prescribed Burn Scheduled at Sequoia National Park",
          "id": "6197892",
          "abstract": "SEQUOIA NATIONAL PARK, Calif. June 14, 2019 – Firefighters at Sequoia and Kings Canyon National Parks are preparing for their annual prescribed burn in the foothills of Sequoia National Park, near the entrance to the park. Ignitions are planned to begin on Thursday, June 20, and continue through Sunday, June 23.",
          "url": "https://www.nps.gov/seki/learn/news/2019-ash-mountain-prescribed-burn-scheduled-at-sequoia-national-park.htm"
        }
      ],
      events: [
        {
          "location": "1 West First Street\nLa Junta, CO 81050",
          "updateuser": "",
          "contactname": "",
          "contacttelephonenumber": "(719) 383-5023",
          "recurrencedateend": "2019-09-01",
          "longitude": "",
          "datestart": "2019-06-16",
          "isrecurring": "true",
          "datetimeupdated": "",
          "portalname": "",
          "types": [
            "Partner Program",
            "Ride",
            "Talk"
          ],
          "createuser": "",
          "isfree": "true",
          "contactemailaddress": "",
          "regresurl": "https://www.amtrak.com/planning-booking/trails-rails-heritage-appreciation.html",
          "description": "<p>Volunteers narrate excursions aboard Amtrak’s <em>Southwest Chief</em> departing La Junta, CO on Saturdays and Sundays for day trips to Las Vegas, NM.  Make travel arrangements through Amtrak.  For more information, call (719) 383-5023.  (<em>Trips are subject to cancellation due to late running trains.</em>)</p>",
          "images": [],
          "category": "Regular Event",
          "imageidlist": "",
          "isregresrequired": "true",
          "organizationname": "",
          "id": "0E9BDE1B-E96F-BB34-EF5188AB3B1E2E51",
          "isallday": "false",
          "dateend": "2019-06-16",
          "sitecode": "beol",
          "infourl": "https://www.amtrak.com/planning-booking/trails-rails-heritage-appreciation.html",
          "times": [
            {
              "timestart": "08:00 AM",
              "timeend": "08:00 PM",
              "sunsetend": "false",
              "sunrisestart": "false"
            }
          ],
          "regresinfo": "",
          "timeinfo": "Make travel arrangements through Amtrak.",
          "categoryid": "0",
          "eventid": "0",
          "parkfullname": "Bent's Old Fort National Historic Site",
          "recurrencedatestart": "2019-05-11",
          "date": "2019-06-16",
          "sitetype": "park",
          "feeinfo": "",
          "recurrencerule": "DTSTART=20190511T060000Z;UNTIL=20190901T060000Z;FREQ=WEEKLY;WKST=SU;BYDAY=SU,SA;COUNT=0;INTERVAL=1",
          "dates": [
            "2019-06-16",
            "2019-06-22",
            "2019-06-23",
            "2019-06-29",
            "2019-06-30",
            "2019-07-06",
            "2019-07-07",
            "2019-07-13",
            "2019-07-14"
          ],
          "datetimecreated": "",
          "title": "Trails and Rails Trips",
          "latitude": "",
          "subjectname": "",
          "tags": [
            "rails to trails"
          ]
        },
        {
          "location": "Bent’s Old Fort National Historic Site, 35110 Highway 194 East, La Junta, Colorado 81050",
          "updateuser": "",
          "contactname": "",
          "contacttelephonenumber": "",
          "recurrencedateend": "",
          "longitude": "",
          "datestart": "2019-07-04",
          "isrecurring": "false",
          "datetimeupdated": "",
          "portalname": "",
          "types": [
            "Other"
          ],
          "createuser": "",
          "isfree": "true",
          "contactemailaddress": "",
          "regresurl": "",
          "description": "<p>Enjoy an afternoon of patriotic festivities including black powder firing demonstrations, orations, games, and refreshments as the post celebrates Independence Day in 1840s-style.</p>",
          "images": [],
          "category": "Regular Event",
          "imageidlist": "",
          "isregresrequired": "true",
          "organizationname": "",
          "id": "0EC7C5E8-A02B-8CF1-9873354B106D5B8A",
          "isallday": "false",
          "dateend": "2019-07-04",
          "sitecode": "beol",
          "infourl": "",
          "times": [
            {
              "timestart": "08:00 AM",
              "timeend": "04:00 PM",
              "sunsetend": "false",
              "sunrisestart": "false"
            }
          ],
          "regresinfo": "",
          "timeinfo": "",
          "categoryid": "0",
          "eventid": "0",
          "parkfullname": "Bent's Old Fort National Historic Site",
          "recurrencedatestart": "",
          "date": "2019-07-04",
          "sitetype": "park",
          "feeinfo": "",
          "recurrencerule": "",
          "dates": [
            "2019-07-04"
          ],
          "datetimecreated": "",
          "title": "Old-Fashioned 4th",
          "latitude": "",
          "subjectname": "",
          "tags": [
            "independence day",
            "black powder demonstrations"
          ]
        },
        {
          "location": "Bent’s Old Fort National Historic Site, 35110 Highway 194 East, La Junta, Colorado 81050",
          "updateuser": "",
          "contactname": "",
          "contacttelephonenumber": "(719) 383-5026",
          "recurrencedateend": "",
          "longitude": "",
          "datestart": "2019-07-13",
          "isrecurring": "false",
          "datetimeupdated": "",
          "portalname": "",
          "types": [
            "Children’s Program"
          ],
          "createuser": "",
          "isfree": "true",
          "contactemailaddress": "",
          "regresurl": "https://www.nps.gov/beol/planyourvisit/upload/KidsQuarterApplication2019.pdf",
          "description": "<p>Children, ages 7 to 11, get to “step back in time” and experience the life of a fort employee, customer, or visitor. </p>",
          "images": [],
          "category": "Regular Event",
          "imageidlist": "",
          "isregresrequired": "true",
          "organizationname": "",
          "id": "0EDAC727-CAC7-1AB7-B042F0A7C2CEA78E",
          "isallday": "false",
          "dateend": "2019-07-13",
          "sitecode": "beol",
          "infourl": "",
          "times": [
            {
              "timestart": "08:00 AM",
              "timeend": "04:00 PM",
              "sunsetend": "false",
              "sunrisestart": "false"
            }
          ],
          "regresinfo": "Pre-registration is required. Call (719) 383-5026 for an application or print one off from the park website starting May 1, 2019.",
          "timeinfo": "",
          "categoryid": "0",
          "eventid": "0",
          "parkfullname": "Bent's Old Fort National Historic Site",
          "recurrencedatestart": "2019-07-13",
          "date": "2019-07-13",
          "sitetype": "park",
          "feeinfo": "",
          "recurrencerule": "",
          "dates": [
            "2019-07-13"
          ],
          "datetimecreated": "",
          "title": "Kids’ Quarters",
          "latitude": "",
          "subjectname": "",
          "tags": [
            "kids activity",
            "Living History"
          ]
        }
      ],
      centers: [
        {
          "regulationsurl": "http://www.nps.gov/dena/learn/management/lawsandpolicies.htm",
          "weatheroverview": "Wonder Lake tends to be cooler and wetter than the park entrance. Expect lows in the upper 30s or 40s each night. Daytime highs are typically in the upper 50s or 60s, though occasional sunny days can result in temps near 80. Mosquitoes are particularly bad most of the summer - bring a headnet!",
          "campsites": {
            "other": "0",
            "group": "0",
            "horse": "0",
            "totalsites": "28",
            "tentonly": "28",
            "electricalhookups": "0",
            "rvonly": "0",
            "walkboatto": "0"
          },
          "accessibility": {
            "wheelchairaccess": "Some restrooms are wheelchair accessible. The campground is mainly accessed by transit bus, around half of which are wheelchair accessible.",
            "internetinfo": "",
            "rvallowed": "0",
            "cellphoneinfo": "",
            "firestovepolicy": "Open fires are prohibited at Wonder Lake Campground. Bring a camping stove of some kind to cook your meals.",
            "rvmaxlength": "0",
            "additionalinfo": "All campgrounds have recycling collection containers for aluminum cans, glass, plastic jugs and bottles (#1 and #2), and plastic containers #5.",
            "trailermaxlength": "0",
            "adainfo": "Paths between campsites vary from compact gravel to muddy, rocky surfaces. The campground is laid out with some sites on a small hill above the level of the main campground road, while others are level with or slightly downhill from the level of the road.",
            "rvinfo": "This is a tent-only campsite—RVs and trailers are prohibited at Wonder Lake.",
            "accessroads": [
              "Unpaved Roads - 4WD/High clearance required"
            ],
            "trailerallowed": "0",
            "classifications": [
              "Limited Development Campground"
            ]
          },
          "directionsoverview": "Visitors may not drive to this campground. It is only accessible for campers via specialized park buses. Be sure to book a camper bus ticket in addition to paying your campground fees.",
          "reservationsurl": "",
          "directionsUrl": "http://www.nps.gov/dena/planyourvisit/campground-wonder.htm",
          "reservationssitesfirstcome": "",
          "name": "Wonder Lake",
          "regulationsoverview": "",
          "latLong": "{lat:63.4574408, lng:-150.8612003}",
          "description": "Wonder Lake Campground is at mile 85 on the Denali Park Road. It offers 28 sites, which are all tent-only.\n\nIt is the closest campground to Denali. Though separated by nearly 26 miles, the sheer size of the mountain makes it loom impressively over Wonder Lake Campground. Cloudy skies can obscure views, and mosquitoes can be fierce, but Wonder Lake on a clear day offers views that will last a lifetime. Bear-proof food lockers are available throughout the campground.",
          "reservationssitesreservable": "",
          "parkCode": "dena",
          "amenities": {
            "trashrecyclingcollection": "Yes - year round",
            "toilets": [
              "Vault Toilets - year round"
            ],
            "internetconnectivity": "No",
            "showers": [
              "None"
            ],
            "cellphonereception": "No",
            "laundry": "No",
            "amphitheater": "",
            "dumpstation": "No",
            "campstore": "No",
            "stafforvolunteerhostonsite": "Yes - year round",
            "potablewater": [
              "No water"
            ],
            "iceavailableforsale": "No",
            "firewoodforsale": "No",
            "ampitheater": "No",
            "foodstoragelockers": "Yes - year round"
          },
          "id": "29",
          "reservationsdescription": ""
        },
        {
          "regulationsurl": "http://www.nps.gov/glba/planyourvisit/campground.htm",
          "weatheroverview": "Bartlett Cove receives about 70 inches of precipitation annually. You may find yourself thinking it’s all coming down during your visit! Good rain gear is essential here. April, May and June are usually the driest months of the year. September and October tend to be the wettest.",
          "campsites": {
            "other": "0",
            "group": "4",
            "horse": "0",
            "totalsites": "33",
            "tentonly": "33",
            "electricalhookups": "0",
            "rvonly": "0",
            "walkboatto": "33"
          },
          "accessibility": {
            "wheelchairaccess": "Nearby are a f",
            "internetinfo": "",
            "rvallowed": "0",
            "cellphoneinfo": "",
            "firestovepolicy": "",
            "rvmaxlength": "0",
            "additionalinfo": "",
            "trailermaxlength": "0",
            "adainfo": "The Bartlett Cove Campground is accessible by foot traffic only. Paths through the campground are well-compacted soil and level. There are no wheelchair-accessible outhouses in the campground, but at the nearby Visitor Information Station (1/4 mile), there are two modern restrooms that are fully accessible. Nearby you will find a few short trails, a public dock, campground,  and Glacier Bay Lodge. Pathways in Bartlett Cove are not paved, and may have exposed roots and rocks present. While navigable by many new wheelchairs, not all trails meet ADA standards. An exception is the beautiful wooden boardwalk that provides access to a viewing deck overlooking a serene pond. This 1/2-mile section of the Forest Trail is accessible and easy to negotiate.",
            "rvinfo": "No RVs or Trailers.",
            "accessroads": [
              "Paved Roads - All vehicles OK"
            ],
            "trailerallowed": "0",
            "classifications": [
              "Limited Development Campground"
            ]
          },
          "directionsoverview": "The campground is located about 1/4 mile by trail from the main dock in Bartlett Cove. It has designated sites, a warming shelter, vault toilets, and bear-proof food caches. Wheelbarrows are available to help transport gear. Stop by the Visitor Information Station near the dock to obtain a free camping permit for the campground.",
          "reservationsurl": "",
          "directionsUrl": "http://www.nps.gov/glba/planyourvisit/campground.htm",
          "reservationssitesfirstcome": "",
          "name": "Bartlett Cove Campground",
          "regulationsoverview": "The campground is located about 1/4 mile by trail from the main dock in Bartlett Cove. It has specific sites, a warming shelter, outhouses, and food caches.\nCampground Permits and a camper orientation are required for camping in the campground.\nGroup camping is permitted in the group camping area for groups of 12 or more.\nCamping outside of the campground is prohibited within one mile of Bartlett Cove.\nWater and garbage cans are located outside the Visitor Information Station.\nThere are three food caches where all scented items are required to be stored.\nCooking and eating are only allowed in the intertidal zone (the area on the beach between the high and low tide lines). Never leave food unattended, even when shuttling gear.",
          "latLong": "",
          "description": "The National Park Service maintains a free walk-in campground in Bartlett Cove. The campground features bear-proof food caches, a fire-pit and warming shelter (with firewood provided) located in a very scenic setting along the shore, 1/4 mile south of the Bartlett Cove dock. Stays are limited to 14 days",
          "reservationssitesreservable": "",
          "parkCode": "glba",
          "amenities": {
            "trashrecyclingcollection": "Yes - year round",
            "toilets": [
              "Vault Toilets - year round"
            ],
            "internetconnectivity": "No",
            "showers": [
              "None"
            ],
            "cellphonereception": "No",
            "laundry": "No",
            "amphitheater": "",
            "dumpstation": "No",
            "campstore": "No",
            "stafforvolunteerhostonsite": "Yes - year round",
            "potablewater": [
              "No water"
            ],
            "iceavailableforsale": "No",
            "firewoodforsale": "No",
            "ampitheater": "No",
            "foodstoragelockers": "Yes - year round"
          },
          "id": "31",
          "reservationsdescription": ""
        },
        {
          "regulationsurl": "http://www.nps.gov/katm/planyourvisit/upload/Brooks-Camp-Bear-Safety-for-web.pdf",
          "weatheroverview": "When you visit, be prepared to encounter all types of weather. On average, wet and cool conditions predominate in spring, summer, and fall. Strong winds can delay the departure and arrival of boats and floatplanes.",
          "campsites": {
            "other": "0",
            "group": "0",
            "horse": "0",
            "totalsites": "60",
            "tentonly": "60",
            "electricalhookups": "0",
            "rvonly": "0",
            "walkboatto": "0"
          },
          "accessibility": {
            "wheelchairaccess": "",
            "internetinfo": "",
            "rvallowed": "0",
            "cellphoneinfo": "",
            "firestovepolicy": "",
            "rvmaxlength": "0",
            "additionalinfo": "",
            "trailermaxlength": "0",
            "adainfo": "",
            "rvinfo": "",
            "accessroads": [],
            "trailerallowed": "0",
            "classifications": []
          },
          "directionsoverview": "Brooks Camp is approximately 30 air miles from King Salmon. Brooks Camp can only be reached via small float plane (chartered from many of the towns and villages listed above) or boat. Katmailand Inc., the park’s concessionaire at Brooks Camp, offers seat fares on flights to and from Brooks Camp. Visit katmailand.com for more information.",
          "reservationsurl": "",
          "directionsUrl": "http://www.nps.gov/katm/planyourvisit/directions.htm",
          "reservationssitesfirstcome": "",
          "name": "Brooks Camp Campground",
          "regulationsoverview": "To keep people and bears safe, special regulations apply at Brooks Camp and the campground. Upon arrival, all campers and visitors to Brooks Camp must attend a mandatory bear safety and orientation talk at the visitor center. This talk outlines the special rules and regulations people must follow as well as discusses wildlife viewing ethics.",
          "latLong": "",
          "description": "Brooks Camp Campground is the only developed campground in Katmai National Park and Preserve. It is located on the shore of Naknek Lake, about .3 miles (.5 km) from the Brooks Camp Visitor Center. Facilities in the campground include a food cache, gear cache, fuel storage locker, potable water, cooking shelters, fire rings, and vault toilets. The campground is also surrounded by an electric fence. Special regulations apply at Brooks Camp and in the campground.",
          "reservationssitesreservable": "",
          "parkCode": "katm",
          "amenities": {
            "trashrecyclingcollection": "Yes - year round",
            "toilets": [
              "Vault Toilets - year round"
            ],
            "internetconnectivity": "No",
            "showers": [
              "None"
            ],
            "cellphonereception": "No",
            "laundry": "No",
            "amphitheater": "",
            "dumpstation": "No",
            "campstore": "No",
            "stafforvolunteerhostonsite": "Yes - year round",
            "potablewater": [
              "No water"
            ],
            "iceavailableforsale": "No",
            "firewoodforsale": "No",
            "ampitheater": "No",
            "foodstoragelockers": "Yes - year round"
          },
          "id": "30",
          "reservationsdescription": ""
        },
        {
          "regulationsurl": "http://www.nps.gov/obed/learn/management/lawsandpolicies.htmhttp://www.nps.gov/obed/planyourvisit/upload/Rock-Creek-Campground-Map-2016-bw.pdf",
          "weatheroverview": "The weather along the Cumberland Plateau can be best described as unpredictable. Each season brings its own weather patterns. \n\nSummers are generally hot and humid, with high temperatures sometimes eclipsing 90 degrees. The low temperatures in winter often dip below freezing. Spring sees the most amount of precipitation, but rainfall can occur in various amounts throughout the year.",
          "campsites": {
            "other": "0",
            "group": "0",
            "horse": "0",
            "totalsites": "11",
            "tentonly": "11",
            "electricalhookups": "0",
            "rvonly": "0",
            "walkboatto": "11"
          },
          "accessibility": {
            "wheelchairaccess": "The designated ADA campsite is wheelchair accessible.",
            "internetinfo": "",
            "rvallowed": "0",
            "cellphoneinfo": "",
            "firestovepolicy": "Firewood must be purchased and/or collected from the local vicinity; to learn more visit http://dontmovefirewood.org/.",
            "rvmaxlength": "0",
            "additionalinfo": "",
            "trailermaxlength": "0",
            "adainfo": "One campsite is designated as ADA accessible with a paved surface and access to the vault toilet.",
            "rvinfo": "Due to steep grade of road into the campground, RVs and trailers are not permitted.",
            "accessroads": [
              "Unpaved Roads - All vehicles OK in good weather"
            ],
            "trailerallowed": "0",
            "classifications": [
              "Limited Development Campground"
            ]
          },
          "directionsoverview": "The Obed Wild & Scenic River Visitor Center is located at 208 North Maiden Street in downtown Wartburg, Tennessee.",
          "reservationsurl": "",
          "directionsUrl": "http://www.nps.gov/obed/planyourvisit/directions.htm",
          "reservationssitesfirstcome": "",
          "name": "Rock Creek Campground",
          "regulationsoverview": "Various public documents help guide the further management of natural and cultural resources, and the recreational opportunities within the park.\n\nPlease click on the link to find out more.",
          "latLong": "{lat:36.06963726622717, lng:-84.66287612915039}",
          "description": "The Rock Creek Campground, located adjacent to the Nemo area of the Obed Wild & Scenic River, offers 11 spots for campers on a first come/first served basis. \n\nA $7 per night fee is charged. \n\nThe campground has grills and primitive toilet facilities, but no running water.",
          "reservationssitesreservable": "",
          "parkCode": "obed",
          "amenities": {
            "trashrecyclingcollection": "Yes - year round",
            "toilets": [
              "Vault Toilets - year round"
            ],
            "internetconnectivity": "No",
            "showers": [
              "None"
            ],
            "cellphonereception": "No",
            "laundry": "No",
            "amphitheater": "",
            "dumpstation": "No",
            "campstore": "No",
            "stafforvolunteerhostonsite": "Yes - year round",
            "potablewater": [
              "No water"
            ],
            "iceavailableforsale": "No",
            "firewoodforsale": "No",
            "ampitheater": "No",
            "foodstoragelockers": "Yes - year round"
          },
          "id": "32",
          "reservationsdescription": ""
        }
      ],
      lessons: [
        {
          "commoncore": {
            "statestandards": "Oklahoma Academic Standards\nUnited States Regional Geography and History Content Standard 1.1A, 1.2D, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4,",
            "mathstandards": [],
            "additionalstandards": "",
            "elastandards": []
          },
          "gradelevel": "Upper Elementary: Third Grade through Fifth Grade",
          "questionobjective": "The Student will \nview a short film and discuss the significance of the Chickasaw Migration Story, \nread the provided text, \ninteract with the reading by answering discussion questions, \ncomplete the activity, \ncomplete the quiz",
          "subject": "Social Studies",
          "title": "Chickasaw Pre-removal",
          "id": "863523",
          "duration": "90 Minutes",
          "url": "https://www.nps.gov/teachers/classrooms/chickasaw-pre-removal-unit-2.htm",
          "parks": [
            "chic",
            "natr"
          ]
        },
        {
          "commoncore": {
            "statestandards": "",
            "mathstandards": [],
            "additionalstandards": "",
            "elastandards": []
          },
          "gradelevel": "Upper Elementary: Third Grade through Fifth Grade",
          "questionobjective": "Students will be able to:\n\nresearch facts about National Parks\npresent information to the class\nparticipate in an individual or group project",
          "subject": "Social Studies",
          "title": "Go exploring with Flat Ranger",
          "id": "849502",
          "duration": "30 Minutes",
          "url": "https://www.nps.gov/teachers/classrooms/go-exploring-with-flat-ranger.htm",
          "parks": [
            "hagr"
          ]
        },
        {
          "commoncore": {
            "statestandards": "",
            "mathstandards": [],
            "additionalstandards": "",
            "elastandards": []
          },
          "gradelevel": "Upper Elementary: Third Grade through Fifth Grade",
          "questionobjective": "•\tThe purpose of this lesson plan is to inform students about storytelling in Native American culture as well as the influence the Native American tribes had on the Natchez Trace. \n•\tThe students will have extensive knowledge of Native American superstitions as well as the importance of storytelling.  They will know about the history of the Natchez Trace and the Native American religions.  \n•\tThe students will be able to distinguish between some of the Native American tribes.  They will know how",
          "subject": "Social Studies",
          "title": "Witch Dance of the Natchez Trace",
          "id": "863660",
          "duration": "60 Minutes",
          "url": "https://www.nps.gov/teachers/classrooms/witch-dance-of-the-natchez-trace.htm",
          "parks": [
            "natr"
          ]
        }
      ],
      peopleAndPlaces: [
        {
          "latLong": "",
          "listingimage": {
            "credit": "",
            "altText": "",
            "title": "",
            "description": "",
            "caption": "",
            "url": ""
          },
          "relatedparks": "",
          "listingdescription": "Served in the US Arm Harbor Craft Detachment during the World War II Aleutian campaign.",
          "title": "Harry Bailey",
          "id": "816961",
          "url": "https://www.nps.gov/people/harry-bailey.htm"
        },
        {
          "latLong": "",
          "listingimage": {
            "credit": "",
            "altText": "black and white portrait of a uniformed man with a pipe",
            "title": "",
            "description": "",
            "caption": "",
            "url": "https://www.nps.gov/common/uploads/person/nri/20151110/20151110/795BE591-155D-9421-1F855767C4EDF3FD/795BE591-155D-9421-1F855767C4EDF3FD-large.jpg"
          },
          "relatedparks": "",
          "listingdescription": "Joseph Sasser was enlisted in the US Army and part of the battle on Attu Island and the invasion of Kiska",
          "title": "Joseph Sasser",
          "id": "817106",
          "url": "https://www.nps.gov/people/joseph-sasser.htm"
        },
        {
          "latLong": "",
          "listingimage": {
            "credit": "",
            "altText": "Black and white photo of a man leaning against a metal background",
            "title": "",
            "description": "",
            "caption": "",
            "url": "https://www.nps.gov/common/uploads/person/nri/20151110/20151110/7C0D3E78-155D-9421-1FA4496FE259F01C/7C0D3E78-155D-9421-1FA4496FE259F01C-large.jpg"
          },
          "relatedparks": "",
          "listingdescription": "Walter \"Andy\" Anderson served as a US Navy aerographer on Attu Island during the Aleutian Campaign",
          "title": "Walter \"Andy\" Anderson",
          "id": "817156",
          "url": "https://www.nps.gov/people/andy-anderson.htm"
        },
        {
          "latLong": "",
          "listingimage": {
            "credit": "",
            "altText": "Black and white photo of a young man in a sailor uniform",
            "title": "",
            "description": "",
            "caption": "",
            "url": "https://www.nps.gov/common/uploads/person/nri/20151110/20151110/7C5E1F95-155D-9421-1F0999344B7AC502/7C5E1F95-155D-9421-1F0999344B7AC502-large.jpg"
          },
          "relatedparks": "",
          "listingdescription": "George Herold was enlisted in the US Navy and stationed in the Aleutians during World War II",
          "title": "George Herold",
          "id": "817170",
          "url": "https://www.nps.gov/people/george-herold.htm"
        },
        {
          "latLong": "{lat:38.888448, long:-77.069537}",
          "listingimage": {
            "credit": "",
            "altText": "b&W photo of steel tower on left and tree on right",
            "title": "",
            "description": "",
            "caption": "",
            "url": "https://www.nps.gov/common/uploads/place/nri/20151123/20151123/16465077-1DD8-B71B-0B19A2754471A1B9/16465077-1DD8-B71B-0B19A2754471A1B9-large.jpg"
          },
          "relatedparks": "",
          "listingdescription": "Netherlands Carillon. Located in Arlington Ridge Park, this monument was a gift from the people of the Netherlands for American aid during and after World War II that symbolizes the friendship between the two countries. It is cast from bronze alloy and features 50 bells, each carrying an emblem and verse representing a group within Dutch society.",
          "title": "Netherlands Carillon",
          "id": "833231",
          "url": "https://www.nps.gov/places/netherlandscarillon.htm"
        },
        {
          "latLong": "{lat:41.522095, long:-124.078123}",
          "listingimage": {
            "credit": "",
            "altText": "B&W photo of two buildings on hillside slope",
            "title": "",
            "description": "",
            "caption": "",
            "url": "https://www.nps.gov/common/uploads/place/nri/20151124/places/5BD37DF4-1DD8-B71B-0B6ACAB3A6E3944D/5BD37DF4-1DD8-B71B-0B6ACAB3A6E3944D-large.jpg"
          },
          "relatedparks": "",
          "listingdescription": "The Klamath River Radar Station B-71 in Redwood National Park, California, is a rare, surviving World War II early-warning radar station. Rather than using camouflage materials, the buildings of Radar Station B-71 were constructed to resemble farm buildings to disguise their true purpose. The station consisted of three buildings: a power building disguised as a farmhouse, an operations building, and a privy. The site was protected with anti-aircraft guns and military police.",
          "title": "Radar Station B-71: Redwood National Park",
          "id": "835514",
          "url": "https://www.nps.gov/places/redwoodradarstation.htm"
        },
        {
          "latLong": "",
          "listingimage": {
            "credit": "",
            "altText": "Wesleyan Chapel",
            "title": "",
            "description": "",
            "caption": "",
            "url": "https://www.nps.gov/common/uploads/places/images/nri/20130826/siteadmin/56020770-A3EA-5E07-9E75999DB7370387/56020770-A3EA-5E07-9E75999DB7370387-large.jpg"
          },
          "relatedparks": "",
          "listingdescription": "Many people who actively supported women’s rights supported the abolition of slavery. Several participants in the 1848 First Women’s Rights Convection in Seneca Falls, New York had already labored in the antislavery movement. The organizers and their families, the Motts, Wrights, Stantons, M’Clintocks, and Hunts, were active abolitionists to a greater or lesser degree. Frederick Douglass, noted abolitionist and former slave, attended and addressed the 1848 convention.",
          "title": "Women's Rights National Historical Park",
          "id": "4874013",
          "url": "https://www.nps.gov/places/crwomensrights.htm"
        }
      ]
    };
  }
  render = () => (
    <Paper style={{
      width: "80%",
      margin: "20px auto",
      padding: 20
    }}>
      
      <Typography variant="h2">
        {this.props.park.name}
      </Typography>
      <br />
      <AlertList alerts={this.state.alerts} />
      <Typography variant="body1" color="textSecondary" component="p">
        {this.props.park.description}
      </Typography>
      <br />
      <br />
      <Typography variant="h4">
        Articles &amp; News Releases
      </Typography>
      <NewsList news={this.state.news} />
      <br />
      <br /> 
      <Typography variant="h4">
        Events
      </Typography>
      <EventsList events={this.state.events} />
      <br />
      <br />
      <Typography variant="h4">
        Visitor Centers &amp; Campgrounds
      </Typography>
      <CenterList centers={this.state.centers} />
      <br />
      <br />
      <Typography variant="h4">
        Pictures
      </Typography>
      <br />
      <Gallery photos={
        this.props.park.images.map((v) => {
          const aspectRatio = Math.floor(Math.random() * 3) + 2;
          return {
            src: v.url,
            width: aspectRatio,
            height: aspectRatio + Math.floor(Math.random() * 3) - 1
          }
        })
      } />
      <br />
      <br />
      <EducationList lessons={this.state.lessons} peopleAndPlaces={this.state.peopleAndPlaces} />
    </Paper>
  )
}

export default ParkInformationModal;
