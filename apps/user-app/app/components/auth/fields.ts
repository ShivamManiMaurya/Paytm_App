export type Field = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
};

export type StateFields = Omit<Field, "required">;

export const initialValues = {
  label: "",
  name: "",
  type: "",
  placeholder: "",
};

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
  },
  {
    label: "Phone",
    name: "phone",
    type: "phone",
    placeholder: "1234567890",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Create a password",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Re-enter password",
    required: true,
  },
];
