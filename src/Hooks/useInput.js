import { useState } from "react"


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const valueChangedHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        value: enteredValue,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        isValid: valueIsValid,
        reset
    }
}

export default useInput;