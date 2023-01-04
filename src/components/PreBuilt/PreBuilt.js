import { Fragment } from "react";

import AvailablePreBuilt from "./AvailablePreBuilt";
import PreBuiltSummary from "./PreBuiltSummary";

const PreBuilt = () => {
  return (
    <Fragment>
      <PreBuiltSummary />
      <AvailablePreBuilt />
    </Fragment>
  );
};

export default PreBuilt;
