import React, { Fragment } from "react";
import Button from "../UI/Button/Button";

import classes from "./Home.module.css";
import { buildGallery } from "../../libs/helper";
import img from "../../assets/rainbow-build.png";

const Home = () => {
  const gallery = buildGallery.map((item) => {
    return (
      <figure>
        <img src={item.src} alt={item.alt} />
      </figure>
    );
  });

  return (
    <Fragment>
      <section className={`${classes["section-hero--img"]} side-padding`}>
        <div className={classes["hero-textbox"]}>
          <h2>Take your gaming experience to the next level.</h2>
          <h1>GOODBYE CRAPPY BUILDS.</h1>
          <h1>HELLO DREAM GAMING SETUP.</h1>
          <Button btnType="primary">Shop Now</Button>
        </div>
      </section>
      <section className={`${classes["section-info"]} side-padding`}>
        <div className={classes["img-container"]}>
          <img src={img} alt="PC tower with rainbow RGB light" />
        </div>
        <div className={classes["info-textbox"]}>
          <h1>Your Money, Your Choice</h1>
          <p>
            Nemirk pc are available in full customization. Schedule an
            appointment with one of our IT and we can guide you from component
            selection to building your dream gaming setup.
          </p>
        </div>
      </section>
      <section className={classes["section-gallery"]}>{gallery}</section>
      <section className={`${classes["section-services"]} side-padding`}>
        <h1>Upgrade your PC &mdash; Boost your FPS</h1>
        <p className={classes["services-text"]}>
          Hello, we’re NemirkPcBuilds and we offer wide range of services such
          as gaming and streaming configuration, network and system
          configuration, data recovery and many more. Not sure why your computer
          is lagging or running slow? Let’s take care of that and get you ready
          to play at high level.
        </p>
        <div className={classes["card-services"]}>
          <li>
            <span>
              <i class="fas fa-level-up-alt" aria-hidden="true"></i>
            </span>
            <h3>Performance</h3>
            <p>
              As a gamer ourselves at NemirkPcBuilds, we understand the
              frustration of sudden fps drops. With that, our team makes sure
              that our PCs are optimized to its max performance.
            </p>
          </li>
          <li>
            <span>
              <i class="fas fa-tools" aria-hidden="true"></i>
            </span>
            <h3>Testing</h3>
            <p>
              Gaming has evolved over the years and so is the system
              requirements. We can guarantee you that our pc meets high standard
              quality and is put thru a series of test to perform at peak level.
            </p>
          </li>
          <li>
            <span>
              <i class="fas fa-headset" aria-hidden="true"></i>
            </span>
            <h3>Support</h3>
            <p>
              To ensure our customers satisfaction, you will be connected
              directly to our team of IT. We prioritize that your
              questions/issues be answered or resolved as quickly as possible.
            </p>
          </li>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
