
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
}
main();
