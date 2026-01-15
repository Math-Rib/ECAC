document.addEventListener("DOMContentLoaded", () => {
  // const abrirModal = document.getElementById("abrirModal");
  // const modal = document.getElementById("modalSenha");
  // const fecharModal = document.getElementById("fecharModal");
  const modalErro = document.getElementById("modalErro");
  const fecharModalErro = document.getElementById("fecharModalErro");
  const abrirModalSenha = document.getElementById("abrirModalSenha");
  const modalSenha = document.getElementById("modalSenha");
  const fecharModalSenha = document.getElementById("fecharModalSenha");

  // Fecha o modal de erro
  if (fecharModalErro && modalErro) {
    fecharModalErro.addEventListener("click", () => {
      modalErro.classList.remove("ativo");
    });
  }

  // Abrir modal de troca de senha
  abrirModalSenha.addEventListener("click", (e) => {
    e.preventDefault();
    modalSenha.classList.add("ativo");
  });

  fecharModalSenha.addEventListener("click", () => {
    modalSenha.classList.remove("ativo");
  });

  // Mostrar/ocultar senha
  function toggleSenha(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (!input || !icon) return;

    icon.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  }

  toggleSenha("senha", "toggleSenha");
  toggleSenha("novaSenha", "toggleNovaSenha");
  toggleSenha("confirmarNovaSenha", "toggleConfirmarSenha");
});

/* CONTATO */

function abrirEmail(e) {
  e.preventDefault();

 
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=missaodesenvolver@gmail.com";

  const mailtoUrl = "mailto:missaodesenvolver@gmail.com";

  const novaJanela = window.open(gmailUrl, "_blank");


  setTimeout(() => {
    if (!novaJanela || novaJanela.closed) {
      window.location.href = mailtoUrl;
    }
  }, 300);
}

function abrirWhatsApp(e) {
  e.preventDefault();

  const numero = "5521992141882"; // DDI + DDD + número
  const mensagem = ""; 

  const texto = encodeURIComponent(mensagem);

  // Página intermediária oficial do WhatsApp
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${texto}`;

  window.open(url, "_blank");
}