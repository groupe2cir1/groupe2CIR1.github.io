
function changeImage(id) {
    if(id == 'CASTEL') {
        var image = document.getElementById('CASTEL');
        image.src = '../../cahier des charges/DocsImgs/CASTEL.jpeg';
        image.id = 'CASTEL2';
    }
    else if(id == 'CASTEL2') {
        var image = document.getElementById('CASTEL2');
        image.src = '../../cahier des charges/DocsImgs/empreinte.png';
        image.id = 'CASTEL';
    }
    else if(id == 'VISEMAR') {
        var image = document.getElementById('VISEMAR');
        image.src = '../../cahier des charges/DocsImgs/VISEMAR.jpeg';
        image.id = 'VISEMAR2';
    }
    else if(id == 'VISEMAR2') {
        var image = document.getElementById('VISEMAR2');
        image.src = '../../cahier des charges/DocsImgs/sousmarin.png';
        image.id = 'VISEMAR';
    }
    else if(id == 'SEAS') {
        var image = document.getElementById('SEAS');
        image.src = '../../cahier des charges/DocsImgs/SEAS.jpeg';
        image.id = 'SEAS2';
    }
    else if(id == 'SEAS2') {
        var image = document.getElementById('SEAS2');
        image.src = '../../cahier des charges/DocsImgs/iceberg.png';
        image.id = 'SEAS';
    }
    else if(id == 'HPEC') {
        var image = document.getElementById('HPEC');
        image.src = '../../cahier des charges/DocsImgs/HPEC.jpeg';
        image.id = 'HPEC2';
    }
    else if(id == 'HPEC2') {
        var image = document.getElementById('HPEC2');
        image.src = '../../cahier des charges/DocsImgs/architecutre.png';
        image.id = 'HPEC';
    }
}
