/**
 * Static Data for Symptoms and Recommendations
 * Used to populate the UI and drive the rule-based logic.
 */

const SYMPTOMS = {
    'Mobile': [
        { id: 'heat', name: 'Phone Heating', weight: 3 },
        { id: 'battery', name: 'Battery Drain', weight: 3 },
        { id: 'slow', name: 'Slow Performance', weight: 2 },
        { id: 'ram', name: 'High RAM Usage', weight: 2 },
        { id: 'storage', name: 'Storage Full', weight: 1 },
        { id: 'crash', name: 'App Crashes', weight: 2 }
    ],
    'Laptop': [
        { id: 'fan', name: 'Loud Fan Noise', weight: 2 },
        { id: 'heat', name: 'Overheating', weight: 3 },
        { id: 'bsod', name: 'Blue Screen (BSOD)', weight: 5 },
        { id: 'wifi', name: 'WiFi Disconnecting', weight: 1 },
        { id: 'slow', name: 'Slow Boot Time', weight: 2 },
        { id: 'battery', name: 'Battery Not Charging', weight: 3 }
    ],
    'Web Application': [
        { id: 'load', name: 'Slow Page Load', weight: 2 },
        { id: '500', name: '500 Server Error', weight: 5 },
        { id: '404', name: 'Broken Links', weight: 1 },
        { id: 'api', name: 'API Timeouts', weight: 3 },
        { id: 'login', name: 'Login Failures', weight: 4 },
        { id: 'ui', name: 'UI Glitches', weight: 1 }
    ]
};

const RECOMMENDATIONS = {
    'heat': 'Check for background apps consuming CPU. Remove phone case while charging.',
    'battery': 'Check battery health settings. Reduce screen brightness and background sync.',
    'slow': 'Clear cache and unused apps. Check if storage is full.',
    'ram': 'Close unused tabs/apps. Restart the device.',
    'storage': 'Delete large files or back them up to cloud storage.',
    'crash': 'Update the application or OS to the latest version.',
    'fan': 'Clean dust vents. Check for CPU-intensive processes.',
    'bsod': 'Update drivers. Run hardware diagnostics.',
    'wifi': 'Reset network settings. Restart router.',
    '500': 'Check server logs. Restart the backend service.',
    '404': 'Check routing configuration and file paths.',
    'api': 'Optimize database queries. Check network latency.',
    'login': 'Verify auth service status. Check database connections.',
    'ui': 'Clear browser cache. Check responsive CSS rules.'
};
