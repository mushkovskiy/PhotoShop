const React = require('react');

function ChangeGoodForm({ id, good }) {
  return (
    <form data-id={id} className="signup-form add-good change-card-form" action={`/good/${id}`} method="post">
      <div className="form-group mt-5">
        <input type="text" name="name" className="form-control" placeholder="Название товара..." required value={good.name} />
      </div>
      <div className="form-group mt-5">
        <input type="text" name="description" className="form-control" placeholder="Описание..." required value={good.description} />
      </div>
      <div className="form-group mt-5">
        <input type="text" name="price" className="form-control" placeholder="Цена..." required value={good.price} />
      </div>
      <div className="form-group mt-5">
        <input type="text" name="photo" className="form-control" placeholder="Url фотографии..." required value={good.photo} />
      </div>
      <div className="form-group mt-5">
        <input type="text" name="quantity" className="form-control" placeholder="Количество товара..." required value={good.quantity} />
      </div>
      <div className="text-center mt-5">
        <button type="submit" className="btn btn-secondary">&nbsp;  Изменить &nbsp;</button>
      </div>

    </form>

  );
}
module.exports = ChangeGoodForm;
