const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinates = document.getElementById("coordinates");

function handleSubmit() {
    const name = nameInput.value.trim();
    
    if (name === "") {
        outputDiv.textContent = "Error: Please enter a name.";
        outputDiv.style.backgroundColor = "red";
        outputDiv.style.color = "white"; 
    } else {
        outputDiv.textContent = `Welcome, ${name}!`;
        outputDiv.style.backgroundColor = "green";
        outputDiv.style.color = "white"; 
    }
}

submitButton.addEventListener("click", handleSubmit);

nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        handleSubmit(); 
    }
});

mouseTracker.addEventListener("mousemove", function(event) {
    const x = event.clientX - mouseTracker.getBoundingClientRect().left;
    const y = event.clientY - mouseTracker.getBoundingClientRect().top;
    
    coordinates.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});
