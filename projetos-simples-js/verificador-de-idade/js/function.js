function verificar() {
    var txtano = document.querySelector('#txtano');
    var res = document.querySelector('#res');
    var data = new Date();
    var ano = data.getFullYear();
    var idade = ano - Number(txtano.value);

    if (txtano.value.length == 0 || txtano.value > ano) {
        alert('[ERRO] Preencha todos os dados corretamente e tente novamente!')
    } else {
        var fsex = document.getElementsByName("radsex")
        var genero = ''
        if (fsex[2].checked) {
            res.innerHTML = `Verificado, você tem ${idade} anos`
        } else if (fsex[1].checked) {
            genero = 'mulher'
            res.innerHTML = `Verificado, ${genero} de ${idade} anos`
        } else if (fsex[0].checked) {
            genero = 'homem'
            res.innerHTML = `Verificado, ${genero} de ${idade} anos`
        } else if (fsex[0].checked == false || fsex[1].checked == false) {
            res.innerHTML = `Verificado, você tem ${idade} anos`
        }
    }
}