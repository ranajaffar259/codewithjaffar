document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    function fixNavbarOnScroll() {
        if (window.pageYOffset >= 1500) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    }

    // Call the fixNavbarOnScroll function on initial load
    fixNavbarOnScroll();

    // Listen to the scroll event and call the fixNavbarOnScroll function on every scroll
    window.addEventListener("scroll", fixNavbarOnScroll);
});

var welcome = gsap.timeline()
welcome.from("#nav li,#logo", {
    opacity: 0,
    x: -300,
    stagger: .2
})

welcome.from("#welcome h1", {
    opacity: 0,
    x: -300,
})

welcome.from("#welcome #jaffarImg", {
    opacity: 0,
})

welcome.to("#welcome h1", {
    y: 200,
    scrollTrigger: {
        trigger: "#welcome h1",
        scroller: "body",
        // markers: true,
        start: "top 0",
        end: "top 100%",
        scrub: 2,
    }
})

welcome.to("#welcome #jaffarImg", {
    scale: 1.1,
    opacity: .8,
    scrollTrigger: {
        trigger: "#welcome",
        scroller: "body",
        // markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})

var profile = gsap.timeline({
    scrollTrigger: {
        trigger: "#profile",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 40%",
        scrub: 2,
    }
})

profile.from("#profile h1,#profile p", {
    scale: 2,
    duration: 3,
    y: -30,
    opacity: 0,
    stagger: 1,
})


var showreel = gsap.timeline({
    scrollTrigger: {
        trigger: "#showreel",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 0%",
        scrub: 2,
    }
})

showreel.from("#showreel h1", {
    opacity: 0,
    scale: 1.2,
    y: -30,
})

showreel.from("#showreel .portfolio-item", {
    opacity: 0,
    scale: 1.1,
})

var expertise = gsap.timeline({
    scrollTrigger: {
        trigger: "#expertise",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -300%",
        scrub: 2,
        pin: true
    }
})

expertise.from("#expertise h1,#expertise h2,#expertise h3,#expertise .skill-img, #expertise .service-item", {
    opacity: 0,
    scale: 1.1,
    y: -40,
    stagger: .1,
})



var connect = gsap.timeline({
    scrollTrigger: {
        trigger: "#connect",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 100%",
        scrub: 2,
    }
})


connect.from("#connect p", {
    opacity: 0,
    scale: 2,
    y: -30,
    stagger: .3,
})
