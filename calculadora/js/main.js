var numero = "";
var displayBuffer = "";
var termos = [undefined,undefined,undefined];
var resultado = undefined;

function pressNum (num) {
    numero = numero.concat(num.innerHTML);
    mostrarDisplay(num.innerHTML);
}

function pressOperador (op) {
    if(termos[1] == undefined) {
        termos[0] = numero;
        termos[1] = op.innerHTML;
        mostrarDisplay(op.innerHTML);
        numero = ""; 
    }    
}

function pressEqual () {
    if(termos[0] != undefined && termos[1] != undefined && numero != "") {
        var esperarResultado;
        termos[2] = numero;   
        switch(termos[1]) {
            case ' + ':
                resultado = Number(termos[0]) + Number(termos[2]); 
                break;
            case ' - ':
                resultado = Number(termos[0]) - Number(termos[2]); 
                break;
            case ' * ':
                resultado = Number(termos[0]) * Number(termos[2]); 
                break;
            case ' / ':
                resultado = Number(termos[0]) / Number(termos[2]); 
                break;
        } 
        esperarResultado = resultado;
        limparDisplay();
        mostrarDisplay(resultado);
        limparMemoria();
        numero = esperarResultado.toString(); 
    }
}

function limparMemoria() {
    numero = "";
    termos = [undefined, undefined, undefined];
    resultado = undefined;
}

function limparDisplay() {
    displayBuffer = "";
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}

function limparTudo() {
    limparDisplay();
    limparMemoria();
}

function mostrarDisplay (conteudo) {
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}