  const senhaInput = document.getElementById("senha");
  const toggleSenha = document.getElementById("toggleSenha");

  toggleSenha.addEventListener("click", () => {
    const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", tipo);

    toggleSenha.classList.toggle("fa-eye");
    toggleSenha.classList.toggle("fa-eye-slash");
  });