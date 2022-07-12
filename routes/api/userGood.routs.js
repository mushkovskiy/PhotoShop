const userGoodRouter = require('express').Router();

const { UserGood, User } = require('../../db/models');

// Добавление товара в корзину
userGoodRouter.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userGoods = await UserGood.create({
      user_id: req.session.user.id,
      good_id: id,
    });
  } catch (err) {
    res.status(500).send('Database failure');
  }

  res.send('Товар добавлен в корзину');
});

// Удаление товара из корзины
userGoodRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBasketCard = await UserGood.destroy({
      where: {
        good_id: id,
      },
    });
    res.status(200).send('delete success');
  } catch (err) {
    res.status(500).send('Database failure');
  }
});

module.exports = userGoodRouter;
