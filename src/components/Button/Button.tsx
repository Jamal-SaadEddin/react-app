import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={[styles.btn, styles[`btn-${color}`]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
