
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    function opentab(event, tabname) {
        if (event) event.preventDefault();

        links.forEach(link => link.classList.remove("active"));
        tabcontents.forEach(tabcontent => {
            tabcontent.classList.remove("active-tab");
            tabcontent.style.opacity = "0";
            tabcontent.style.visibility = "hidden";
            tabcontent.style.clipPath = "inset(0 100% 0 0)";
            tabcontent.style.position = "absolute"; // Makes it disappear
        });

        // Activate selected tab
        event.currentTarget.classList.add("active");
        let activeTab = document.getElementById(tabname);

        // Add animation with slight delay
        setTimeout(() => {
            activeTab.classList.add("active-tab");
            activeTab.style.opacity = "1";
            activeTab.style.visibility = "visible";
            activeTab.style.clipPath = "inset(0 0% 0 0)";
            activeTab.style.position = "relative"; // Makes it appear naturally
        }, 100);
    }

    // Attach event listeners to all tabs :D
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            opentab(event, this.getAttribute("onclick").replace("opentab(event, '", "").replace("')", ""));
        });
    });
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
