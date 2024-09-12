let userPassword = prompt("Please enter a password")
let confirmPassword;


do{
    confirmPassword = prompt("Please re-enter a password")

    if (confirmPassword !== userPassword) {
        alert("Passwords do not match");
    }
} while (userPassword !== confirmPassword);

alert("Passwords match");