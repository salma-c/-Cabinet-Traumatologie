const logine = document.querySelector(".type_cod");
const login = document.querySelector(".type_code");
const mot_cle = document.querySelector(".do").value;
login.addEventListener("click", () => {
  login.classList.toggle("choix");
  logine.classList.remove("choix");
});

logine.addEventListener("click", () => {
  logine.classList.toggle("choix");
  login.classList.remove("choix");
});

// mot de pass de docteur c'est 1337.
const mot_de_pass = 1337;
// window.onload = function () {
//   const heder = document.querySelector("header");
//   const html = document.querySelector("html");
//   const footer = document.querySelector("footer");

//   if (window.matchMedia("(max-width:400px)").matches) {
//     // html.style.width = "120vw";
//     // heder.style.width = "120vw";
//     footer.classList.add("R_footer");
    
//   }
// };















