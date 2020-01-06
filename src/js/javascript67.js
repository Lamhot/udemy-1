var a =0;


myFunction();
console.log(addMe(7,8));

function myFunction(b)
{
    a++;
    console.log('hello  ' + a);
}

function addMe(a,b) {
   var  c= a*b;
    return c;
}