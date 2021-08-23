let number = prompt("Enter a sequence of Number, separated by commas (,)");
let list = number.split(",")
let sum = 0;
for(let i=0; i<list.length; i++){
    list[i] = Number(list[i]);
    sum += list[i];
}
alert("The sum of them is " +sum);
