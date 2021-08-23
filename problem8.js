let size = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Duc and here is my sheep sizes: \n" ,...size);

let max = Math.max(...size);
console.log("Now my biggest sheep has size " + max+", let's shave it")

size[size.indexOf(max)] = 8 ; 
console.log("After shearing. here is my flock\n",...size)

for(let i=1;i<=3;i++){
    for(let n=0;n<size.length;n++){
        size[n]+=50;
    }
    console.log("MONTH"+ i);
    console.log("One month has passed, my sheeps have grown, here are their sizes\n",...size);
    max = Math.max(...size);
    console.log("Now my biggest sheep has size " + max+", let's shave it")
    size[size.indexOf(max)] = 8 ; 
    console.log("After shearing. here is my flock\n",...size)   
}
let total = 0;
for(let i=0;i<size.length;i++){
    total += size[i];
}
console.log("My flock has size in total: "+ total);
console.log("I would get:"+ total+ " *2$ = "+total*2);
