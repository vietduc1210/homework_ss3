let number = prompt("Enter a sequence of Number, separated by commas \",\"");
let list = number.split(",")
for(let i=0; i<list.length; i++){
    list[i]= Number(list[i]);
}
let smallest = list[0];
for(let i=0; i<list.length; i++){
    if(list[i]<=smallest){
        smallest =list[i];
    }
}
alert("The smallest number is "+ smallest);