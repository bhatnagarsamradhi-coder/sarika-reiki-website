// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


// ================================
// APPOINTMENT FORM
// ================================

const appointmentForm =
    document.getElementById("appointmentForm");

const appointmentMessage =
    document.getElementById("appointmentMessage");


if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            appointmentMessage.textContent =
                "Thank you! Your appointment request has been received. Sarika will contact you for confirmation.";

            appointmentMessage.style.color =
                "#496b5a";

            appointmentForm.reset();

        }
    );

}


// ================================
// REVIEW FORM
// ================================

const reviewForm =
    document.getElementById("reviewForm");

const reviewMessage =
    document.getElementById("reviewMessage");


if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            reviewMessage.textContent =
                "Thank you! Your review has been submitted and will be reviewed before publication.";

            reviewMessage.style.color =
                "#496b5a";

            reviewForm.reset();

        }
    );

}