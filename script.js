document.addEventListener('DOMContentLoaded', function() {
    const invitationText = document.getElementById('invitationText');
    const bgVideo = document.getElementById('bgVideo');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const overlay = document.getElementById('overlay');
    const venueLink = document.querySelector('a[href="#venue"]');
    const aboutLink = document.querySelector('a[href="#about"]');

    // Show the text after 7 seconds
    setTimeout(() => {
        invitationText.classList.add('show');
    }, 7000);

    // Add click functionality to switch to WBG2.mp4 and make text disappear
    invitationText.addEventListener('click', function() {
        bgVideo.src = 'VIDS/WBG2.mp4';
        bgVideo.muted = false;
        invitationText.style.display = 'none';
        bgVideo.load();
        bgVideo.play().catch(e => console.log('Video play failed:', e));
    });

    // Listen for video end to switch to WBG3.mp4
    bgVideo.addEventListener('ended', function() {
        if (bgVideo.src.includes('WBG2.mp4')) {
            bgVideo.src = 'VIDS/WBG3.mp4';
            bgVideo.load();
            bgVideo.play().catch(e => console.log('Video play failed:', e));
        }
    });

    // Hamburger menu toggle
    hamburgerBtn.addEventListener('click', function() {
        sideMenu.classList.add('open');
        overlay.classList.add('blur');
    });

    // Close button to hide side menu
    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('blur');
    });

    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('blur');
    });

    // Venue link to random location on maps
    venueLink.addEventListener('click', function(e) {
        e.preventDefault();
        const lat = (Math.random() - 0.5) * 180; // -90 to 90
        const lng = (Math.random() - 0.5) * 360; // -180 to 180
        const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(mapsUrl, '_blank');
    });

    // About Us link
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://raayacreations.onrender.com', '_blank');
    });
});
