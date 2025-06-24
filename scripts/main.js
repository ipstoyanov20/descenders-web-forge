
// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Download dropdown functionality
    const downloadButton = document.getElementById('downloadButton');
    const downloadMenu = document.getElementById('downloadMenu');
    const downloadDropdown = document.querySelector('.download-dropdown');
    
    if (downloadButton && downloadMenu && downloadDropdown) {
        downloadButton.addEventListener('click', function(e) {
            e.preventDefault();
            downloadDropdown.classList.toggle('active');
        });

        // Handle dropdown item clicks
        const dropdownItems = downloadMenu.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const url = this.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
                downloadDropdown.classList.remove('active');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!downloadDropdown.contains(e.target)) {
                downloadDropdown.classList.remove('active');
            }
        });
    }
});
