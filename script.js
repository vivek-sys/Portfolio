document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded");
});

function toggleModal() {
    const modal = document.getElementById('aboutModal');
    modal.classList.toggle('hidden');
}

window.addEventListener("load", function () {
    document.getElementById("animatedText").classList.add("opacity-100");
});
// Create a custom black cursor
const cursorDot = document.createElement("div");
cursorDot.classList.add("cursor-dot");
document.body.appendChild(cursorDot);

// Track cursor movement and update position
document.addEventListener("mousemove", function(event) {
    cursorDot.style.left = event.pageX + "px";
    cursorDot.style.top = event.pageY + "px";

    // Create floating bubbles effect
    let bubble = document.createElement("div");
    bubble.className = "bubble";
    document.body.appendChild(bubble);

    // Set bubble position
    bubble.style.left = event.pageX + "px";
    bubble.style.top = event.pageY + "px";

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 1000);
});


function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle("hidden");
}