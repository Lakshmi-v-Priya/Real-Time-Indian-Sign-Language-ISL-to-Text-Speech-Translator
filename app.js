// Save Login Data
function loginUser() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (name === "" || pass === "") {
        alert("Please enter all fields!");
        return;
    }

    localStorage.setItem("username", name);
    window.location.href = "details.html";
}

// Save User Details
function saveDetails() {
    let age = document.getElementById("age").value;
    let purpose = document.getElementById("purpose").value;

    if (age === "" || purpose === "") {
        alert("Please fill all details");
        return;
    }

    localStorage.setItem("age", age);
    localStorage.setItem("purpose", purpose);

    window.location.href = "camera.html";
}

// Grant Camera Access
function allowCamera() {
    window.location.href = "translator.html";
}
