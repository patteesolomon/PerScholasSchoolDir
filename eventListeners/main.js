// Create a new HTML/CSS/JS replLinks 

//to an external site.Links to an external site. page and complete the following in your .js file


// Give it a property called stations and make the value an array of station objects

// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.

// Song object should have two properties: title and artist

// Create a method on your radio object that changes the station randomly.
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

//const Radio = document.querySelector('Radio');

const song=
{
    title : '',
    artist : ''
};

Miracle = song;
SupremeKingT = song;
GogetaT = song;
Om = song;
Om.title = 'opm';
Om.artist = 'YkiK';

titles = ["song1", "song2", "song3"];

artists = ["ar1", "ar2", "ar3"];

var songArr = [Miracle, SupremeKingT, GogetaT, Om];

for (let i = 0; i < songArr.length -1; i++) {
    songArr[i].title = titles[i];
    songArr[i].artist = artists[i];
}

const station =
{
    name : '',
    songs : []
};

var a = station;
var c = station;
var b = station;

var stations = [];

stName = ["s1", "s3", "s4"];

for (let i = 0; i < stations.length -1; i++) {
    stations[i].name = stName[i];
    stations[i].songs = songArr[i];
}

class Rt {
    constructor(er = [])
    {
        this.stations = er;
        rRAND = (e) => 
        {
            var ee = Math.round(Math.floor(er.length -1) * e);
            //return Math.round(Math.random() * 10);
            if(ee <= er.length)
            {
                return ee;
            }
            else return 0;
        };
    }
} 

TowerOne = new Rt(stations);
var rC = TowerOne.stations[TowerOne.rRAND(2)];

console.log("Now Playing:" + rC.songs[TowerOne.rRAND(3)] ,
rC.title[TowerOne.rRAND(3)] + "by" + rC.songs.artist);




// btn.addEventListener('click', function(e){
//     const li  = document.createElement('li');
//     li.textContent = inp.value;
//     console.log(li);
// });

// var e = btn.addEventListener('button');

// btn.addEventListener('click', function(evt)
// {
//     const li = document.createElement('li');
//     const inp = document.querySelector('input');
//     li.textContent = inp.value;
//     document.querySelector('ul').appendChild(li);
// });

// p1 = document.getElementById('p1');
// p1.addEventListener('click', function(e){
//     p1.innerHTML = "Howdy!";
// });

// document.querySelector('ul').addEventListener("click", handleClick);

// function handleClick(e)
// {
//     console.log(e);
// }

//  binget = document.querySelector('BINGETHIS');

// binget.addEventListener('click', function(i)
// {
//     binget.style.color = 130;
// });


