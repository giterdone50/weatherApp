$(document).ready(function () {
    //your code here
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&mode=json&units=imperial&APPID=2e7a793e3530732e27d99c958b53f8eb",
    function(json){
        console.log(json);
        console.log(json["weather"]);
        $('#cityName').text(json['name']);
        $('#ambientWeather').text(json['weather'][0]['description']);
        var iconCode = json['weather'][0]["icon"]
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        console.log(iconUrl);
        $('#iconDay').attr("src", iconUrl);
        $('#temp').text(json["main"]["temp"]);
    });
});
//write code for th weather api here