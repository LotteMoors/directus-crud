import { FieldError, UseFormRegister } from "react-hook-form";
import "./Input.module.scss"
import { customerData } from "../../../types/types";


type inputProps = {
  title: string;
  name: "city" | "country" | "firstname" | "house_number" | "lastname" | "street" | "zip_code" | "telephone";
  error: FieldError | undefined;
  register: UseFormRegister<customerData>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: inputProps) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        {...props.register(props.name)}
        type="text"
        id={props.name}
        name={props.name}
        onChange={props.handleInputChange}
      />
      <p style={{color: "red"}}>{props.error && props.error.message}</p>
    </div>
  );
};

export default Input;
