import { useState } from "react";
import { useParams } from "react-router-dom";

import CheckoutInformation from "./CheckoutInformation";
import CheckoutShipping from "./CheckoutShipping";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const [editContact, setEditContact] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const params = useParams();

  const editContactHandler = () => setEditContact(true);

  const editAddressHandler = () => setEditAddress(true);

  let renderForm = (
    <CheckoutInformation editContact={editContact} editAddress={editAddress} />
  );

  if (params.link_id === "shipping") {
    renderForm = (
      <CheckoutShipping
        editContact={editContactHandler}
        editAddress={editAddressHandler}
        getShipping={props.getShipping}
      />
    );
  }

  return <div className={classes.form}>{renderForm}</div>;
};

export default CheckoutForm;
