
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


let darkmode = document.querySelector('#darkmode');


const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
    document.body.classList.add('active');
    darkmode.classList.replace('bx-moon', 'bx-sun');
} else if (savedMode === null) {
    
    document.body.classList.add('active');
    darkmode.classList.replace('bx-moon', 'bx-sun');
    localStorage.setItem('darkMode', 'enabled');
}

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-sun')) {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem('darkMode', 'enabled');
    }
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});