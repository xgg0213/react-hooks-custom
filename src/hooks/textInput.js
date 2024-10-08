import { useState } from 'react';
import { textInputValidators } from '../utils/validations'; 


export const useTextInput = ({ validations = [], defaultValue = '' }) => {
    const [value, setValue] = useState(defaultValue);

    // Run all validators on the current value
    const validatorResults = textInputValidators.map((validator) => validator(value));
    const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);

    // Extract error messages from failed validators
    const errors = failedValidators.map((validationObj) => validationObj.msg);

    // Event handler version of setValue that can be used directly in the onChange event
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // Return value, setValue, and errors array
    return {value, handleChange, errors};
};
