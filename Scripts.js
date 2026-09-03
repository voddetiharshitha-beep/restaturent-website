/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close menu when clicking a link */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   MENU FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter");

const menuItems =
    document.querySelectorAll(".menu-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active from all buttons */

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        /* Add active to clicked button */

        button.classList.add("active");


        const category =
            button.getAttribute("data-category");


        /* Show / hide menu items */

        menuItems.forEach(function (item) {

            const itemCategory =
                item.getAttribute("data-category");


            if (
                category === "all" ||
                category === itemCategory
            ) {

                item.style.display = "flex";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    if (name === "") {

        formMessage.textContent =
            "Please enter your name.";

        return;

    }


    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been sent.";


    /* Clear form */

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        "© " + new Date().getFullYear() +
        " Spice & Soul Restaurant";

}
