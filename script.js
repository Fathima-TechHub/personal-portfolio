/* =========================================
   PAGE LOADER
========================================= */

const loader = document.getElementById("pageLoader");

if (loader) {
    window.addEventListener("load", () => {
        loader.classList.add("hidden");
    });
}


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(card => {

            const categories = card.dataset.category.split(" ");

            const showCard =
                filter === "all" ||
                categories.includes(filter);

            card.style.display = showCard
                ? "block"
                : "none";
        });
    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `${message}`;

        window.location.href =
            `mailto:mohamedanwarfathima@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;
    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}