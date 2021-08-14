(this.webpackJsonpweather_tracker=this.webpackJsonpweather_tracker||[]).push([[0],{57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(8),r=a.n(i),s=a(36),d=a(18);function o(e,t){return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=minutely,hourly,alerts&units=metric&appid=c5bc463716cbbe021b14ac41ed34c9de")).then((function(e){return e.json()}))}var l=a(40),u=a.n(l),h=a(100),j=(a(57),a(35)),p=Object(j.b)({name:"weatherInfo",initialState:{weatherInfo:{},hasDetailedData:!1},reducers:{addWeatherInfo:function(e,t){e.weatherInfo=t.payload,e.hasDetailedData=!0}}}),b=p.actions.addWeatherInfo,m=function(e){return e.weatherInfo.weatherInfo},f=function(e){return e.hasDetailedData.hasDetailedData},x=p.reducer,O=a.p+"static/media/rainy-5.33279b1e.svg",y=a.p+"static/media/thunder.9d4b81cc.svg",v=a.p+"static/media/rainy-1.b4604865.svg",w=a.p+"static/media/snowy-5.8e307665.svg",_=a.p+"static/media/day.e170f8f7.svg",g=a.p+"static/media/cloudy-day-1.c6120cb4.svg",I=a(3);function N(e){var t=new Date(1e3*e.dt).toUTCString();return{dayOfWeek:t.slice(0,3),date:t.slice(5,7),weather:e.weather[0].main,temp:Math.round(e.temp.day)+"C"}}function S(e){var t;switch(e){case"Thunderstorm":t=Object(I.jsx)("img",{src:y,height:"100%",alt:"thunder icon"});break;case"Drizzle":t=Object(I.jsx)("img",{src:v,height:"100%",alt:"drizzle icon"});break;case"Rain":t=Object(I.jsx)("img",{src:O,height:"100%",alt:"rainy icon"});break;case"Snow":t=Object(I.jsx)("img",{src:w,height:"100%",alt:"snowy icon"});break;case"Clear":t=Object(I.jsx)("img",{src:_,height:"100%",alt:"clear icon"});break;case"Clouds":t=Object(I.jsx)("img",{src:g,height:"100%",alt:"cloudy icon"});break;default:t=Object(I.jsx)("p",{children:e})}return t}function k(){var e=Object(d.b)(),t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(!1),l=Object(s.a)(r,2),j=l[0],p=l[1],m=Object(c.useState)(""),f=Object(s.a)(m,2),x=f[0],O=f[1];return Object(I.jsxs)("div",{className:"searchBar_container",children:[Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a=n,function(e){return fetch("https://api.openweathermap.org/geo/1.0/direct?q=".concat(e,"&limit=1&appid=c5bc463716cbbe021b14ac41ed34c9de")).then((function(e){return e.json()}))}(a).then((function(e){return{lat:e[0].lat.toFixed(2),lon:e[0].lon.toFixed(2)}})).then((function(t){o(t.lat,t.lon).then((function(t){for(var a={description:t.current.weather[0].description,currentTemp:t.current.feels_like+"C",minTemp:t.daily[0].temp.min+"C",maxTemp:t.daily[0].temp.max+"C",windSpd:t.current.wind_speed,precipitation:void 0==t.daily[0].rain?0:t.daily[0].rain,humidity:t.current.humidity,dailyInfo:[]},c=1;c<8;c++)a.dailyInfo.push(N(t.daily[c]));p(!1),e(b(a))})).catch((function(e){return p(!0)}))})).catch((function(e){return p(!0)}));var a},className:"add_city_form",children:[Object(I.jsx)(h.a,{className:"search_city_textarea textarea",placeholder:"City Name",label:"Search with city name",value:n,onChange:function(e){i(e.target.value)}}),Object(I.jsx)("button",{type:"submit",className:"add_city_btn",children:Object(I.jsx)(u.a,{})})]}),Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t){var a=t.split(","),c=a[0],n=a[1];(function(e,t){return fetch("https://api.openweathermap.org/geo/1.0/zip?zip=".concat(e,",").concat(t,"&appid=c5bc463716cbbe021b14ac41ed34c9de")).then((function(e){return e.json()}))})(c,n).then((function(e){return{lat:e.lat.toFixed(2),lon:e.lon.toFixed(2)}})).then((function(t){o(t.lat,t.lon).then((function(t){for(var a={description:t.current.weather[0].description,currentTemp:t.current.feels_like,minTemp:t.daily[0].temp.min,maxTemp:t.daily[0].temp.max,windSpd:t.current.wind_speed,precipitation:t.daily[0].rain,humidity:t.current.humidity,dailyInfo:[]},c=1;c<8;c++)a.dailyInfo.push(N(t.daily[c]));p(!1),e(b(a))})).catch((function(e){return p(!0)}))})).catch((function(e){return p(!0)}))}(x)},className:"add_city_form",children:[Object(I.jsx)(h.a,{className:"search_zipcode_textarea textarea",placeholder:"a2c,ca",label:"Search with zipcode, country code",value:x,onChange:function(e){O(e.target.value)}}),Object(I.jsxs)("button",{type:"submit",className:"add_city_btn",children:[" ",Object(I.jsx)(u.a,{})," "]})]}),Object(I.jsx)("p",{className:j?"show_error":"hide_error",children:"Invalid city or zipcode country code combination. Please enter a valid input"})]})}a(63);function D(e){var t=e.dailyInfo;return Object(I.jsxs)("div",{className:"daily_weather_info",children:[Object(I.jsx)("div",{children:t.date}),Object(I.jsx)("div",{children:t.dayOfWeek}),Object(I.jsxs)("div",{children:[" ",S(t.weather)," "]}),Object(I.jsx)("div",{children:t.weather}),Object(I.jsx)("div",{children:t.temp})]})}a(64);function T(){var e=Object(d.c)(m);return Object(d.c)(f)?Object(I.jsxs)("div",{className:"weather_info_container",children:[Object(I.jsx)("div",{className:"detailed_city",children:Object(I.jsxs)("div",{className:"detailed_city_info",children:[Object(I.jsxs)("p",{children:["Current Temperature: ",e.currentTemp]}),Object(I.jsxs)("p",{children:["Min Temperature: ",e.minTemp]}),Object(I.jsxs)("p",{children:["Max Temperature: ",e.maxTemp]}),Object(I.jsxs)("p",{children:["Weather: ",e.description[0].toUpperCase()+e.description.substring(1)]}),Object(I.jsxs)("p",{children:["Wind Speed: ",e.windSpd]}),Object(I.jsxs)("p",{children:["Precipitation: ",e.precipitation]}),Object(I.jsxs)("p",{children:["Humidity: ",e.humidity]})]})}),Object(I.jsx)("div",{className:"daily_weather_data",children:e.dailyInfo.map((function(e,t){return Object(I.jsx)(D,{dailyInfo:e},t)}))})]}):Object(I.jsx)("div",{className:"weather_info_container"})}a(65);var C=function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(k,{}),Object(I.jsx)(T,{})]})},z=Object(j.a)({reducer:{weatherInfo:x,hasDetailedData:x}});a(66);r.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(d.a,{store:z,children:Object(I.jsx)(C,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.0d028aeb.chunk.js.map