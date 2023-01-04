
// -----------------navbar   

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})


// ----------------swiper slide header

var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
});

// ----------------------second swiper testimonial slider

var swiper1 = new Swiper(".mySwiper", {
    cssMode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// -----------------------------
// ----------to top buttton

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");
    }

})

// ----------------preloader

setTimeout(function(){

$('.loader_bg').fadeToggle();

}, 4500);












