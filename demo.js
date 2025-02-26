function saveName() {
    let name = document.getElementById("nam").value.trim();

    if (name !== "") {
        // Store the name in localStorage
        localStorage.setItem("username", name);

        // Redirect to the second page
        window.location.href = "demo2.html";
    } else {
        alert("Please enter your name.");
    }

    // Prevent form from actually submitting
    return false;
}
