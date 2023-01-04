const Hero = () => {
  return (
    <>
      <div className="position-relative mb-5 hero">
        <img src="./banner.png" className="w-100" />
      </div>
      <h1 className="d-none d-lg-block display-6 text-center text-white">
        <div className="position-absolute start-50 translate-middle-x title-one">
          ALTERNATIVE ROCK
          <br />
          BAND
        </div>
        <div className="position-absolute start-50 translate-middle-x title-two">
          BASED IN
          <br />
          SCOTLAND
        </div>
      </h1>
    </>
  );
};
export default Hero;
