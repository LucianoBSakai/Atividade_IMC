//calculando o IMC
var peso;
var altura;
var imc;
var resultado;


function calcular(event){
    event.preventDefault();
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);

    resultado = document.getElementById('resposta');
    if (imc < 17){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + ' cuidade você está muito abaixo do peso'
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + ' cuidade você está abaixo do peso'
    }else if(imc > 18.50 && imc <= 24.99){
        resultado.innerHTML = '<br> seu resultado foi: ' + imc + ' seu peso está normal'
    }else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML = '<br> seu resultado foi: ' + imc + ' seu peso está acima do normal'
    }else if(imc > 30){
        resultado.innerHTML = '<br> seu resultado foi: ' + imc + ' Cuidado você está obeso'
    }
}

