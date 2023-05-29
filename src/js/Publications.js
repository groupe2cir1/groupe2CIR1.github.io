function toggleButton(){

    Array.from(document.getElementsByTagName("button")).forEach(element => {
        element.addEventListener("click", function(){
            let isToggle = element.classList.toggle("filterButton");
            if(isToggle){
                element.className = "filterButton";
            }
            else{
                element.className = "toggleButton";
            }
        });
    });
}

function buttonFilter(){
    let article = document.getElementById("filter1");
    let com = document.getElementById("filter2");
    let all = document.getElementById("filter3");

    article.addEventListener("click", function(){
       Array.from(document.getElementsByClassName("redsquare")).forEach(element => { //je mets en premier les articles
           let isToggle = element.classList.toggle("toggled");
              if(isToggle){ //si a la classe alors je le mets en premier et je passe son status à toggled
               element.parentElement.classList.add("toggled");
               element.parentElement.style.order = "-1";
               Array.from(document.getElementsByClassName("violetsquare")).forEach(element => {
                   element.parentElement.style.display = "none";
               });
              }
              else{ //si n'a pas la classe je le réaffiche et je retire le status toggled
                element.parentElement.classList.remove("toggled");
                element.parentElement.style.order = "0";
                Array.from(document.getElementsByClassName("violetsquare")).forEach(element => {
                    element.parentElement.style.display = "block";
                });
              }
       });
    });

    com.addEventListener("click", function(){ //même fonctionnement que précédement
        Array.from(document.getElementsByClassName("violetsquare")).forEach(element => { //je mets en premier les articles
            let isToggle = element.classList.toggle("toggled");
            if(isToggle){
                element.parentElement.classList.add("toggled");
                element.parentElement.style.order = "-1";
                Array.from(document.getElementsByClassName("redsquare")).forEach(element => {
                    element.parentElement.style.display = "none";
                });
            }
            else{
                element.parentElement.classList.remove("redsquare");
                element.parentElement.style.order = "0";
                Array.from(document.getElementsByClassName("redsquare")).forEach(element => {
                    element.parentElement.style.display = "block";
                });
            }
        });
    });

    all.addEventListener("click", function(){ //je réaffiche tous les blocs et reset leur ordre. Je retire le status toggled. je reset les buttons
        Array.from(document.getElementById("container").children).forEach(element => {
            element.style.display = "block";
            element.style.order = "0";
            if(element.classList.contains("toggled")){
                element.classList.remove("toggled");
            }
        });
        document.getElementById("input").value = "";
        setTimeout(function(){document.getElementById("filter3").className = "filterButton";}, 400);
    });

}


function filter(){
    let elem = document.getElementById("input");
    elem.addEventListener("input", function (){
        let text = elem.value;

        let firstText = document.getElementsByClassName("text")[0];
        let secondText = document.getElementsByClassName("text")[1];
        let thirdText = document.getElementsByClassName("text")[2];
        let fourthText = document.getElementsByClassName("text")[3];
        let fifthText = document.getElementsByClassName("text")[4];


        Array.from(document.getElementsByClassName("text")).forEach(element => {
            if(element.innerHTML.includes(text)){

                element.parentElement.style.display = "block";
                element.parentElement.style.order = "-1";
            }
            else{
                element.parentElement.style.display = "none";
                element.parentElement.style.order = "0";
            }
        });
    });
}


function main(){
    toggleButton();
    buttonFilter();
    filter();
}
main();