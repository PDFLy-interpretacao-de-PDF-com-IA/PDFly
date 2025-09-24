document.addEventListener("DOMContentLoaded", () => {


    const loginBtn = document.querySelector(".login-button");

    function updateAuthUI() {
        if (!loginBtn) return;

        if (Auth.isLogged()) {
            // usuário logado pode sair
            loginBtn.textContent = "Sair";
            loginBtn.onclick = (e) => {
                e.preventDefault();
                Auth.logout();
                updateAuthUI();
                window.location.href = "login.html";
            };
        } else {
            // usuário deslogado deve entrar
            loginBtn.textContent = "Entrar";
            loginBtn.onclick = (e) => {
                e.preventDefault();
                window.location.href = "login.html";
            };
        }
    }


    updateAuthUI();

  //tema claro e escuro
  const themeItem = document.querySelector(".theme-switch a");
  const THEME_KEY = "pdfly_theme"; // 'light' | 'dark'

  

  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark") {
    document.body.classList.add("theme-dark");
    setThemeLabel(true);
  } else {
    setThemeLabel(false);
  }

  themeItem?.addEventListener("click", (e) => {
    e.preventDefault();
    const isDark = document.body.classList.toggle("theme-dark");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    setThemeLabel(isDark);
  });

  function setThemeLabel(isDark){
    const txt = themeItem?.querySelector(".txt-link");
    const ico = themeItem?.querySelector(".icon-theme i");
    if (txt) txt.textContent = isDark ? "Tema claro" : "Tema escuro";
    if (ico) ico.className = isDark ? "bi bi-toggle-off" : "bi bi-toggle-on";
  }


  // áreas de pergunta e upload de PDF
  const pdfInput = document.getElementById('pdfInput');
  const pdfBox = document.querySelector('.pdf-box');

    pdfInput.addEventListener('change', () => {
        if (pdfInput.files.length > 0) {
            pdfBox.textContent = pdfInput.files[0].name;
        } else {
            pdfBox.textContent = "Insira o PDF";
        }
    });

    const sendBtn = document.getElementById("sendBtn");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    function sendMessage() {
        const text = chatInput.value.trim();
        if (text !== "") {
            
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("chat-message");
            msgDiv.textContent = text;

            chatMessages.appendChild(msgDiv);
            chatInput.value = "";

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    //formas de enviar(enter ou botão)
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    //limpeza de cachê
    const newChatBtn = document.getElementById("newChatBtn");
    newChatBtn.addEventListener("click", (e) => {
        e.preventDefault();
        chatMessages.innerHTML = "";
        pdfInput.value = "";
        pdfBox.textContent = "Insira o PDF";
        chatInput.value = "";
  });

    window.addEventListener("storage", (e) => {
        if (e.key === "pdfly_token") {
            updateAuthUI();
        }
  });
  

});
