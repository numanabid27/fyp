document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.user-image-btn').addEventListener('click', () => {
        document.querySelector('.dropdown-menu').classList.toggle('show');
    });

    window.onclick = function(event) {
        if (!event.target.matches('.user-image-btn')) {
            const dropdowns = document.getElementsByClassName('dropdown-menu');
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});
