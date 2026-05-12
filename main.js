function loginUser() {
  
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
}
    if (username === "2526student1" && password === "12345") {
        window.alert("Login successful! Welcome, " + username + "!");
        window.location.href = "notebook.html"; 


    } else {
        window.alert("Login failed! Please check your username and password.");
    }
    function showHelp() {
    window.alert("Username = 2526student1 and Password = 12345");
}