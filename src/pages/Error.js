import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import ErrorContent from "../components/ErrorContent/ErrorContent";
import Header from "../components/Header/Header";

const Error = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";
  console.log(error.status);

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <Fragment>
      <Header />
      <ErrorContent title={title}>
        <p>{message}</p>
      </ErrorContent>
    </Fragment>
  );
};

export default Error;
