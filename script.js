let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-solid fa-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll("section");
let navlinks=document.querySelectorAll("header navbar a b");
window.onscroll = () => {
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute("id");

        if(top >= offset && top < offset + height ){
            navlinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector("header navbar a b[href*="+ id +"]").classList.add("active");
            });
        };
    });
    let header= document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 100);
   
    menuIcon.classList.remove("fa-solid fa-x");
    navbar.classList.remove("active");

};