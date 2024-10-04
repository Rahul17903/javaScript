const ev = document.getElementById("eventdate")
const btn = document.getElementById("submit")

btn.addEventListener("click",()=>{
    const inputvalue = ev.value
    if (!inputvalue) {
        alert("Please set a valid event date and time.");
        return;
    }

    const endDate = new Date(inputvalue).getTime();
    const startdate = new Date().getTime()

    let x = setInterval(function upateTimer () {
    const now = new Date().getTime();
    const distancecover = now-startdate;
    const distancePending = endDate-now;

    // calculate days,mins,secs
    const onedaysInMillis = (24 * 60 * 60 * 1000);
    const oneHoursInMillis = (60 * 60 * 1000);
    const oneminInMillis = (60*1000);
    const oneSecInMillis = 1000

    const days = Math.floor(distancePending / (onedaysInMillis));

    const hrs = Math.floor(distancePending % (onedaysInMillis) / (oneHoursInMillis));

    const mins = Math.floor(distancePending % ( oneHoursInMillis) / (oneminInMillis));

    const secs = Math.floor(distancePending % (oneminInMillis)) / (oneSecInMillis); 

    //populate in Ui
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // Calculate width percentage for progress bar
    const totalDistnce = endDate - startdate;

    const percentageDistance = (distancecover / totalDistnce)*100;

    // set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending <= 0){
        clearInterval(x);

        alert("your timmer is ended")
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
},  1000);
})
