// script.js

function getFormvalue() {
    // Get the form element
    var form = document.getElementById("form1");

    // Access the form elements by their name attributes
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Display the form values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // Prevent the form from submitting (for this example)
    return false;
}
