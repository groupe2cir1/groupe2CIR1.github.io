function letterByLetter (message) {
    var i = 0;
    var interval = setInterval(function() {
        document.querySelector("#TName").innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, 100);

    let Text = document.querySelector("#TName");

    setTimeout(function() {
        Text.style.textAlign = "right";
    }, 3000);


    setTimeout(function() {
        Text.style.textAlign = "left";
    }, 6000);


    setTimeout(function() {
        Text.innerHTML = "           ";
        Text.style.textAlign = "center";
        letterByLetter(message);
    }, 9000);
    
}

function main() {
    var message = "Description";
    letterByLetter(message);
}

main();