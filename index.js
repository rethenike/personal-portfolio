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





// change colours when passing through text for header //



