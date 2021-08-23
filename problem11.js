let number = prompt("Enter a sequence of Number, separated by commas \",\"");
let list = number.split(",")
for(let i=0; i<list.length; i++){
    list[i]= Number(list[i]);
}
let newList = list.filter(list => list%2 ==1);
console.log(number +" => "+newList);