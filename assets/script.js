var searchInput = document.getElementById('search-city');
var breweryListEl = document.querySelector(".breweryList");




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

                // var breweryArray = data;
                // console.log(breweryArray.length)
                for (let i = 0; i < data.length; i++) {
                console.log(data.length)
                var breweryName = data[i].name;
                var breweryType = data[i].brewery_type;
                var website_url = data[i].website_url;
                var address = data[i].street;
                var phone = data[i].phone;
                var state = data[i].state;
                var postalCode= data[i].postal_code;
                console.log(data)

                var breweryNameContainer = document.createElement("tr");
                // breweryNameContainer.innerHTML = breweryName;
               breweryListEl.appendChild(breweryNameContainer);

               var breweryTypeEl = document.createElement("tr");
               
           
            //    breweryTypeEl.classList.add = "class1";
               breweryTypeEl.innerHTML = ['<td class="class"></td>'];
               breweryListEl.appendChild(breweryTypeEl);
                
              var nameList = document.querySelector(".class1");
              nameList.innerHTML = breweryName;
            //   breweryListEl.appendChild(breweryName);
            }
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
