function canSend(){
    
    let name = document.getElementsByName("lname")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let text = document.getElementsByClassName("default")[0].value;
    let button = document.getElementsByClassName("default")[0];
    let count = 0;

    console.log(text.match(/[a-zA-Z]/g).length);


    if(name == "" || name.split(" ").length-1 != 1){
        console.log("Name is not valid");
        document.getElementById("box1").className = "visible";
        button.className = "shake-horizontal";
        
        count++;
    } 

    if(email == "" || email.split("@").length-1 != 1 || email.split(".").length-1 > 2 || email.split(".").length-1 < 1){
        console.log("Email is not valid");
        document.getElementById("box2").className = "visible";
        button.className = "shake-horizontal";
        
        count++;
    }

    if(text == "" || text.match(/[a-zA-Z]/g).length > 1000 || text.match(/[a-zA-Z]/g).length < 20){
        console.log("Text is not valid");
        document.getElementById("box3").className = "visible";
        button.className = "shake-horizontal";
        
        count++;
    }

    if(count == 0){
        count = 0;
        return true;
    } else  count=0; return false;
    
        
    

}

function main(){

}
main();