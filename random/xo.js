//xo counter
let xC;
let oC;
XO = (xo) =>
{
Array(String(xo)).forEach(i =>{
    (String(xo).charAt(i) == 'x')? 
        ++xC:
    (String(xo).charAt(i) == 'o')?
        ++oC: null;
    });
    Number(xC).length-1 > Number(oC).length-1? 
    e = false :
    Number(xC).length-1 < Number(oC).length-1? 
    e = false : 
    Number(xC).length-1 != Number(oC).length-1?
    e = false : e = true;
    return e;
};

console.log(XO('xxoo'));