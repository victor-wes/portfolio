function slideProjetos(valor){
    var botoes = {
        ps: document.querySelector('#ps'),
        lp: document.querySelector('#lp'),
        si: document.querySelector('#si'),
    }

    var botao = valor;

    switch (botao) {
        case 1:
            botoes.ps.style.backgroundColor = '#2e2085';
            botoes.ps.style.boxShadow = '4px 5px 16px 0px #0000008a'
            botoes.lp.style.backgroundColor = '#6f6a8f';
            botoes.si.style.backgroundColor = '#6f6a8f';
            break;
        case 2:
            botoes.ps.style.backgroundColor = '#6f6a8f';
            botoes.lp.style.backgroundColor = '#2e2085';
            botoes.lp.style.boxShadow = '4px 5px 16px 0px #0000008a'
            botoes.si.style.backgroundColor = '#6f6a8f';
            break;

        case 3: 
            botoes.ps.style.backgroundColor = '#6f6a8f';
            botoes.lp.style.backgroundColor = '#6f6a8f';
            botoes.si.style.backgroundColor = '#2e2085';
            botoes.si.style.boxShadow = '4px 5px 16px 0px #0000008a'
            break;

        default:
            break;
    }

    
}