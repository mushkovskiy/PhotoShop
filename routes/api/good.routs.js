const goodRouter = require('express').Router();

const { Good } = require('../../db/models');

goodRouter.post('/create', async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      photo,
      quantity,
    } = req.body;
    const newGood = await Good.create({
      name,
      description,
      price,
      photo,
      quantity,
      user_id: req.session.user.id,
    });
    res.json({ newGood });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

goodRouter.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      photo,
      quantity,
    } = req.body;
    const updateGood = await Good.update({
      name,
      description,
      price,
      photo,
      quantity,
    }, {
      where: { id },
    });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
  res.redirect('/home');
});

goodRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateGood = await Good.update({
      isDelete: true,
    }, {
      where: { id },
    });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
  res.send('Ok');
});

goodRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const good = await Good.findOne({
      where: {
        id,
      },
    });
    good.quantity -= req.body.quantity;
    await good.save();
    res.send('Ok');
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = goodRouter;
