const form =  document.getElementById('form');
let formEValido = false;

function validaNum(numA, numB) {
    if (numB > numA) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numA =  parseFloat(document.getElementById('campoA').value);
    const numB =  parseFloat(document.getElementById('campoB').value);
    const mensagemSucesso = `Parabéns! O valor do primeiro campo foi ${numA} e o segundo foi ${numB}`;

    formEValido = validaNum(numA, numB)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.succes-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        formEValido = validaNum(e.target.value);   

        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
        
        document.getElementById('campoB').classList.remove('error');
        // nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }  else {
        //document.querySelector('.error-message').style.display = 'block';
        document.getElementById('campoB').classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.succes-message').style.display = 'none';
    }
})

/*document.getElementById('campoA').addEventListener("change", function(e) { 
    console.log(e.target.value);
    formEValido = validaNum(e.target.value);   

    if (!formEValido) {
        document.getElementById('campoA').classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.succes-message').style.display = 'none';
    } 
    else {
        
    } 
})*/
function newFunction() {
    return 'submit';
}

