// Smooth scroll for nav links and Learn More button
document.querySelectorAll('nav a, #learnMoreBtn').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
        if (this.id === 'learnMoreBtn') {
            e.preventDefault();
            document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: Prevent form submission (demo only)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
});