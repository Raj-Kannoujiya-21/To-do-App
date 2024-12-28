alert("Hey this is Raj chaudhary");
alert("if you want to enjoy then open devloper tool");

let req = prompt("Please Enter Your Request");
let arr = [];

while(true){
    if(req == "quit"){
        console.log("You Quited..");
        break;
    }else if(req == "add"){
       let task = prompt("Enter your Favorite..");
        arr.push(task);
           console.log("task added...");
    }else if(req == "list"){
        console.log("------------------------");
        console.log(arr);
        for(let i=0 ; i < arr.length; i++){
            console.log(i,arr[i]);
        }
        console.log("List Created");
        console.log("__________________________");

    }else if(req == "delete"){
        let del = prompt("Enter your index.."); 
        arr.splice(del,1);
        console.log("Task deleted...");
    }else{
        console.log("Wrong requsting...");
    }
    req = prompt("Please Enter Your Request...");
}