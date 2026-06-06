function showMessage() {
    alert("Registration will be available in next semester when backend is added.");
}

function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all required fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}