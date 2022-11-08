// 25 pts for total cust
const ACR = 
{
    hp: 6,
    atk: 4,
    acc: 3,
    def: 3,
    psy: 7,
    sta: 2,
};

var z = document.getElementById('z');
var x = document.getElementById('x');
var c = document.getElementById('c');

var i = document.getElementById('i');
var o = document.getElementById('o');
var p = document.getElementById('p');

var logMe = document.getElementById('logBox');

var retreatB = false;
var gameOver = false;
var pointC = 0;

let P1 = new ACR(); // cust these stats
let P2 = new ACR(); // cust these stats

let hpmin = 1;
let hpmax = 7;
let atmax = 5;
let atmin = 1;
let accmin = 0.3;
let accmax = 1.0;
let dfmin = 1;
let dfmax = 3;
let psmin = 1;
let psmax = 5;
let stmin = 1;
let stmax = 5;

showOptionsP1 = () =>
{
    c.style.display = 'block'; 
    z.style.display = 'block'; 
    x.style.display = 'block';
};

showOptionsP2 = () =>
{
    i.style.display = 'block'; 
    o.style.display = 'block'; 
    p.style.display = 'block';
};

hideOptionsP1 = () =>
{
    z.style.display = 'none'; 
    x.style.display = 'none'; 
    c.style.display = 'none';
};

hideOptionsP2 = () =>
{
    i.style.display = 'none'; 
    o.style.display = 'none'; 
    p.style.display = 'none';
};

    function retreat() // action witout a stat?
    {
        // end game 
        retreatB = true;
        console.log('player has retreated..');
        hideOptions();
        battleProcessing();
    }

    randT = (hmax, hmin) =>
    {
        return Math.floor(Math.random() * (hmax - hmin + 1)) + hmin;  //3-6
    };

// randomizer 6 stats
P1[0] = [randT(hpmax, hpmin)];
P1[1] = [randT(atmax, atmin)];
P1[2] = [randT(accmax, accmin)];
P1[3] = [randT(dfmax, dfmin)];
P1[4] = [randT(psmax, psmin)];
P1[5] = [randT(stmax, stmin)];

P2[0] = [randT(hpmax, hpmin)];
P2[1] = [randT(atmax, atmin)];
P2[2] = [randT(accmax, accmin)];
P2[3] = [randT(dfmax, dfmin)];
P2[4] = [randT(psmax, psmin)];
P2[5] = [randT(stmax, stmin)];

    // await means waiting on the function in q then execution of everything else.

    function endGame() {
        console.log('End Theme. Cue..');
        logMe.innerText = 'You win this war';
        console.log('You have to create a new future');
        hideOptions();
        return;
    }
    // async battle functions
    playerPhase = (PT) =>
    {
        
    };

    logMe.innerText = P1[0];