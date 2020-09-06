import React from "react";
import Button from "@material-ui/core/Button";
import About from "./components/About";
import Error from "./components/error";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import CountUp from "react-countup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

export default function Road() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

function Launch() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2> shoe not found</h2>;
  }
  const { name, img, price, spec } = shoe;
  return (
    <div>
      <NavBar />
      <div className={styles.LaunchShoe}>
        <img height={400} src={img} alt={name} />
        <div className={styles.spec}>
          <h2>{name}</h2>
          <p>{spec}</p>
          <h2> {price} </h2>
          <Button variant="contained" color="secondary">
            Buy Now
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function LaunchIndex() {
  return (
    <div>
      <Navbar />
      <ul className={styles.launch}>
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <li className={styles.Link} key={slug}>
            <Link to={`/launch/${slug}`}>
              <h2 className={styles.name}> {name}</h2>
              <img className={styles.img} height={300} src={img} slt={name} />
              <hr />

              <button className={styles.butt}> Buy now </button>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: "35$",
    spec:
      "Go for the stable and supportive ride in the Nike Air Zoom Structure 22. Engineered mesh, a heel overlay and Dynamic Support throughout the midfoot all work together to help every step feel smooth.",
  },
  "jordan-mars": {
    name: "JORDAN MARS",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: "35$",
    spec:
      "Find your wings on the path less traveled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction.",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: "35$",
    spec:
      "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it disappears on your foot. More foam means better cushioning, keeping you comfortable as you run.",
  },
};
