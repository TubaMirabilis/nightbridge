const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="row my-3">
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <a className="d-block mx-5">
            <img className="w-100" src="./nightbridge.png" alt="Nightbridge" />
          </a>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center gap-3 mb-3 mb-md-0">
          <a href="#">About Us</a>
          <a href="#">Gigs & Dates</a>
          <a href="/photos">Photos</a>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center gap-3">
          <a href="#">Videos</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <p className="text-center text-white">Copyright © Nightbridge</p>
    </footer>
  );
};

export default Footer;
