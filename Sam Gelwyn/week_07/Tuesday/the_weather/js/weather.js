// open weather map key: fb87e495a96fccd8cad517f7ea6d0948
// api.openweathermap.org
const fetchWeather = function () {
  event.preventDefault();

  const key = "fb87e495a96fccd8cad517f7ea6d0948";
  const cityName = $('#city-name').val();

  const requestString = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key;
  $.ajax(requestString).done(function (data){
    let $weatherList = $('<dl>');
    $weatherList.append($('<dt>').text("Mainly"))
      .append($('<dd>').text(data.weather[0].main))
      .append($('<dt>').text("Temp"))
      .append($('<dd>').text(data.main.temp - 273.15));
    $('#weather-now').append($weatherList);
  });

}

$(function (){
  $('#search-form').on('submit', fetchWeather);
}); 

