export interface IInputProps {
  label: string;
  type?: string;
  value?: string;
  errors: any;
  validations?: IInputValidations;
  register: any;
}

export interface IInputValidations {
  required: string;
  minLength: {
    value: number;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
  lowerCase: string;
}
