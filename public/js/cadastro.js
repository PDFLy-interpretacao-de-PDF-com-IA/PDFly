document.addEventListener("DOMContentLoaded", () => {
  const nomeInput  = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const btnEnviar  = document.querySelector(".btn-entrar");


  const linkEntrar = document.querySelector('.link-text a');
  if (linkEntrar && (!linkEntrar.getAttribute('href') || linkEntrar.getAttribute('href') === '#')) {
    linkEntrar.setAttribute('href', './login.html');
  }

  if (!nomeInput || !emailInput || !senhaInput || !btnEnviar) return;

  // Validação simples
  const validate = () => {
    const nome  = (nomeInput.value  || "").trim();
    const email = (emailInput.value || "").trim();
    const senha = (senhaInput.value || "").trim();

    if (!nome)  { alert("Informe seu nome.");  nomeInput.focus();  return null; }
    if (!email) { alert("Informe seu email."); emailInput.focus(); return null; }
    if (!senha) { alert("Crie uma senha.");    senhaInput.focus(); return null; }


    return { nome, email, senha };
  };

  // Permitir enviar com Enter 
  const trySubmitOnEnter = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      btnEnviar.click();
    }
  };
  nomeInput.addEventListener("keydown", trySubmitOnEnter);
  emailInput.addEventListener("keydown", trySubmitOnEnter);
  senhaInput.addEventListener("keydown", trySubmitOnEnter);

  btnEnviar.addEventListener("click", (ev) => {
    ev.preventDefault();

    const data = validate();
    if (!data) return;

    sessionStorage.setItem("pdfly_last_signup", JSON.stringify({
      nome: data.nome, email: data.email, at: Date.now()
    }));

    // Fluxo 1: redirecionar para login 
    alert("Cadastro realizado! Faça login.");
    window.location.href = "./login.html";

  });
});
