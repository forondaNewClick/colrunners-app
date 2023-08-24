import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { InputSearch } from "../../styled-component/input";

type InputProps = {
  label?: string;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const InputComponent = (props: InputProps) => {
  const { label, onChange, ...otherProps } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    onChange && onChange(target.value);

  // const { theme } = useContext(ThemeContext);

  return (
    <>
      {label ? <label htmlFor={otherProps.id}>{label}</label> : ""}
      <InputSearch onChange={handleChange} {...otherProps} />
    </>
  );
};

export default InputComponent;
