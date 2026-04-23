// script.js

// Navigation Bar
// Sticky navbar with mobile hamburger menu toggle
const menuButton = document.getElementById("openMenu");
const navLinks = document.querySelector(".navLinks");

if (menuButton && navLinks) {
    const mobileQuery = window.matchMedia("(max-width: 860px)");

    const closeMenu = () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open Menu");
        menuButton.textContent = "☰";
    };

    const openMenu = () => {
        navLinks.classList.add("open");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close Menu");
        menuButton.textContent = "✕";
    };

    menuButton.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!mobileQuery.matches) return;

        const target = event.target;
        if (!(target instanceof Node)) return;

        if (!navLinks.contains(target) && !menuButton.contains(target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (!mobileQuery.matches) {
            closeMenu();
        }
    });

    closeMenu();
}

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

// AOS Initialization
AOS.init({
    duration: 800,   // Animation duration in milliseconds
    once: false,     // Allow animations to happen more than once
    mirror: true,   // Whether elements should animate out while scrolling past them
    throttleDelay: 99, // Throttle delay for scroll events
    offset: 120, // Offset (in px) from the original trigger point
    
});