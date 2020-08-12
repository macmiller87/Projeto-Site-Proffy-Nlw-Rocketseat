 
 // Procura o botão //
document.querySelector("#add-time")

// Quando clicar no botão //
.addEventListener('click', cloneField)

 // Executar uma ação
function cloneField() {

    // Duplicar os campos //
    const newFieldcontainer = document.querySelector('.schedule-item').cloneNode(true) // boolean verdadeiro ou falso

    // Pegar  os campos //
    const fields = newFieldcontainer.querySelectorAll('input')
    
    // Para cada campo limpar //
    fields.forEach(function(field) {

     // Pega o field do momento e limpa ele //
        field.value =""
    })

    // Colocar na pagina //
    document.querySelector('#schedule-items').appendChild(newFieldcontainer)

}

//function cadastro() {

   // var cadastro = document.querySelector("cadastro")

   // cadastro = window.location.href = "cadastro.html"
//}

