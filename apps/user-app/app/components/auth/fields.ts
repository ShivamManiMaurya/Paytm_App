export type Field = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  validation?: {
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    custom?: {
      validator: (
        value: string,
        formValues?: Record<string, string>
      ) => boolean;
      message: string;
    };
  };
};

export type StateFields = Omit<Field, "required">;

export type TFormField = {
  values: Record<string, string>;
  touched: Record<string, boolean>;
  errors: Record<string, string>;
};

export const initialFormState: TFormField = {
  values: {},
  touched: {},
  errors: {},
};

// export const initialValues = {
//   label: "",
//   name: "",
//   type: "",
//   placeholder: "",
// };

export const signUpFields: Field[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Your Name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "abc@gmail.com",
    required: true,
    validation: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email.",
      },
    },
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "1234567890",
    required: true,
    inputMode: "numeric",
    validation: {
      minLength: {
        value: 10,
        message: "Phone number must be 10 character long.",
      },
      maxLength: {
        value: 10,
        message: "Phone number must be 10 character long.",
      },
      pattern: {
        value: /^\d+$/,
        message: "Phone number must contain only numbers",
      },
      custom: {
        validator: (value) => /^[1-9]\d*$/.test(value),
        message: "Phone number cannot start with 0",
      },
    },
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Create a password",
    required: true,
    validation: {
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters.",
      },
    },
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Re-enter password",
    required: true,
    validation: {
      minLength: {
        value: 6,
        message: "Confirm password must be at least 6 characters",
      },
      custom: {
        validator: (state, formValues) => {
          return state === formValues?.["password"];
        },
        message: "Password do not match.",
      },
    },
  },
];

export const signInFields = signUpFields.filter(
  (field) => field.name === "phone" || field.name === "password"
);
