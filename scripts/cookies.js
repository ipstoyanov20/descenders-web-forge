
// Cookie Consent Management
class CookieConsent {
    constructor() {
        this.cookieKey = 'descenders_cookie_consent';
        this.init();
    }

    init() {
        // Check if user has already made a choice
        if (!this.hasConsent()) {
            this.showBanner();
        }
    }

    hasConsent() {
        return localStorage.getItem(this.cookieKey) !== null;
    }

    getConsent() {
        return JSON.parse(localStorage.getItem(this.cookieKey) || '{}');
    }

    setConsent(preferences) {
        localStorage.setItem(this.cookieKey, JSON.stringify({
            ...preferences,
            timestamp: Date.now()
        }));
        this.hideBanner();
    }

    showBanner() {
        const banner = this.createBanner();
        document.body.appendChild(banner);
    }

    hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.remove();
        }
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-consent-banner';
        
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h3>Cookie Settings</h3>
                    <p>We use cookies to enhance your experience on our website. You can choose which cookies to accept below.</p>
                </div>
                <div class="cookie-consent-buttons">
                    <button class="btn btn-secondary" onclick="cookieConsent.showPreferences()">Cookie Settings</button>
                    <button class="btn btn-primary" onclick="cookieConsent.acceptAll()">Accept All</button>
                    <button class="btn btn-outline" onclick="cookieConsent.acceptEssential()">Essential Only</button>
                </div>
            </div>
        `;

        return banner;
    }

    showPreferences() {
        const modal = this.createPreferencesModal();
        document.body.appendChild(modal);
    }

    createPreferencesModal() {
        const modal = document.createElement('div');
        modal.id = 'cookie-preferences-modal';
        modal.className = 'cookie-preferences-modal';
        
        modal.innerHTML = `
            <div class="cookie-preferences-overlay" onclick="cookieConsent.closePreferences()"></div>
            <div class="cookie-preferences-content">
                <div class="cookie-preferences-header">
                    <h2>Cookie Preferences</h2>
                    <button class="close-btn" onclick="cookieConsent.closePreferences()">&times;</button>
                </div>
                <div class="cookie-preferences-body">
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Essential Cookies</h3>
                            <label class="cookie-toggle">
                                <input type="checkbox" checked disabled>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <p>These cookies are necessary for the website to function and cannot be disabled.</p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Performance Cookies</h3>
                            <label class="cookie-toggle">
                                <input type="checkbox" id="performance-cookies">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <p>These cookies help us analyze website performance and user behavior.</p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Functional Cookies</h3>
                            <label class="cookie-toggle">
                                <input type="checkbox" id="functional-cookies">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <p>These cookies remember your preferences and provide enhanced features.</p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Analytics Cookies</h3>
                            <label class="cookie-toggle">
                                <input type="checkbox" id="analytics-cookies">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <p>These cookies help us understand how visitors interact with our website.</p>
                    </div>
                </div>
                <div class="cookie-preferences-footer">
                    <button class="btn btn-secondary" onclick="cookieConsent.closePreferences()">Cancel</button>
                    <button class="btn btn-primary" onclick="cookieConsent.savePreferences()">Save Preferences</button>
                </div>
            </div>
        `;

        return modal;
    }

    closePreferences() {
        const modal = document.getElementById('cookie-preferences-modal');
        if (modal) {
            modal.remove();
        }
    }

    savePreferences() {
        const preferences = {
            essential: true,
            performance: document.getElementById('performance-cookies').checked,
            functional: document.getElementById('functional-cookies').checked,
            analytics: document.getElementById('analytics-cookies').checked
        };
        
        this.setConsent(preferences);
        this.closePreferences();
    }

    acceptAll() {
        this.setConsent({
            essential: true,
            performance: true,
            functional: true,
            analytics: true
        });
    }

    acceptEssential() {
        this.setConsent({
            essential: true,
            performance: false,
            functional: false,
            analytics: false
        });
    }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.cookieConsent = new CookieConsent();
});
