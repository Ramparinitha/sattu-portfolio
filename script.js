/* =========================================================
   TYPING ANIMATION
========================================================= */

const typingText =
    document.getElementById("typing-text");

const roles = [
    "Java Developer",
    "Backend Developer",
    "Problem Solver",
    "Software Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (
            characterIndex === 0
        ) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex ===
                roles.length
            ) {

                roleIndex = 0;
            }
        }
    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}


typeEffect();



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const scrollPosition =
            window.scrollY + 200;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.id;
        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add(
                "active"
            );
        }

    });
}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            const targetId =
                this.getAttribute("href");


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});