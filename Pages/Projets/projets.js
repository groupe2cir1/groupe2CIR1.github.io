
function upArrow() {
    window.scrollTo(0, 0);
}

function main() {
    let upArrowButton = document.getElementById("upArrowButton");
    upArrowButton.addEventListener("click", upArrow);
}

main();