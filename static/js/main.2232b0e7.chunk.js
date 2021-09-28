(this.webpackJsonpgps_leaflet=this.webpackJsonpgps_leaflet||[]).push([[0],{73:function(t,e,n){"use strict";n.r(e);var c,a,o,l,s,i,r,u,p,j=n(0),b=n(16),d=n.n(b),h=n(2),O=n(5),x=n(10),f=n(4),m=n.n(f),g=n(77),w=n(79),y=n(80),v=n(78),N=n(74),S=n(24),R=n(41),z=n(11),I=n(3),C=n.n(I),M=n(6),k=n(42),A=n(12),B=n.n(A),P=n(75),U=n(76),Z=n(1),E=z.a.div(c||(c=Object(x.a)([""]))),_=z.a.button(a||(a=Object(x.a)(["\n  padding: 10px 50px;\n"]))),D=z.a.span(o||(o=Object(x.a)([""]))),F=function(t){var e=t.userInfo,n=[],c=[],a=[];e.forEach((function(t){n.includes(t.id)||n.push(t.id),c.includes(t.userIdx)||c.push(t.userIdx)}));for(var o=0;o<n.length;o++)a.push([n[o],c[o]]);var l=function(){var t=Object(M.a)(C.a.mark((function t(e){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.patch("".concat("https://www.gpsdemo.shop/","locations/status/all"),{userIdx:e,status:"N"}).then((function(t){return console.log("delete ".concat(e))})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(Z.jsx)(E,{style:{position:"absolute",bottom:"50px",left:"50px",zIndex:"100",display:"flex",flexDirection:"column"},children:a.map((function(t){return Object(Z.jsx)(_,{onClick:function(){return l(t[1])},className:"deleteBtn",children:Object(Z.jsxs)(D,{children:["Delete","  ",Object(Z.jsx)("span",{style:{color:"red",fontWeight:"bold",fontSize:"24px",letterSpacing:"1px"},children:t[0]}),"  ","Locations"]})},t[1])}))})},q=z.a.div(l||(l=Object(x.a)(["\n  position: absolute;\n  top: 80px;\n  right: 256px;\n  display: flex;\n  flex-direction: column;\n"]))),J=z.a.button(s||(s=Object(x.a)(["\n  padding: 10px 50px;\n"]))),L=function(t){var e=t.initMap,n=t.initCircle,c=(t.initPolygon,t.isCircle),a=t.isPolygon,o="https://www.gpsdemo.shop/",l=[],s=new m.a.Icon({iconUrl:"https://user-images.githubusercontent.com/62231339/133370867-f3db9284-04b2-4900-beb7-ddcc15300eaf.png",iconRetinaUrl:"https://user-images.githubusercontent.com/62231339/133370867-f3db9284-04b2-4900-beb7-ddcc15300eaf.png",iconAnchor:null,popupAnchor:[0,-15],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new m.a.Point(18,28),className:"leaflet-div-centerIcon"}),i=new m.a.Icon({iconUrl:"https://user-images.githubusercontent.com/62231339/134607908-ab411f67-e183-4120-8f72-89b9016e56da.png",iconRetinaUrl:"https://user-images.githubusercontent.com/62231339/134607908-ab411f67-e183-4120-8f72-89b9016e56da.png",iconAnchor:null,popupAnchor:[0,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new m.a.Point(70,75),className:"leaflet-div-centerIcon"}),r=function(){var t=Math.round,e=Math.random;return"rgb(".concat(t(200*e()),", ").concat(t(200*e()),", ").concat(t(200*e()),")")},u=Object(k.a)("".concat(o,"users/all-location")),p=Object(O.a)(u,2),b=p[0],d=b.data,h=b.loading,x=b.error,f=p[1];h||x||d.result.forEach((function(t){l.includes(t.id)||l.push(t.id)}));var g=[];h||x||d.result.forEach((function(t,e){for(var n=0;n<l.length;n++)if(l[n]===t.id){var c={};c[t.id]=[t.latitude,t.longitude],g.push(c)}}));var w=function(){var t=Object(M.a)(C.a.mark((function t(e){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.patch("".concat(o,"restricts/in-out"),{userIdx:e,restrictStatus:"N"}).then((function(t){return console.log("out of range!")})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(M.a)(C.a.mark((function t(e){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.patch("".concat(o,"restricts/in-out"),{userIdx:e,restrictStatus:"Y"}).then((function(t){return console.log("in range!")})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.useEffect)((function(){var t=setInterval((function(){return f()}),1e5);return function(){return clearInterval(t)}})),Object(Z.jsxs)(Z.Fragment,{children:[h||x||!c||a?null:d.result.map((function(t,c){return function(t,e,n,c){function a(t){return t*(Math.PI/180)}var o=a(n-t),l=a(c-e),s=Math.sin(o/2)*Math.sin(o/2)+Math.cos(a(t))*Math.cos(a(n))*Math.sin(l/2)*Math.sin(l/2);return 2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))*6371*1e3}(e.lat,e.lon,t.latitude,t.longitude)>n.radius?(w(t.userIdx),Object(Z.jsx)(N.a,{position:[t.latitude,t.longitude],icon:i,children:Object(Z.jsxs)(P.a,{children:[t.createdAt_location,Object(Z.jsx)("br",{}),Object(Z.jsx)("span",{style:{color:"#26c6da",fontSize:"16px",letterSpacing:"2px"},children:t.id}),"\uc758 \uacbd\ub85c",Object(Z.jsx)("br",{}),Object(Z.jsx)("span",{style:{color:"red",fontSize:"16px"},children:"\ubc94\uc704\uc5d0\uc11c \ubc97\uc5b4\ub0ac\uc2b5\ub2c8\ub2e4!"})]})},c)):(y(t.userIdx),Object(Z.jsx)(N.a,{position:[t.latitude,t.longitude],icon:s,children:Object(Z.jsxs)(P.a,{children:[t.createdAt_location,Object(Z.jsx)("br",{}),Object(Z.jsx)("span",{style:{color:"#26c6da",fontSize:"16px",letterSpacing:"2px"},children:t.id}),"\uc758 \uacbd\ub85c"]})},c))})),null,h||x?null:l.map((function(t,e){var n=[];return g.map((function(e){Object.keys(e)[0]===t&&n.push(e[Object.keys(e)[0]])})),Object(Z.jsx)(U.a,{positions:n,color:r()},e)})),h||x?null:Object(Z.jsx)(F,{className:"deleteBtn",userInfo:d.result}),h||x?null:Object(Z.jsx)(q,{children:Object(Z.jsx)(J,{className:"fetchBtn",onClick:f,children:"Refetch Datas"})})]})},W=(n(72),z.a.button(i||(i=Object(x.a)(["\n  position: absolute;\n  top: 130px;\n  right: 256px;\n  padding: 10px 42px;\n"])))),Y=z.a.div(r||(r=Object(x.a)(["\n  position: absolute;\n  top: 130px;\n  left: 160px;\n  display: flex;\n"]))),G=z.a.button(u||(u=Object(x.a)(["\n  padding: 10px 50px;\n  margin-right: 8px;\n"]))),H=z.a.button(p||(p=Object(x.a)(["\n  padding: 10px 50px;\n"]))),K=function(){var t=Object(R.a)(),e=t.register,n=t.handleSubmit,c=Object(j.useState)(!0),a=Object(O.a)(c,2),o=a[0],l=a[1],s=Object(j.useState)(!1),i=Object(O.a)(s,2),r=i[0],u=i[1],p=Object(j.useState)({lat:37.47386563818747,lon:127.14299349434039,zoom:16,maxZoom:16}),b=Object(O.a)(p,2),d=b[0],x=b[1],f=Object(j.useState)({attribution:'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:16,tileSize:512,zoomOffset:-1}),z=Object(O.a)(f,2),I=z[0],C=(z[1],Object(j.useState)({lat:37.47386563818747,lon:127.14299349434039,fillOpacity:.3,color:"#00acc1",radius:500})),M=Object(O.a)(C,2),k=M[0],A=M[1],B=Object(j.useState)({fillOpacity:.3,color:"#00acc1",path:[[37.47856563818747,127.14299349434039],[37.47386563818747,127.14850349434039],[37.46976563818747,127.14799349434038],[37.46886563818747,127.14199349434038],[37.47386563818747,127.13489349434039]]}),P=Object(O.a)(B,2),U=P[0],E=P[1],_=Object(j.useState)({lat:37.47386563818747,lon:127.14299349434039}),D=Object(O.a)(_,2),F=D[0],q=D[1],J=new m.a.Icon({iconUrl:"https://user-images.githubusercontent.com/62231339/134606859-120b96e3-15b7-4e66-b12f-16ceab80d6d4.png",iconRetinaUrl:"https://user-images.githubusercontent.com/62231339/134606859-120b96e3-15b7-4e66-b12f-16ceab80d6d4.png",iconAnchor:[25,45],popupAnchor:[0,10],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new m.a.Point(50,60),className:"leaflet-div-centerIcon"}),K=function(){window.location.reload()};return Object(Z.jsx)("div",{className:"App",children:Object(Z.jsxs)("div",{id:"map-id",children:[Object(Z.jsxs)(g.a,{center:[d.lat,d.lon],zoom:(d.zoom,16),maxZoom:d.maxZoom,id:"map",children:[Object(Z.jsx)(w.a,{attribution:I.attribution,url:I.url,maxZoom:I.maxZoom,tileSize:I.tileSize,zoomOffset:I.zoomOffset}),o&&!r?Object(Z.jsx)(y.a,{center:[k.lat,k.lon],color:k.color,radius:k.radius,fillOpacity:k.fillOpacity}):null,!o&&r?Object(Z.jsx)(v.a,{color:U.color,fillOpacity:U.fillOpacity,positions:U.path}):null,Object(Z.jsx)(N.a,{position:[F.lat,F.lon],icon:J}),Object(Z.jsx)(L,{initMap:d,initCircle:k,initPolygon:U,isCircle:o,isPolygon:r,initCenterMarker:F})]}),o?Object(Z.jsx)(S.a,{trigger:Object(Z.jsxs)(W,{className:"optionsBtn",children:[" ","Change Options"]}),position:"left center",children:Object(Z.jsxs)("form",{className:"circleForm",onSubmit:n((function(t){t.lat&&t.lon&&t.radius||alert("\ubaa8\ub4e0 \ud56d\ubaa9\uc744 \ucc44\uc6cc\uc57c \ud569\ub2c8\ub2e4."),x({lat:t.lat,lon:t.lon}),A({lat:t.lat,lon:t.lon,radius:t.radius}),q({lat:t.lat,lon:t.lon})})),children:[Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"circleRow"},e("lat")),{},{placeholder:"\uc911\uc2ec \uc704\ub3c4"})),Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"circleRow"},e("lon")),{},{placeholder:"\uc911\uc2ec \uacbd\ub3c4"})),Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"circleRow"},e("radius")),{},{placeholder:"\ubc94\uc704\uc758 \ubc18\uc9c0\ub984"})),Object(Z.jsxs)("div",{className:"mapOptionBtns",children:[Object(Z.jsx)("input",{type:"submit",value:"Change"}),Object(Z.jsx)("button",{type:"button",className:"resetBtn",onClick:K,children:"Reset"})]})]})}):Object(Z.jsx)(S.a,{trigger:Object(Z.jsxs)(W,{className:"optionsBtn",children:[" ","Change Options"]}),position:"left center",children:Object(Z.jsxs)("form",{className:"polygonForm",onSubmit:n((function(t){t.lat3&&t.lon3||alert("\uc138\ubc88\uc9f8 \uc704\ub3c4 \uacbd\ub3c4\uae4c\uc9c0\ub294 \ucc44\uc6cc\uc57c \ud569\ub2c8\ub2e4."),t.lat4||t.lon4?t.lat5||t.lon5?E({path:[[t.lat1,t.lon1],[t.lat2,t.lon2],[t.lat3,t.lon3],[t.lat4,t.lon4],[t.lat5,t.lon5]]}):E({path:[[t.lat1,t.lon1],[t.lat2,t.lon2],[t.lat3,t.lon3],[t.lat4,t.lon4]]}):E({path:[[t.lat1,t.lon1],[t.lat2,t.lon2],[t.lat3,t.lon3]]})})),children:[Object(Z.jsxs)("div",{className:"inputRow",children:[Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lat1")),{},{placeholder:"\uccab\ubc88\uc9f8 \uc704\ub3c4"})),Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lon1")),{},{placeholder:"\uccab\ubc88\uc9f8 \uacbd\ub3c4"}))]}),Object(Z.jsxs)("div",{className:"inputRow",children:[Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lat2")),{},{placeholder:"\ub450\ubc88\uc7ac \uc704\ub3c4"})),Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lon2")),{},{placeholder:"\ub450\ubc88\uc7ac \uacbd\ub3c4"}))]}),Object(Z.jsxs)("div",{className:"inputRow",children:[Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lat3")),{},{placeholder:"\uc138\ubc88\uc9f8 \uc704\ub3c4"})),Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lon3")),{},{placeholder:"\uc138\ubc88\uc9f8 \uacbd\ub3c4"}))]}),Object(Z.jsxs)("div",{className:"inputRow",children:[Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lat4")),{},{placeholder:"\ub124\ubc88\uc9f8 \uc704\ub3c4"})),Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lon4")),{},{placeholder:"\ub124\ubc88\uc9f8 \uacbd\ub3c4"}))]}),Object(Z.jsxs)("div",{className:"inputRow",children:[Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lat5")),{},{placeholder:"\ub2e4\uc12f\ubc88\uc9f8 \uc704\ub3c4"})),Object(Z.jsx)("input",Object(h.a)(Object(h.a)({className:"polygonRow"},e("lon5")),{},{placeholder:"\ub2e4\uc12f\ubc88\uc9f8 \uacbd\ub3c4"}))]}),Object(Z.jsxs)("div",{className:"mapOptionBtns",children:[Object(Z.jsx)("input",{type:"submit",value:"Change"}),Object(Z.jsx)("button",{type:"button",className:"resetBtn",onClick:K,children:"Reset"})]})]})}),Object(Z.jsxs)(Y,{children:[Object(Z.jsx)(G,{className:"circleBtn",onClick:function(){l(!0),u(!1)},children:"Circle Range"}),Object(Z.jsx)(H,{className:"polygonBtn",onClick:function(){l(!1),u(!0)},children:"Polygon Range"})]})]})})};d.a.render(Object(Z.jsx)(K,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.2232b0e7.chunk.js.map