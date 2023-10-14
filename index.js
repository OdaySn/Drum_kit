// Uploading pics to Keys

const pics = ['url("images/crash.png")','url("images/kick.png")',
'url("images/snare.png")','url("images/tom1.png")','url("images/tom2.png")',
'url("images/tom3.png")','url("images/tom4.png")']; 


for (let j = 0 ; j < pics.length ; j++) { 
    document.querySelectorAll(".drum")[j].style.backgroundImage = pics[j];
}

// Sounds Array 

const audios = [new Audio("sounds/crash.mp3"), new Audio ("sounds/kick-bass.mp3"), 
new Audio ("sounds/snare.mp3"), new Audio ("sounds/tom-1.mp3"), 
new Audio ("sounds/tom-2.mp3"), new Audio ("sounds/tom-3.mp3"), 
new Audio ("sounds/tom-4.mp3")];



// Detecting button click 

for (let i = 0 ; i < document.querySelectorAll(".drum").length ; i++) { 
    document.querySelectorAll("button")[i].addEventListener("click", handlClick); 
}

function handlClick () { 
    var x = this.innerHTML; 

    switch(x) { 
        case "w": audios[0].play();
        break;
        case "a": audios[1].play();
        break;
        case "s": audios[2].play();
        break;
        case "d": audios[3].play();
        break;
        case "j": audios[4].play();
        break;
        case "k": audios[5].play();
        break;
        case "l": audios[6].play();
        break;
        default: 
        break;
    }
    buttonAnamimation(x);
}



// Detecting keyboard click

document.addEventListener("keypress", makeSound); 

function makeSound (event) { 
    var y = event.key; 
    switch(y) { 
        case "w": audios[0].play();
        break;
        case "a": audios[1].play();
        break;
        case "s": audios[2].play();
        break;
        case "d": audios[3].play();
        break;
        case "j": audios[4].play();
        break;
        case "k": audios[5].play();
        break;
        case "l": audios[6].play();
        break;
        default: 
        break;
    }
    buttonAnamimation(y);
}

function buttonAnamimation (currentchar) { 
    var z = document.querySelector("." + currentchar); 
    z.classList.add("pressed"); 
    setTimeout (function () { 
        z.classList.remove("pressed"); 
    }, 100)
}



