const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/reactSsr');

function CreateGood() {
  const { user } = React.useContext(Context);
  return (
    <Layout user={user}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">

            <form className="signup-form create-good" action="/" method="post">
              <div className="form-group mt-5">
                <input type="text" name="name" className="form-control" placeholder="Название товара..." required autoComplete="off" />
              </div>
              <div className="form-group mt-5">
                <input type="text" name="price" className="form-control" placeholder="Цена..." required autoComplete="off" />
              </div>

              <div className="form-group mt-5">
                <input type="text" name="photo" className="form-control" placeholder="Url фотографии..." required autoComplete="off" />
              </div>
              <div className="form-group mt-5">
                <input type="text" name="quantity" className="form-control" placeholder="Количество товара..." required autoComplete="off" />
              </div>
              <div className="form-group mt-5">
                <textarea name="description" cols="54" rows="5" placeholder="Описание товара" autoComplete="off" />
              </div>
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-secondary">&nbsp; Добавить &nbsp;</button>
              </div>
            </form>
            <script src="/application.js" />
          </div>
        </div>
        {/* без точки */}
      </div>

    </Layout>
  );
}
module.exports = CreateGood;
