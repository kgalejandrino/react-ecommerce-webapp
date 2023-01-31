import { useState } from "react";
import { useParams } from "react-router-dom";

import CheckoutInformation from "./CheckoutInformation";
import CheckoutShipping from "./CheckoutShipping";
import classes from "./CheckoutForm.module.css";

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

  return <div className={classes.form}>{renderForm}</div>;
};

export default CheckoutForm;
