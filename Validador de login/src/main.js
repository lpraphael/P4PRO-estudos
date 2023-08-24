import validator from 'validator'

function validation() {
    let inputField = document.querySelector('input')
    let selectField = document.querySelector('select')
    let paragraphField = document.querySelector('p').innerHTML
    
    console.log("input ", inputField.value);
    console.log("select ", selectField.value);
    console.log("paragraph ", paragraphField);
    
    if(selectField.value == "cpf") {
        if (validator.isDecimal(inputField.value) == true) {
            document.querySelector('p').innerHTML = 'esse CPF é valido, parabéns!'
        } else {
            document.querySelector('p').innerHTML = 'CPF inválido, digite novamente.'
        }
    } else if (selectField.value == "email") {
        if (validator.isEmail(inputField.value) == true) {
            document.querySelector('p').innerHTML = 'esse Email é valido, parabéns!'
        } else {
            document.querySelector('p').innerHTML = 'Email inválido, digite novamente.'
        }
    }
    
}

let btnValidate = document.querySelector('button')
btnValidate.addEventListener('click', () => validation())