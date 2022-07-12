const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

const { Context } = require('../middlewares/reactSsr');

function Home({ goods }) {
  const { user } = React.useContext(Context);

  return (
    <Layout user={user}>
      <div className="card-container">
        {goods.map((good) => (
          <Card key={good.id} good={good} user={user} />
        ))}
      </div>
      <script src="/application.js" />
    </Layout>
  );
}
module.exports = Home;
