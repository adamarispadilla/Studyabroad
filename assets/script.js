document.addEventListener('DOMContentLoaded', () => {
  const squareContainer = document.querySelector('.square-container');

  squareContainer.addEventListener('click', (event) => {
    const clickedSquare = event.target.closest('.face front');
    if (clickedSquare) {
      clickedSquare.classList.toggle('flipped');
    }
  });
});