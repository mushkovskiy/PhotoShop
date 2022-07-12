const React = require('react');

function Card({ good }) {
  return (
    <div className="card mb-3" style={{ maxWidth: ' 540px', height: '150px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={good['Goods.photo']} className="card-img" alt="some image" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{good['Goods.name']}</h5>
            <form data-id={good['Goods.id']} className="buy-form" action="" method="POST">
              <div className="form-row">
                <div className="col">
                  <input type="number" name="quantity" className="form-control quant-input" placeholder="quantity" required value={1} />
                </div>
                <div className="col">
                  <span className="form-control span-value"><b>{good['Goods.price']}</b></span>
                </div>
                <div className="col">
                  <button type="submit" className="form-control btn btn-secondary">buy</button>
                </div>
              </div>
            </form>
            <a data-id={good['Goods.id']} href={`/add/good/${good.id}`} className="btn btn-secondary btn-sm delete-basket-btn">Удалить</a>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Card;
