/** Document Object Model. */
window.addEventListener('resize', function (event) {
  console.log(window.innerWidth);
});

const textDOM = document.querySelector('.text-center');

textDOM.addEventListener('click', () => {
  const changeDOM = document.querySelector('.change-me');
  changeDOM.textContent = 'Hello, Reijo.';

  setTimeout(() => {
    changeDOM.textContent = '';
  }, 3000);
});
