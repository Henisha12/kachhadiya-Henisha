// =============================
// INITIALIZE AOS
// =============================

AOS.init({
    duration: 1000,
    once: true
});

// =============================
// TYPING EFFECT
// =============================

new Typed("#typing", {
    strings: [
        "Junior Front-End Developer",
        "Full Stack Developer",
        "React Developer",
        "JavaScript Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1800,
    loop: true
});

// =============================
// DARK / LIGHT MODE
// =============================

const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

} else {

    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// =============================
// SCROLL TO TOP BUTTON
// =============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.style.display = "none";

scrollBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// =============================
// MOBILE MENU
// =============================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// Close menu after click

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

// =============================
// ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =============================
// HEADER SHADOW
// =============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


// =============================
// CONSOLE MESSAGE
// =============================

console.log("%cWelcome 👋", "color:#38bdf8;font-size:22px;font-weight:bold;");
console.log("Portfolio Designed by Henisha Kachhadiya");
//==========================
// COUNTER ANIMATION
//==========================

const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const current = +counter.innerText;

            const increment = target / speed;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(update, 10);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats"));
// =============================
// LOADER
// =============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },1000);

});

// =============================
// SCROLL PROGRESS
// =============================

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progress=

(window.pageYOffset/totalHeight)*100;

document.getElementById("progress-bar").style.width=

progress+"%";

});

YOUR_PUBLIC_KEY
emailjs.init("Dfeb8Pip3bBAEuIAb");

const form = document.getElementById("contact-form");

form.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_4wsr914",

"template_qumj5rs",

this

)

.then(()=>{

alert("Message sent successfully!");

form.reset();

})

.catch(()=>{

alert("Something went wrong.");

});

});