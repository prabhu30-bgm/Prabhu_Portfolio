import { useState, ChangeEvent, FormEvent } from 'react';

function validateField(fieldName: string, rawValue: any): string {
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

export function useForm<T extends Record<string, any>>(
  initialState: T,
  onSubmit: (values: T) => void | Promise<void>
) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors: Record<string, string> = {};
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
