function register() {
    let registeredUser = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email-cad').value,
        state: document.querySelector('#state').value,
        gender: document.querySelector('#gender:checked').value,
        password: document.querySelector("#new-password").value,
    };
    
    let usersLocalStorage = JSON.parse(sessionStorage.getItem('users'))
    let newUser = usersLocalStorage == null ? [] : usersLocalStorage

    //VALIDATION
    let modal = document.querySelector('.modal-overlay');
    
    if (newUser.some( user => user.email == registeredUser.email)) {
        window.alert("Email já cadastrado!")   
    } else {
        modal.classList.add('show-modal')   
            
        const closeBtn = document.querySelector(".close-modal")
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show-modal')
        })
    }

    const closeBtn = document.querySelector(".close-modal")
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show-modal')
    })
    // END VALIDATION

    newUser.push(registeredUser) 
    sessionStorage.setItem('users', JSON.stringify(newUser))

}


function cleanField() {
    fullName= document.querySelector('#name').value  = "";
    password= document.querySelector("#new-password").value = "";
    email= document.querySelector('#email-cad').value = "";
    state= document.querySelector('#state').value = "";
    gender= document.querySelector('#gender:checked').value = "";
    newPassword= document.querySelector('#confirm-password').value = "";
}