function fadeIn(){    
    var menuMob = document.querySelector('#menuMobileUl');
    var txtHam = document.querySelector('#txtHam');
    var imgHam = document.querySelector('#imgHam');

    if(menuMob.style.display = 'none'){
        menuMob.style.display = 'block';
        txtHam.style.display = 'block';
        imgHam.style.display = 'none'
    }
}

function fadeOut(){
    var menuMob = document.querySelector('#menuMobileUl');
    var txtHam = document.querySelector('#txtHam');
    var imgHam = document.querySelector('#imgHam');

    if(menuMob.style.display = 'block'){
        menuMob.style.display = 'none';
        txtHam.style.display = 'none';
        imgHam.style.display = 'block';
    }
}