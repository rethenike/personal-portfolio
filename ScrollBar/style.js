
document.addEventListener("DOMContentLoaded", function () {
    const techTrack = document.querySelector(".tech-track");
    const items = Array.from(techTrack.children);

    // Function to duplicate items for seamless loop
    function duplicateItems() {
        let totalWidth = 0;
        const parentWidth = techTrack.parentElement.clientWidth;

        while (totalWidth < parentWidth * 2) {
            items.forEach(item => {
                const clone = item.cloneNode(true);
                techTrack.appendChild(clone);
                totalWidth += item.offsetWidth + 40; 
            });
        }
    }

    duplicateItems(); 

    // Pause scrolling when hovered
    techTrack.addEventListener("mouseenter", () => {
        techTrack.style.animationPlayState = "paused";
    });

    techTrack.addEventListener("mouseleave", () => {
        techTrack.style.animationPlayState = "running";
    });
});


