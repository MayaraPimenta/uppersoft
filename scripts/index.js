function login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    let modal = document.querySelector('.modal-overlay');

    if (email === "" || password === "") {
        modal.classList.add('show-modal')   
    } else {
        location.href = "/lista-usuarios"
    }

    const closeBtn = document.querySelector(".close-modal")
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show-modal')
    })
}

