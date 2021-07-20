const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';

        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`
        }
    });

    //Burger animation
    burger.classList.toggle('toggle');
});
 
}

navSlide();

document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.background= '#cc683c';
});

document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex'; 
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = ' background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(images/posh3.jpg) center no-repeat background-size: cover';
});