
function UpdateClock(){
    const now= new Date();
    let hours=now.getHours();
    const AmPm=hours>=12 ? "PM" : "AM";
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0);
    const Clock=document.getElementById("clock");
    const minute=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    Clock.textContent=`${hours}:${minute}:${second} ${AmPm}`;
    
}
UpdateClock();
setInterval(UpdateClock,1000)

