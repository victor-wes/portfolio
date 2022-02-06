function contar() {
    //INPUTS
    var inicio = document.querySelector('#inicio');
    var fim = document.querySelector('#fim');
    var pulo = document.querySelector('#pulo');

    //RES
    var res = document.querySelector('#res');
    var adeus = document.querySelector('#adeus');
    var bomba = document.querySelector('#bomba');
    var explosao = document.querySelector('#explosao');

    //SPANS
    var iniant = document.querySelector('#iniant');
    var fimant = document.querySelector('#fimant');
    var pulant = document.querySelector('#pulant');

    //VALOR SPANS
    iniant.innerHTML = `${inicio.value}`
    fimant.innerHTML = `${fim.value}`
    pulant.innerHTML = `${pulo.value}`

    //INICIANDO CONFIGURAÇÕES
    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = '<p>[ERRO] Preencha os dados corretamente</p>'

    } else {

        if (pulo.value.length == 0) {
            if (inicio.value > 9999 || fim.value > 9999) {
                alert('[ERRO] Coloque um valor de INICIO e/ou FIM menor que 9999')
            } else {
                alert('Pulo não definido, considerando o 1')
                pulo.value = 1
                pulant.innerHTML = `1`;

                var i = Number(inicio.value);
                var f = Number(fim.value);
                var p = Number(pulo.value);
                res.innerHTML = 'Contando: <br>'

                if (i < f) {
                    for (var c = i; c <= f; c += p) {
                        res.innerHTML += `${c}... `
                    }
                } else if (i > f) {
                    for (var c = i; c >= f; c -= p) {
                        res.innerHTML += `${c}... `
                    }
                }
            }
        } else {
            if (inicio.value > 9999 || fim.value > 9999) {
                alert('[ERRO] Coloque um valor de INICIO e/ou FIM menor que 9999')
            } else {
                var i = Number(inicio.value);
                var f = Number(fim.value);
                var p = Number(pulo.value);
                res.innerHTML = 'Contando: <br>'

                if (i < f) {
                    for (var c = i; c <= f; c += p) {
                        res.innerHTML += `${c}... `
                    }
                } else if (i > f) {
                    for (var c = i; c >= f; c -= p) {
                        res.innerHTML += `${c}... `
                    }
                }
                setTimeout(() => {
                    document.querySelector("#explosao").style.display = "block"
                    document.querySelector("#header").style.display = "none"
                }, 1500);
            }
        }
    }

}

function fechar() {
    document.querySelector('#explosao').style.display = "none";
    document.querySelector('#reiniciar').style.display = "block";
    document.querySelector('#header').style.display = "block";
}

function reiniciar() {
    var inicio = document.querySelector('#inicio');
    var fim = document.querySelector('#fim');
    var pulo = document.querySelector('#pulo');
    var res = document.querySelector('#res');
    inicio.value = ''
    fim.value = ''
    pulo.value = ''
    res.innerHTML = ''
    document.querySelector('#reiniciar').style.display = "none";
}