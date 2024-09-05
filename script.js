document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.createElement('button');
    menuButton.textContent = '☰ Menu';
    menuButton.style.position = 'fixed';
    menuButton.style.top = '15px';
    menuButton.style.right = '15px';
    menuButton.style.backgroundColor = '#007BFF';
    menuButton.style.color = 'white';
    menuButton.style.border = 'none';
    menuButton.style.padding = '10px 20px';
    menuButton.style.borderRadius = '5px';
    menuButton.style.cursor = 'pointer';
    document.body.appendChild(menuButton);

    const nav = document.querySelector('ul');
    nav.style.display = 'flex';

    menuButton.addEventListener('click', function() {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
