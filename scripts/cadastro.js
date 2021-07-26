function register() {
    //CHECAR RADIO IS CHECKED
    if (!document.querySelector('input[name="gender"]:checked')) {
        showModal("Preencha todos os campos.")
        return
    }

    //INPUT DE DADOS E GET LOCALSTORAGE
    let registeredUser = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email-cad').value,
        state: document.querySelector('#state').value,
        gender: document.querySelector('#gender:checked').value,
        password: document.querySelector("#new-password").value,
        confirmPassword: document.querySelector('#confirm-password').value,
    };
    
    let usersLocalStorage = JSON.parse(sessionStorage.getItem('users'));
    let newUser = usersLocalStorage == null ? [] : usersLocalStorage;
    
    //VERIFICANDO CAMPOS VAZIOS
    let objValues = Object.values(registeredUser)
    for (i = 0; i <= objValues.length; i++) {
        if (objValues[i] == "" ) {
            return showModal("Preencha todos os campos.")
        }
    }

    // VERIFICANDO CONFIRMAÇÃO DE SENHA
    if (registeredUser.password !== registeredUser.confirmPassword) {
        return showModal('Senhas não conferem, tente novamente.')
    }

    //VERIFICANDO LENGTH DA SENHAS
    if (registeredUser.password.length < 6) {
        return showModal('Senha muito pequena, tente novamente')
    }

    //VERIFICANDO EMAIL JÁ CADASTRADO
    if (newUser.some(user => user.email == registeredUser.email)) {
        return showModal("E-mail já cadastrado.")
    } 
        location.href = "/"  

        newUser.push(registeredUser) 
        sessionStorage.setItem('users', JSON.stringify(newUser))
        
}

//FUNÇÃO MODAL
function showModal(text) {
    let modal = document.querySelector('.modal-overlay');

    document.querySelector('#modal-text').innerHTML = text
        modal.classList.add('show-modal')

        //FECHAR MODAL
        const closeBtn = document.querySelector(".close-modal")
        closeBtn.addEventListener('click', () => {
        modal.classList.remove('show-modal')})
}

//VISUALIZAR SENHA
let btn = document.querySelectorAll('.lnr-eye')

btn.forEach((e) => {
    e.addEventListener('click', function() {
        let input = this.parentElement.children[1];
        if(input.getAttribute('type') == 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    });
})