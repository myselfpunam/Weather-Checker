const api_key = `1a4e0fe2ab30e9a4c8278b31d5a422f9`

const loadTemp = city => {

  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayTemp(data));
  
}
const displayTemp = data => {
  console.log(data)
  const showTemp = document.getElementById('show_temp')
  const temp = (data.main.temp) 
  showTemp.innerText = temp
  const weather = document.getElementById('weather_type')
  const weatherShow = (data.weather[0].main)
  weather.innerText = weatherShow
}

document.getElementById('btn-search').addEventListener('click',function(){
  const inputField = document.getElementById('input_field');
  const city = inputField.value;
  const cityname = document.getElementById('city_name')
  cityname.innerText = city
  // const weather = document.getElementById('weather_type')
  // const weatherShow = weather.innerText
  // const showTemp = document.getElementById('show_temp')
  // const showTempString = showTemp.innerText;
  // const showTempvalue = parseInt(showTempString) 
  // // if(showTempvalue > 40 ){
  //   weather.innerText = 'sunny'
  // }
  // else if (showTempvalue < 40 && showTempvalue > 30){
  //   weather.innerText = 'clouds'
  // }
  // else{
  //   weather.innerText = 'rainny'
  // }
    

  loadTemp(city);


})



loadTemp('dhaka')