import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import { transformData } from "../libs/api";

import AvailablePreBuilt from "../components/PreBuilt/AvailablePreBuilt";
import PreBuiltSummary from "../components/PreBuilt/PreBuiltSummary";

const PreBuilt = () => {
  const data = useLoaderData();
  const prebuilt = transformData(data);

  return (
    <Fragment>
      <PreBuiltSummary />
      <AvailablePreBuilt
        prebuilt={prebuilt}
        httpError={data.isError}
        httpMessage={data.message}
      />
    </Fragment>
  );
};

export default PreBuilt;

export async function loader() {
  const response = await fetch(
    "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/prebuilt.json"
  );

  if (!response.ok) {
    return { isError: true, message: `${response.status.text}` };
  } else {
    return response;
  }

  // const data = await response.json();
  // const prebuiltData = transformData(data);
  // return prebuiltData;
}
