import React, { Fragment } from "react";
import Input from "../../UI/Input/Input";

import classes from "./CheckoutInformation.module.css";

const CheckoutInformation = () => {
  return (
    <Fragment>
      <div className={`${classes.section} flex`}>
        <h3 className={classes.title}>Contact Information</h3>
        <span className={classes.account}>
          Already have an account? <a href="#">Login</a>
        </span>
      </div>
      <Input type="text" id="email" placeholder="Email address" />
      <div className={classes.section}>
        <h3 className={classes.title}>Shipping Address</h3>
        <div className="flex">
          <Input
            type="text"
            id="firstName"
            placeholder="First name"
            width="48%"
          />
          <Input
            type="text"
            id="lastName"
            placeholder="Last name"
            width="48%"
          />
        </div>
        <Input type="text" id="address1" placeholder="Address line 1" />
        <Input type="text" id="address2" placeholder="Address line 2" />
        <div className="flex">
          <div className={`${classes["form-control"]} ${classes.country}`}>
            <label for="country">Country/Region</label>
            <select name="country" id="country">
              <option disabled>Select Country</option>
              <option value="USA">United States</option>
            </select>
          </div>
          <Input type="text" id="zip" placeholder="Zip code" width="32%" />
          <div className={`${classes["form-control"]} ${classes.state}`}>
            <label for="country">State</label>
            <select name="state" id="state">
              <option disabled>Select State</option>
              <option value="Ca">California</option>
            </select>
          </div>
        </div>
        <Input type="text" id="city" placeholder="City" />
        <Input type="text" id="phonenumber" placeholder="Phone" />
      </div>
    </Fragment>
  );
};

export default CheckoutInformation;
