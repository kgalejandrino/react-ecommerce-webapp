import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../UI/Input/Input";
import classes from "./CheckoutInformation.module.css";
import CheckoutFooter from "./CheckoutFooter";
import useInput from "../../../hooks/use-input";
import useLocalStorage from "../../../hooks/use-localStorage";

const CheckoutInformation = (props) => {
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const { storedValue } = useLocalStorage("user");
  const history = useHistory();

  const {
    input: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    getStoredInput: getEmailStoredInputHandler,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  const {
    input: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fnameInputHasError,
    getStoredInput: getFirstNameStoredInputHandler,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
  } = useInput((value) => value.trim() !== "" && /^[A-Za-z\s]+$/.test(value));

  const {
    input: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lnameInputHasError,
    getStoredInput: getLastNameStoredInputHandler,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
  } = useInput((value) => value.trim() !== "" && /^[A-Za-z\s]+$/.test(value));

  const {
    input: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    getStoredInput: getAddressStoredInputHandler,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput(
    (value) => value.trim() !== "" && /^[a-zA-Z0-9\s,.'-]{3,}$/.test(value)
  );

  const {
    input: enteredCode,
    isValid: enteredCodeIsValid,
    hasError: codeInputHasError,
    getStoredInput: getCodeStoredInputHandler,
    inputChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.trim() !== "" && /^[0-9]{5}$/.test(value)
  );

  const {
    input: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    getStoredInput: getCityStoredInputHandler,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.trim() !== "" && /^[A-Za-z\s]+$/.test(value)
  );

  useEffect(() => {
    if (props.editContact) {
      emailInputRef.current.focus();
    } else if (props.editAddress) {
      addressInputRef.current.focus();
    }

    if (storedValue) {
      getEmailStoredInputHandler(storedValue.email);
      getFirstNameStoredInputHandler(storedValue.firstName);
      getLastNameStoredInputHandler(storedValue.lastName);
      getAddressStoredInputHandler(storedValue.address);
      getCodeStoredInputHandler(storedValue.zipCode);
      getCityStoredInputHandler(storedValue.city);
    }
  }, [props.editContact, props.editAddress, storedValue]);

  let formIsValid =
    enteredEmailIsValid &&
    enteredFnameIsValid &&
    enteredLnameIsValid &&
    enteredAddressIsValid &&
    enteredCodeIsValid &&
    enteredCityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: enteredEmail,
        firstName: enteredFname,
        lastName: enteredLname,
        address: enteredAddress,
        zipCode: enteredCode,
        city: enteredCity,
        state: "CA",
        country: "UnitedStates",
      })
    );

    history.push("/checkout/shipping");
    console.log("test");
  };

  return (
    <form onSubmit={confirmHandler} id="checkout-form">
      <div className={`${classes["section-info"]} ${classes["section-flex"]}`}>
        <h3 className={classes.title}>Contact Information</h3>
        <span className={classes.account}>Already have an account? Login</span>
      </div>
      <Input
        ref={emailInputRef}
        type="text"
        id="email"
        placeholder={emailInputHasError ? "" : "Email address"}
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        error={emailInputHasError}
      >
        {emailInputHasError && (
          <p className={classes.error}>Please enter a valid email address.</p>
        )}
      </Input>
      <div className={classes["section-shipping"]}>
        <h3 className={classes.title}>Shipping Address</h3>
        <div className={`${classes["section-flex"]} ${classes["flex-two"]}`}>
          <Input
            type="text"
            id="firstName"
            placeholder={fnameInputHasError ? "" : "First name"}
            value={enteredFname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
            error={fnameInputHasError}
          >
            {fnameInputHasError && (
              <p className={classes.error}>Please enter a valid name</p>
            )}
          </Input>
          <Input
            type="text"
            id="lastName"
            placeholder={lnameInputHasError ? "" : "Last name"}
            value={enteredLname}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
            error={lnameInputHasError}
          >
            {lnameInputHasError && (
              <p className={classes.error}>Please enter a valid last name</p>
            )}
          </Input>
        </div>
        <Input
          ref={addressInputRef}
          type="text"
          id="address"
          placeholder={addressInputHasError ? "" : "Address"}
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          error={addressInputHasError}
        >
          {addressInputHasError && (
            <p className={classes.error}>Please enter a valid address</p>
          )}
        </Input>
        <div className={`${classes["section-flex"]} ${classes["flex-three"]}`}>
          <div className={`${classes["form-control"]} ${classes.country}`}>
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option disabled>Select Country</option>
              <option value="USA">United States</option>
            </select>
          </div>
          <Input
            type="text"
            id="zip"
            placeholder={codeInputHasError ? "" : "Zip code"}
            value={enteredCode}
            onChange={codeChangeHandler}
            onBlur={codeBlurHandler}
            error={codeInputHasError}
          >
            {codeInputHasError && (
              <p className={classes.error}>Please enter a valid zip code.</p>
            )}
          </Input>
          <div className={`${classes["form-control"]} ${classes.state}`}>
            <label htmlFor="country">State</label>
            <select name="state" id="state">
              <option disabled>Select State</option>
              <option value="Ca">CA</option>
            </select>
          </div>
        </div>
        <Input
          type="text"
          id="city"
          placeholder={cityInputHasError ? "" : "City"}
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          error={cityInputHasError}
        >
          {cityInputHasError && (
            <p className={classes.error}>Please enter a valid city.</p>
          )}
        </Input>
        <Input type="text" id="phonenumber" placeholder="Phone (optional)" />
      </div>
      <CheckoutFooter
        validated={formIsValid}
        type="submit"
        id="checkout-form"
      />
    </form>
  );
};

export default CheckoutInformation;
