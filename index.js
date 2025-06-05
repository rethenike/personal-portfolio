
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
            const tabName = this.dataset.tab;
            opentab(event, tabName);
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


// Add animation to portfolio section
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



// Add hover effect to each letter in the sub-title
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".sub-title, .subtitle").forEach(title => {
        let text = title.textContent;
        title.innerHTML = ""; // Clear existing text

        // Wrap each letter in a <span>
        text.split("").forEach(letter => {
            let span = document.createElement("span");
            span.textContent = letter;
            title.appendChild(span);
        });

        title.addEventListener("mousemove", (e) => {
            title.querySelectorAll("span").forEach(span => {
                let rect = span.getBoundingClientRect();
                let x = e.clientX - rect.left - rect.width / 2;
                let y = e.clientY - rect.top - rect.height / 2;
                let distance = Math.sqrt(x * x + y * y);

                // Apply scaling based on proximity
                let scale = 1 + Math.max(0, 20 - distance) / 50;
                span.style.transform = `scale(${scale})`;
            });
        });

        title.addEventListener("mouseleave", () => {
            title.querySelectorAll("span").forEach(span => {
                span.style.transform = "scale(1)";
            });
        });
    });
});


// typing animation
document.addEventListener("DOMContentLoaded", function () {
    const fullText = "I am Philipp Tsang from Amsterdam"; 
    const speed = 150; 
    let index = 0;
    const typedHeader = document.getElementById("typed-header");

    function typeEffect() {
        if (index < fullText.length) {
            let currentText = fullText.substring(0, index + 1); 

                
            currentText = currentText.replace("Philipp", "<span>Philipp</span>");

            typedHeader.innerHTML = currentText; 
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typedHeader.innerHTML = ""; 
    setTimeout(typeEffect, 1000); 
});
