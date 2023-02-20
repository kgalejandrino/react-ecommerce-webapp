import { Fragment } from "react";

import AvailablePreBuilt from "../components/PreBuilt/AvailablePreBuilt";
import PreBuiltSummary from "../components/PreBuilt/PreBuiltSummary";

const PreBuilt = (props) => {
  return (
    <Fragment>
      <PreBuiltSummary />
      <AvailablePreBuilt />
    </Fragment>
  );
};

export default PreBuilt;
