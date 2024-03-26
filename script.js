
function revealToSpan() {
    document.querySelectorAll(".reveal")
.forEach(function (elem) {
    // create 2 span 
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML= elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML="";
    elem.appendChild(parent);
});
}
revealToSpan();




 var tl = gsap.timeline();

tl
.from(" .parent .child span ", {
    x:100,
    opacity:0,
    duration: 1.4,
    stagger : .2,
    ease: Power3.easeInOut
})
  .to(".parent .child ", {
        y:"-100%",
        duration: 1 ,
        ease: Circ.easeInOut
    })
.to("#loader", {
    height:0,
    duration:1,
    ease:Circ.easeInOut
})
.to("#green", {
    height:"100%",
    duration:1,
    top:0,
    delay: -.8,
    ease:Circ.easeInOut
})
.to("#green", {
    height:"0%",
    duration:1,
    delay: -.5,
    ease:Circ.easeInOut
})

    .from(".header, .header .logo, .header .menu", {
        y: "-100%",
        duration: .5,
        stagger:.5
        
    })
    .from("#home", {
        y: "-20%",
        opacity: 0,
        duration:.5,
        delay:.5
    })


    .from("#about", {
        scrollTrigger: {
        trigger: ".text-container",
        // markers: true,
        start: "top top",
        end: "+=600",
        scrub: 1,
    },
        y: 100,
        scale: 0.1,
        transformOrigin: "50% 50%",
        opacity: 0,
        stagger: 0.05
    })
.from("#projects", {
        scrollTrigger: {
        trigger: "#port-container",
        // markers: true,
        start: "top 120%",
        end: "+=600",
        scrub: 1,
    },
        y: 100,
        scale: 0.1,
        transformOrigin: "50% 50%",
        opacity: 0,
        stagger: 0.05
})
.from("#education", {
        scrollTrigger: {
        trigger: ".education-heading",
        // markers: true,
        start: "top 120%",
        end: "+=600",
        scrub: 1,
    },
        y: 100,
        scale: 0.1,
        transformOrigin: "50% 50%",
        opacity: 0,
        stagger: 0.05
})
.from("#contact", {
        scrollTrigger: {
        trigger: ".contact-heading",
        // markers: true,
        start: "top 250%",
        scrub: 1,
    },
        y: 100,
        scale: 0.1,
        transformOrigin: "50% 50%",
        opacity: 0,
        stagger: 0.05
})

