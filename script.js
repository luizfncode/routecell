const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(".card, .faq-item")
.forEach(el => {

    el.classList.add("reveal");
    observer.observe(el);

});

document
.querySelectorAll(".faq-item button")
.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        answer.style.display =
        answer.style.display === "block"
        ? "none"
        : "block";

    });

});
