document.addEventListener('DOMContentLoaded', function () {
    // Set the current date dynamically
    document.getElementById('current-date').innerText = new Date().toLocaleDateString();

    // Add your JavaScript functionality for form validation and dynamic behavior
})
function toggleHourlyRateInput(show) {
    const hourlyRateContainer = document.getElementById('hourlyRateContainer');
    hourlyRateContainer.style.display = show ? 'block' : 'none';
}

function validateForm() {
    const form = document.getElementById('contactForm');
    return form.checkValidity(); // HTML5 form validation
};
