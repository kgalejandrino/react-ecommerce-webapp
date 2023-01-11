import { Fragment } from "react";

import AvailablePreBuilt from "./AvailablePreBuilt";
import PreBuiltSummary from "./PreBuiltSummary";

const PreBuilt = (props) => {
  return (
    <Fragment>
      <PreBuiltSummary />
      <AvailablePreBuilt onShowCart={props.onShowCart} />
    </Fragment>
  );
};

export default PreBuilt;
