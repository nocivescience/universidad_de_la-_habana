import '../static/css/Navbar.css'
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Inicio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="lista">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Facultades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ExpoCuba
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Palacio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fec
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Feem
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Ctc
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    English
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    France
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    English
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    France
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
