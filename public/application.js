/* eslint-disable no-param-reassign */
const addGoodField = document.querySelector('.create-good');
if (addGoodField) {
  addGoodField.addEventListener('submit', async (event) => {
    event.preventDefault();

    const res = await fetch('/good/create', {
      method: 'POST',
      body: JSON.stringify({
        name: event.target.name.value,
        description: event.target.description.value,
        price: event.target.price.value,
        photo: event.target.photo.value,
        quantity: event.target.quantity.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { newGood } = await res.json();

    if (newGood) {
      alert(`${newGood.name} создан`);
      window.location.href = '/home';
    }
  });
}

// CRUD операции с кнопками
const cardContainer = document.querySelector('.card-container');

if (cardContainer) {
  cardContainer.addEventListener('click', async (event) => {
    // Добавление карточки в корзину
    if (event.target.classList.contains('add-basket-btn')) {
      event.preventDefault();
      const res = await fetch(`/basket/${event.target.dataset.id}`, {
        method: 'POST',
      });
      const data = await res.text();
      alert(`${data}`);
    }

    // Форма для изменения карточки
    if (event.target.classList.contains('change-card')) {
      event.preventDefault();
      const res = await fetch(`/render/form/${event.target.dataset.id}`, {
        method: 'POST',
      });
      const data = await res.text();
      event.target.closest('.card-body').innerHTML = data;
    }

    // Удаление карточки
    if (event.target.classList.contains('delete-card')) {
      event.preventDefault();
      const res = await fetch(`/good/${event.target.dataset.id}`, {
        method: 'DELETE',
      });
      const data = await res.text();
      if (data === 'Ok') {
        event.target.closest('.add-card-container').remove();
      }
    }
  });
}

const basketContainer = document.querySelector('.basket-container');

if (basketContainer) {
  basketContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-basket-btn')) {
      event.preventDefault();
      const res = await fetch(`/basket/${event.target.dataset.id}`, {
        method: 'DELETE',
      });
      event.target.closest('.mb-3').remove();
    }
  });
}
