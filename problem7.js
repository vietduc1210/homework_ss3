const arr = [3, 4, 6, -9, 10, -88, 2];
let number = prompt("Enter a number");
let x = -1;
number = Number(number);
for(let i=0; i<arr.length; i++){
    if(arr[i] === number){
        x = i;
    }
}
if(x === -1){
    alert(number + " is NOT found in my array");
}
else{
    alert(number + " is FOUND in my array at index "+ (x+1));
}
