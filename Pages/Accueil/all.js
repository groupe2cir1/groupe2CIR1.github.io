function openFooterModal(){

    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");

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
    let audio = new Audio('../../cahier\ des\ charges/ressources/saulringtone.mp3');
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
        document.location.href = '../Acceuil/index.html';
    });
}

function redirectOnClick() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
      
        const targetUrl = this.href;
      
        localStorage.setItem('targetUrl', targetUrl); // Stocke l'URL cible dans localStorage
      
        window.location.href = '../Acceuil/waitPage.html'; // Redirige vers la page temporaire
      });
    });
}


function main() {
    copyAlert();
    returnOnClick();
    redirectOnClick();
    openFooterModal();
    telOnCopy();
}
main();
