var state = false;

function toggle(){
    
    var body = document.getElementById("body");
    var clock = document.getElementById("clock");
    var mode = document.getElementById("btn");
    var centre = document.getElementById("centre");

    if(state){
        //light mode on //button dark
        body.style.background = "#c1c1c4";
        clock.className = "clock1";
        mode.innerText = "Dark Mode";
        mode.style.color = "#eee";
        mode.style.background = "#111";
        centre.style.background = "#212";
        state = false;
    }
    else{
        //dark mode on //button light
        body.style.background = "#1c1f1c";
        clock.className = "clock2";
        mode.innerText = "Light Mode";
        mode.style.color = "#111";
        mode.style.background = "#eee";
        centre.style.background = "#cbc"
        state = true;
    }
    
}

const sound = new Audio('sound.mp3');

setInterval(() => {
    const d = new Date();
    const hTime = d.getHours();
    const mTime = d.getMinutes();
    const sTime = d.getSeconds();

    const hRotation = 30 * hTime + mTime / 2;
    const mRotation = 6 * mTime;
    const sRotation = 6 * sTime;

    const hour = document.querySelector('#hour');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    sound.play();


}, 1000);