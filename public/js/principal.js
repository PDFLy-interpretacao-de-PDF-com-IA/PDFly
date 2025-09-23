document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Tema ---------- */
  const themeItem = document.querySelector(".theme-switch a");
  const THEME_KEY = "pdfly_theme"; // 'light' | 'dark'

  // aplica o tema salvo
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

});
