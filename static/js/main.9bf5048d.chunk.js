(this["webpackJsonpmintbean-weatherapp"]=this["webpackJsonpmintbean-weatherapp"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(9),n(10),n(11),n(1));n(12),n(13);function i(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.getZipcode(c)}},r.a.createElement("label",null,"Zipcode:",r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Submit"}))}var m=function(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),c=n[0],l=n[1],m=function(e){fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(e,",us&appid=f8beefed0e999fac612802ea1139522d"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){l(e)}))};return Object(a.useEffect)((function(){m("37207")}),[]),c.main&&console.log(c.weather[0].icon,"hello"),r.a.createElement(r.a.Fragment,null,r.a.createElement(i,Object.assign({getZipcode:function(e){m(e)}},e)),r.a.createElement("div",{className:"myWeather-Div"},c.main?r.a.createElement("div",{className:"container"},r.a.createElement("table",null,r.a.createElement("th",null,c.name),r.a.createElement("tr",null,r.a.createElement("p",null,Math.round(9*(c.main.temp-273.15)/5+32),"\xb0 Fahrenheit"),r.a.createElement("td",{className:"table"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(c.weather[0].icon,"@2x.png")}),r.a.createElement("br",null),c.weather[0].description),r.a.createElement("td",null,r.a.createElement("table",{className:"weather-info"},r.a.createElement("tr",null),r.a.createElement("tr",null,r.a.createElement("td",null,"High: ",Math.round(9*(c.main.temp_max-273.15)/5+32),"\xb0"),r.a.createElement("td",null,"Low: ",Math.round(9*(c.main.temp_min-273.15)/5+32),"\xb0"))))))):r.a.createElement("p",null,"There is no weather information for this zipcode")))};var u=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.9bf5048d.chunk.js.map