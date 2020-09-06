import React from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Timeline from "./Timeline";

import CardsBoxes from "./Cards";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <Head />
      <br />

      <CardsBoxes />
      <br />
      <Timeline />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
