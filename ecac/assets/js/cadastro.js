
document.addEventListener("DOMContentLoaded", () => {
  const modalErro = document.getElementById("modalErro");
  const fecharModalErro = document.getElementById("fecharModalErro");
  const modalSucesso = document.getElementById("modalSucesso");
  const btnSucessoOk = document.getElementById("btnSucessoOk");

  // Modal de Sucesso
  if (modalSucesso) {
    // Função para redirecionar para o login
    const irParaLogin = () => {
      window.location.href = "../views/login.php";
    };

    // Redireciona ao clicar no botão OK
    if (btnSucessoOk) {
      btnSucessoOk.addEventListener("click", (e) => {
        e.preventDefault();
        irParaLogin();
      });
    }

    // Redireciona automaticamente após 5 segundos
    setTimeout(() => {
      // Verifica se o modal ainda está na tela antes de redirecionar
      if (document.body.contains(modalSucesso) && modalSucesso.classList.contains("ativo")) {
        irParaLogin();
      }
    }, 5000);
  }

  // Fecha Modal de Erro
  if (fecharModalErro) {
    fecharModalErro.addEventListener("click", () => {
      modalErro.classList.remove("ativo");
    });
  }

  // Mostrar/Ocultar Senha
  const toggleSenha = document.getElementById("toggleSenha");
  const senhaInput = document.getElementById("senha");

  if (toggleSenha && senhaInput) {
    toggleSenha.addEventListener("click", () => {
      const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
      senhaInput.setAttribute("type", tipo);

      toggleSenha.classList.toggle("fa-eye");
      toggleSenha.classList.toggle("fa-eye-slash");
    });
  }
});