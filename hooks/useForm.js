import { useState } from 'react';

function validateField(fieldName, rawValue) {
  const value = String(rawValue ?? '');
  const trimmed = value.trim();

  if (fieldName === 'name') {
    if (!trimmed) return 'Name is required.';
    if (trimmed.length < 2) return 'Name must be at least 2 characters.';
  }

  if (fieldName === 'email') {
    if (!trimmed) return 'Email is required.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address.';
  }

  if (fieldName === 'message') {
    if (!trimmed) return 'Message is required.';
    if (trimmed.length < 10) return 'Message must be at least 10 characters.';
  }

  return '';
}

export function useForm(initialState, onSubmit) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    const err = validateField(name, value);
    setErrors((prev) => {
      const copy = { ...prev };
      if (err) {
        copy[name] = err;
      } else {
        delete copy[name];
      }
      return copy;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    let hasError = false;

    Object.entries(values).forEach(([key, val]) => {
      const err = validateField(key, val);
      if (err) {
        formErrors[key] = err;
        hasError = true;
      }
    });

    setErrors(formErrors);

    if (!hasError) {
      setIsSubmitting(true);
      onSubmit(values);
    }
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
