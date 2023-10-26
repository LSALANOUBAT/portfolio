document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay to show the loading animation (in milliseconds)
  var fakeLoadingTime = Math.floor(Math.random() * 2000 - 1000 + 1) + 1000;

  setTimeout(function () {
    // Hide loading overlay and display content
    document.querySelector(".loading-overlay").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, fakeLoadingTime);
});
