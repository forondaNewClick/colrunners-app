import { ChangeEventHandler, InputHTMLAttributes, useContext } from "react";
// import { UseFormRegister } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
// import { ErrorLabel } from "../../styled-components/input";
// import { ThemeContext } from "../../utilities/theme/ThemeContext";

type InputProps = {
  label?: string;
  onChange?: (value: string) => void;
  name?: string;
  error?: string;
  // register: UseFormRegister<any>;
} & Omit<TextFieldProps, "variant">;

const InputForm = (props: InputProps) => {
  // const { label, onChange, name, register, error, ...otherProps } = props;
  const { label, onChange, name, error, ...otherProps } = props;

  // const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* <label htmlFor={name}>{label}</label> */}
      {/* <Input {...register(name)} {...otherProps} /> */}
      <TextField variant="standard" label={label} {...otherProps} />
      {/* {error !== "undefined" ? <ErrorLabel>{error}</ErrorLabel> : ""} */}
    </>
  );
};

export default InputForm;
