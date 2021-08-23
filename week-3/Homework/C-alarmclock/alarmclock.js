   
//const alarset= document.getElementById("alarmSet").Value;
 const time=document.getElementById("timeRemaining");
 const input=document.getElementById("alarmSet").value;
function setAlarm() {
  let timer=input*60;
  const clr=setInterval(function(){
    const min=string(math.trunc(timer/60)).padstar(2,0);
    const sec=string(timer%60).padstar(2,0);
    time.textContent=`Time Remaining:${min} : ${sec}`;
    timer--;
    if(timer===0){
      clearInterval(clr);
      time.textContent= `Time Remaining: 00:00`;


    }
    
  }, 1000);
  
}
console.log(time.textContent)

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
