function openFooterModal(){

    let modal = document.getElementById("mineModal");
    let btn = document.getElementById("myButton");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("modalContainer").style.display = "none";
            document.getElementById("num").value = "";
        }
    }

}

function wannaCall(element){
    document.getElementById("modalContainer").style.display = "block";
    let phoneNumber = element.innerText;
    let audio = new Audio('ressources/saulringtone.mp3');
    let callButton = document.getElementById("call");
    let prompt = document.getElementById("prompt");
    let callText = document.createElement("p");
    callText.innerText = "Appel en cours...";

    document.getElementById("call").addEventListener("click", function(){ //j'ai cliqué sur décrocher
        if(document.getElementById("num").value.replace(/\s/g, "") === phoneNumber.replace(/\+33|\(|\)|\s/g, "")){ //compare le num rentré avec le num de la div sans les espaces

            prompt.append(callText);
            callText.className = "tracking-in-expand";


            callButton.classList.add("wobble-hor-bottom");
            audio.play(); //lance l'audio
            setTimeout(function(){ //le coupe au bout de 11 secondes
                audio.pause();
                audio.currentTime = 0; // réinitialise l'audio
                callButton.classList.remove("wobble-hor-bottom");
                prompt.removeChild(prompt.lastChild);
            }, 11000);
        }
        else{
            alert("Le numéro entré est incorrect");
            document.getElementById("num").value = "";
            callButton.classList.add("blink-1");
            setTimeout(function(){
                callButton.classList.remove("blink-1");
            }, 1000);

        }
    });

    document.getElementById("uncall").addEventListener("click", function() { //j'ai cliqué sur raccrocher
        audio.pause();
        audio.currentTime = 0;
        document.getElementById("modalContainer").style.display = "none";
        document.getElementById("num").value = "";
        prompt.removeChild(prompt.lastChild);

    });
}


function telOnCopy(){
    Array.from(document.getElementsByClassName("tel")).forEach(function(element) {
        element.addEventListener('copy', function(){
            wannaCall(element);
        });
    });
}



function copyAlert() {
    Array.from(document.getElementsByTagName('p')).forEach(element => {
        element.addEventListener('copy', function () {
            alert('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');
            console.log('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');

        });
    });

    Array.from(document.getElementsByTagName('img')).forEach(element => {
        element.addEventListener('copy', function () {
            alert('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');
            console.log('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');
        });
    });

    Array.from(document.getElementsByTagName('h1')).forEach(element => {
        element.addEventListener('copy', function () {
            alert('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');
            console.log('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');
        });
    });

    Array.from(document.getElementsByTagName('h2')).forEach(element => {
        element.addEventListener('copy', function () {
            alert('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');
            console.log('Ce site est protégé par les droits d\'auteur. Toute reproduction ou copie est interdite sans notre accord. Veuillez contacter les adminstrateurs du site pour plus d\'informations.');
        });
    });
}

function returnOnClick() {
    document.getElementById('logo').addEventListener('click', function () {
        document.location.href = 'index.html';
    });
}

function redirectOnClick(url) {
    const links = document.querySelectorAll('a');


    links.forEach(link => {

        if(link.innerText !== "Membres"){ //Gestion particulière de la redirection pour la page Membres
          link.addEventListener('click', function(event) {
              event.preventDefault();

              let targetUrl = this.href;

              localStorage.setItem('targetUrl', targetUrl); // Stocke l'URL cible dans localStorage

              window.location.href = 'src/misc/waitPage.html'; // Redirige vers la page temporaire
          });
        }
    });
}

function redirectToSpecificPage() {
        const targetUrl = '../../Thematique.html';
        localStorage.setItem('targetUrl', targetUrl); // Stocke l'URL cible dans localStorage
        window.location.href = 'src/misc/waitPage.html'; // Redirige vers la page temporaire

}

/* Function de l'horloge faite par Yanis */

function clock() {
    let event = new Date();
    let clock = document.getElementById('clock');
    clock.style.color = "white";
    clock.style.fontSize = "small";
    clock.style.textAlign = "center";
    clock.style.justifyContent = "center";
    let time = event.toLocaleTimeString('en-US');
    clock.innerHTML = time;
}

function DisplayTime() {
    let TimeID = setInterval(clock, 1000);
}


/* End Clock Function */

function memberAlert() { //Gestion particulière de la redirection pour la page Membres

    let answer = prompt("Souhaitez-vous vraiment découvrir les membres de l'équipe ? (oui/non)");
    setTimeout(function(){}, 5000);
    if (answer === "oui") {

        const targetUrl = '../../Membres.html';
        localStorage.setItem('targetUrl', targetUrl); // Stocke l'URL cible dans localStorage
        window.location.href = 'src/misc/waitPage.html'; // Redirige vers la page temporaire

    } else {
        alert("Dommage, vous ne saurez jamais qui nous sommes...");
    }
}

function timeOnPage(){
    let time = 0;
    let min = 0;
    let h = 0;
    let timeDisplay = document.getElementById("time");
    timeDisplay.style.color = "white";
    timeDisplay.style.fontSize = "small";
    timeDisplay.style.textAlign = "center";
    timeDisplay.style.justifyContent = "center";
    timeDisplay.style.marginRight = "20px";
    let timer = setInterval(function(){
        timeDisplay.innerHTML = h+":"+min+":"+time;
        if(time == 59){
            time = -1;
            min++;
        }
        if(min == 59){
            min = -1;
            h++;
        }
        time++;
    }, 1000);
}

function mainOverall() {
    copyAlert();
    returnOnClick();
    redirectOnClick();
    openFooterModal();
    telOnCopy();
    DisplayTime();
    timeOnPage();
    document.addEventListener("DOMContentLoaded", function() {
        let member = document.getElementById("memberAlert");
        member.addEventListener("click", function () {
            memberAlert();
        });
    });
}
mainOverall();
