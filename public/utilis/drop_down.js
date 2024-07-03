document.addEventListener('DOMContentLoaded', function() {
    const userButton = document.querySelector('.dropdown .nav-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    userButton.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!userButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});
