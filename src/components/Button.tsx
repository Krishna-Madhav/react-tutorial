interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "info";
  onClick: () => void;
}

const Button = ({ children, color = "success", onClick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}> {children}
      </button>
    </div>
  );
};

export default Button;
