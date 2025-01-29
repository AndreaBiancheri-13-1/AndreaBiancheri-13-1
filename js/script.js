var interruttore = false;
var leftHour = document.getElementById('leftHour');
var rightHour = document.getElementById('rightHour');
var leftMinute = document.getElementById('leftMinute');
var rightMinute = document.getElementById('rightMinute');
function lightUp(){
    if(!interruttore){
        document.getElementById('light').style.filter = "brightness(100%)";
        document.getElementById('leds').setAttribute("src", "/assets/LEDsON.png");
        document.getElementById('bulb').setAttribute("src", "/assets/bulbON.png");
        document.getElementById('powerButton').setAttribute("src", "/assets/powerButton.png");
        interruttore = true;
    }
    else{
        document.getElementById('light').style.filter = "brightness(40%)";
        document.getElementById('leds').setAttribute("src", "/assets/LEDs.png");
        document.getElementById('bulb').setAttribute("src", "/assets/bulb.png");
        document.getElementById('powerButton').setAttribute("src", "/assets/powerButtonOFF.png");
    /*
        leftHour.setAttribute("src", "/assets/clockNumbers/clock0/0.png");
        rightHour.setAttribute("src", "/assets/clockNumbers/clock0/0.png");
        leftMinute.setAttribute("src", "/assets/clockNumbers/clock0/0.png");
        rightMinute.setAttribute("src", "/assets/clockNumbers/clock0/0.png");
    */
        interruttore = false;
    }
}
function clock(){
    const DateTime = new Date();
    var hour = DateTime.getHours();
    var minute = DateTime.getMinutes();
    var day = DateTime.getDate();
    var month = DateTime.getMonth() + 1;
    var year = DateTime.getFullYear().toString();
    month = checkTime(month);
    minute = checkTime(minute);
    var string = hour + " " + minute;
    var img = stringToImage(string);
    document.getElementById('clock').innerHTML= img + "<p id='date'>" + day + "/" + month + "/" + year[2] + year[3] + "</p>" + "<p id='location'>GE</p>";
    var timeout = setTimeout(clock, 1000);
}
function checkTime(i){
    if(i < 10) i = "0" + i;
    return i;
}
function stringToImage(s){
    var temp = "";
    for(var i = 0; i < s.length; i++) temp = temp + "<img src='" + img[s[i]] + "'/>";
    return temp;
}

var img = {
    "1" : "/assets/clockNumbers/clock1/0.png",
    "2" : "/assets/clockNumbers/clock2/0.png",
    "3" : "/assets/clockNumbers/clock3/0.png",
    "4" : "/assets/clockNumbers/clock4/0.png",
    "5" : "/assets/clockNumbers/clock5/0.png",
    "6" : "/assets/clockNumbers/clock6/0.png",
    "7" : "/assets/clockNumbers/clock7/0.png",
    "8" : "/assets/clockNumbers/clock8/0.png",
    "9" : "/assets/clockNumbers/clock9/0.png",
    "0" : "/assets/clockNumbers/clock0/0.png",
    " " : ""
};