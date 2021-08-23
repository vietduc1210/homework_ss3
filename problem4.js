let items = ['Jeans', 'T-Shirts', 'Socks'];
let input;
do{    
    input = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?");
    input = input.toLowerCase();
    if(input === 'c'){
        let newItem = prompt("Enter the name of the new item");
        items.push(newItem);
        alert("Done");
    }
    else if(input === 'r'){
        console.log("The current items are:");
        for(let i = 0; i<items.length; i++){
            console.log((i+1)+". "+ items[i]);
        }
    }
    else if(input === 'u'){
        let position = prompt("Enter the position you want to update");
        let newItem = prompt("Enter new item name");
        items[position-1] = newItem;
        alert("Done");
    }
    else if(input === 'd'){
        let position = prompt("Enter the position you want to delete");
        items.splice(position-1, 1);
        alert("Done");
    }
    else{
        alert("This command is not supported");
    }
}while(input !== 'r')   