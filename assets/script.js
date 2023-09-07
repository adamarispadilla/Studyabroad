const squareContainer = document.querySelector('.square-container');

squareContainer.addEventListener('click', (event) => {
  const clickedSquare = event.target.closest('.square');
  if (clickedSquare) {
    clickedSquare.classList.toggle('flipped');
  }
});