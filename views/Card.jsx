const React = require('react');
const Layout = require('./Layout');

function Card({ good, user }) {
  return (
    <div className="add-card-container">
      {/* {user && user.seller && (
        <div className="card text-center" style={{ width: '18rem' }}>
          <img
            src={good.photo}
            className="card-img-top"
            alt="This is pictures"
          />
          <div className="card-body">
            <h5 className="card-title">{good.title}</h5>
            <p className="card-text">{good.description}</p>
            <a href="/" data-id={good.id} className="btn btn-secondary btn-sm change-card">Изменить</a>
            <a data-id={good.id} href={`/delete/${good.id}`} className="btn btn-secondary btn-sm delete-card">Удалить</a>
          </div>
          <script defer src="/changeGood.js" />
        </div>
      )} */}
      {/* {user && (
      <div className="card text-center" style={{ width: '18rem' }}>
        <img
          src={good.photo}
          className="card-img-top"
          alt="This is pictures"
        />
        <div className="card-body ">
          <h5 className="card-title">{good.title}</h5>
          <p className="card-text">{good.description}</p>
          <h5 className="card-title">{`Цена: ${good.price}`}</h5>
          <h5 className="card-title">{`В наличии: ${good.quantity} шт.`}</h5>
          <a href="/" data-id={good.id} className="btn btn-secondary btn-sm change-card">Изменить</a>
          <a data-id={good.id} href={`/delete/${good.id}`} className="btn btn-secondary btn-sm delete-card">Удалить</a>
          <a data-id={good.id} href={`/add/good/${good.id}`} className="btn btn-secondary btn-sm add-basket-btn">Добавить в корзину</a>
        </div>

      </div>
      )} */}
      {user && user.id === good.user_id && !good.isDelete && (
        <div className="card text-center" style={{ width: '18rem' }}>
          <img
            src={good.photo}
            className="card-img-top"
            alt="This is pictures"
          />
          <div className="card-body ">
            <h5 className="card-title">{good.title}</h5>
            <p className="card-text">{good.description}</p>
            <h5 className="card-title">{`Цена: ${good.price}`}</h5>
            <h5 className="card-title">{`В наличии: ${good.quantity} шт.`}</h5>
            <a href="/" data-id={good.id} className="btn btn-secondary btn-sm change-card">Изменить</a>
            <a data-id={good.id} href={`/delete/${good.id}`} className="btn btn-secondary btn-sm delete-card">Удалить</a>
          </div>

        </div>
      )}
      {user && user.id !== good.user_id && !good.isDelete && (
      <div className="card text-center" style={{ width: '18rem' }}>
        <img
          src={good.photo}
          className="card-img-top"
          alt="This is pictures"
        />
        <div className="card-body ">
          <h5 className="card-title">{good.title}</h5>
          <p className="card-text">{good.description}</p>
          <h5 className="card-title">{`Цена: ${good.price}`}</h5>
          <h5 className="card-title">{`В наличии: ${good.quantity} шт.`}</h5>
          <a data-id={good.id} href={`/add/good/${good.id}`} className="btn btn-secondary btn-sm add-basket-btn">Добавить в корзину</a>
        </div>

      </div>
      )}
      {!user && !good.isDelete && (
        <div className="card text-center" style={{ width: '18rem' }}>
          <img
            src={good.photo}
            className="card-img-top"
            alt="This is pictures"
          />
          <div className="card-body ">
            <h5 className="card-title">{good.title}</h5>
            <p className="card-text">{good.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

module.exports = Card;
