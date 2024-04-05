document.addEventListener("DOMContentLoaded", function() {
    var feedbackForm = document.getElementById("feedbackForm");
    var showFormLink = document.getElementById("showFormLink");
    var closeBtn = document.getElementById("closeBtn");

    showFormLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        feedbackForm.style.display = "block"; // Show the feedback form
    });

    closeBtn.addEventListener("click", function() {
        feedbackForm.style.display = "none"; // Hide the feedback form when close button is clicked
    });
	
submitForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Display popup message with the submitted data
        var submittedData = "Submit Successful\nName: " + name + "\nEmail: " + email + "\nFeedback: " + message;
        alert(submittedData);
		location.reload();
		

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });

});

<!-- Google tag (gtag.js) -->

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4ZEM912YLQ');



