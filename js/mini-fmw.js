function fadeIn() {
    var menuMob = document.querySelector('#menuMobileUl');
    var txtHam = document.querySelector('#txtHam');
    var imgHam = document.querySelector('#imgHam');

    if (menuMob.style.display = 'none') {
        menuMob.style.display = 'block';
        txtHam.style.display = 'block';
        imgHam.style.display = 'none'
    }
}

function fadeOut() {
    var menuMob = document.querySelector('#menuMobileUl');
    var txtHam = document.querySelector('#txtHam');
    var imgHam = document.querySelector('#imgHam');

    if (menuMob.style.display = 'block') {
        menuMob.style.display = 'none';
        txtHam.style.display = 'none';
        imgHam.style.display = 'block';
    }
}

function menuProjetosOn() {
    document.querySelector('#baixo').style.display = 'none';
    document.querySelector('#cima').style.display = 'inline';
    document.querySelector('#header-atalho').style.display = 'block';
}

function menuProjetosOff() {
    document.querySelector('#baixo').style.display = 'inline';
    document.querySelector('#cima').style.display = 'none';
    document.querySelector('#header-atalho').style.display = 'none';
}