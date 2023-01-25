import React, { useState } from "react";

const useInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredInput);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    input: enteredInput,
    hasError,
    isValid: valueIsValid,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
