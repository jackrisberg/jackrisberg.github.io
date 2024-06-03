
function loadHeader() {
    fetch('/header.html') // Assuming the header content is in header.html
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Call the loadHeader function when the page loads
window.onload = loadHeader;
