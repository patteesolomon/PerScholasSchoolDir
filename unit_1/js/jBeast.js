
// get the beast and the dish names...
// find a function name
feast = (beast='', dish='') => String(beast).charAt(0) == String(dish).charAt(0)&&String(beast).charAt(String(beast).length-1) == String(dish).charAt(String(dish).length-1)? b = true : b = false;

console.log(feast('chickadee','chocolate cake'));