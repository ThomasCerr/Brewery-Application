var searchInput = document.getElementById('search-city');
var breweryListEl = document.querySelector(".breweryList");
var key= '6ba32263f12394fd4bdedac009a4a7b3';
const mainDate = document.querySelector('.mainDate');
const mainTemp = document.querySelector('.mainTemp');
const mainHumidity = document.querySelector('.mainHumidity');
const mainUVIndex = document.querySelector('.mainUVIndex');
const mainWind = document.querySelector('.mainWind');
var removeIntro = document.querySelector('.intro');

// retrieve brewery data from API
var fetchBreweryCity = function(city){
    if (searchInput.value.trim() !== "") {
        city = searchInput.value.trim();
     } else {
        city = city;
     }
    
    let apiURL = ('https://api.openbrewerydb.org/breweries?per_page=15&by_city=' + city)
    fetch(apiURL).then(function (response) {

        //add some type of clear list here to get rid of the old data
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                // randomizer needed
                for (let i = 0; i < data.length; i++) {
                 var breweryType = data[i].brewery_type;
                 if (breweryType != "closed") {
                var breweryName = data[i].name;
                var address = data[i].street;
                if (address == null){
                    address = '---'
                }
                var phone = data[i].phone;
                if (phone == null){
                    phone = '---'
                }
               var breweryNameContainerEl = document.createElement("tr");
               breweryNameContainerEl.innerHTML =
               '<tr> <td class="breweryName responsive-table"> ' + breweryName +' </td> <td class="address responsive-table"> ' + address +' </td> <td class="phoneNumber responsive-table"> ' + phone +' </td> </td> <td class="type"> ' + breweryType +' </tr>';
                breweryListEl.appendChild(breweryNameContainerEl);
            }
            }
            })
            
        }
    })}
    
    // retrieve weather data from API
    var fetchWeather = function(city){
        
        if (searchInput.value.trim() !== "") {
            city = searchInput.value.trim();
         } else {
            city = city;
         }
        
     let weatherAPI= ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key);
     fetch(weatherAPI).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                let today= new Date().toLocaleDateString();
                var PrimaryWeatherIcon = data.weather[0].icon;
                mainDate.innerHTML = data.name + "  " + today + "  " + "<img id='PrimaryWeatherIcon' src='https://openweathermap.org/img/wn/" + PrimaryWeatherIcon + ".png'>";
                var tempK = data.main.temp;
                var tempF = Math.round(1.8*(tempK-273)+32);
                var wind = data.wind.speed;
                var humidity = data.main.humidity;
                mainTemp.textContent = "Temperature: " + tempF + "°F";
                mainWind.textContent = "Wind: " + wind + " MPH";
                mainHumidity.textContent = "Humidity: " + humidity + "%";
            })
        }
    })}
            

    function recentSearches(){
        document.getElementById("search-history").textContent="";
        for (let i = 0; i < localStorage.length; i++) {
                 let pastSearch = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if ( i===8) {
                    return;
                }
                console.log(localStorage)
                var button = document.createElement("button");
                button.classList.add("btn2");
                button.classList.add("btn-large");
                document.getElementById("search-history").appendChild(button);
                button.textContent = pastSearch;
    }}
    recentSearches();
    
    var clearHistory = function (event) {
        localStorage.removeItem("searchInput");
        breweryNameContainerEl.setAttribute("style", "display: none");
    }

//Listener
        $('.btn').on('click', function(){
            var section = document.querySelector("section")
            section.classList.add("hidden");
            var searchInput = document.getElementById('search-city').value;
            if (searchInput !== ''){
            localStorage.setItem(JSON.stringify(searchInput), JSON.stringify(searchInput));
            fetchBreweryCity();
            fetchWeather();
            recentSearches();           
            }
            else {
                window.alert("Please Input a City");
            }
            
        })

        $('.btn2').on('click', function(){
            var section = document.querySelector("section")
            section.classList.add("hidden");    
        var searchInput = $(this).text();
        fetchWeather(searchInput);
        fetchBreweryCity(searchInput);
        
        })
    
       