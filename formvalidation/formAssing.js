function validateForm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;

    
      if (name === "") {
        alert("Name is required");
        return false;
      }

    
      if (email === "" || !email.includes("@")) {
        alert("Enter a valid email");
        return false;
      }


      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
      }

      alert("Form submitted successfully!");
      return true;
    }