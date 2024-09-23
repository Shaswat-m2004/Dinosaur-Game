let audio = new Audio('1.mp3');
let gameOverAudio = new Audio('gameOver.wav');
let jumpingAudio = new Audio('Bounce.mp3')
jumpingAudio.volume = 0.3;

document.onkeydown = function(e){
    console.log("key code :" , e.keyCode)
    if(e.keyCode == 38 || e.keyCode == 32){
        if(audio.paused){
               
            audio.play();
        }
        jumpingAudio.play();
        let dino = document.getElementsByClassName('dino')[0]
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },1000)
    }
    if(e.keyCode == 39){
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + 'px'
    }
    if(e.keyCode == 37){
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox - 112 + 'px'
    }
}
let points = 0
const id = setInterval(()=>{
    dino = document.getElementsByClassName('dino')[0]
    gameOver = document.getElementsByClassName('gameOver')[0]
    obst = document.getElementsByClassName('obstacle')[0]

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obst,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obst,null).getPropertyValue('top'));

    offsetX = Math.abs(-dx + ox)
    offsetY = Math.abs(-dy + oy)

    if(offsetX < 80 && offsetY < 80){
        gameOver = document.getElementsByClassName('gameOver')[0]; 
        obst.classList.remove('obstacleAni')
        gameOver.style.opacity = 1;
        audio.pause();
        gameOverAudio.play();
        clearInterval(id)
    }else{
            points = points + 1;
        document.getElementById('points').innerHTML = points; 
    }
},100)


