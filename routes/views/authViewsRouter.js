const authViewsRouter = require('express').Router();

const Reg = require('../../views/Reg');
const Log = require('../../views/Log');

authViewsRouter.get('/reg', (req, res) => {
  res.renderComponent(Reg);
});

authViewsRouter.get('/log', (req, res) => {
  res.renderComponent(Log);
});

module.exports = authViewsRouter;
