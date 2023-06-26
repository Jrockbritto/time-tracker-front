import { IInputProps } from "./types/input.types";
import './Input.css';

function Input (props: IInputProps) {
  const { label, value, type = 'text', register, errors, validations } = props;

  return (
    <div className="i-wrapper ">
			<input
        {...register(label, validations)}
        type={type} className="a-font f-color" value={value} required />
			<label className="a-font f-color form-control-label">{label}</label>
      <p>{errors[label]?.message}</p>
		</div>
  )
}

export default Input;