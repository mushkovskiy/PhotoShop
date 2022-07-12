const React = require('react');
const Layout = require('./Layout');

function Log() {
  return (
    <Layout>

      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="signin-form" action="/auth/log" method="post">
              <div className="form-group mt-5">
                <input type="email" name="email" className="form-control email" id="email" placeholder="email..." />
              </div>
              <div className="form-group mt-5">
                <input
                  type="password"
                  name="password"
                  className="form-control password"
                  id="password"
                  placeholder="password..."
                  autoComplete="off"
                />
              </div>
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-secondary">&nbsp; Login &nbsp;</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </Layout>
  );
}
module.exports = Log;
