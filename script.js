// Highlight active nav link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Search functionality
const searchButton = document.querySelector('.search-button');
if (searchButton) {
    searchButton.addEventListener('click', function() {
        const searchTerm = document.querySelector('.search-input').value;
        // Implement search logic here
        console.log('Searching for:', searchTerm);
    });
}

// Mobile menu toggle
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

if (btn && menu) {
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.querySelector('html');

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved user preference
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}