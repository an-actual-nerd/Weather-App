# Weather App.

• This site is created using basic HTML, CSS and Javascript.

• For HTML and CSS is done with the help of [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/).

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
```

# Fetch API

• Weather data [API](https://github.com/robertoduessmann/weather-api) is taken from GitHub.


• Function is greated to fetch API.
```
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
```

# App Screen shot
![Web page Api](image.png)