import {FieldError, useFormContext} from "react-hook-form";
import "./Input.module.scss";

type inputProps = {
  label: string;
  name: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
  type?: string;
};

const Input = (props: inputProps) => {
  const {register} = useFormContext();
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...register(props.name)}
        type={!props.type? 'text' : props.type}
        id={props.name}
        name={props.name}
        onChange={props.handleInputChange}
      />
      <p style={{color: "red"}}>{props.error && props.error.message}</p>
    </div>
  );
};

export default Input;
