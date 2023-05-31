var iteration = 6;
function blackCard() {
  
    'use strict';
    
    let isDrawing, lastPoint;
    let container    = document.getElementById('js-container'),
        canvas       = document.getElementById('js-canvas'),
        canvasWidth  = canvas.width,
        canvasHeight = canvas.height,
        ctx          = canvas.getContext('2d'),
        image        = new Image(),
        brush        = new Image();
        
    // base64 Workaround because Same-Origin-Policy
    image.src = 'https://beeimg.com/images/b61265551431.png';
    image.onload = function() {
      ctx.drawImage(image, 0, 0);
      // Show the form when Image is loaded.
      document.querySelectorAll('.border')[0].style.visibility = 'visible';
    };
    brush.src = 'data:image/png;base64,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';
    
    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('mouseover', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('touchmove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('touchend', handleMouseUp, false);
    
    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    
    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }
    
    // Only test every `stride` pixel. `stride`x faster,
    // but might lead to inaccuracy
    function getFilledInPixels(stride) {
      if (!stride || stride < 1) { stride = 1; }
      
      let pixels   = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
          pdata    = pixels.data,
          l        = pdata.length,
          total    = (l / stride),
          count    = 0;
      
      // Iterate over all pixels
      for(let i = count = 0; i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }
      
      return Math.round((count / total) * 100);
    }
    
    function getMouse(e, canvas) {
      let offsetX = 0, offsetY = 0, mx, my;
  
      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }
  
      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY;
  
      return {x: mx, y: my};
    }
    
    function handlePercentage(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      console.log(filledInPixels + '%');
      if (filledInPixels > 50) {
        canvas.parentNode.removeChild(canvas);
      }
    }
    
    function handleMouseDown(e) {
      isDrawing = true;
      lastPoint = getMouse(e, canvas);
    }
  
    function handleMouseMove(e) {
      if (!isDrawing) { return; }
      
      e.preventDefault();
  
      let currentPoint = getMouse(e, canvas),
          dist = distanceBetween(lastPoint, currentPoint),
          angle = angleBetween(lastPoint, currentPoint),
          x, y;
      
      for (let i = 0; i < dist; i++) {
        x = lastPoint.x + (Math.sin(angle) * i) - 25;
        y = lastPoint.y + (Math.cos(angle) * i) - 25;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(brush, x, y);
      }
      
      lastPoint = currentPoint;
      handlePercentage(getFilledInPixels(32));
    }
  
    function handleMouseUp(e) {
      isDrawing = false;
    }
    
}


function addMember() {
    document.getElementById("addMember").addEventListener("click", function() {
       //Création des éléments essentiels
        let container = document.createElement("div");
       container.className = "tempCard";
       let target = document.getElementById("target");
       let checkButton = document.createElement("i")
         checkButton.className = "fa-solid fa-check";
         checkButton.id = "checkButton";

       let deleteButton = document.createElement("i");
            deleteButton.className = "fa-solid fa-trash deleteButton";



       //création de toutes les inputs
         let inputName = document.createElement("input");
            inputName.setAttribute("type", "text");
            inputName.setAttribute("placeholder", "Nom et Prénom");
            inputName.className = "inputCard"

        let inputProject = document.createElement("input");
            inputProject.setAttribute("type", "text");
            inputProject.setAttribute("placeholder", "Nature du Projet");
            inputProject.className = "inputCard"

        let inputSite = document.createElement("input");
            inputSite.setAttribute("type", "text");
            inputSite.setAttribute("placeholder", "Site de Projet");
            inputSite.className = "inputCard"

        let inputEmail = document.createElement("input");
            inputEmail.setAttribute("type", "text");
            inputEmail.setAttribute("placeholder", "Email");
            inputEmail.className = "inputCard"

        let inputPeriod = document.createElement("input");
            inputPeriod.setAttribute("type", "text");
            inputPeriod.setAttribute("placeholder", "Période");
            inputPeriod.className = "inputCard"


        let span = document.createElement("span");
            span.className = "buttonContainer";
            span.appendChild(checkButton);
            span.appendChild(deleteButton);

        //Ajout des inputs dans le container
        container.appendChild(inputName);
        container.appendChild(inputProject);
        container.appendChild(inputSite);
        container.appendChild(inputPeriod);
        container.appendChild(inputEmail);
        container.appendChild(span);


        //Ajout du container dans la cible
       target.appendChild(container);

       //Gestion de la card à l'appuie des boutons
        updateDeleteButton(); //Mets à jour le listner pour les boutons de suppression

        //Si jamais on valide l'entrée
        checkButton.addEventListener("click", function() {

           let newCard = document.getElementsByClassName("contenu")[1].cloneNode(true);
           newCard.children[0].classList.remove("card2");
           newCard.children[0].classList.add("cardDefault");
           target.appendChild(newCard); //J'ajoute la nouvelle card avant pour éviter les conflits d'existence

           newCard.children[1].children[0].children[0].innerText = inputName.value; //Champ Nom
            newCard.children[1].children[0].children[0].style.color = '#087E8B'; //Changer la couleur du nom
            newCard.children[1].children[0].children[1].style.color = '#087E8B'; //Changer la couleur du text


            newCard.children[1].children[0].children[1].innerHTML = '▪ Période : '+ inputPeriod.value + '<p>  ▪ Projet : '+ inputProject.value+'  <p>▪ '+ inputSite.value +'  <p>▪ '+ inputEmail.value; //Champ Texte

            newCard.children[0].setAttribute("onclick", "modal('myModal" + iteration + '\''+"," +'\''+ "card" + iteration + "')"); //Ajout de l'attribut onclick
            newCard.children[0].id = 'card' + iteration;
            newCard.children[1].id = 'myModal' + iteration;
            iteration++;

            let randomImage = 'https://source.unsplash.com/random/?Portrait/' + Math.random(); //Obtention d'une image aléatoire

            newCard.children[1].children[0].children[2].setAttribute("src", randomImage); //Ajout de l'image aléatoire





            checkButton.parentNode.parentNode.remove();
           //Ajout image aléatoire
            let allCards = Array.from(document.getElementsByClassName("cardDefault"));
            let lastCard = allCards[allCards.length - 1]; //Je sélectionne la dernière card créée


            lastCard.style.background = 'url("' + randomImage + '") center center no-repeat';
            lastCard.style.backgroundSize = '300px';
            //Ajout du Bouton de suppression
            let newDeleteButton = document.createElement("i");
            newDeleteButton.className = "fa-solid fa-trash newDeleteButton";
            newCard.appendChild(newDeleteButton);
            newDeleteButtons();


        });

    });
}

function updateDeleteButton() {
    let deleteButtons = document.querySelectorAll(".deleteButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
            this.parentNode.parentNode.remove();
        });
    }
}

function newDeleteButtons() {
    let deleteButtons = document.querySelectorAll(".newDeleteButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
            this.parentNode.remove();
        });
    }
}

function changeButtonColor() {
    let button = document.getElementById("addMember");
    button.addEventListener("mouseover", function() {
        button.style.color = "#0B4262";
        button.style.backgroundColor = "white";
    });
    button.addEventListener("mouseout", function() {
        button.style.color = "white";
        button.style.backgroundColor = "#0B4262";
    });
}

function editTitle(){
    let title = Array.from(document.getElementsByTagName("h2"));
    title.forEach(function(element){
        element.addEventListener("click", function(){

            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "Titre");
            input.value = element.innerText;
            element.replaceWith(input);
            input.addEventListener("blur", function(){
                let newTitle = document.createElement("h2");
                newTitle.innerText = input.value;
                input.replaceWith(newTitle);
                editTitle();
            });

        });
    });
}

function hash(str){
    let encodedMessage = btoa(str);
    return encodedMessage;
}

function modeEdition() {

    let button = document.getElementsByClassName("ident")[0];

    if (button.classList.contains("buttonToggled")) { //Je suis en mode édition, je le quitte
        let answer = prompt("Etes vous sûr de vouloir quitter le mode édition ? (oui/non)");
        if (answer === "oui") {
            alert("Vous êtes déconnecté");
        }
        else {
            return;
        }


    button.id = "modeEdition";
    button.classList.remove("buttonToggled");

    Array.from(document.getElementsByClassName("editionMode")).forEach(function (element) {
        element.className = "nonEditionMode";
    });
    }


    else{ //Je ne suis pas en mode édition, je le lance

        let user = prompt("Veuillez entrer votre nom d'tilisateur");
        user = hash(user);

        if(user === 'YWRtaW4='){
            let pass = prompt("Veuillez entrer votre mot de passe");
            pass = hash(pass);

            if(pass === 'YWRtaW5fcHdk'){
                alert("Vous êtes connecté");
                Array.from(document.getElementsByClassName("nonEditionMode")).forEach(function(element){
                    element.className = "editionMode";
                });
                editTitle();
                button.id = "";
                button.classList.add("buttonToggled");
            }
            else{alert("Mot de passe incorrect")}

        }
        else{alert("Nom d'utilisateur incorrect")}
    }

}

function modal (myModal, myBtn) {
  // Get the modal
  let modal = document.getElementsId(myModal);

  // Get the button that opens the modal
  let btn = document.getElementsById(myBtn);  

  // When the user clicks the button, open the modal 
  btn.addEventListener("click", function() {
    modal.style.display = "block";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if(event.target == modal) {
      document.getElementById(myModal).style.display = "none";
    }
  }
}

function main () {

    document.getElementById("modeEdition").addEventListener("click", modeEdition);
    blackCard();
    addMember();
    changeButtonColor();

}
main();