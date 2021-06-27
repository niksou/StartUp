document.getElementById("startBut").addEventListener('click',function () {
    document.getElementById("welcome").hidden=true;
    document.getElementById('meetUp').hidden=false;
    setTimeout("endGame()", 10000);
})

function endGame(){
    document.getElementById('gameEnd').hidden=false;
}

document.getElementById('gameEnd').addEventListener('click',function () {
    document.getElementById('meetUp').hidden=true;
    document.getElementById('gameEnd').hidden=true;
    document.getElementById('learn').hidden=false;

})

document.getElementById('firstLearn').addEventListener('click',function () {
    document.getElementById('secondLearn').hidden=false;

})

document.getElementById('secondLearn').addEventListener('click',function () {
    setTimeout("answer()", 10000);

})



function answer(){

    document.getElementById('learn').hidden=true;
    document.getElementById('answer').hidden=false;
}
