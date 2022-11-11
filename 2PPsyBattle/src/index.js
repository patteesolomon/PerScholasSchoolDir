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
    log(PT[11]);
}

var logMe = document.getElementById('logBox');
function outputColor(idn){
    logMe.style.color = `${idn}`;
}
function log(l)
{
    logMe.innerText += '\n' + l;
} 

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

let P1 = ACR[11]; // cust these stats
let P2 = ACR[11]; // cust these stats


const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

randT = (hmax, hmin) => Math.floor(Math.random() * (hmax - hmin + 1)) + hmin;

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

function PsiOverEx()
{
    log(`${PT[11]} has died from psionic over-exersion...`);
}

function psy(PT, etherOut = 0)
{
    let outputOOO = 0;
    etherOut += PT[6];
    PT[6] -= etherOut; // cost 
    var posDia = PT[7];
    var negDia = PT[8];
    var median = (posDia + negDia) / 2;
    
    // ether shift mitigation && // dial shift consequence
    if (etherOut > posDia || median > posDia) 
    {
        negDia -= etherOut;
        if (posDia < negDia) 
        {
            gameOver = true;
        }
    }
    else if (etherOut < negDia || median < negDia) 
    {
        posDia += etherOut;
        if (posDia > negDia) 
        {
            gameOver = true;
        }
    }
    else if(etherOut === median)
    {
        outputOOO = (negDia + etherOut + posDia)* 100;
    }

    let min = Math.ceil(negDia);
    let max = Math.floor(posDia);

    if (Math.floor(Math.random() * (max - min + 1)) + etherOut > posDia || Math.floor(Math.random() * (max - min + 1)) + etherOut < negDia) 
    {
        gameOver = true;
        PsiOverEx();
    }
    else
    {
        outputOOO = negDia + etherOut + posDia;
        log(`${negDia + etherOut + posDia} = PsiDmg ouput`);
    }
    PT[7] = posDia;
    PT[8] = negDia;
    return outputOOO;
}

function attack(PT)
{
    var l = PT[1];
    return l;
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
    log('player has retreated..');

    hideOptionsP1();
    hideOptionsP2();
    battleProcessing();
}

//setPlATBC(P1);

    // await means waiting on the function in que then execution of everything else.

    function endGame() 
    {
        hideOptionsP1();
        hideOptionsP2();
        log('End Theme. Cue..');
        log('You win this war');
        log('You have to create a new future.');
        return;
    }

    function actionBase(PT)
    {
        //log('Attack / Psi / Defend');
        
        z.onclick = function() {
            //logMe.innerText.
            log('attacking!!!');
            allydmgLog();
        };
        x.onclick = function() {
            logMe.innerText.length = 0;
            if (PT[6] <= 0) {
                log('Insufficient Ether.');
                //PT.miss = 0;
            }
            else{
                //PT.miss -= 1;
                log('Using Psi');
                //allyM();
            }
        };
        c.onclick = function() {
            //logMe.;
            log('defence is chosen');
            //retreat();
        };
    }

    // async battle functions
    async function playerPhase()
    {  
        if (p1T == true) // player 1
        {
            log('Player1 turn...');
            showOptionsP1();
            actionBase(P1);
            return;
        }
        else if (p2T == true)// player 2
        {
            log('Player2 turn...');
            showOptionsP2();
            actionBase(P2);
            return;
        }
    }

    // done
    async function coinToss()
    {
        // heads 1 beats tails 0
        //p1 cointoss
        if (randT(-10,10) <= 0)
        {
            p1T = false;
            log(p1T + ' player1 goes last');
        }
        else if (randT(-10,10) >= 1) 
        {
            p1T = true;
            log(p1T + ' player1 goes first');
        }
        else{
            p1T = false;
            log(p1T + ' player1 goes last');
        }
        // redo 
        //p2 cointoss
        if (randT(-10, 10) <= 0)
        {
            p2T = false;
            log(p2T + ' player2 goes last');
        }
        else if (randT(-10,10) >= 1) 
        {
            p2T = true;
            log(p2T + ' player2 goes first');
        }
        else{
            p2T= false;
            log(p2T + ' player2 goes last');
        }
        coinTossed = true;
    }
    
    async function timerThf(tr, atbRate)
    {
        timer = setInterval(()=>{
        
            while (tr >= 0) {
                tr--;
            }
        }, 1000 * atbRate);
    }

    function allydmgLog()
    {
        if(Math.random() < ASW.acc)
        {
            console.log('You hit em! NICE!');
            var s = alienArr1.shift();
            s.hull -= ASW.firep;
            meLog.innerText = 'Player attacks for : ' + ASW.firep;
            if (s.hull > 0) 
            {
                alienArr1.push(s);
            }
            else
            {
                console.log('battle complete.');
                meLog.innerText = 'battle complete';
                if(alienArr1.length <= 0)
                {
                    endGame();
                }
                else
                {
                    playerPhase();
                }
            }
            if (ASW.hull < 0)
            {
                enemyPhase();
            }
        }
        else
        {
            console.log('you missed!');
            enemyPhase();
        }
    }

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
                log('retoss!');
                coinTossed = false;
                p1T = null;
                p2T = null;
                battleProcessing();
            }
            else if (p1T == false && p2T == false)
            {
                log('retoss!');
                coinTossed = false;
                p1T = null;
                p2T = null;
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
        if (p1T == true && p2T == false)
        {
            playerPhase();
            // timerThf(3000, 1);
            // playerPhase();
            //p1T = false; there's no reason to change this hierarchy
        }
        else if (p2T == true && p1T == false)
        {
            playerPhase();
            // timerThf(3000, 1);
            // playerPhase();
            //p2T = false; leave this here like this.
        // leave this alone.
        }
        timerThf(3000, 1); // thirty frames
    }

battleProcessing();