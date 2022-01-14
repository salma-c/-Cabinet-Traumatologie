const menuu = document.querySelector(".menu-toggle");
                 const nav = document.querySelector(".nav-bar2");
                 const handleClick= function(){
                 nav.classList.toggle("nav-bar2-open")
                }
menuu.addEventListener("click", handleClick)
nav.addEventListener("click", handleClick)