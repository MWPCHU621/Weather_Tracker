(this.webpackJsonpweather_tracker=this.webpackJsonpweather_tracker||[]).push([[0],{50:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(12),r=a.n(n),s=a(32),d=a(6),l=a(16),o=Object(l.b)({name:"searchBar",initialState:{cityList:[]},reducers:{addCity:function(e,t){e.cityList.length>=8&&e.cityList.pop();var a=e.cityList.map((function(e){return e.name}));if(a.includes(t.payload.name)){var c=a.indexOf(t.payload.name);e.cityList.splice(c,1,t.payload)}else e.cityList.splice(0,0,t.payload)},refreshCityData:function(e,t){var a=e.cityList.map((function(e){return e.name})).indexOf(t.payload.name);e.cityList.splice(a,1,t.payload)},removeCity:function(e,t){var a=e.cityList.map((function(e){return e.name})).indexOf(t.payload.name);e.cityList.splice(a,1)},removeAll:function(e){e.cityList=[]}}}),h=o.actions,u=h.addCity,j=h.removeCity,m=h.removeAll,b=h.refreshCityData,p=function(e){return e.cities.cityList},f=o.reducer;function y(e){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=c51223c219d6aec8cb8c5210449bd859")).then((function(e){return e.json()}))}function O(e){return fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=".concat(e,"&units=metric&cnt=5&appid=c51223c219d6aec8cb8c5210449bd859")).then((function(e){return e.json()}))}var x=a(34),v=a.n(x),w=(a(50),a(2));function _(){var e=Object(d.b)(),t=Object(c.useState)(""),a=Object(s.a)(t,2),i=a[0],n=a[1],r=Object(c.useState)(!1),l=Object(s.a)(r,2),o=l[0],h=l[1];return Object(w.jsxs)("div",{className:"searchBar_container",children:[Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a=i,y(a).then((function(t){var a={name:t.name,weather:t.weather[0].main,temperature:Math.round(t.main.temp)+"C"};h(!1),e(u(a))})).catch((function(e){h(!0)})),n("");var a},className:"add_city_form",children:[Object(w.jsx)("input",{type:"text",className:"add_city_textarea",size:"28",value:i,onChange:function(e){n(e.target.value)},placeholder:"Type City Name"}),Object(w.jsx)("button",{type:"submit",className:"add_city_btn",children:Object(w.jsx)(v.a,{})})]}),Object(w.jsx)("p",{className:o?"show_error":"hide_error",children:"Invalid city. Please enter a valid city"})]})}var g=a(40),N=Object(l.b)({name:"weatherInfo",initialState:{weatherInfo:{},hasDetailedData:!1},reducers:{addWeatherInfo:function(e,t){e.weatherInfo=t.payload,e.hasDetailedData=!0}}}),C=N.actions.addWeatherInfo,D=function(e){return e.weatherInfo.weatherInfo},k=function(e){return e.hasDetailedData.hasDetailedData},L=N.reducer,W=a.p+"static/media/rainy-5.33279b1e.svg",I=a.p+"static/media/thunder.9d4b81cc.svg",S=a.p+"static/media/rainy-1.b4604865.svg",z=a.p+"static/media/snowy-5.8e307665.svg",M=a.p+"static/media/day.e170f8f7.svg",T=a.p+"static/media/cloudy-day-1.c6120cb4.svg";function A(e){var t=new Date(1e3*e.dt).toUTCString();return{dayOfWeek:t.slice(0,3),date:t.slice(5,7),weather:e.weather[0].main,temp:Math.round(e.temp.day)+"C"}}function B(e){var t;switch(e){case"Thunderstorm":t=Object(w.jsx)("img",{src:I,height:"100%",alt:"thunder icon"});break;case"Drizzle":t=Object(w.jsx)("img",{src:S,height:"100%",alt:"drizzle icon"});break;case"Rain":t=Object(w.jsx)("img",{src:W,height:"100%",alt:"rainy icon"});break;case"Snow":t=Object(w.jsx)("img",{src:z,height:"100%",alt:"snowy icon"});break;case"Clear":t=Object(w.jsx)("img",{src:M,height:"100%",alt:"clear icon"});break;case"Clouds":t=Object(w.jsx)("img",{src:T,height:"100%",alt:"cloudy icon"});break;default:t=e}return t}var R=a(74),q=a(25),J=a.n(q),P=a(39),U=a.n(P);a(53);function E(e){var t=Object(d.b)(),a=e;return Object(w.jsxs)("div",{className:"simple_city_data",children:[Object(w.jsxs)(R.a,{className:"city_text",onClick:function(){return function(e){O(e).then((function(e){for(var a={name:e.city.name,currentTemp:Math.round(e.list[0].temp.day)+"C",currentWeather:e.list[0].weather[0].main,description:e.list[0].weather[0].description,wind:Math.round(e.list[0].speed)+"ms "+e.list[0].deg+" deg",pressure:e.list[0].pressure,dailyWeatherData:[]},c=0;c<5;c++)a.dailyWeatherData.push(A(e.list[c]));t(C(a))}))}(a.name)},style:{justifyContent:"flex-start",backgroundColor:"transparent",fontSize:"large"},disableRipple:!0,children:[a.name," - ",a.temperature," ",B(a.weather)]}),Object(w.jsx)(R.a,{className:"city_refresh",size:"small",onClick:function(){y(a.name).then((function(e){var a={name:e.name,weather:e.weather[0].main,temperature:Math.round(e.main.temp)+"C"};t(b(a))}))},children:Object(w.jsx)(J.a,{})}),Object(w.jsx)(R.a,{className:"city_remove",onClick:function(){return function(e){t(j(e))}(a)},children:Object(w.jsx)(U.a,{})})]})}a(54);function F(){var e=Object(d.b)(),t=Object(d.c)(p);return Object(w.jsxs)("div",{className:"city_list_container",children:[Object(w.jsx)("p",{className:"container_title",children:"Recent Locations"}),Object(w.jsx)("div",{className:"city_container",children:t.map((function(e,t){return Object(w.jsx)(E,Object(g.a)({},e),t)}))}),Object(w.jsx)(R.a,{onClick:function(){e(m())},className:"clear_city_btn",children:"Clear"})]})}a(55);function G(e){var t=e.dailyInfo;return Object(w.jsxs)("div",{className:"daily_weather_info",children:[Object(w.jsx)("div",{children:t.date}),Object(w.jsx)("div",{children:t.dayOfWeek}),Object(w.jsxs)("div",{children:[" ",B(t.weather)," "]}),Object(w.jsx)("div",{children:t.temp})]})}a(56);function H(){var e=Object(d.b)(),t=Object(d.c)(D);return Object(d.c)(k)?Object(w.jsxs)("div",{className:"weather_info_container",children:[Object(w.jsx)("div",{className:"refresh",children:Object(w.jsx)(R.a,{size:"large",onClick:function(){O(t.name).then((function(t){for(var a={name:t.city.name,currentTemp:Math.round(t.list[0].temp.day)+"C",currentWeather:t.list[0].weather[0].main,description:t.list[0].weather[0].description,wind:Math.round(t.list[0].speed)+"ms "+t.list[0].deg+" deg",pressure:t.list[0].pressure,dailyWeatherData:[]},c=0;c<5;c++)a.dailyWeatherData.push(A(t.list[c]));e(C(a))}))},children:Object(w.jsx)(J.a,{})})}),Object(w.jsx)("h1",{className:"city_name",children:t.name}),Object(w.jsxs)("div",{className:"detailed_city",children:[Object(w.jsx)("div",{className:"detailed_city_icon",children:B(t.currentWeather)}),Object(w.jsxs)("div",{className:"detailed_city_info",children:[Object(w.jsx)("p",{children:t.currentTemp}),Object(w.jsx)("p",{children:t.description[0].toUpperCase()+t.description.substring(1)}),Object(w.jsxs)("p",{children:["Wind: ",t.wind]}),Object(w.jsxs)("p",{children:["Pressure ",t.pressure]})]})]}),Object(w.jsx)("div",{className:"daily_weather_data",children:t.dailyWeatherData.map((function(e,t){return Object(w.jsx)(G,{dailyInfo:e},t)}))})]}):Object(w.jsx)("div",{className:"weather_info_container"})}a(57);var K=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)("div",{className:"left_container",children:[Object(w.jsx)(_,{}),Object(w.jsx)(F,{})]}),Object(w.jsx)("div",{className:"right_container",children:Object(w.jsx)(H,{})})]})},Q=Object(l.a)({reducer:{cities:f,weatherInfo:L,hasDetailedData:L}});a(58);r.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(d.a,{store:Q,children:Object(w.jsx)(K,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.6e1fe868.chunk.js.map