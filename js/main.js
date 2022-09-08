function isCold(temperature) {
  return temperature <= 18;
}

function displayTemperature(response) {
  let weatherDiv = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
 }

function showTemperature (response){
  console.log(response);
}

function myPosition(position){
  let latitude =position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "37ade1855d2cf980e5027f401e33f5c8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}


//let temperature = prompt("What temperature is it today?");
//if (isCold(temperature)) {
//  alert("It is cold today");
//} else {
//  alert("It is warm today");
//}


let now = new Date();
let a = document.querySelector("a");
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
a.innerHTML = `Weather ${day}, ${date}, ${hour}:${minutes}`;


butt.onclick = function () {
    let val = document.getElementById("elem1").value;
    document.getElementById("str").innerHTML = val;
    let city = val;
    let key = "37ade1855d2cf980e5027f401e33f5c8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(displayTemperature);
};



