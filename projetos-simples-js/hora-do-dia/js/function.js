function verificar(){
    var txt = document.querySelector('#hora');
    var res = document.querySelector('#res');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    txt.innerHTML = `são ${hora} horas e ${minutos} minutos`
    if(hora < 5){
        //MADRUGADA
        document.body.style.backgroundColor = '#232f3b'
        res.innerHTML = '<img src="image/imgmadru.png">'
    }else if(hora < 12){
        //MANHÃ
        document.body.style.backgroundColor = '#e87827'
        res.innerHTML = '<img src="image/imgmanha.png">'
    }else if(hora < 18){
        //TARDE
        document.body.style.backgroundColor = '#747030'
        res.innerHTML = '<img src="image/imgtarde.png">'
    }else if(hora < 24){
        //NOITE
        document.body.style.backgroundColor = '#01121a'
        res.innerHTML = '<img src="image/imgnoite.png">'
    }

}