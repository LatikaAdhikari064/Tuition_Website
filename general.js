function showContent(page) {
    fetch(page) // Load the requested HTML file
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-area').innerHTML = data; // Replace content
        })
        .catch(error => console.log("Error loading page:", error));

    // Hide sidebar after selection (for mobile)
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

// Toggle sidebar on mobile
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');  // Hide sidebar
    } else {
        sidebar.classList.add('open');  // Show sidebar
    }
}
