/**
 * Wuthering Waves API - Widgets JavaScript
 * Handles the visitor counter, time/date display, and other widgets
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize visitor counter
    initVisitorCounter();
    
    // Initialize WIB time and date
    updateWIBTime();
    setInterval(updateWIBTime, 1000);
    
    // Initialize changelog accordion
    initChangelogAccordion();
});

/**
 * Initialize visitor counter from localStorage or API
 */
function initVisitorCounter() {
    const visitorCountElement = document.getElementById('visitor-count');
    if (!visitorCountElement) return;
    
    // Try to get count from API first (simulated here with localStorage)
    let visitorCount = localStorage.getItem('visitorCount');
    
    if (!visitorCount) {
        // If no count exists, start with a random number between 500-1500
        visitorCount = Math.floor(Math.random() * 1000) + 500;
        localStorage.setItem('visitorCount', visitorCount);
    } else {
        // Increment count for returning visitors
        visitorCount = parseInt(visitorCount) + 1;
        localStorage.setItem('visitorCount', visitorCount);
    }
    
    // Update visitor count display with animation
    animateCounterValue(visitorCountElement, 0, parseInt(visitorCount), 1500);
    
    // Update API visitor count (would be an actual API call in production)
    updateAPIVisitorCount(visitorCount);
}

/**
 * Animate counter from start to end value
 * @param {HTMLElement} element - The element to update
 * @param {number} start - Starting value
 * @param {number} end - Ending value
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounterValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/**
 * Update the API visitor count (simulated)
 * @param {number} count - The visitor count to update
 */
function updateAPIVisitorCount(count) {
    // In a real implementation, this would be an API call
    console.log('API visitor count updated:', count);
}

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
 * Initialize changelog accordion functionality
 */
function initChangelogAccordion() {
    const changelogHeaders = document.querySelectorAll('.changelog-version');
    
    changelogHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
            
            // Toggle visibility of changelog details
            const details = parent.querySelector('.changelog-details');
            if (details) {
                if (parent.classList.contains('active')) {
                    details.style.maxHeight = details.scrollHeight + 'px';
                } else {
                    details.style.maxHeight = '0';
                }
            }
        });
    });
}
