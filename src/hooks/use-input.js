import React, { useCallback, useState } from "react";

const useInput = (validateInput, storedValue) => {
  const [enteredInput, setEnteredInput] = useState(storedValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredInput);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = () => {
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
