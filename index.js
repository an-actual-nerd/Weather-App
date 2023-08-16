// index.js

document.addEventListener("DOMContentLoaded", function () {
    let input_name = document.querySelector(".form-control");
    let button = document.querySelector(".submit-button");
    const api = "https://goweather.herokuapp.com/weather/";


    function handleWeatherFetch(city) {
        fetch(api + city)
            .then(response => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then(data => {
                // Update the UI with the fetched weather data
                updateUI(data);
            })
            .catch(error => {
                window.alert(error.message);
            });
    }

    function updateUI(data) {
        // Update the UI elements with the weather data
        document.querySelector(".city").textContent = input_name.value;
        document.querySelector(".temp").textContent = data.temperature;
        document.querySelector(".weather").textContent = data.description;
    }

    button.addEventListener("click", function () {
        handleWeatherFetch(input_name.value);
    });

    input_name.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            handleWeatherFetch(input_name.value);
        }
    });
});
