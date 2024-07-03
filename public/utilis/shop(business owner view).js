document.addEventListener("DOMContentLoaded", function() {
    // Get all settings icon elements
    var settingsIcons = document.querySelectorAll(".settings-icon");
  
    // Loop through each settings icon
    for (var i = 0; i < settingsIcons.length; i++) {
      var settingsIcon = settingsIcons[i];
  
      // Get the corresponding dropdown content element (assuming it's a sibling)
      var dropdownContent = settingsIcon.nextElementSibling;
  
      // Toggle function for this specific dropdown
      function toggleDropdown(icon) {
        icon.nextElementSibling.classList.toggle("show");
      }
  
      // Event listener for click on each settings icon
      settingsIcon.addEventListener("click", function() {
        toggleDropdown(this); // Pass the clicked icon element to the function
      });
    }
  
    // Close the dropdown when clicking outside of any dropdown
    document.addEventListener("click", function(event) {
      if (!event.target.closest(".dropdown")) {
        // Use querySelectorAll to target all dropdown content elements
        var dropdownContents = document.querySelectorAll(".dropdown1-content");
        for (var i = 0; i < dropdownContents.length; i++) {
          dropdownContents[i].classList.remove("show");
        }
      }
    });
  });
  