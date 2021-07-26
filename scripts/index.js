function login() {
    //INPUT DE DADOS
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    //VALIDANDO CAMPOS VAZIOS
    if (email === "" || password === "") {
        showModal('Todos os campos devem ser preenchidos.')
        return
    }

    //CHECANDO EMAIL NO SESSION STORAGE
    const sessionUsers = JSON.parse(sessionStorage.getItem('users'))
    if (sessionUsers == null ) {
        showModal('Login não encontrado, cadastre-se.')
        return
    }

    const userExists = sessionUsers.find( user => user.email == email && user.password == password)
    if (userExists == undefined) {
        showModal('Email ou senha incorreto.')
        return
    }
    sessionStorage.setItem('loggedIn', true)
    location.href = "/lista-usuarios"
}

//MOSTRAR SENHA
let btn = document.querySelector('.lnr-eye')

btn.addEventListener('click', () => {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});

function showModal(text) {
    let modal = document.querySelector('.modal-overlay');

    document.querySelector('#modal-text').innerHTML = text
        modal.classList.add('show-modal')

        //FECHAR MODAL
        const closeBtn = document.querySelector(".close-modal")
        closeBtn.addEventListener('click', () => {
        modal.classList.remove('show-modal')})
}