const React = require('react');

const BasketCard = require('./BasketCard');
const Layout = require('./Layout');

function Basket({ userGoods, user }) {
  console.log(userGoods);
  // console.log(userGoods[0]['Goods.UserGood.good_id']);
  return (
    <Layout user={user}>
      <div className="container basket-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="/">Мои товары</a>
        </nav>
        <div className="card-container">
          {}
          {userGoods[0]['Goods.UserGood.good_id'] && (userGoods.map((good) => <BasketCard key={good['Goods.id']} good={good} />))}
          {/* {userGoods.map((good) => <BasketCard key={good['Goods.id']} good={good} />)} */}
        </div>
      </div>
      <script defer src="/application.js" />
      <script defer src="/basket.js" />

    </Layout>

  );
}
module.exports = Basket;
