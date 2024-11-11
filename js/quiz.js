function randInt(min, max){
    return Math.floor(Math.random()*(max-min+1));
}

var M = randInt(300, 600);
var N = randInt(100, 300);
var K = randInt(0, 100);

document.querySelector('#total').textContent = M.toString();
document.querySelector('#giveout').textContent = N.toString();
document.querySelector('#takenback').textContent = K.toString();

document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString() +"-"+N.toString()+"+"+K.toString();

var T = N + K;
var S = N - K;
// M-N+k, M-N-K, M-T, M-S
document.querySelector('[value="2"]').nextSibling.nodeValue=M.toString()+"-"+N.toString()+"-"+K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue=M.toString()+"-"+T.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue=M.toString()+"-"+S.toString();

function changeStyle(){
    var classname = this.getAttribute("class");
    alert("clicked"+classname);
    if(classname == "answer"){
        this.setAttribute("class", "answer selected");
    }else{
        this.setAttribute("class", "answer");
    }

    // Testing the animations
    this.animate([{transform: 'rotate(0deg)'}, {transform: 'rotate(180deg)'}], {duration: 3000, fill:'forwards'});
}

var answerlist = document.getElementsByClassName('answer');
for(var i = 0; i < 4; i++){
    answerlist[i].addEventListener('click', changeStyle, false);
}