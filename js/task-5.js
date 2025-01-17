


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 
}
const btnElem = document.querySelector('.change-color');
const colorElem = document.querySelector('.color');
btnElem.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorElem.textContent = randomColor;

});






