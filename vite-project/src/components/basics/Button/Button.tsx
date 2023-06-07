import './Button.module.scss'

type buttonProps = {
  label: string;
};

const Button = (props: buttonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
