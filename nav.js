const primaryNav =  document.getElementById('primary-navigation');
const navToggle =  document.querySelector(".mobile-nav-toggle");
const darkenBackground = document.getElementById('darken');
const buttonImage = document.getElementById('toggle-background');

navToggle.addEventListener('click', () =>{

    const visibility = primaryNav.getAttribute('data-visible');
    const darken = darkenBackground.getAttribute('data-visible');

    if(visibility === "false" && darken === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded',true);
        darkenBackground.setAttribute('data-visible',true);
        buttonImage.style.backgroundImage = "url(assets/images/icon-menu-close.svg)";

    
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded',false);
        darkenBackground.setAttribute('data-visible',false);
        buttonImage.style.backgroundImage = "url(assets/images/icon-menu.svg)";

    }

    console.log(visibility);
})