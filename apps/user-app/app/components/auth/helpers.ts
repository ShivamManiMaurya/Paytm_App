import { Field } from "./fields";

export const validateField = (
  name: string,
  value: string,
  formValues: Record<string, string>,
  fields: Field[]
): string => {
  const field = fields.find((f) => f.name === name);
  if (!field) return "";

  // Required check
  if (field.required && !value.trim()) return "This field is required";

  if (field.validation) {
    const { validation } = field;

    // Min length check
    if (validation.minLength && value.length < validation.minLength.value) {
      return validation.minLength.message;
    }

    // Max length check
    if (validation.maxLength && value.length > validation.maxLength.value) {
      return validation.maxLength.message;
    }

    // Pattern check
    if (validation.pattern && !validation.pattern.value.test(value)) {
      return validation.pattern.message;
    }

    // Custom validation
    if (validation.custom && !validation.custom.validator(value, formValues)) {
      return validation.custom.message;
    }
  }

  return "";
};
