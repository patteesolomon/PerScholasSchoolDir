class ACR 
{
    constructor(hull, firep, acc)
    {
        this.hull = hull;
        this.firep = firep;
        this.acc = acc;
    }
    getHull() {
        return this.hull;
    }
    setHull(v)
    {
        this.hull = v;
    }
    getFirep() 
    {
        return this.firep;
    }
    setFirep(v)
    {
        this.firep = v;
    }
    getAcc() 
    {
        return this.acc;
    }
    setAcc(v)
    {
        this.acc = v;
    }
}

var retreatB = false;
var gameOver = false;

    randH = (hmax, hmin) =>
    {
        return Math.floor(Math.random() * (hmax - hmin + 1)) + hmin;  //3-6
    };

    randF = (fmax, fmin) =>
    {
        return Math.floor(Math.random() * (fmax - fmin + 1)) + fmin; //2-4
    };

    randA = (accmax, accmin) =>
    {
        return Math.floor(Math.random() * (accmax - accmin + 1)) + accmin; //0.6-0.8
    };

class Ship extends ACR
{
    constructor(smiss, name)
    {
        super(7, 5, 0.7);
        let fmax = 2;
        let fmin = 4;
        let accmin = 0.6;
        let accmax = 0.8;
        this.name = name;
        this.miss = smiss;
    }

    fireMissile()
    {
        return this.firep * (2); // modified number non mutator
    }
    retreat() // action witout a stat?
    {
        // end game 
        retreatB = true;
        console.log('player has retreated..');
        hideOptions();
        battleProcessing();
    }
    GetName()
    {
        return this.name;
    }
}

/// player config
let ASW = new Ship(3,'name'); // you can rename this later

let hmin = 3;
let fmax = 2;
let fmin = 4;
let accmin = 0.6;
let accmax = 0.8;
let hmax = 6;

class Alien extends ACR
{
    constructor(a, b ,c)
    {
        super(randH(a, 3), randF(b, 3), randA(c, 0.3));
    }
}

let alienArr1 = [
    enemy1 = new Alien(6, 3, 0.6),
    enemy2 = new Alien(6, 3, 0.6),
    enemy3 = new Alien(6, 3, 0.6),
    enemy4 = new Alien(6, 3, 0.6),
    enemy5 = new Alien(6, 3, 0.6),
    enemy6 = new Alien(6, 3, 0.6)
];

var phulld = document.querySelector('.playerStats').innerText = `Hull: ${ASW.hull} FirePower: ${ASW.firep} Accuracy : ${ASW.acc}`;

let meLog = document.getElementById('log');
meLog.style.color = 'white';
meLog.style.backgroundColor = 'black';

var r = document.getElementById('r');
var z = document.getElementById('z');
var x = document.getElementById('x');

// this is just for slower browsers and debugging
showOptions = () =>
{
    r.style.display = 'block'; 
    z.style.display = 'block'; 
    x.style.display = 'block';
};

// this one too
hideOptions = () =>
{
    r.style.display = 'none'; 
    z.style.display = 'none'; 
    x.style.display = 'none';
};

//battlemode

    console.log('%c spacebattle', 'font-size: 40px');

    function getPlHull (ASW) {return ASW.hull;}
    function pullHull () {return Array.from(alienArr1).pop().hull;}
    function pullAcc () {return Array.from(alienArr1).pop().acc;}
    function pullFp () {return Array.from(alienArr1).pop().firep;}


    function playerPhase(ardx)
    { 
        // wait for playerinput before calc
        console.log('What would you like todo?');
        showOptions();
        console.log('Fight(f) / Retreat(r) / Missile(m)');
        z.onclick = function () {
            console.log('attacking!!!');
            allydmgLog();
            enemyPhase();
            battleProcessing();
        };
        x.onclick = function () {
            if (ASW.miss <= 0) {
                console.log('you have no missiles.');
                ASW.miss = 0;
            }
            else{
                ASW.miss -= 1;
                console.log('fireing missiles!!!');
                allyM();
                enemyPhase();
                battleProcessing();
            }
        };
        r.onclick = function () {
            console.log('retreating!!!');
            ASW.retreat();
        };
    }

    function enemyPhase(ardx)
    {
        hideOptions();
        console.log('Incomming Attack!');
        enemydmgLog(ardx);
    }

    function statmntLog(statement = '')
    {
        alert(`${statement}`);
    }

    function pldmgLog(plDmgIn)
    {
        console.log(`%c You have done ${plDmgIn} damage`,
        `font-style: italic; background: 
        azure; border: 1px solid grey;`);
    }

    
    function enemydmgLog(idx)
    {
        if(Math.random() < pullAcc())
        {
            console.log('You have been hit!');
            var s  = alienArr1.shift();
            ASW.hull -= s.firep;
            alienArr1.push(s);
            
            ASW.hull -= pullFp();
            meLog.innerText = 'Enemy Alien attacks for : ' + pullFp();
        }
        else
        {
            console.log('miss!');
        }
        hpCheck(ASW);
        console.log('current hull : ' + ASW.hull);
        console.log(alienArr1);
    }

    function allydmgLog()
    {
        if(Math.random() < ASW.acc)
        {
            console.log('You hit em! NICE!');
            var s = alienArr1.shift();
            s.hull -= ASW.firep;
            meLog.innerText = 'Player attacks for : ' + ASW.firep;
            if (s.hull > 0) {
                alienArr1.push(s);
            }
            else{
                console.log('battle complete.');
                meLog.innerText = 'battle complete';
            }
        }
        else
        {
            console.log('you missed!');
        }
    }

    function allyM()
    {
        console.log('You hit em! NICE!');
        var s  = alienArr1.shift();
        s.hull -= ASW.fireMissile();
        ASW.miss -= 1;
        if (s.hull > 0) {
            alienArr1.push(s);
        }
        else{
            console.log('battle complete.');
            meLog.innerText = 'battle complete';
        }

        meLog.innerText = 'Player attacks for : ' + ASW.fireMissile();
    }

    function hpCheck(ASW)
    {
        // hp checks 
        if (ASW.hull <= 0)
        {
            gameOver = true;
            return 0;
        }
        else{
            return ASW.hull;
        }
    }

    hpCheckE = () =>
    {
        var s  = alienArr1.shift();
         //
        if (s.hull <= 0)
        {
            
            return s.hull;
        }
        else
        {
            alienArr1.push(s);
            return s.hull;
        }
    };

    function battleProcessing()
    {
        hideOptions();
        
        for (let i = 0; i < alienArr1.length; i++) 
        {
            if(i ==  alienArr1.length && hpCheck(ASW) > 0 && hpCheckE() > 0)
            { // end of evangelion final battle
                enemyPhase(i);// call this to recall stuff
            }
            else if (hpCheck(ASW) <= 0)
            {
                console.log('game over');
                break;
            }
            else if (hpCheckE() <= 0 && hpCheck(ASW) > 0)
            {
                console.log('YOU WIN!!');
                if (i ==  alienArr1.length && hpCheckE() <= 0) {
                    console('Cue the X credits theme');
                    meLog.innerText = 'You Won this war!';
                    console.log('Thank You for Playing!');
                }
                console.log('Next Battle!');
                //alienArr1.pop();
                battleProcessing();
            }
            else if(retreatB == true)
            {
                console.log('live to fight another day..');
                hideOptions();
                break;
            }
            else{
                playerPhase(i);
                break;
            }
        }
    }

// use an ev listener todo dmgcalc

battleProcessing();
