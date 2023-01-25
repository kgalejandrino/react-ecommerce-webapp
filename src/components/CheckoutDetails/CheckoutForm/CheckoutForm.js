import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import CheckoutInformation from "./CheckoutInformation";
import CheckoutShipping from "./CheckoutShipping";

const CheckoutForm = () => {
  const [editContact, setEditContact] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  const params = useParams();

  const changeContactHandler = () => setEditContact(true);

  const changeAddressHandler = () => setEditAddress(true);

  console.log(editContact, editAddress);
  let renderForm = (
    <CheckoutInformation editContact={editContact} editAddress={editAddress} />
  );

  if (params.link_id === "shipping") {
    renderForm = (
      <CheckoutShipping
        changeContact={changeContactHandler}
        changeAddress={changeAddressHandler}
      />
    );
  }

  return <Fragment>{renderForm}</Fragment>;
};

export default CheckoutForm;
