document.getElementById("downloadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve the input value and perform necessary actions
    var inputUrl = document.getElementById("postUrl").value;
    // Add your logic to handle the input value (e.g., initiate download, display results, etc.)
  });

  var dropdowns = document.querySelectorAll("nav ul li");
dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener("mouseenter", function() {
    this.querySelector("ul").style.display = "block";
  });
  dropdown.addEventListener("mouseleave", function() {
    this.querySelector("ul").style.display = "none";
  });
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  