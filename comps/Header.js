import Image from "next/image";
const Header = () => {
  return (
    <header className="position-absolute">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-primary" href="#">
          Nightbridge
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
          <ul className="d-flex justify-content-center align-items-center gap-4 navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="#">
                Gigs &<br className="d-none d-lg-block" />
                Dates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Photos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
