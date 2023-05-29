function clearForm(){
    document.getElementsByName("lname")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByTagName("textarea")[0].value = "";
    document.getElementById("box1").className = "errorText";
    document.getElementById("box2").className = "errorText";
    document.getElementById("box3").className = "errorText";

    window.location.href = "Contact.html";
}

function canSend(){
    
    let name = document.getElementsByName("lname")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let text = document.getElementsByTagName("textarea")[0].value;
    let button = document.getElementById("default");
    let count = 0;

    document.getElementById("box1").className = "errorText";
    document.getElementById("box2").className = "errorText";
    document.getElementById("box3").className = "errorText";



    if(name === "" || name.split(" ").length-1 != 1){

        document.getElementById("box1").className = "visible";
        button.className = "shake-horizontal";
        
        count++;
    } 

    if(email === "" || email.split("@").length-1 !== 1 || email.split(".").length-1 > 2 || email.split(".").length-1 < 1){

        document.getElementById("box2").className = "visible";
        button.className = "shake-horizontal";

        
        count++;
    }

    if(text === "" || text.length < 20 || text.length > 1000){
        document.getElementById("box3").className = "visible";
        button.className = "shake-horizontal";
        
        count++;
    }


    if(count == 0){ //Si les trois conditions sont validées, je lance le mini jeu
        button.classList.remove("shake-horizontal");
        alert("Trouvez le pommelo pour envoyer votre formulaire!");
        createFallingFruits(); //Lancement du mini jeu
    }

    setTimeout(function(){ button.classList.remove("shake-horizontal"); }, 1000);

}

function createFallingFruits() {
    const fruitTypes = ['apple', 'banana', 'orange', 'cherry', 'fraise', 'watermelon', 'poire']; // Types de fruits disponibles
    const numFruits = 1500; // Nombre de fruits à créer

    // Créer l'élément du fruit doré
    const goldenFruit = document.createElement('img');
    goldenFruit.src = 'ressources/fruits/goldenfruit.png';
    goldenFruit.alt = 'Fruit doré';
    goldenFruit.classList.add('fruit-golden');
    document.body.appendChild(goldenFruit);

    // Positionner le fruit doré au-dessus de la fenêtre
    goldenFruit.style.top = '-50px';
    goldenFruit.style.left = Math.random() * (window.innerWidth - 50) + 'px';

    // Gérer le clic sur le fruit doré pour gagner le jeu
    goldenFruit.addEventListener('click', function() {
        alert('Bravo ! Vous avez gagné le jeu.');
        setTimeout(function(){document.getElementById("container").submit()}, 2000);
    });

    for (let i = 0; i < numFruits; i++) {
        const randomFruitType = fruitTypes[Math.floor(Math.random() * fruitTypes.length)];

        // Créer l'élément du fruit
        const fruit = document.createElement('img');
        fruit.src = `ressources/fruits/${randomFruitType}.png`;
        fruit.alt = randomFruitType;
        fruit.classList.add('fruit');
        document.body.appendChild(fruit);

        // Positionner le fruit au-dessus de la fenêtre
        fruit.style.top = '-50px';
        fruit.style.left = Math.random() * (window.innerWidth - 30) + 'px';

        // Animer le fruit pour tomber et se déplacer de manière aléatoire
        animateFruit(fruit);
    }

    // Animer le fruit doré pour tomber et se déplacer de manière aléatoire
    animateFruit(goldenFruit);
}


// Fonction pour animer un fruit qui tombe
function animateFruit(fruit) {
    const initialPosition = -50;
    const randomSpeed = Math.random() * (2 - 0.5) + 0.5;
    const fruitWidth = 50;
    const goldenFruitWidth = 70;

    let positionX = Math.random() * (window.innerWidth - fruitWidth); // Position horizontale initiale aléatoire
    let positionY = initialPosition;
    let directionX = Math.random() < 0.5 ? -1 : 1;
    let directionY = 1;

    // Vérifier si le fruit est le golden fruit
    const isGoldenFruit = fruit.classList.contains('golden-fruit');

    function update() {
        positionY += randomSpeed * directionY;
        fruit.style.top = positionY + 'px';

        positionX += randomSpeed * directionX;
        fruit.style.left = positionX + 'px';

        // Appliquer une taille différente pour le golden fruit
        if (isGoldenFruit) {
            fruit.style.width = goldenFruitWidth + 'px';
        }

        if (positionY >= window.innerHeight - 50) {
            if (!isGoldenFruit) {
                fruit.remove();

                // Vérifier s'il n'y a plus de fruits à l'écran
                const remainingFruits = document.querySelectorAll('.fruit');
                if (remainingFruits.length === 0) {
                    alert('Vous avez perdu !');
                    setTimeout(clearForm, 2000);
                }
            }
        } else {
            requestAnimationFrame(update);
        }
    }

    update(); // Appel initial à la fonction update
}


function main(){
    let button = document.getElementById("default");
    button.addEventListener("click", function (e) {
        e.preventDefault(); //j'annule l'envoi du form
        canSend();
    });


}
main();