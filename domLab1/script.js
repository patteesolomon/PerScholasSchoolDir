// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];

let showingSubMenu = false;

var mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById("top-menu");

menuLinks.forEach(e =>{
    let a = document.createElement('a');
    a.innerText = e.text;
    a.href = e.href;
    topMenuEl.append(a);
});

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// Round 2 

var subMenuEl = document.querySelector('#sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

let topMenuLinks = [];

topMenuLinks = topMenuEl.getElementsByClassName('a');

let targeto;
let tgs;

topMenuEl.addEventListener("click", function (event)
{
    e = topMenuEl.getElementsByClassName('active');
    tsv = topMenuEl.getElementsByTagName('a').namedItem;
    if (event.target.nodeName != 'A' ) {
        return;
    }
    event.preventDefault();

    for (ef of topMenuLinks) {
        ef.classList.remove("active");
    }
    

    var p = document.querySelector('a');
    event.target.classList.add("active");
    //p.className += 'active';

    var sLinks = [];
    buildSubMenu = function (subLinks) {
        subMenuEl.replaceChildren('');
        for (let i = 0; i < subLinks.length-1; i++) {
            sLinks.push(subLinks);
            if (event.target.nodeName == me.text)
            {
                const el = document.createElement('a');
                el.nodeName = subLinks[i].text;
                subMenuEl.append(el);
            }
        }
    };
    for (let i = 0; i < menuLinks.length-1; i++) {
        if (event.target.nodeName == me.text) 
        {
            showingSubMenu = true;
            buildSubMenu(menuLinks[i]);
            subMenuEl.style.top = '100%';
        }
        else
        {
            showingSubMenu = false;
            subMenuEl.style.top = '0%';
        }
    }
});

subMenuEl.addEventListener('click', (event) => {
    event.preventDefault();
    if(String(event.target).toString() !== "A")
    {
        return;
    }

    console.log(event.target.innerText);

    showingSubMenu = false;
    subMenuEl.style.top = "0";

    for(a of topMenuLinks){
        a.classList.remove("active");
    }

    h1 = document.querySelector("main h1");
    h1.innerText = event.target.innerHTML;

    if(event.target.innerText == "about"){
        mainEl.innerHTML = "<h1>about</h1>";
    }
});