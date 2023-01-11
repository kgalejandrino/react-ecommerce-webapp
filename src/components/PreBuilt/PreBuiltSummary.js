import React from "react";

import Button from "../UI/Button/Button";
import classes from "./PreBuiltSummary.module.css";
import bannerImg from "../../assets/prebuilt-banner-img.png";

const PreBuiltSummary = () => {
  return (
    <div className={`${classes.banner} top-padding`}>
      <div className={classes["banner-image"]}>
        <img src={bannerImg} alt="3 PC Tower with rgb colors" />
      </div>
      <div className={classes["banner-textbox"]}>
        <h3>Pre-Built Pc, Built For You</h3>
        <p>
          A variety of pre-built pc, built in perfection. Choose from our broad
          selection of ready to shipped pc that varies in component selection
          and price depending on your needs and preference.
        </p>
        <div className={classes["customize-flex"]}>
          <p>Want full control in customizing your dream pc setup?</p>
          <Button btnType="primary" disabled={true}>
            Build Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreBuiltSummary;
