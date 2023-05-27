function showModal(element){
    let container = element.target.parentElement;
    let modal = document.getElementsByClassName("modal-contents")[0];

    var modalOther = document.getElementById("newModal");
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modalOther.style.display = "none";
        document.getElementsByClassName("modal-contents")[0].innerHTML = "";
        document.getElementsByClassName("modal-contents")[0].innerHTML = "<span class=\"close\">&times;</span>";
    }

    modal.appendChild(container.children[0].cloneNode(true));
    modal.appendChild(container.children[1].cloneNode(true));
    modal.appendChild(container.children[2].children[0].cloneNode(true));
    modal.appendChild(container.children[2].children[1].cloneNode(true));

    document.getElementById("newModal").style.display = "block";


}

function main(){
    Array.from(document.getElementsByClassName("title")).forEach(element => element.addEventListener("click", element => {
        showModal(element);
    }));
}
main();