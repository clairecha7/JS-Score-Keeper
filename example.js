const ulElm = document.querySelector('ul');

ulElm.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.textContent === '+') {
    console.log(e.target.previousElementSibling);
    let data = Number(e.target.previousElementSibling.textContent);
    data++;
    e.target.previousElementSibling.textContent = data;
  } else if (e.target.textContent === 'X') {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
});