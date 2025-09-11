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

// Update the footer year dynamically
document.getElementById("year").innerHTML = new Date().getFullYear();

// Typing Animation
const typingElement = document.getElementById("typing-element");
const text = "Hi, I'm Dulan Nimnaka";
let index = 0;
let isDeleting = false;
let speed = 200; // Typing speed in milliseconds

function type() {
    if (isDeleting) {
        // Deleting characters
        typingElement.innerHTML = text.substring(0, index - 1);
        index--;
        speed = 50; // Faster deleting speed
    } else {
        // Adding characters
        typingElement.innerHTML = text.substring(0, index + 1);
        index++;
        speed = 200; // Normal typing speed
    }

    // If the text is fully typed, start deleting after a short pause
    if (!isDeleting && index === text.length) {
        isDeleting = true;
        speed = 1000; // Pause before deleting

    } else if (isDeleting && index === 0) {
        isDeleting = false;
    }

    setTimeout(type, speed);
}

type();