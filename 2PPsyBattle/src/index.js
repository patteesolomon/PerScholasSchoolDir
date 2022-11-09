// 25 pts for total cust
const ACR = 
{
    hp: 6,
    atk: 4,
    acc: 3,
    def: 3,
    psy: 7,
    sta: 2
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

randT = (hmax, hmin) =>
    {
        return Math.floor(Math.random() * (hmax - hmin + 1)) + hmin;
    };

var logMe = document.getElementById('logBox');

var coinTossed = false;
var retreatA = false;
var retreatB = false;
var p1T = false;
var p2T = false;
var winnerChosen = false;
var pointP1C = 0;
var pointP2C = 0;


let P1 = ACR[5]; // cust these stats
let P2 = ACR[5]; // cust these stats


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

    

// randomizer 6 stats are set and working
P1 = [randT(hpmax, hpmin), randT(atmax, atmin), randT(accmax, accmin), randT(dfmax, dfmin), randT(psmax, psmin), randT(stmax, stmin)];

P2 = [randT(hpmax, hpmin),randT(atmax, atmin),randT(accmax, accmin),randT(dfmax, dfmin),randT(psmax, psmin),randT(stmax, stmin)];

    // await means waiting on the function in q then execution of everything else.

    function endGame() {
        console.log('End Theme. Cue..');
        logMe.innerText = 'You win this war';
        console.log('You have to create a new future');
        hideOptions();
        return;
    }
    // async battle functions
    async function playerPhase(PT)
    {
        return new Promise((PT, reject) => {
            if (p1T == true) // player 1
            {
                console.log();
            }
            else // player 2
            {
                console.log();
            }
            console.log('');
            //dmg calc
        console.log('Your turn...');
        showOptionsP1();
        });
    }

    async function coinToss()
    {
        // heads 1 beats tails 0
        //p1 cointoss
        if(randT(0,1) == 0)
        {
            p1T = false;
        }
        
        if (randT(0,1) == 1) 
        {
            p1T = true;
        }
        // redo 
        //p2 cointoss
        if(randT(0,1) == 0)
        {
            p2T = false;
        }
        
        if (randT(0,1) == 1) 
        {
            p2T = true;
        }
        coinTossed = true;
    }

    async function timerThf(tr)
    {
         // start / end
        tr.start(0);
        tr.end(tr);
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
            await playerPhase(P1);
            await timerThf(300);
            await playerPhase(P2);
            //p1T = false; there's no reason to change this hierarchy
        }
        else if (p2T == true && p1T == false)
        {
            await playerPhase(P2);
            await timerThf(300);
            await playerPhase(P1);
            //p2T = false; leave this here like this.
            // leave this alone.
        }
        await timerThf(300); // thirty frames
    }

    logMe.innerText = P1[0];
    playerPhase(P1);