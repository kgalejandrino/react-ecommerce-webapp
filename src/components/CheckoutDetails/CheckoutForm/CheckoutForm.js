import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import CheckoutInformation from "./CheckoutInformation";
import CheckoutShipping from "./CheckoutShipping";

const CheckoutForm = (props) => {
  const [editContact, setEditContact] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const params = useParams();

  const contactChangeHandler = () => setEditContact(true);

  const addressChangeHandler = () => setEditAddress(true);

  let renderForm = (
    <CheckoutInformation editContact={editContact} editAddress={editAddress} />
  );

  if (params.link_id === "shipping") {
    renderForm = (
      <CheckoutShipping
        changeContact={contactChangeHandler}
        changeAddress={addressChangeHandler}
        getShipping={props.getShipping}
      />
    );
  }

  return <Fragment>{renderForm}</Fragment>;
};

export default CheckoutForm;
