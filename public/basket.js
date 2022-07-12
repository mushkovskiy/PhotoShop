/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
const changeQuantity = document.querySelector('.quant-input');
const spanValue = document.querySelector('.span-value').innerText;

changeQuantity.addEventListener('click', (event) => {
  const count = event.target.value;
  if (+count !== 0) {
    document.querySelector('.span-value').innerText = count * spanValue;
  }
  if (+count <= 0) {
    event.target.value = 1;
  }
});

document.querySelector('.buy-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const res = await fetch(`/good/${event.target.dataset.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      quantity: event.target.querySelector('.quant-input').value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.text();
  if (data === 'Ok') {
    alert(`Мое почтение, вы купили товар! С вас ${event.target.querySelector('.span-value').innerText} копеечек`);
    window.location.href = '/home';
  }
});
