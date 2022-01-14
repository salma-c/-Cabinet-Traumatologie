<<<<<<< HEAD

 




const tem = document.createElement("tem");
tem.innerHTML = `
=======
const templat = document.createElement("template");
templat.innerHTML = `
>>>>>>> 2d91f8e46b07cb5a912d0a262550244e33497c27
<header>
<div class="nav-bar">
    <img src="logo.png" class="logo">
    
    
    <ul class="menu">
        
        <li class="active" id="hh"><a href="#home">Home</a></li>
        <li id="hh"><a href="#about">About</a></li>
        <li id="hh"><a href="#review">Review</a></li>
        <li id="hh"><a href="#contact">Contact</a></li>
        <li><button type="button">ADMIN</button></li>
    </ul>
    <div class="menu-toggle"><i class="fas fa-bars"></i></div>

   
    </div>
    </header> `;
    
    class navbar_desktop extends HTMLElement{
        connectedCallback(){
<<<<<<< HEAD
            this.innerHTML = tem.innerHTML;
=======
            this.innerHTML = templat.innerHTML;
>>>>>>> 2d91f8e46b07cb5a912d0a262550244e33497c27
        }
    }
    customElements.define("navbar-com",navbar_desktop);