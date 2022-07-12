const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authRouter.post('/reg', async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      role,
      surname,
    } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      res.json({ status: 'falure', errorMessage: 'Пользователь уже зарегистрирован' });
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hash,
      role,
      surname,
    });
    res.redirect('/log');
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

authRouter.post('/log', async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;
    const checkedUser = await User.findOne({ where: { email }, raw: true });

    const isSame = await bcrypt.compare(password, checkedUser.password);
    if (checkedUser.email === email && isSame) {
      // req.session.userId = checkedUser.id;
      req.session.user = checkedUser;
      res.redirect('/home');
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});
authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = authRouter;
