import { IButtonProps } from "./types/button.types";
import './Button.css';

function Button(props: IButtonProps) {
  const { text, type, onClick } = props;

  return (
    <button type={type} className="c-button mts-700 a-font" onClick={onClick}>{text}</button>
  )
}

export default Button;