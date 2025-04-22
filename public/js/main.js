/**
 * Wuthering Waves API - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize visitor counter from localStorage or set to 1
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = Math.floor(Math.random() * 1000) + 500; // Start with a random number between 500-1500
        localStorage.setItem('visitorCount', visitorCount);
    } else {
        visitorCount = parseInt(visitorCount) + 1;
        localStorage.setItem('visitorCount', visitorCount);
    }
    
    // Update visitor count display
    const visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitorCount.toLocaleString();
    }
    
    // Initialize WIB time and date
    updateWIBTime();
    setInterval(updateWIBTime, 1000);
    
    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    if (menuToggle && sidebar && overlay) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
        
        overlay.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // API list item toggle
    const apiListItems = document.querySelectorAll('.api-list-item h4');
    
    apiListItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
});

/**
 * Update the time and date display with Western Indonesian Time (WIB)
 */
function updateWIBTime() {
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    
    if (!timeElement || !dateElement) return;
    
    // Create date object for Western Indonesian Time (UTC+7)
    const now = new Date();
    const wibTime = new Date(now.getTime() + (7 * 60 * 60 * 1000)); // UTC+7
    
    // Format time: HH:MM:SS
    const hours = wibTime.getUTCHours().toString().padStart(2, '0');
    const minutes = wibTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = wibTime.getUTCSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} WIB`;
    
    // Format date: Day, DD Month YYYY
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    const day = days[wibTime.getUTCDay()];
    const date = wibTime.getUTCDate();
    const month = months[wibTime.getUTCMonth()];
    const year = wibTime.getUTCFullYear();
    
    const dateString = `${day}, ${date} ${month} ${year}`;
    
    // Update elements
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

/**
 * Redirect to API documentation page
 */
function goToDocumentation() {
    window.location.href = '/api';
}

/**
 * Redirect to GitHub source code
 */
function goToSourceCode() {
    window.open('https://github.com/FahriAdison/wuwa_api', '_blank');
}
