import React, { Fragment } from "react";

import ClickedPreBuilt from "../components/PreBuilt/ClickedPreBuilt/ClickedPreBuilt";

const PreBuiltDetail = (props) => {
  return (
    <Fragment>
      <ClickedPreBuilt onShowCart={props.onShowCart} />
    </Fragment>
  );
};

export default PreBuiltDetail;
