function testKey(e){
    const pressed = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio){return;}

    pressed.classList.add('play');
    audio.currentTime = 0;
    audio.play();
    return;
}

function restart(e){
    if(e.isTrusted){
        this.classList.remove('play');
    }
    return;
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(element => element.addEventListener('transitionend', restart));
window.addEventListener('keydown',testKey);