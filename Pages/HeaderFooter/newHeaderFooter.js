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

function main(){
    openFooterModal();
    telOnCopy();
}
main();