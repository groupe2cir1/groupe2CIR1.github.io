function copyAlert() {
    Array.from(document.getElementsByTagName('div')).forEach(element => {
        element.addEventListener('copy', function () {
            console.log('Pas de plagiat !');
        });
    });
}


function main() {
    copyAlert();
}
main();
