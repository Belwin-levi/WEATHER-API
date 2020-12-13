var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
  var data = JSON.parse(this.response); 
 console.log(data);
 let lat = data[0].latlng[0];
 let long = data[0].latlng[1];
 getweather(lat, long);
}
request.onerror = function() {
  alert('Network error')
}
function getweather(lat, long){
  var request = new XMLHttpRequest();
let urlstring = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b611b0439e9ec53cbc0f745a24399757'
  request.open('GET', urlstring, true)

  request.send();
  request.onload = function () {

  var data =JSON.parse(this.response);
console.log(data);

    }  
  }