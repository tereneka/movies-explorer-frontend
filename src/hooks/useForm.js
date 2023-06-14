import { useState } from 'react';

export function useForm(fields) {
  const [values, setValues] = useState(
    getInputsObject()
  );
  const [errMessages, setErrMessages] = useState(
    getInputsObject('')
  );

  const [isTouched, setIsTouched] = useState(
    getInputsObject(false)
  );

  const [isFocus, setIsFocus] = useState(
    getInputsObject(false)
  );

  function getInputsObject(value) {
    const res = {};

    fields.forEach((field) => {
      if (value !== undefined) {
        res[field.name] = value;
      } else {
        res[field.name] = field.defaultValue;
      }
    });

    return res;
  }

  const handleChange = (e) => {
    const {
      value,
      name,
      validationMessage,
      type,
      checked,
    } = e.target;
    if (type === 'checkbox') {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }

    setErrMessages({
      ...errMessages,
      [name]: validationMessage,
    });
    setIsTouched({ ...isTouched, [name]: true });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setIsFocus({ ...isFocus, [name]: true });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setIsFocus({ ...isFocus, [name]: false });
  };

  return {
    values,
    setValues,
    errMessages,
    isTouched,
    isFocus,
    handleChange,
    handleFocus,
    handleBlur,
  };
}
