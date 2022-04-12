var searchInput = document.getElementById('search-city');
var breweryListEl = document.querySelector(".breweryList");


//Brewery List Function/Div Creation

var fetchBreweryCity = function(){
    let city = searchInput.value.trim();
    
    let apiURL = ('https://api.openbrewerydb.org/breweries?per_page=15&by_city=' + city)
    fetch(apiURL).then(function (response) {
        //add some type of clear list here
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                
                //randomizer needed
                for (let i = 0; i < data.length; i++) {
                var breweryName = data[i].name;
                var breweryType = data[i].brewery_type;
                var address = data[i].street;
                var phone = data[i].phone;
           

               var breweryNameContainerEl = document.createElement("tr");
               breweryNameContainerEl.innerHTML = 
               '<tr> <td class="breweryName"> ' + breweryName +' </td> <td class="address"> ' + address +' </td> <td class="phoneNumber"> ' + phone +' </td> </td> <td class="type"> ' + breweryType +' </tr>';
                breweryListEl.appendChild(breweryNameContainerEl);
       
            }
            })
        }
    })}

//Food List Function/Div Creation
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
