// You need an API key from Open Weather Map to use their API
// You can sign up for a free one here: https://openweathermap.org/api_keys
const apiKey = "2c3334bc3314250bbb804ff60c1ca02b";

// You need to specify the coordinates of Where you're targeting
// You can use this website to find them: https://www.latlong.net/
const lat = 40.7209;
const lon = -74.0007;

// You need to use the fetch function to make an API call
// You can use this URL to get the current weather data for any location: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// You need to use the .then() method to handle the response from the API
// You need to use the .json() method to parse the response as JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    // You can access the weather data from the data object
    // You can use this website to see what data is available: https://openweathermap.org/current#current_JSON
    const temp = data.main.temp; // The temperature in Kelvin
    const feelsLike = data.main.feels_like; // The temperature that it feels like in Kelvin
    const tempMin = data.main.temp_min;
    const tempMax = data.main.temp_max;

    let holder = document.getElementById("holder")

    let tempDiv = document.createElement("div")
    tempDiv.innerHTML = "the current temperature in Manhattan is " + temp
    if (temp <= 59) {
      tempDiv.style.background = "lightsteelblue"
    } else if (temp <= 68) {
      tempDiv.style.background = "beige"
    } else if (temp <= 77) {
      tempDiv.style.background = "antiquewhite"
    } else if (temp <= 86) {
      tempDiv.style.background = "orange"
    } else {
      tempDiv.style.background = "red"
    }

    let feelDiv = document.createElement("div")
    feelDiv.innerHTML = "the current temperature in Manhattan feels like " + feelsLike
    if (feelsLike <= 59) {
      feelDiv.style.background = "lightsteelblue"
    } else if (feelsLike <= 68) {
      feelDiv.style.background = "beige"
    } else if (feelsLike <= 77) {
      feelDiv.style.background = "antiquewhite"
    } else if (feelsLike <= 86) {
      feelDiv.style.background = "orange"
    } else {
      feelDiv.style.background = "red"
    }

    let minDiv = document.createElement("div")
    minDiv.innerHTML = "the current minimum temperature in Manhattan is " + tempMin
    if (tempMin <= 59) {
      minDiv.style.background = "lightsteelblue"
    } else if (tempMin <= 68) {
      minDiv.style.background = "beige"
    } else if (tempMin <= 77) {
      minDiv.style.background = "antiquewhite"
    } else if (tempMin <= 86) {
      minDiv.style.background = "orange"
    } else {
      minDiv.style.background = "red"
    }

    let maxDiv = document.createElement("div")
    maxDiv.innerHTML = "the current maximum temperature in Manhattan is " + tempMax
    if (tempMax <= 59) {
      maxDiv.style.background = "lightsteelblue"
    } else if (tempMax <= 68) {
      maxDiv.style.background = "beige"
    } else if (tempMax <= 77) {
      maxDiv.style.background = "antiquewhite"
    } else if (tempMax <= 86) {
      maxDiv.style.background = "orange"
    } else {
      maxDiv.style.background = "red"
    }

    holder.append(tempDiv)
    holder.append(feelDiv)
    holder.append(minDiv)
    holder.append(maxDiv)

    let holder2 = document.getElementById("holder2")
    const windSpeed = data.wind.speed;

    let windDiv = document.createElement("div")
    windDiv.innerHTML = "the current wind speed in Manhattan is " + windSpeed
    windDiv.style.border = "5px solid"
    if (windSpeed < 4) {
      windDiv.style.borderColor = "rgb(57, 94, 123)"
    } else if (windSpeed < 13) {
      windDiv.style.borderColor = "rgb(83, 140, 183)"
    } else if (windSpeed < 25) {
      windDiv.style.borderColor = "rgb(109, 183, 239)"
    } else if (windSpeed < 47) {
      windDiv.style.borderColor = "rgb(109, 239, 211)"
    } else {
      windDiv.style.borderColor = "rgb(255, 248, 60)"
    }

    holder2.append(windDiv)

    // You can use console.log() to print the weather data to the console
    console.log("the current temperature in Manhattan is " + temp)
    console.log("the real feel temperature in Manhattan is " + feelsLike)
  })

  .catch(error => {
    // You need to use the .catch() method to handle any errors from the API call
    console.error(error);
  });

