(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{198:function(e,t,a){"use strict";var n=a(87),r=a.n(n),c=a(1),o=a.n(c),i=a(3),l=a(4),s=a(97),d=a(104),u=a.n(d),f=a(137),g=a.n(f),h=a(197),p=a.n(h),m=a(29),b=a(95),y=a(21),O=a.n(y);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){O()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=l.a.create({card:{marginTop:15,alignItems:"center",borderRadius:3,shadowColor:"black",shadowOpacity:.2,shadowRadius:6,textShadowOffset:{width:10,height:5},elevation:6}}),j=function(e){return o.a.createElement(i.a,{style:v({},w.card,{},e.style)},e.children)},C=l.a.create({container:{justifyContent:"center",alignItems:"center"},text:{paddingVertical:20,textAlign:"center",fontSize:16,margin:5,borderWidth:2,borderColor:"#6616D1",color:"white",backgroundColor:"#6616D2",padding:5,width:250,height:80},busyText:{paddingVertical:20,textAlign:"center",fontSize:16,margin:5,color:"#6616D2"},cards:{padding:10,width:"90%",height:250}}),P=function(e){var t=e.data,a=e.showResult,n=e.onHandleRestart;return"loading.."===t&&!0===a?o.a.createElement(i.a,{style:C.container},o.a.createElement(j,{style:C.cards},o.a.createElement(m.a,{style:C.busyText},t))):"loading.."!==t&&!0===a?o.a.createElement(i.a,{style:C.container},o.a.createElement(j,{style:C.cards},o.a.createElement(m.a,{style:C.text},t.percentage," %"),o.a.createElement(m.a,{style:C.text},t.result),o.a.createElement(b.a,{title:"Start Again",onPress:n}))):o.a.createElement(i.a,null)};function x(){var e=Object(c.useState)(""),t=r()(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),d=r()(l,2),f=d[0],h=d[1],m=Object(c.useState)("loading.."),b=r()(m,2),y=b[0],O=b[1],E=Object(c.useState)(!1),v=r()(E,2),w=v[0],j=v[1];return handleCalculate=function(){s.a.dismiss(),fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname="+a+"&sname="+f,{method:"GET",headers:{"X-RapidAPI-Host":"love-calculator.p.rapidapi.com","X-Rapidapi-Key":"3698585dc6mshe593654b887334bp11143fjsn2aea9582e77f"}}).then((function(e){return e.json()})).then((function(e){O(e),console.log(e)})).catch((function(e){console.log(e)})),j(!0)},handleRestart=function(){j(!1),O("loading.."),n(""),h("")},o.a.createElement(i.a,{style:S.container},o.a.createElement(u.a.Header,{style:{backgroundColor:"#5B08CB"}},o.a.createElement(u.a.Content,{style:{alignItems:"center"},title:"LOVE CALCULATOR",subtitle:"CHECK THIS OUT NOW !"})),o.a.createElement(g.a,{label:"First Partner",value:a,onChangeText:function(e){return n(e)}}),o.a.createElement(g.a,{label:"Second Partner",value:f,onChangeText:function(e){return h(e)}}),o.a.createElement(i.a,{style:{margin:10}},o.a.createElement(p.a,{icon:"cards-heart",mode:"contained",onPress:handleCalculate},"Calculate")),o.a.createElement(P,{data:y,showResult:w,onHandleRestart:handleRestart}))}a.d(t,"a",(function(){return x}));var S=l.a.create({container:{backgroundColor:"#fff"}})},199:function(e,t,a){a(200),e.exports=a(349)},200:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/love-calc/expo-service-worker.js",{scope:"/love-calc/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[199,1,2]]]);
//# sourceMappingURL=app.86961ee8.chunk.js.map