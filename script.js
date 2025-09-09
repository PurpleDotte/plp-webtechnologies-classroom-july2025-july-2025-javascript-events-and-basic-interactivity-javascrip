//PART 1

//Change event
let nameInput = document.getElementById("nameInput");
let display = document.getElementById("nameDisplay");
let username = document.getElementById("username");
const displayButton = document.getElementById("displayButton");

nameInput.onchange = function(){
    display.textContent = `Hi ${nameInput.value}! Hover over this text, see what happens.`;
    username.value = nameInput.value;
}

//Mouse Over event
let text = document.getElementById("nameDisplay");

text.onmouseover = function(){
    text.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    text.style.fontWeight = "bold";
    displayButton.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    displayButton.style.fontWeight = "bold";
};

text.onmouseout = function(){
    text.style.color = 'gray';
    text.style.fontWeight = "normal";
};

//Click event(s)
let textDisplay = document.getElementById("textDisplay");
const darkModeButton = document.getElementById("darkMode");

displayButton.onclick = function(){
    textDisplay.textContent = `Nice meeting you, ${nameInput.value}!`;
}

//toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark");   
}

//Form Validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    //fetch form values
    username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //clear previous errors
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    //validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters.";
        isValid = false;
    }

    //validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    //validate password
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including letters and numbers.";
        isValid = false;
    }

    if (isValid) {
        alert("Signup Successful!");
        document.getElementById("myForm").reset();
    }
}
