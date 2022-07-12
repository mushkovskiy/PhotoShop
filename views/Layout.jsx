const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="RU" style={{ height: '100%' }}>
      <head>
        <meta charSet="utf8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />

        <title>Hello, shop!</title>
        <script
          defer
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        />

        {/* <script defer src="..." /> */}
      </head>
      <body>

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="/">Look My Shop</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {(function () {
              // if (user && user.seller) {
              //   return (
              //     <div className="collapse navbar-collapse" id="navbarNav">
              //       <ul className="navbar-nav ml-auto">

              //         <li className="nav-item">
              //           <a className="nav-link mr-4" href="/">
              //             {`Привет ${user.name}`}
              //           </a>
              //         </li>
              //         <li className="nav-item mr-4">
              //           <a className="nav-link mr-4" href="/create/good">добавить товар для продажи</a>
              //         </li>
              //         <li className="nav-item mr-4">
              //           <a className="nav-link mr-4" href="/auth/logout">выйти</a>
              //         </li>
              //       </ul>
              //     </div>
              //   );
              // }
              if (user) {
                return (
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                      <li className="nav-item">
                        <a className="nav-link mr-4" href="#">{`Привет ${user.username}`}</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/home">личный кабинет</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/create">создать товар</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4" href="/render/basket">мои товары</a>
                      </li>
                      <li className="nav-item mr-4">
                        <a className="nav-link mr-4" href="/auth/logout">Выйти</a>
                      </li>

                    </ul>
                  </div>
                );
              }
              return (
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                      <a className="nav-link mr-4" href="/log">login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mr-4" href="/reg">register</a>
                    </li>
                    <li className="nav-item mr-4">
                      <a className="nav-link mr-4" href="/">home</a>
                    </li>
                  </ul>
                </div>
              );
            }())}

          </nav>
          <div className="jumbotron">
            <h3 className="display-9 text-center text-dark">
              {/* { title } */}
              Title
            </h3>
            <p className="lead text-center text-secondary">
              {/* { message } */}
              Some information
              <br />
              {' '}
              for user
            </p>
          </div>
          {children}
        </div>
      </body>
    </html>

  );
}
module.exports = Layout;
