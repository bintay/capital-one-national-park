(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e){e.exports=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AS",name:"American Samoa"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DE",name:"Delaware"},{code:"DC",name:"District Of Columbia"},{code:"FM",name:"Federated States Of Micronesia"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"GU",name:"Guam"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MH",name:"Marshall Islands"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"MP",name:"Northern Mariana Islands"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PW",name:"Palau"},{code:"PA",name:"Pennsylvania"},{code:"PR",name:"Puerto Rico"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VI",name:"Virgin Islands"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}]},103:function(e){e.exports=["National Park","National Monument","National Historic Site","National Historical Park","National Military Park","National Park & Preserve","National Recreation Area","National Scenic Riverways","National Seashore","Park","Parkway","National and State Parks","Part of Colonial National Historical Park","National Historical Park and Ecological Preserve"]},105:function(e,a,t){e.exports=t.p+"static/media/camping.5a4ab975.svg"},113:function(e,a,t){e.exports=t(175)},118:function(e,a,t){},119:function(e,a,t){},156:function(e,a,t){},175:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),i=(t(118),t(34)),c=t(41),s=t(35),d=t(42),m=(t(119),t(5)),p=t(199),u=t(200),h=t(201),g=t(101),E=t.n(g),v=t(209),k=t(211),f=t(66),y=t(102),x=t(103),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).handleSearchUpdate=function(){t.props.handleSearchUpdate(t.state.searchText,t.state.stateCode,t.state.designations)},t.handleSearchTextChange=function(e){t.setState({searchText:e},t.handleSearchUpdate)},t.handleStateCodeChange=function(e){var a=e.target.value.indexOf("");-1!==a&&-1===t.state.stateCode.indexOf("")?e.target.value=[""]:-1!==a&&e.target.value.length>1?e.target.value.splice(a,1):-1===a&&e.target.value.length<1&&e.target.value.push(""),t.setState({stateCode:e.target.value},t.handleSearchUpdate)},t.handleDesignationsChange=function(e){var a=e.target.value.indexOf("");-1!==a&&-1===t.state.designations.indexOf("")?e.target.value=[""]:-1!==a&&e.target.value.length>1?e.target.value.splice(a,1):-1===a&&e.target.value.length<1&&e.target.value.push(""),t.setState({designations:e.target.value},t.handleSearchUpdate)},t.render=function(e){var a=t.props.classes;return l.a.createElement(p.a,{position:"fixed"},l.a.createElement(u.a,{className:a.header},l.a.createElement(h.a,{variant:"h6",className:a.title},"National Park Utility"),l.a.createElement(E.a,{datasource:t.state.dataSource,className:a.searchBar,value:t.state.searchText,onChange:t.handleSearchTextChange,onRequestSearch:function(){return console.log("TODO "+t.state.searchText)}}),l.a.createElement(f.a,{style:{padding:13,marginLeft:10}},l.a.createElement(v.a,{multiple:!0,value:t.state.stateCode,onChange:t.handleStateCodeChange,style:{maxWidth:200}},l.a.createElement(k.a,{key:"allStates",value:""},"All States"),y.map(function(e){return l.a.createElement(k.a,{key:e.name,value:e.code},e.name)}))),l.a.createElement(f.a,{style:{padding:13,marginLeft:10}},l.a.createElement(v.a,{multiple:!0,value:t.state.designations,onChange:t.handleDesignationsChange,style:{maxWidth:200}},l.a.createElement(k.a,{key:"allDesignations",value:""},"All Designations"),x.map(function(e){return l.a.createElement(k.a,{key:e,value:e},e)})))))},t.state={searchText:"",stateCode:[""],designations:[""]},t}return Object(d.a)(a,e),a}(n.Component),w=Object(m.a)({header:{flexGrow:1,background:"linear-gradient(to right, #7474bf, #348ac7)",height:100,padding:"0 10%"},title:{flexGrow:1},searchBar:{width:200,minWidth:200,padding:5,transition:"width 0.3s","&:focus-within":{width:"40%"}}})(b),C=t(105),S=t.n(C),N=t(202),P=t(203),M=t(206),O=t(205),A=t(204),L=t(207),T=function(e){return l.a.createElement(N.a,{style:{width:"80%",minWidth:300,margin:"0 auto 20px auto"}},l.a.createElement(P.a,{onClick:function(){return e.onParkClick(e.park)}},e.park.images&&e.park.images.length>0?l.a.createElement(A.a,{style:{height:280},image:e.park.images[0].url,title:e.park.images[0].title}):null,l.a.createElement(O.a,null,l.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.park.name),l.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},e.park.description))),l.a.createElement(M.a,null,l.a.createElement(L.a,{size:"small",color:"primary",onClick:function(){return e.onParkClick(e.park)}},"Learn More"),e.park.url?l.a.createElement(L.a,{size:"small",color:"primary",href:e.park.url},"Official Website"):null))},D=(t(55),function(e){return l.a.createElement(N.a,{style:{width:"80%",minWidth:300,margin:"0 auto 20px auto"}},l.a.createElement("div",{style:{height:280},className:"loadingImage"}),l.a.createElement(O.a,null,l.a.createElement("div",{style:{height:40,width:"100%"},className:"loadingText"}),l.a.createElement("div",{style:{height:140,width:"100%"},className:"loadingText"}),l.a.createElement("div",{style:{height:40,width:"10%",display:"inline-block",marginBottom:0},className:"loadingText"}),l.a.createElement("div",{style:{height:40,width:"10%",display:"inline-block",marginBottom:0,marginLeft:20},className:"loadingText"})))}),R=function(e){return l.a.createElement("div",{style:{maxWidth:"50%",margin:"60px auto 0 auto",maxHeight:"90vh"}},e.loading?l.a.createElement("div",{style:{marginTop:120}},l.a.createElement(D,null),l.a.createElement(D,null)):e.parks&&e.parks.length>0?l.a.createElement("div",{style:{marginTop:120}},e.parks.map(function(a){return l.a.createElement(T,{park:a,onParkClick:e.onParkClick})})):l.a.createElement("div",{style:{maxHeight:"100vh",overflowY:"hidden"}},l.a.createElement("img",{src:S.a,alt:"Search above for parks",style:{opacity:.9,width:"80%",margin:"0 auto",display:"block"}}),l.a.createElement(h.a,{variant:"h4",component:"h2",style:{textAlign:"center",position:"relative",top:"-7vw",color:"#666",fontWeight:300}},"Search for Parks Above"),l.a.createElement(h.a,{variant:"h5",component:"h2",style:{textAlign:"center",position:"relative",top:"-7vw",color:"#666",fontWeight:300,marginBottom:"-7vw"}},"(no results found)")))},W=t(106),I=t(107),j=(t(156),t(208)),U=function(e){return l.a.createElement(f.a,{elevation:0,style:{border:"1px solid #ddd",margin:"10px 0"}},l.a.createElement("div",{style:{padding:"10px 15px"}},l.a.createElement("div",{className:"loadingText",style:{float:"right",width:60,height:30}}),l.a.createElement("div",{className:"loadingText",style:{width:"70%",height:30}}),l.a.createElement("br",null),l.a.createElement("div",{className:"loadingText",style:{width:"100%",height:100}})))},H=function(e){return l.a.createElement("div",null,e.loading?l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement(U,null),l.a.createElement(U,null)):e.events.map(function(e){return l.a.createElement("a",{href:e.url,style:{textDecoration:"none"}},l.a.createElement(f.a,{elevation:0,style:{border:"1px solid #ddd",margin:"10px 0",padding:10}},l.a.createElement(h.a,{variant:"h5"},e.title),l.a.createElement(j.a,{container:!0,spacing:3},l.a.createElement(j.a,{item:!0,xs:6},l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.description.replace(/<\/?[a-z ]+>/g,""))),l.a.createElement(j.a,{item:!0,xs:6},e.regresurl.length>0?l.a.createElement(L.a,{color:"primary",href:e.regresurl,style:{float:"right"}},"Read More"):null,l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"When: ",new Date(e.datestart).toDateString()," from ",e.times[0].timestart," to ",e.times[0].timeend,l.a.createElement("br",null),l.a.createElement("br",null),"Where: ",e.location)))))}))},B=t(212),V=function(e){return l.a.createElement("div",null,e.alerts.map(function(e){return l.a.createElement(B.a,{color:"secondary",label:e.title,style:{marginRight:10,marginTop:10},href:e.url,component:e.url.length>0?"a":"div",clickable:e.url.length>0})}),e.alerts.length>0?l.a.createElement("div",null,l.a.createElement("br",null)):null)},G=function(e){return l.a.createElement(f.a,{elevation:0,style:{border:"1px solid #ddd",margin:"10px 0"}},l.a.createElement(j.a,{container:!0,spacing:0},l.a.createElement(j.a,{item:!0,xs:3,m:2,xl:1},l.a.createElement("div",{className:"loadingImage",style:{width:"100%",paddingBottom:"100%",borderRadius:"4px 0 0 4px"}})),l.a.createElement(j.a,{item:!0,xs:9,m:10,xl:11},l.a.createElement("div",{style:{padding:"10px 15px"}},l.a.createElement("div",{className:"loadingText",style:{float:"right",width:60,height:30}}),l.a.createElement("div",{className:"loadingText",style:{width:"70%",height:30}}),l.a.createElement("br",null),l.a.createElement("div",{className:"loadingText",style:{width:"100%",height:100}})))))},K=function(e){return l.a.createElement("div",null,e.loading?l.a.createElement("div",null,l.a.createElement(G,null),l.a.createElement(G,null),l.a.createElement(G,null)):e.news.map(function(e){return l.a.createElement("a",{href:e.url,style:{textDecoration:"none"}},l.a.createElement(f.a,{elevation:0,style:{border:"1px solid #ddd",margin:"10px 0"}},l.a.createElement(j.a,{container:!0,spacing:0},l.a.createElement(j.a,{item:!0,xs:3,m:2,xl:1},l.a.createElement("div",{style:{width:"100%",paddingBottom:"100%",background:"url(".concat(e.image?e.image.url:e.listingimage.url,") center"),backgroundSize:"cover",borderRadius:"4px 0 0 4px"}})),l.a.createElement(j.a,{item:!0,xs:9,m:10,xl:11},l.a.createElement("div",{style:{padding:"10px 15px"}},e.url.length>0?l.a.createElement(L.a,{color:"primary",href:e.url,style:{float:"right"}},"Read More"):null,l.a.createElement(h.a,{variant:"h5"},e.title),l.a.createElement("br",null),l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.abstract||e.listingdescription))))))}))},Y=function(e){return l.a.createElement("div",null,e.loading?l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement(U,null),l.a.createElement(U,null)):e.centers.map(function(e){return l.a.createElement("a",{href:e.url,style:{textDecoration:"none"}},l.a.createElement(f.a,{elevation:0,style:{border:"1px solid #ddd",margin:"10px 0",padding:10}},e.directionsUrl.length>0?l.a.createElement(L.a,{color:"primary",href:e.directionsUrl,style:{float:"right"}},"Read More"):null,l.a.createElement(h.a,{variant:"h5"},e.name),l.a.createElement(j.a,{container:!0,spacing:3},l.a.createElement(j.a,{item:!0,xs:6},l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.description)),l.a.createElement(j.a,{item:!0,xs:6},l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"Directions: ",e.directionsInfo||e.directionsOverview||e.directionsoverview)))))}))},q=function(e){return l.a.createElement("div",null,l.a.createElement(h.a,{variant:"h4"},"Lesson Plans"),e.lessonsLoading?l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement(U,null),l.a.createElement(U,null)):e.lessons.map(function(e){return l.a.createElement("a",{href:e.url,style:{textDecoration:"none"}},l.a.createElement(f.a,{elevation:0,style:{border:"1px solid #ddd",margin:"10px 0",padding:10}},l.a.createElement(L.a,{color:"primary",href:e.url,style:{float:"right"}},"Read More"),l.a.createElement(h.a,{variant:"h5"},e.title),l.a.createElement(h.a,{variant:"subtitle1"},e.duration," / ",e.gradeLevel||e.gradelevel)))}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,{variant:"h4"},"People & Places"),e.peopleAndPlacesLoading?l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement(U,null),l.a.createElement(U,null)):e.peopleAndPlaces.map(function(e){return l.a.createElement("a",{href:e.url,style:{textDecoration:"none"}},l.a.createElement(f.a,{elevation:0,style:{border:"1px solid #ddd",margin:"10px 0",padding:10}},l.a.createElement(L.a,{color:"primary",href:e.url,style:{float:"right"}},"Read More"),l.a.createElement(h.a,{variant:"h5"},e.title),l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.listingDescription||e.listingdescription)))}))},z=t(24),F=t.n(z),J=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).render=function(){return l.a.createElement(f.a,{style:{width:"80%",margin:"20px auto",padding:20}},l.a.createElement(h.a,{variant:"h2"},t.props.park.name),l.a.createElement("br",null),l.a.createElement(V,{alerts:t.state.alerts}),l.a.createElement(h.a,{variant:"body1",color:"textSecondary",component:"p"},t.props.park.description),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,{variant:"h4"},"Articles & News Releases"),l.a.createElement(K,{news:t.state.news,loading:t.state.newsLoading}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,{variant:"h4"},"Events"),l.a.createElement(H,{events:t.state.events,loading:t.state.eventsLoading}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,{variant:"h4"},"Visitor Centers & Campgrounds"),l.a.createElement(Y,{centers:t.state.centers,loading:t.state.centersLoading,park:t.props.park}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,{variant:"h4"},"Pictures"),l.a.createElement("br",null),l.a.createElement(I.a,{photos:t.props.park.images.slice(0,6).map(function(e,a){var t=[[3,2],[2,3],[1,1],[4,3],[5,8],[1,1]];return{src:e.url,width:t[a%6][0],height:t[a%6][1]}})}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(q,{lessons:t.state.lessons,peopleAndPlaces:t.state.peopleAndPlaces,lessonsLoading:t.state.lessonsLoading,peopleAndPlacesLoading:t.peopleAndPlacesLoading}))},console.log(e.park),t.state={alerts:[],news:[],events:[],centers:[],lessons:[],peopleAndPlaces:[],alertsLoading:!0,newsLoading:!0,eventsLoading:!0,centersLoading:!0,lessonsLoading:!0,peopleAndPlacesLoading:!0},t}return Object(d.a)(a,e),Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.get("http://localhost:4000/api/alerts?parkCode=".concat(this.props.park.parkCode)).then(function(a){e.setState({alerts:a.data,alertsLoading:!1})}),F.a.get("http://localhost:4000/api/newsreleases/articles?parkCode=".concat(this.props.park.parkCode)).then(function(a){e.setState({news:a.data,newsLoading:!1})}),F.a.get("http://localhost:4000/api/events?parkCode=".concat(this.props.park.parkCode)).then(function(a){e.setState({events:a.data,eventsLoading:!1})}),F.a.get("http://localhost:4000/api/visitorcenters/campgrounds?parkCode=".concat(this.props.park.parkCode)).then(function(a){e.setState({centers:a.data,centersLoading:!1})}),F.a.get("http://localhost:4000/api/people/places?parkCode=".concat(this.props.park.parkCode)).then(function(a){e.setState({peopleAndPlaces:a.data,peopleAndPlacesLoading:!1})}),F.a.get("http://localhost:4000/api/lessonplans?parkCode=".concat(this.props.park.parkCode)).then(function(a){e.setState({lessons:a.data,lessonsLoading:!1})})}}]),a}(n.Component),X=t(210),Z=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).handleSearchUpdate=function(e,a,n){if(""===e&&""===a&&""===n)t.setState({parks:[],lastRequest:new Date,loading:!1});else{var l=new Date;t.setState({loading:!0}),F.a.get("http://localhost:4000/api/parks?text=".concat(e,"&states=").concat(a.join(","),"&designations=").concat(n.join(","))).then(function(e){l-t.state.lastRequest>0&&t.setState({parks:e.data,loading:!1,lastRequest:l})})}},t.handleParkClick=function(e){t.setState({selectedPark:e,parkModalOpen:!0})},t.handleClose=function(){t.setState({selectedPark:{},parkModalOpen:!1})},t.render=function(){return l.a.createElement("div",null,l.a.createElement(w,{handleSearchUpdate:t.handleSearchUpdate}),l.a.createElement(R,{parks:t.state.parks,loading:t.state.loading,onParkClick:t.handleParkClick}),l.a.createElement(X.a,{open:t.state.parkModalOpen,style:{maxHeight:"100vh",overflowY:"auto"},onClose:t.handleClose},l.a.createElement(J,{park:t.state.selectedPark})))},t.state={parks:[],lastRequest:new Date,loading:!1,selectedPark:{},parkModalOpen:!1},t}return Object(d.a)(a,e),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,a,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.bae52ac3.chunk.js.map