let list = prompt("Enter a sequence of names");
list = list.split(",");
let newList = [];
for(let i=0;i<list.length;i++){
    newList[i] = "<" +list[i]+">";
}
console.log(list+" => "+newList);

