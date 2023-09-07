function showTooltip(id, text) {
    const img = document.getElementById(id);

    // Create a tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = text;

    // Position the tooltip
    const imgRect = img.getBoundingClientRect();
    tooltip.style.left = imgRect.left + imgRect.width / 2 + "px";
    tooltip.style.top = imgRect.bottom + 10 + "px";

    // Append the tooltip to the body
    document.body.appendChild(tooltip);
}

// Function to hide the tooltip
function hideTooltip() {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
        tooltip.remove();
    }
}

// Add event listeners to each image
document.getElementById("txt").addEventListener("mouseover", () => {
    showTooltip("txt", "This is a text artifact.");
});
document.getElementById("txt").addEventListener("mouseout", hideTooltip);

document.getElementById("snoopy").addEventListener("mouseover", () => {
    showTooltip("snoopy", "This is Snoopy.");
});
document.getElementById("snoopy").addEventListener("mouseout", hideTooltip);

document.getElementById("diana").addEventListener("mouseover", () => {
    showTooltip("diana", "This is Diana.");
});
document.getElementById("diana").addEventListener("mouseout", hideTooltip);

document.getElementById("seoul").addEventListener("mouseover", () => {
    showTooltip("seoul", "This is Seoul.");
});
document.getElementById("seoul").addEventListener("mouseout", hideTooltip);