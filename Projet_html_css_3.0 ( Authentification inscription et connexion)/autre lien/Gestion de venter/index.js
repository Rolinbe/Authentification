const body = document.querySelector('body');
const bare = document.querySelector('.bare-menu');
const header = document.querySelector('header');

bare.addEventListener('click', () =>{
    header.classList.add('active');
})
body.addEventListener('click', e => {
    let clickmove = e.target;

    if(!clickmove.classList.contains('bare-menu') && !clickmove.classList.contains('menu')) {
        header.classList.remove('active');
    }
})

// fonction reveal

window.addEventListener('scroll', reveal);
//fonction
function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 190;

        if(revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}