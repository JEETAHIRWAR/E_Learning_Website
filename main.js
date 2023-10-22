function previewFile() {
    var preview = document.querySelector('#img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}
$(function () {
    $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
    });
});


$(document).ready(function () {
    // When #profileUser is clicked, toggle the visibility of .profileUserPopup
    $('#profileUser').click(function () {
        $('.profileUserPopup').toggle();
    });
});

$(document).ready(function () {
    // When #profileUser is clicked, toggle the visibility of .profileUserPopup
    $('#UserProfile').click(function () {
        $('.userProfilePopup').toggle();
    });
});


$(document).ready(function () {
    $('#bellIcon').click(function () {
        $('#notificationPopup').toggle();
    });
});

$(document).ready(function () {
    // Attach a click event handler to the remove-notification icons
    $('.remove-notification').click(function () {
        // Find the parent <li> element and remove it
        $(this).closest('li').remove();
    });
});

$(document).ready(function () {
    // Attach a click event handler to the Clear button
    $('#clearButton').click(function () {
        // Remove all the list items within the .notificationList
        $('.notificationList').empty();
    });
});

$(document).ready(function () {
    var isRed = false;

    $('.toggle-heart').click(function () {
        if (isRed) {
            $(this).css('color', ''); // Remove the red color
        } else {
            $(this).css('color', 'red'); // Set the red color
        }

        isRed = !isRed; // Toggle the state
    });
});


$(document).ready(function () {
    var isGreen = false;

    $('.toggle-star').click(function () {
        if (isGreen) {
            $(this).css('color', ''); // Remove the red color
        } else {
            $(this).css('color', 'green'); // Set the red color
        }

        isGreen = !isGreen; // Toggle the state
    });
});

// Get references to the icon and the popupAlertContainer
const personCircleIcon = document.querySelector('.SignInSignUp');
const popupAlertContainer = document.querySelector('#popupAlertContainer');

// Add a click event listener to the personCircleIcon
personCircleIcon.addEventListener('click', function () {
    // Show the popupAlertContainer
    popupAlertContainer.style.display = 'block';
});

// You can also add code to close the popup when the close button (x) is clicked
const closePopupButton = document.querySelector('#close-popup');
closePopupButton.addEventListener('click', function () {
    // Hide the popupAlertContainer
    popupAlertContainer.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const signUpButton = document.getElementById("closesignup");
    const popupContainer = document.querySelector(".popupAlert-container");

    signUpButton.addEventListener("click", function () {
        // Check if input fields are filled
        if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            // All input fields are filled, hide the popup
            popupContainer.style.display = "none";
        } else {
            // At least one input field is empty, show an alert or take other action
            alert("Please fill in all required fields.");
        }
    });
});



const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const popupContainer = document.getElementById("popupContainer");

signUpButton.addEventListener("click", () => {
    popupContainer.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    popupContainer.classList.remove("right-panel-active");
});


document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const userName = document.getElementById("userName");
    const logoutButton = document.querySelector(".LogoutUser");

    // Check if the name is stored in localStorage
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        userName.textContent = storedName;
        nameInput.value = storedName;
    }

    nameInput.addEventListener("input", function () {
        const firstName = nameInput.value.trim();

        // Update the greeting with the entered first name
        userName.textContent = firstName || "User";

        // Store the name in localStorage
        localStorage.setItem("userName", firstName);
    });

    logoutButton.addEventListener("click", function () {
        // Remove the name from localStorage
        localStorage.removeItem("userName");

        // Reset the greeting and input
        userName.textContent = "User";
        nameInput.value = "";
    });
});


let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let countriesList = document.getElementsByClassName('countriesList')[0];

rightArrow.addEventListener('click', () => {
    countriesList.scrollLeft += 490;
});

leftArrow.addEventListener('click', () => {
    countriesList.scrollLeft -= 490;
});


document.addEventListener("DOMContentLoaded", function () {
    const data = [1, 3, 4, 2, 3, 1, 5]; // Replace with your data

    const lineChart = document.querySelector(".line-chart");

    data.forEach((value, index) => {
        const top = `${(6 - value) * 14}%`;
        const left = `${(index / 6) * 100}%`;
        const dataPoint = document.createElement("div");
        dataPoint.className = "data-point";
        dataPoint.style.top = top;
        dataPoint.style.left = left;
        lineChart.appendChild(dataPoint);
    });
});



// <!-- Happy Coding  -->

// <!-- Made By JEET -->