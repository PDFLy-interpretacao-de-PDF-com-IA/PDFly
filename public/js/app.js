// fiz uma autenticação fake pra testar o principal e o login/logout
// depois tem que integrar com o backend
const Auth = {
  key: "pdfly_token",

  isLogged() {
    return !!localStorage.getItem(this.key);
  },

  login(email) {
    localStorage.setItem(this.key, email);
  },
  logout() {
    localStorage.removeItem(this.key);
  },
  getUser() {
    return localStorage.getItem(this.key);
  }
};
