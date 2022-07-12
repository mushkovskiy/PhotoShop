const path = require('path');
const morgan = require('morgan');
const express = require('express');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const isAuth = require('../middlewares/isAuth');
const reactSsrMiddleware = require('../middlewares/reactSsr');

const indexRouter = require('../routes/views/indexRouter');
const authViewsRouter = require('../routes/views/authViewsRouter');
const authRouter = require('../routes/api/authRouter');
const goodRouter = require('../routes/api/good.routs');
const userGoodRouter = require('../routes/api/userGood.routs');

module.exports = function configApp(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.resolve('public')));
  app.use(cookieParser());

  const sessionConfig = {
    store: new FileStore(),
    name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
    secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
    resave: false, // Пересохранять ли куку при каждом запросе
    saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
      httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    },
  };

  app.use(session(sessionConfig));
  app.use(isAuth);
  app.use(reactSsrMiddleware);

  app.get('/', (req, res) => {
    res.redirect('/home');
  });
  app.use('/', indexRouter); // основные странички
  app.use('/', authViewsRouter); // отдельно выделили роуты для вьюшек регистрации и логина
  app.use('/auth', authRouter); // летают фетчи
  app.use('/good', goodRouter);
  app.use('/basket', userGoodRouter);
};
