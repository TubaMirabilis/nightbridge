import Head from "next/head";
import Hero from "../comps/Hero";
import Externals from "../comps/Externals";
import Upcoming from "../comps/Upcoming";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <h1 className="d-block d-lg-none display-6 text-center mb-5 title-three">
          ALTERNATIVE ROCK BAND BASED IN SCOTLAND
        </h1>
        <div className="d-none d-lg-block container">
          <p
            className="text-center fs-4 mb-5 text-white"
            style={{ letterSpacing: "0.125rem" }}
          >
            THE HOME OF NIGHTBRIDGE ON THE WEB WITH OUR LATEST NEWS, LIVE
            CONCERT SCHEDULE, VIDEOS, PUBLICITY IMAGES AND MORE!
          </p>
        </div>
        <Externals />
        <Upcoming />
      </main>
    </>
  );
}
