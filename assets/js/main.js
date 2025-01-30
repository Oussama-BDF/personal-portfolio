// !Toggle the active class for navbar links and update the highlighter position
const highlighter = document.querySelector(".highlighter");

/**
 * Updates the highlighter's position and width to match the active navbar link.
 */
function updateHighlighterPosition(activeLink) {
    highlighter.style.left = `${activeLink.offsetLeft}px`;
    highlighter.style.width = `${activeLink.offsetWidth}px`;
}

// Set the highlighter position on page load if an active link exists
window.addEventListener('load', () => {
    const activeLink = document.querySelector(".navbar-link.active");
    if (activeLink) updateHighlighterPosition(activeLink);
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll(".navbar-link");
    links.forEach(li => {
        li.addEventListener("click", () => {
            if(!li.classList.contains("active")) {
                links.forEach(li => li.classList.remove("active"));
                li.classList.add("active");
    
                updateHighlighterPosition(li)
            }
        })
    });
});


// !Toggle dark and light mode
// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = (currentTheme === "dark") ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme); 

    // Save theme to localStorage
    localStorage.setItem("theme", newTheme);
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);

    document.querySelector(`.icon.${savedTheme}`).classList.add("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector(".theme-toggle");

    toggleBtn.addEventListener("click", () => {
        toggleBtn.querySelectorAll(".icon").forEach(i => i.classList.toggle("active"))
        toggleTheme();
    })
});