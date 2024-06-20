function dClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var dayDate = date.getDate();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    var ampm = "AM";
    
    if (hour === 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (dayDate < 10) {
        dayDate = "0" + dayDate;
    }
    if (month < 10) {
        month = "0" + (month+1);
    }
    if (day === 1) {
        day = "Monday";
    }
    if (day === 2) {
        day = "Tuesday";
    }
    if (day === 3) {
        day = "Wednesday";
    }
    if (day === 4) {
        day = "Thursday";
    }
    if (day === 5) {
        day = "Friday";
    }
    if (day === 6) {
        day = "Saturday";
    }
    if (day === 0) {
        day = "Sunday";
    }

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("ampm").innerHTML = ampm;

    document.getElementById("date").innerHTML = dayDate;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = day;

    setInterval(dClock, 1000)
}

dClock();