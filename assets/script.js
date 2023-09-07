const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

tooltipTriggers.forEach(trigger => {
  const tooltipText = trigger.getAttribute('data-tooltip');

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = tooltipText;

  document.body.appendChild(tooltip);

  trigger.addEventListener('mouseover', () => {
    tooltip.style.opacity = '1';
  });

  trigger.addEventListener('mouseout', () => {
    tooltip.style.opacity = '0';
  });
});