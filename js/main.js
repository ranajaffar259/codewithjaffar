var welcome = gsap.timeline()

welcome.from("#nav li,#logo", {
    opacity: 0,
    x: -300,
    stagger: .1,
    duration: .2
})

Fancybox.bind("[data-fancybox]", {});

welcome.from("#welcome h1,#welcome .btn-slide", {
    opacity: 0,
    x: -300,
    stagger: .2
})

welcome.from("#welcome #jaffarImg", {
    opacity: .3,
})

welcome.to("#welcome h1,#welcome a", {
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
        start: "top 100%",
        end: "top 0%",
    }
})

profile.from("#profile h1,#profile p", {
    scale: 2,
    opacity: 0,
})


var showreel = gsap.timeline({
    scrollTrigger: {
        trigger: "#showreel",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%",
    }
})

showreel.from("#showreel h1", {
    opacity: 0,
    scale: 1.2,
    y: -30,
})

showreel.from("#showreel .portfolio-item", {
    opacity: 0,
    scale: 2,
})

var expertise = gsap.timeline({
    scrollTrigger: {
        trigger: "#expertise",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%",
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
        start: "top 70%",
        end: "top 0%",
    }
})


connect.from("#connect p", {
    opacity: 0,
    scale: 10,
    y: -130,
    stagger: .3,
})


var services = gsap.timeline({
    scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 50%",
    }
})

services.from("#services h1", {
    opacity: 0,
    scale: 1.2,
    y: -30,
})

services.from("#services .service-item", {
    opacity: 0,
    scale: 1.2,
    y: -30,
    stagger: .2,
})

var clients = gsap.timeline({
    scrollTrigger: {
        trigger: "#clients",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 0%",
    }
})

clients.from("#clients h4", {
    opacity: 0,
    scale: 1.2,
    y: -30,
})

clients.from("#clients .client-item", {
    opacity: 0,
    scale: 1.2,
    y: -130,
    stagger: .1,
})

