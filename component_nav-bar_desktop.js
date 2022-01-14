const templat = document.createElement("template");
templat.innerHTML = `
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
            this.innerHTML = templat.innerHTML;
        }
    }
    customElements.define("navbar-com",navbar_desktop);