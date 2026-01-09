const userPerfil = document.querySelector('.user-profile');
const arrowPerfil = document.querySelector('.arrow-icon');

/* Ativar DropDown */
function ativarDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("ativo");
}

window.onclick = function(event) {
  if (!event.target.closest('.user-profile')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("ativo")) {
        openDropdown.classList.remove("ativo");
      }
    }
  }
}

userPerfil.addEventListener('mouseover', () =>{
  userPerfil.classList.add("user-profile-hover");
  arrowPerfil.classList.add("arrow-icon-hover");
});

userPerfil.addEventListener('mouseleave', () =>{
  userPerfil.classList.remove("user-profile-hover");
  arrowPerfil.classList.remove("arrow-icon-hover");
});