const indexRouter = require('express').Router();

const Home = require('../../views/Home');
const Basket = require('../../views/Basket');
const CreateGood = require('../../views/CreateGood');
const ChangeGoodForm = require('../../views/ChangeGoodFrom');

const { Good, User } = require('../../db/models');

// Отрисовка главной страницы
indexRouter.get('/home', async (req, res) => {
  let goods;
  let user;
  try {
    if (req.session.user) {
      user = await User.findOne({
        raw: true,
        where: {
          id: req.session.user.id,
        },
      });
    }
    goods = await Good.findAll({
      raw: true,
    });
    // const joinUser = await User.findAll({
    //   raw: true,
    //   where: {
    //     id: req.session.user.id,
    //   },
    //   include: [User.Good],
    // });
    res.renderComponent(Home, { goods });
  } catch (err) {
    console.log(err);
    res.status(500).send('Database failure');
  }
});

indexRouter.get('/create', (req, res) => {
  res.renderComponent(CreateGood);
});

// Отрисовка карзины
indexRouter.get('/render/basket', async (req, res) => {
  let userGoods;
  let user;
  try {
    user = await User.findOne({
      raw: true,
      where: {
        id: req.session.user.id,
      },
    });
    userGoods = await User.findAll({
      raw: true,
      where: {
        id: req.session.user.id,
      },
      include: [User.Goods],
    });
    console.log(userGoods);
  } catch (err) {
    res.status(500).send('Database failure');
  }

  res.renderComponent(Basket, { userGoods, user });
});

// Отрисовка формы для изменения товара
indexRouter.post('/render/form/:id', async (req, res) => {
  const good = await Good.findOne({
    raw: true,
    where: {
      user_id: req.session.user.id,
    },
  });
  const { id } = req.params;

  res.renderComponent(ChangeGoodForm, { id, good }, { doctype: false });
});
module.exports = indexRouter;
