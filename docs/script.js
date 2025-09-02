// script.js

// Navigation Bar
// Sticky navbar with mobile hamburger menu toggle
document.getElementById("openMenu")?.addEventListener('click', () => {
    const links = document.querySelector(".navLinks");

    if(!links) return;

    if(getComputedStyle(links).display === 'none'){
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '64px';
        links.style.right = '20px';
        links.style.padding = '12px';
        links.style.border = '1px solid rgba(255, 255, 255, 0.12)';
        links.style.background = 'rgba(18, 20, 23, 0.95)';
        links.style.borderRadius = '14px'


    } else {
        links.removeAttribute('style');
    }

});