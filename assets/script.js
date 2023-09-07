
const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

// Iterate through each tooltip trigger element
tooltipTriggers.forEach(trigger => {
  // Get the tooltip text from the "data-tooltip" attribute
  const tooltipText = trigger.getAttribute('data-tooltip');

  // Create a tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = tooltipText;

  // Append the tooltip to the body
  document.body.appendChild(tooltip);

  // Show the tooltip when hovering over the trigger
  trigger.addEventListener('mouseover', () => {
    tooltip.style.opacity = '1';
  });

  // Hide the tooltip when the mouse leaves the trigger
  trigger.addEventListener('mouseout', () => {
    tooltip.style.opacity = '0';
  });
});