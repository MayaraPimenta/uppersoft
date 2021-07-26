async function getUser() {
    try {
      await axios.get('https://reqres.in/api/users?page=1')
      .then(response => showUsers(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  //MOSTRANDO USUARIOS
function showUsers (data) {
  let users = data.data.map(element => {
    return `<div class="card-user">
    <img src="../assets/edit-icon.png" alt="Editar" class="edit-img">
    <div class="profile-img">
        <img src="${element.avatar}" alt="Foto de Perfil">
    </div>
    <h2>${element.first_name + ' ' + element.last_name}</h2>
    <p>${element.email}</p>
</div>`
  });

  let usersAPI = users.join("");
  let usersList = document.querySelector(".users-list")

  usersList.innerHTML = usersAPI;

  //MOSTRANDO PAGINAS
  let usersOnscreen = document.querySelector(".users-onscreen")
  usersOnscreen.innerHTML = `Mostrando ${data.per_page} de ${data.total}`
}

function init() {
  const loggedIn = JSON.parse(sessionStorage.getItem('loggedIn'))

  if (loggedIn == null || loggedIn == false) {
    return location.href = "/"
  } 

  getUser()
}

let logout = document.querySelector('#logout')
logout.addEventListener('click', () => {
  sessionStorage.setItem('loggedIn', false)
  location.href = "/"
})

//CHAMADA DE FUNÇÕES
init()