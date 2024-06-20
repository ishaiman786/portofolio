

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');


menuIcon.onclick = () => {
    navbar.classList.toggle('active'); 

    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-x');
    } else {
        menuIcon.classList.remove('fa-x');
        menuIcon.classList.add('fa-bars');
    }
};

document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && e.target !== menuIcon) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-x');
        menuIcon.classList.add('fa-bars');
    }
});

