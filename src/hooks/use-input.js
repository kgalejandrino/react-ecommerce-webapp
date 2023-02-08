import React, { useCallback, useState } from "react";

const useInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredInput);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const getStoredInput = (val) => {
    if (val) {
      setEnteredInput(val);
    }
  };

  return {
    input: enteredInput,
    hasError,
    isValid: valueIsValid,
    getStoredInput,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
