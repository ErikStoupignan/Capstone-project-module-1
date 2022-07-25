// Hamburguer button works
const modal = document.querySelector('#modal-menu');
const hambIcon = document.querySelector('#burguer-icon');
const xIcon = document.querySelector('#x-icon');
const list = document.querySelector('#list-menu');

// Open de hamburguer menu
hambIcon.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close de hamburguer menu
xIcon.addEventListener('click', () => {
  modal.style.display = 'none';
});

// If click in an option from de memu, close the menu
list.addEventListener('click', () => {
  hambIcon.style.display = 'block';
});