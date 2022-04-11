var searchInput = document.getElementById('search-city');





// var fetchBreweryCity = function(){
//         let city = searchInput.value.trim();
//         console.log(city)
//         let apiURL = ('https://api.openbrewerydb.org/breweries?by_city=' + city)
//         fetch(apiURL).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (data) {
//                     console.log(data)
//                 })
//             }
//         })}

var fetchBreweryCity = function(){
    let city = searchInput.value.trim();
    
    let apiURL = ('https://api.openbrewerydb.org/breweries?by_city=' + city)
    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                var breweryName = data[0].name;
                var breweryType = data[0].brewery_type;
                var website_url = data[0].website_url;
                var address = data[0].street;
                var phone = data[0].phone;
                var state = data[0].state;
                var postalCode= data[0].postal_code;
                console.log(breweryName)
            })
        }
    })}


// var fetchFoodCity = function(){
//         let city = searchInput.value.trim();
//         console.log(city)
//         let apiURL = ('http://data.streetfoodapp.com/1.1/regions')
//         fetch(apiURL).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (data) {
//                     console.log(data)
//                 })
//             }
//         })}




//Listener
        $('.btn').on('click', function(){
            var searchInput = document.getElementById('search-city').value;
            if (searchInput !== ''){
            localStorage.setItem(JSON.stringify(searchInput), JSON.stringify(searchInput));
            fetchBreweryCity()
            // fetchFoodCity()
            }
            else {
                window.alert("Please Input a City");
            }
            
            
            
        })
