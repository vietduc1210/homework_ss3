//1
let a = 5, b = 6;
[a, b] = [b, a];
console.log(a, b);

//2
let a = 5, b = 6;
let tmp;
tmp = a;
a = b;
b = tmp;
console.log(a, b);