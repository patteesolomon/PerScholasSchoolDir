function add(a, b){
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function compute(a, b, op)
{
    return op(a, b);
}

result = compute(10, 3, subtract);

console.log(result);

