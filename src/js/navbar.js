// Add this to a new file: navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;

    function updateNavbar() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check
    updateNavbar();

    // Add scroll event listener
    window.addEventListener('scroll', updateNavbar);
});