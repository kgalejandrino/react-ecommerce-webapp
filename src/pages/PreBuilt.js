import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import { transformData } from "../libs/api";

import AvailablePreBuilt from "../components/PreBuilt/AvailablePreBuilt";
import PreBuiltSummary from "../components/PreBuilt/PreBuiltSummary";

const PreBuilt = () => {
  const prebuilt = useLoaderData();

  return (
    <Fragment>
      <PreBuiltSummary />
      <AvailablePreBuilt prebuilt={prebuilt} />
    </Fragment>
  );
};

export default PreBuilt;

export async function loader() {
  const response = await fetch(
    "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/prebuilt.json"
  );

  if (!response.ok) {
    // throw new Error(`${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const prebuiltData = transformData(data);
  return prebuiltData;
}
