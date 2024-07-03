document.addEventListener('DOMContentLoaded', function () {
    const userButton = document.querySelector('.user-image-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const landingButton = document.querySelector('.landing-button');
    const landingDropdownContent = document.querySelector('.landing-dropdown-content');
    const topBarLink = document.getElementById('top-bar-link');
    const topBarForm = document.getElementById('top-bar-form');

    userButton.addEventListener('click', function () {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function (event) {
        if (!userButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    landingButton.addEventListener('mouseover', function () {
        landingDropdownContent.style.display = 'block';
    });

    landingButton.addEventListener('mouseout', function () {
        landingDropdownContent.style.display = 'none';
    });

    landingDropdownContent.addEventListener('mouseover', function () {
        landingDropdownContent.style.display = 'block';
    });

    landingDropdownContent.addEventListener('mouseout', function () {
        landingDropdownContent.style.display = 'none';
    });

    topBarLink.addEventListener('click', function () {
        topBarForm.style.display = 'flex';
        // Hide other forms if necessary
    });

    document.querySelectorAll('.landing-dropdown-item').forEach(item => {
        item.addEventListener('click', function () {
            landingDropdownContent.style.display = 'none';
        });
    });
});

