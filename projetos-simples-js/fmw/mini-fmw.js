function fadeIn(){    
    var mnMob = document.querySelector('#menuMobile');
    var txtHam = document.querySelector('#txtHam');
    var imgHam = document.querySelector('#imgHam');

    if(mnMob.style.display = 'none'){
        mnMob.style.display = 'block';
        txtHam.style.display = 'block';
        imgHam.style.display = 'none'
    }
}

function fadeOut(){
    var mnMob = document.querySelector('#menuMobile');
    var txtHam = document.querySelector('#txtHam');
    var imgHam = document.querySelector('#imgHam');

    if(mnMob.style.display = 'block'){
        mnMob.style.display = 'none';
        txtHam.style.display = 'none';
        imgHam.style.display = 'block';
    }
}
