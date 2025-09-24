document.addEventListener("DOMContentLoaded", () => {
  // se já estiver logado, manda direto para a tela principal
  if (Auth.isLogged()) {
    window.location.href = "./principal.html";
    return;
  }

  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const btnEntrar  = document.querySelector(".btn-entrar");
  const signupLink  = document.getElementById("signupLink");

  if (!emailInput || !senhaInput || !btnEntrar) return;

  // validação simples
  const validate = () => {
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!email) {
      alert("Informe seu email.");
      emailInput.focus();
      return null;
    }
    if (!senha) {
      alert("Informe sua senha.");
      senhaInput.focus();
      return null;
    }
    return { email, senha };
  };

  //login com tecla Enter
  const trySubmitOnEnter = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      btnEntrar.click();
    }
  };
  emailInput.addEventListener("keydown", trySubmitOnEnter);
  senhaInput.addEventListener("keydown", trySubmitOnEnter);

  btnEntrar.addEventListener("click", (ev) => {
    ev.preventDefault();

    const data = validate();
    if (!data) return;

    // simula login: salva no localStorage
    Auth.login(data.email);

    // redireciona para a tela principal
    window.location.href = "principal.html";
  });

  if (signupLink) {
    signupLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "cadastro.html";
    });
  }
});
