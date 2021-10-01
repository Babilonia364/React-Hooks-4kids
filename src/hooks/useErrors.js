import { useState } from 'react'

function useErrors(validations) {
  const initialState = createInitialState(validations);
  const [errors, setErrors] = useState(initialState);

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...errors };

    
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function canSubmit() {
    for (let field in errors) {
      if (!errors[field].validate) {
        return false
      }
    }
    return true;
  }

  return [errors, validateFields, canSubmit];
}

function createInitialState(validations) {
  const initialState = {};
  for (let field in validations) {
    initialState[field] = { validate: true, text: "" }
  }

  return initialState;
}

export default useErrors;