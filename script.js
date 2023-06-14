window.onload = function() {
    var acceptButton = document.getElementById('accept');
    var declineButton = document.getElementById('decline');
    var popup = document.getElementById('cookie-consent-popup');

    acceptButton.onclick = function() {
        popup.style.display = 'none';
        document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";  // Set a cookie to remember the user's choice for 1 year
    }

    declineButton.onclick = function() {
        popup.style.display = 'none';
        document.cookie = "cookiesAccepted=false; max-age=31536000; path=/";
    }

    // Check if the user has already made a choice
    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookiesAccepted='))) {
        popup.style.display = 'none';
    }
}
