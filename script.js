
function muteAudio(){
const audio = new Audio("BJ SNOWDEN IN CANADA.mp4")
}

function playAudio(audioPick){
    if(audioPick=='weekAgo'){
        const audio = new Audio("About A Week Ago -Sound Effect - Vine WSHH-.mp3");
        audio.play();
    }
    if(audioPick=='pizzaHere'){
        const audio = new Audio("Ayo the pizza here (Original meme).mp3");
        audio.play();
    }
    if(audioPick=='vineBoom'){
        const audio = new Audio("Vine boom sound effect.mp3");
        audio.play();
    }
    if(audioPick=='raar'){
        const audio = new Audio("raar  arrr  yawn TikTok sound effect.mp3")
        audio.play();
    }
    if(audioPick=='skatBoom'){
        const audio = new Audio("Skibidi Bop Mm Dada Meme - Sound Effect (HD).mp3")
        audio.play();
    }
    if(audioPick=='fartReverb'){
        const audio = new Audio("fart reverb sound effect.mp3")
        audio.play();
    }
    if(audioPick=='babaBoey'){
        const audio = new Audio("BabaBooey sound.mp3")
        audio.play();
    }
    if(audioPick=='huh'){
        const audio = new Audio("HuhSoundeffect.mp3")
        audio.play();
    }
    if(audioPick=='snoring'){
        const audio = new Audio("TikTok snoring (ORIGINAL MEME SOUND EFFECT) (1).mp3")
        audio.play();
    }
    if(audioPick=='soda'){
        const audio = new Audio("President Joe Biden says _SODA_.mp3")
        audio.play();
    }
    if(audioPick=='obamna'){
        const audio = new Audio("Trump OBAMNA original.mp3")
        audio.play();
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    const myAudio = new Audio("BJ SNOWDEN IN CANADA.mp4");
    let audioPaused = false;

    myAudio.addEventListener('ended', () => {
        if (!audioPaused) {
            myAudio.currentTime = 0;
            myAudio.play();
        }
    });

    myAudio.play();

    const mute_button = document.getElementById("button");
    mute_button.addEventListener('click', () => {
        console.log("yo");
        if (audioPaused) {
            audioPaused = false;
            myAudio.volume = 1.0; // Unmute audio
            mute_button.src="./images/umute.jpg"
        } else {
            audioPaused = true;
            myAudio.volume = 0.0; // Mute audio
            mute_button.src="./images/mute.jpg"
        }
        console.log(audioPaused);
    });
});

 