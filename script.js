document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#111";
        } else {
            header.style.background = "#222";
        }
    });
});
