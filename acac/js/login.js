  const abrirModal = document.getElementById("abrirModal");
  const modal = document.getElementById("modalSenha");
  const fecharModal = document.getElementById("fecharModal");

  abrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

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