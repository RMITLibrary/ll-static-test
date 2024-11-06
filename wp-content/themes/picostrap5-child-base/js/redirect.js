console.log("Redirect js file loaded");

 // Get the full URL
 var fullUrl = window.location.href;
 // Create a URL object
 var url = new URL(fullUrl);
 // Get the base URL
 var siteUrl = url.origin;

 // Output the base URL
 console.log(redirectPath);

 // Redirect after 5 seconds
 setTimeout(function() {
     window.location.href = siteUrl + redirectPath;
 }, 5000);

