import { useState } from 'react';

export function useForm(defaultValues = {}) {
  const [values, setValues] = useState(
    defaultValues
  );
  const [errors, setErrors] = useState({});

  const [isFocus, setIsFocus] = useState({});

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const {
      value,
      name,
      validationMessage,
      validity,
      type,
      checked,
    } = target;
    if (type === 'checkbox') {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }

    setErrors({
      ...errors,
      [name]: {
        message: validationMessage,
        validity,
      },
    });

    setIsValid(
      target.closest('form').checkValidity()
    );
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
    errors,
    isFocus,
    isValid,
    handleChange,
    handleFocus,
    handleBlur,
    setValues,
  };
}
