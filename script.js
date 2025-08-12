// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const invitationText = document.getElementById('invitationText');
    const bgVideo = document.getElementById('bgVideo');
    
    // Show the text after 7 seconds
    setTimeout(() => {
        invitationText.classList.add('show');
    }, 7000);
    
    // Add click functionality to switch to WBG2.mp4 and make text disappear
    invitationText.addEventListener('click', function() {
        // Change video source to WBG2.mp4
        bgVideo.src = 'VIDS/WBG2.mp4';
        
        // Enable unmuted playback
        bgVideo.muted = false;
        
        // Make the invitation text disappear
        invitationText.style.display = 'none';
        
        // Reload and play the new video
        bgVideo.load();
        bgVideo.play().catch(e => console.log('Video play failed:', e));
    });
    
    // Listen for video end to switch to WBG3.mp4
    bgVideo.addEventListener('ended', function() {
        if (bgVideo.src.includes('WBG2.mp4')) {
            // Switch to WBG3.mp4 when WBG2.mp4 ends
            bgVideo.src = 'VIDS/WBG3.mp4';
            bgVideo.load();
            bgVideo.play().catch(e => console.log('Video play failed:', e));
        }
    });
});
