// Handle the warning sign
document.addEventListener('DOMContentLoaded', function() {
    const warningSign = document.getElementById('warning-sign');
    
    // Show warning for 5 seconds, then fade out
    setTimeout(function() {
        warningSign.classList.add('fade-out');
        
        // Remove from DOM after fade completes
        setTimeout(function() {
            warningSign.style.display = 'none';
        }, 2000); // Match the CSS transition duration
    }, 5000); // Show for 5 seconds
});

// Optional: Add a pulsing effect to the warning text
setInterval(function() {
    const warningSign = document.getElementById('warning-sign');
    if (warningSign && warningSign.style.display !== 'none') {
        warningSign.style.textShadow = 
            `0 0 ${15 + Math.random() * 10}px #ff0000, 
             0 0 ${25 + Math.random() * 15}px #ff0000, 
             0 0 ${35 + Math.random() * 20}px #ff0000`;
    }
}, 300);