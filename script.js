/*==================================================
                MENU MOBILE
==================================================*/

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("header nav");
const menuLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("active")) {

        icon.classList.remove("ti-menu-2");
        icon.classList.add("ti-x");

    } else {

        icon.classList.remove("ti-x");
        icon.classList.add("ti-menu-2");

    }

});


/*==================================================
            FECHAR MENU AO CLICAR NO LINK
==================================================*/

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("ti-x");
        icon.classList.add("ti-menu-2");

    });

});


/*==================================================
        FECHAR MENU CLICANDO FORA
==================================================*/

document.addEventListener("click", (e) => {

    const clickMenu = nav.contains(e.target);

    const clickButton = menuBtn.contains(e.target);

    if (!clickMenu && !clickButton && nav.classList.contains("active")) {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("ti-x");
        icon.classList.add("ti-menu-2");

    }

});


/*==================================================
                HEADER SCROLL
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

/*==================================================
                FAQ
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector("button");

    button.addEventListener("click", () => {

        const activeItem = document.querySelector(".faq-item.active");

        if (activeItem && activeItem !== item) {

            activeItem.classList.remove("active");

        }

        item.classList.toggle("active");

    });

});


/*==================================================
        ANIMAÇÃO AO ENTRAR NA TELA
==================================================*/

const animatedElements = document.querySelectorAll(`
    .card,
    .process-card,
    .brand-card,
    .testimonial-card,
    .faq-item
`);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/*==================================================
                MENU ATIVO
==================================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});

/*==================================================
            BOTÃO VOLTAR AO TOPO
==================================================*/

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================================
            BARRA DE PROGRESSO
==================================================*/

const progressBar = document.querySelector("#scrollProgress");

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = `${progress}%`;

});


/*==================================================
        REVELAR HERO SUAVEMENTE
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==================================================
        PREVENIR CLIQUES DUPLOS
==================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", () => {

        button.style.pointerEvents = "none";

        setTimeout(() => {

            button.style.pointerEvents = "auto";

        }, 1000);

    });

});