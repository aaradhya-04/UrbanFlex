document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("thank-you-message").classList.remove("hidden"); // Show thank you message
    this.reset(); // Reset the form
});
