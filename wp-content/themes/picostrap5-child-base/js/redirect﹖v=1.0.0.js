 // Get the full URL
 var fullUrl = window.location.href;
 // Create a URL object
 var url = new URL(fullUrl);
 // Get the base URL
 var siteUrl = url.origin;

 // Redirect after 5 seconds
 setTimeout(function() {
     window.location.href = siteUrl + redirectPath;
 }, 5000);

