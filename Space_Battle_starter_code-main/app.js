class ACR 
{
    constructor(hull, firep, acc)
    {
        this.hull = hull;
        this.firep = firep;
        this.acc = acc;
    }
    attack(h)
    {
        return h; // fireP getter
    }
    
    randH(hmax, hmin)
    {
        this.hull = Math.floor(Math.random() * (hmax - hmin + 1)) + hmin;  //3-6
    }

    randF(fmax, fmin)
    {
        this.firep = Math.floor(Math.random() * (fmax - fmin + 1)) + fmin; //2-4
    }

    randA(accmax, accmin)
    {
        this.acc = Math.floor(Math.random() * (accmax - accmin + 1)) + accmin; //0.6-0.8
    }
}

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
        //this.attack = this.attack.bind();
    }

    fireMissile()
    {
        return this.firep * (2); // modified number non mutator
    }
    retreat() // action witout a stat?
    {
        // end game 
    }
    GetName()
    {
        return this.name;
    }
}

/// player config
let ASW = new Ship(3,'name'); // you can rename this later


class Alien extends ACR
{
    constructor()
    {
        super(6, 3, 0.6);
        let hmax = 6;
        let hmin = 3;
        let fmax = 2;
        let fmin = 4;
        let accmin = 0.6;
        let accmax = 0.8;
        this.hull = this.randH(hmax, hmin);
        this.firep = this.randF(fmax, fmin);
        this.acc = this.randA(accmax, accmin);
    }
}

document.querySelector('.playerStats').innerText =
` <br class="Hull"> : ${player.hull} </br>
<br class="FirePower">FirePower : ${player.firepower} </br>
<br class="Accuracy">Accuracy : ${player.accuracy} </br>`;

let meLog = document.getElementById('log');
meLog.style.color = 'white';
meLog.style.backgroundColor = 'black';

//battlemode
enemy1 = new Alien();
enemy2 = new Alien();
enemy3 = new Alien();
enemy4 = new Alien();
enemy5 = new Alien();
enemy6 = new Alien();

alienArr = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

    console.log('%c spacebattle', 'font-size: 40px');

    function getCAlienHull (i) {return alienArr[i].hull;}
    function setCAlienHull (i, seto) {alienArr[i].hull -= seto;}
    function getPlHull (ASW) {return ASW.hull;}
    function setPlHull (seto, ASW) {ASW.hull -= seto;}

    function playerPhase(ardx)
    {
        console.log('Fight(f) / Retreat(r)');
        // wait for playerinput before calc
        document.getElementById('z').style.display = 'block';
        document.getElementById('x').style.display = 'block';
        document.getElementById('r').style.display = 'block';

        // element in here -> usl();

        console.log('attacking!!!');
        allydmgLog(ardx);
    }

    function enemyPhase(ardx)
    {
        document.getElementById('z').style.display = 'none';
        document.getElementById('x').style.display = 'none';
        document.getElementById('r').style.display = 'none';
        console.log('Incomming Attack!');
        enemydmgLog(ardx);
    }

    function statmntLog(statement = '')
    {
        alert(`${statement}`);
    }

    function usl(cause) // user turn options
    {
        switch(cause)
        {
            case 'z':
            break;
            case 'r':
            break;
            case 'x':
            break;
        }
    }

    function pldmgLog(plDmgIn)
    {
        console.log(`%c You have done ${plDmgIn} damage`,
        `font-style: italic; background: 
        azure; border: 1px solid grey;`);
    }

    function enemydmgLog(idx)
    {
        if(Math.random() < alienArr[idx].acc)
        {
            console.log('You have been hit!');
            ASW.hull -= alienArr[ardx].firep;
            meLog.innerText = 'Enemy Alien attacks for : ' + alienArr[idx].firep;
        }
        else
        {
            console.log('miss!');
        }
    }

    function allydmgLog(idx)
    {
        if(Math.random() < ASW.acc)
        {
            console.log('You hit em! NICE!');
            alienArr[idx].hull -= ASW.firep;
            meLog.innerText = 'Player attacks for : ' + ASW.firep;
        }
        else
        {
            console.log('you missed!');
        }
    }

    function hpCheck(i , ASW, alienArr)
    {
        // hp checks 
        if (ASW.hull <= 0)
        {
            alert('you have died.');
            Console.log('you have died.');
            meLog.innerText = 'player has died';
        }
        else
        {
            console.log('your-turn');
            playerPhase(i);
        }

         // 
        if (alienArr[i].hull <= 0)
        {
            alert('you win.');
            meLog.innerText = '';
        }
        else{
            console.log('enemy-turn');
                enemyPhase(i);
        }
    
    }

    function battleProcessing()
    {
        document.getElementById('z').style.display = 'none';
        document.getElementById('x').style.display = 'none';
        document.getElementById('r').style.display = 'none';
        
        for (let i = 0; i < alienArr.length - 1; i++) 
        {
            playerPhase(i);
                if(i == alienArr.length-1 && ASW.hull != 0 && alienArr[i].hull > 0)
                {
                    hpCheck(i, ASW, alienArr);
                }
                else if (alienArr[i].hull != 0)
                {
                    hpCheck(i, ASW, alienArr);
                     //call check
                    console.log('Next Battle will be startedeeeeed in.');
                    console.log();
                    hpCheck(i, ASW, alienArr);
                }
                else
                {
                    break;
                }
            if (i == alienArr.length && ASW.hull != 0)
            {
                console.log('You Win This War!');
            }
        }
    }

// use an ev listener todo dmgcalc

battleProcessing(6);
