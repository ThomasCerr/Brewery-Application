var searchInput = document.getElementById('search-city');
var breweryListEl = document.querySelector(".breweryList");



//Brewery List Function/Div Creation

var fetchBreweryCity = function(){
    let city = searchInput.value.trim();
    
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

// Food List Function/Div Creation
var fetchWinery = function(){
        let city = searchInput.value.trim();
        console.log(city)
        // let apiURL = ();
        fetch(apiURL).then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data)
                })
            }
        })}


//Listener
    $('.btn').on('click', function(){
        var searchInput = document.getElementById('search-city').value;
        if (searchInput !== ''){
        localStorage.setItem(JSON.stringify(searchInput), JSON.stringify(searchInput));
        fetchBreweryCity()
        // fetchWinery()
        }
        else {
            window.alert("Please Input a City");
        }
        
        
        
    })
