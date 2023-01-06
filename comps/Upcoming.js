const Upcoming = () => {
  return (
    <section className="container-lg bg-dark text-white">
      <div className="row">
        <div className="col-2"></div>
        <div
          className="col-8 bg-primary text-center text-white fw-bold border-bottom border-dark border-5"
          style={{ letterSpacing: "0.125rem" }}
        >
          <h2 className="display-6">Upcoming Gigs</h2>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row py-3">
        <div className="col-4">Nightbridge in Oban</div>
        <div className="col-4 text-center">The Assembly Rooms, Oban</div>
        <div className="col-4 text-end">29 January 2023, 8:00p.m.</div>
      </div>
      <div className="row py-3">
        <div className="col-4">Nightbridge Supreme</div>
        <div className="col-4 text-center">The FedEx Arena, Glasgow</div>
        <div className="col-4 text-end">5 February 2023, 8:00p.m.</div>
      </div>
      <div className="row py-3">
        <div className="col-4">An Evening With Nightbridge</div>
        <div className="col-4 text-center">The BKG Club, Glasgow</div>
        <div className="col-4 text-end">12 February 2023, 8:00p.m.</div>
      </div>
    </section>
  );
};
export default Upcoming;
