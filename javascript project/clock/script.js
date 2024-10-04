let time = new Date();

let x = setInterval(function updatetimer(){
    let time = new Date();
    let years = time.getFullYear()
    let month = time.getMonth()+1
    let date = time.getDate()
    let hr = time.getHours()
    let mins = time.getMinutes()
    let sec = time.getSeconds()
    document.getElementById("years").innerHTML = years
    document.getElementById("month").innerHTML = month
    document.getElementById("date").innerHTML = date
    document.getElementById("hours").innerHTML = hr
    document.getElementById("minits").innerHTML = mins
    document.getElementById("second").innerHTML = sec
},1000)