document.addEventListener("DOMContentLoaded", function () {
    var links = document.getElementsByClassName("links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (let link of links) {
            link.classList.remove("active");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Add event listeners to each tab link
    for (let link of links) {
        link.addEventListener("click", function (event) {
            opentab(this.getAttribute("onclick").replace("opentab('", "").replace("')", ""));
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a, .logo').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});



window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.8)";
        header.style.transition = "0.3s ease-in-out";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.5)";
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const portfolioSection = document.querySelector("#portfolio");
    const workItems = document.querySelectorAll(".work");

    const observerOptions = {
        root: null,
        threshold: 0.2
    };

    const portfolioObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                portfolioSection.classList.add("show");
                workItems.forEach((item, index) => {
                    setTimeout(() => item.classList.add("show"), index * 150);
                });
                observer.unobserve(portfolioSection);
            }
        });
    }, observerOptions);

    if (portfolioSection) {
        portfolioObserver.observe(portfolioSection);
    }
});
