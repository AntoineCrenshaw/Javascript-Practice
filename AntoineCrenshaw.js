     
let darkModeToggle = document.getElementById('darkModeToggle');

let body = document.body;
let svgIcon = darkModeToggle.querySelector('svg');

// Check if dark mode is enabled in local storage
let darkModeEnabled = localStorage.getItem('darkModeEnabled');

if (darkModeEnabled) {
    body.classList.add('dark-mode');
    svgIcon.style.fill = '#fff';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    let isDarkMode = body.classList.contains('dark-mode');

    // Toggle SVG icon color
    if (isDarkMode) {
        svgIcon.style.fill = '#fff';
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        svgIcon.style.fill = '';
        localStorage.removeItem('darkModeEnabled');
    }
});
