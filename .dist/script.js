function openMenu() {
    document.getElementById('overlay-menu').style.display = 'block';
}

function closeMenu() {
    document.getElementById('overlay-menu').style.display = 'none';
}

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('overlay-menu');
    if (menu.style.display === 'block' && !menu.contains(event.target) && !event.target.classList.contains('open-menu')) {
        closeMenu();
    }
});
