let weather = {
  apiKey: "c0a1150a8f1d16fc169195e9e8482638", // Clé API
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
       + city 
       +"&units=metric&appid="
       + this.apiKey
      )
      .then((response) => response.json()) // Une fois cette URL récupérée, il enverra la réponse en JSON (JavaScript Object Notation)
      .then((data) => this.displayWeather(data)); // Récupérer les données et les afficher dans la console
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0]; // 0, donc premier élément du tableau
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "℃";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector("wind").innerText = "Wind speed: " + speed + " km/h";
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document
.querySelector(".search button")
.addEventListener("click", function() {
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
if (event.key == "Enter") {
  weather.search();
}
})