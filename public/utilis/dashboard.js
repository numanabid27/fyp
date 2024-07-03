document.addEventListener('DOMContentLoaded', function() {
    var filtersButton = document.getElementById('filters-button');
    var filtersDropdown = document.getElementById('filters-dropdown');

    filtersButton.addEventListener('click', function() {
      // Toggle the display of the dropdown menu
      filtersDropdown.style.display = filtersDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown if user clicks outside of it
    document.addEventListener('click', function(event) {
      if (!filtersDropdown.contains(event.target) && event.target !== filtersButton) {
        filtersDropdown.style.display = 'none';
      }
    });
  });

