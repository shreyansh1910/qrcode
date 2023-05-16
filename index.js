// Determine the user agent to redirect accordingly

var userAgent = navigator.userAgent || navigator.vendor || window.opera;
console.log(userAgent);
var isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
var isAndroid = /android/i.test(userAgent);

// Set the appropriate redirect URL based on the device
var redirectUrl = isIOS ? "https://apps.apple.com/in/app/voge/id6446778934" : "https://play.google.com/store/apps/details?id=com.voge&hl=en&gl=US";

window.location.href = redirectUrl;