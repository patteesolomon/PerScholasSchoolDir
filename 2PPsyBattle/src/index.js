// pts for total cust, 0 - 12 properties
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
    phase: ['start', 'turn', 'action', 'turnEnd', 'battleEnd'],
    charN: ''
};

//var canvas = document.querySelector('canvas');
//console.log(canvas);
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

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
    PT[9] +=1;
}

var logMe = document.getElementById('logBox');
function outputColor(idn){
    logMe.style.color = `${idn}`;
}
function log(l)
{
    logMe.innerText += '\n' + l;
} 

function dLog(yu == false)
{
  if(yu==true)
    logMe.style.display = 'none';
  else{
    logMe.style.display = 'block';
  }
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
P1 = [randT(hpmax, hpmin),randT(atmax, atmin),randT(accmax, accmin),randT(dfmax, dfmin),randT(psmax, psmin),randT(stmax, stmin), randT(10, 7), randT(0, 4), 0, 1, [3],'' ];

P2 = [randT(hpmax, hpmin),randT(atmax, atmin),randT(accmax, accmin),randT(dfmax, dfmin),randT(psmax, psmin),randT(stmax, stmin), randT(10, 7), randT(0, 4), 0, 1, [3],'' ];

function DecreasedATB(factor = 1)
{
    currentATBCharge = clamp(currentATBCharge - (factor * maxAtbCharge), 0, maxAtbCharge);
}

function setCurrentATB(newCharge)
{
    currentATBCharge = newCharge;
}

function PsiOverEx(PT)
{
    log(`${PT[12]} has died from psionic over-exersion...`);
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
                logMe.style.display = 'none';
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

    function allydmgLog(PT, T)
    {
      dLog(false);
      dLog(true);
        if(Math.random() < PT[2])
        {
            log('You hit em! NICE!');
            T[0] -= PT[1];
            log(`Player attacks for : ${PT[1]}`);
            if (P1[0] > 0) 
            {
                alienArr1.push(s);
            }
            else
            {
              log('battle complete.');
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
            if (PT[0] < 0)
            {
                // 
            }
        }
        else
        {
            console.log('you missed!');
            enemyPhase();
        }
    }

gameParty1 = [];
gameParty2 = [];
gameParty1[0] = P1;
gameParty2[0] = P2;
//party initializer
initMembers = function() {
   //initAtb();
};

atbMax = function()
{
   return 100;
};

atbFillRate = function() 
{
  return 1;
};

updateAtb = function(PT) {
  //  PT[x] = find atb stat
  PT[9] = Math.min(_atb + this.atbFillRate(), this.atbMax());
};

clearAtb = function(PT) {
  PT[9] = 0;
};

//this function is useless
onBattleStart = function(PT) {
  //TH_GameBattler_onBattleStart.call(this);
  PT[9] = 0;
};

// updater
update = function(PT) {
    if (!this.isBusy() && !this.updateEvent()) {
        switch (PT[12]) {
        case 'start':
            startInput();
            break;
        case 'turn':
            updateTurn();
            break;
        case 'action':
            updateAction();
            break;
        case 'turnEnd':
            updateTurnEnd();
            break;
        case 'battleEnd':
            updateBattleEnd();
            break;
        }
    }
};

// 
startInput = function() {    
  PT[12] = 'turn'
};

// added call getter
updateTurn = function() {
  updateFrame();
}

// the next turn
updateFrame = function() {
  $gameParty.updateFrame();
  $gameTroop.updateFrame();
};

updateFrame = function() {
  var members = members();
  for (var i = 0; i < members.length; i++) {
    members[i].updateFrame();
  }
};

updateFrame = function() {
  updateAtb();
};

drawActorAtb = function(actor, x, y, width) {
  width = width || 186;
  var atb = actor.atb();
  var atbMax = actor.atbMax();
  var color1 = hpGaugeColor1();
  var color2 = hpGaugeColor2();
  drawGauge(x, y, width, atb / atbMax, color1, color2);
  changeTextColor(systemColor());
  drawText("ATB", x, y, 44);
};

drawGaugeAreaWithTp = function(rect, actor) {    
  this.drawActorHp(actor, rect.x + 0, rect.y, 108);
  this.drawActorMp(actor, rect.x + 123, rect.y, 96);
  this.drawActorAtb(actor, rect.x + 234, rect.y, 96);
};

update = function() {
  refresh();
}

updateFrame = function() {
  var members = this.allBattleMembers();
  for (var i = 0; i < members.length; i++) {        
    if (members[i].canInput()) {
      this._subject = members[i];
      this.startInput();
      break;
    }
  }
  if (!this._subject) {
    $gameParty.updateFrame();
    $gameTroop.updateFrame();    
  }
}

startInput = function() {    
  if (this._subject) {
    this._subject.makeActions();
    if (this._subject.isActor() && this._subject.canInput()) {
      this._phase = 'input'
    }      
  }
  else {
    this._phase = 'turn'
  }
};

updateTurn = function() {
  this.updateFrame();
}

updateTurn = function() {    
  if (this._subject) {
    if (this._subject.currentAction()) {
      this.processTurn();
    }
    else {
      this.endSubjectTurn();        
    }
  }
  else {
    this.updateFrame();
  }
};

endSubjectTurn = function() {
  this._subject.clearAtb()
  this._subject = null;
};

actor = function() {
  return this._subject;
};
  
selectNextCommand = function() {
  this._phase = 'turn';
};

selectPreviousCommand = function() {
  this._phase = 'turn';
};

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
        timerThf(300, 1); // thirty frames
    }

battleProcessing();
