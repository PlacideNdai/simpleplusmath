// easy math script

let startbtn = document.getElementById('start');
let des = document.getElementById('des');
let title = document.getElementById('title');
let timebox = document.getElementById('timebox');
let timedis = document.getElementById('timedis');
let startsc =document.getElementById('startSc');
let mathdis = document.getElementById('mathdis');
let answerbox = document.getElementById('answerbox');
let corrCount = document.getElementById('corrCount');
let corrcountdis = document.getElementById('corrdis');
let playbtn = document.getElementById('playbtn');
let song = new Audio('mus.mp3');
let submit = document.getElementById('submit');

// randomizing math!!

let playingCheck = false;
song.loop = true;


playbtn.onclick = ()=>{
    playingCheck ? song.pause() : song.play();
}

song.onplaying = () => {
    playingCheck = true;
}

song.onpause = () =>{
    playingCheck = false;
}



let firstNum, secondNum , range1 , range2, mathsign , abvalue, correcta, scoreboard, okaybtn;
let corrcount;

range1 = 10;
range2 = 10;


firstNum = Math.floor(Math.random() * range1);
secondNum = Math.floor(Math.random() * range2);
mathdis.innerHTML = firstNum + ' + ' + secondNum;


corrcount = 1;
allenter = 0;

function process(a,b){
    return a + b;
};

function checking(){
    if(answerbox.value == process(firstNum,secondNum)){
        startsc.style.boxShadow = '5px 5px darkgreen';
        firstNum = Math.floor(Math.random() * range1);
        secondNum = Math.floor(Math.random() * range2);
        mathdis.innerHTML = firstNum + ' + ' + secondNum;
        corrcountdis.innerHTML = corrcount++;

    }else{
        startsc.style.boxShadow = '5px 5px darkred';
        firstNum = Math.floor(Math.random() * range1);
        secondNum = Math.floor(Math.random() * range2);
        mathdis.innerHTML = firstNum + ' + ' + secondNum;
    }
};

 // timer
function timer(){
    timebox.style.display = "block";
// time count down
let number = 10;
let nums = number;
let results; 

function solution(){
    if(nums == 0){

        timedis.innerHTML = 'T O!';
        mathdis.style.display = 'none';
        answerbox.style.display = 'none';
        submit.style.display = 'none';
        // score board 
        results = document.createElement('h1');
        results.setAttribute('id','results')
        results.innerHTML = 'Corrects: ' + (corrcount - 1) + " / " + allenter;
        
        
        
        scoreboard = document.createElement('div');
        scoreboard.setAttribute('id','scoreboard');
        scoreboard.appendChild(results);
        startsc.appendChild(scoreboard);

        /// score counting here


        /// above here!
    
    
        // btn
        okaybtn = document.createElement('button');
        okaybtn.setAttribute('id','donebtn');
        okaybtn.innerHTML = 'Done!';
        scoreboard.appendChild(okaybtn);
        okaybtn.addEventListener('click', ()=>{ scoreboard.style.display = 'none';
        // return to the game or restart the game.
        location.reload();
    });

};   



startbtn.style.display = 'none';
};

 let counting = setInterval(() => {

    timedis.innerHTML = '' + nums--;
    if(nums < 0){
        nums = 0;
        clearInterval(counting);
        solution();
    }
 
}, 1000);




};


function removeHome(){

    // removing all visible text , button and other stuff.
    mathdis.style.display = 'block';
    answerbox.style.display = 'block';
    des.style.display = "none";
    title.style.display = 'none';
    startbtn.style.display = 'none';
    corrCount.style.display = 'block'
    corrCount.style.display = 'block';
    submit.style.display = 'block'
    // startbtn.innerText = "loading...";
    corrcount = 1;


    timer();

};

function summary(){
    checking();
        answerbox.value = "";
        allenter+= 1;
}

window.onkeydown = function process(enter){
    if(enter.keyCode == '13'){
       summary();
    }
}



