//var canvas = document.querySelector('canvas');
//console.log(canvas);
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

// pts for total cust, 0 - 11 properties
const ACR = 
{
    hp: 6,
    atk: 2,
    acc: 0.2,
    def: 2,
    psi: 11,
    sta: 2,
    eth: 5,
    pos: 10,
    neg: 0,
    maxAtbCharge: 0,
    currentATBCharge: 1,
    charN: ''
};

var z = document.getElementById('z');
var x = document.getElementById('x');
var c = document.getElementById('c');

var i = document.getElementById('i');
var o = document.getElementById('o');
var p = document.getElementById('p');

let hpmin = 1;
let hpmax = 7;
let atmax = 5;
let atmin = 1;
let accmin = 0.1;
let accmax = 1.0;
let dfmin = 1;
let dfmax = 3;
let psmin = 1;
let psmax = 5;
let stmin = 1;
let stmax = 5;
let posmin = 1;
let posmax = 15;
let negmin = -15; // reversed
let negmax = 0; // plane

function setPlATBC(PT)
{
    log(PT[0]); // this works
}

function playerATBCharge(PT)
{
    log(PT[]);
}

var logMe = document.getElementById('logBox');
function outputColor(idn){
    logMe.style.color = `${idn}`;
}
function log(l)
{
    logMe.innerText += '\n' + l;
} 

log('hello world');

// normal output
outputColor('white');
// dmg 
//outputColor('gold');

// dialogue
//outputColor('blue');
//outputColor('darkblue'); // noice

var coinTossed = false;
var retreatA = false;
var retreatB = false;
var p1T = false;
var p2T = false;
var winnerChosen = false;
var pointP1C = 0;
var pointP2C = 0;

let P1 = ACR[8]; // cust these stats
let P2 = ACR[8]; // cust these stats


const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

randT = (hmax, hmin) =>
{
    return Math.floor(Math.random() * (hmax - hmin + 1)) + hmin;
};

// randomizer 6 stats are set and working
P1 = [randT(hpmax, hpmin),randT(atmax, atmin),randT(accmax, accmin),randT(dfmax, dfmin),randT(psmax, psmin),randT(stmax, stmin), randT(10, 7), randT(0, 4), 0, 1, ''];

P2 = [randT(hpmax, hpmin),randT(atmax, atmin),randT(accmax, accmin),randT(dfmax, dfmin),randT(psmax, psmin),randT(stmax, stmin), randT(10, 7), randT(0, 4), 0, 1, ''];

function DecreasedATB(factor = 1)
{
    currentATBCharge = clamp(currentATBCharge - (factor * maxAtbCharge), 0, maxAtbCharge);
}

function setCurrentATB(newCharge)
{
    currentATBCharge = newCharge;
}

// controls
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

//setPlATBC(P1);

    // await means waiting on the function in que then execution of everything else.

    function endGame() 
    {
        console.log('End Theme. Cue..');
        logMe.innerText = 'You win this war';
        logMe.innerText = 'You have to create a new future.';
        hideOptions();
        return;
    }

    function actionBase(PT)
    {
        logMe.innerText += 'Attack / Psi / Defend';
        z.onclick = function() {
            logMe.innerText +='attacking!!!';
            allydmgLog();
        };
        x.onclick = function() {
            if (PT[6] <= 0) {
                logMe.innerText += 'Insufficient Ether.';
                //PT.miss = 0;
            }
            else{
                //PT.miss -= 1;
                logMe.innerText += 'Using Psi';
                //allyM();
            }
        };
        c.onclick = function() {
            logMe.innerText+='defence';
            retreat();
        };
    }

    // async battle functions
    async function playerPhase()
    {  
        if (p1T == true) // player 1
        {
            logMe.innerText += `\n`+'Player1 turn...';
            showOptionsP1();
        }
        else if (p2T == true)// player 2
        {
            logMe.innerText += 'Player2 turn...';
            showOptionsP2();
        }
    }

    async function coinToss()
    {
        // heads 1 beats tails 0
        //p1 cointoss
        if (randT(0, 100) == 0)
        {
            p1T = false;
        }
        
        if (randT(0, 100) == 1) 
        {
            p1T = true;
        }
        // redo 
        //p2 cointoss
        if (randT(0, 100) == 0)
        {
            p2T = false;
        }
        
        if (randT(0, 100) == 1) 
        {
            p2T = true;
        }
        coinTossed = true;
        log(`${p1T}`);
    }
    
    async function timerThf(tr, atbRate)
    {
        timer = setInterval(()=>{
        tr--;
            if (tr <= 0) {
                return;
            }
        }, 1000 * atbRate);
    }

    //hideOptionsP1();
    //hideOptionsP2();

    async function battleProcessing()
{
    hideOptionsP1();
    hideOptionsP2();
    // player coin toss
    if (coinTossed == false) 
    {
        await coinToss();
        if (p1T == true && p2T == true) 
        {
            alert('retoss!');
            coinTossed = false;
            battleProcessing();
        }
    }
    else if(P1[0] <= 0 && P2[0] > 0)
    {
        // call winner 
    }
    else if(P2[0] <= 0 && P1[0] > 0)
    {
        //call winner
    }
    else if (p1T == true && p2T == false)
    {
        playerPhase();
        timerThf(3, 1);
        playerPhase();
        //p1T = false; there's no reason to change this hierarchy
    }
    else if (p2T == true && p1T == false)
    {
        playerPhase();
        timerThf(3, 1);
        playerPhase();
        //p2T = false; leave this here like this.
        // leave this alone.
    }
    timerThf(3); // thirty frames
}


log('uhi');


battleProcessing();