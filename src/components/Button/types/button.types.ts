export interface IButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}
