
document.addEventListener('DOMContentLoaded', function() {
    // This script would normally integrate with an AI video service
    // For a static demo, we're just showing YouTube videos
    
    console.log('AI Video Integration initialized');
    
    // Function to load video analytics (would connect to an analytics service in a real app)
    function trackVideoEngagement() {
        const videoSections = document.querySelectorAll('.video-wrapper');
        
        if (videoSections.length) {
            console.log(`Tracking ${videoSections.length} videos for engagement`);
            
            // In a real application, this would connect to video analytics APIs
            // For demo purposes, we'll just log when videos are in viewport
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('Video in viewport:', entry.target);
                        // Would trigger video play or analytics in a real app
                    }
                });
            }, { threshold: 0.5 });
            
            videoSections.forEach(video => {
                observer.observe(video);
            });
        }
    }
    
    // Initialize video tracking
    trackVideoEngagement();
    
    // Video background effects for tech showcase
    const videoOverlays = document.querySelectorAll('.video-overlay');
    
    if (videoOverlays.length) {
        videoOverlays.forEach(overlay => {
            // Add hover effect
            const videoWrapper = overlay.closest('.video-wrapper');
            
            if (videoWrapper) {
                videoWrapper.addEventListener('mouseenter', () => {
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'translateY(0)';
                });
                
                videoWrapper.addEventListener('mouseleave', () => {
                    overlay.style.opacity = '0.7';
                    overlay.style.transform = 'translateY(10px)';
                });
            }
        });
    }
});
