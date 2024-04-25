import React, { type PropsWithChildren } from "react";

const styleMapping = {
  primary: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#409eff",
    borderColor: "#409eff",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer",
  },
  warning: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#e6a23c",
    borderColor: "#e6a23c",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer",
  },
};

export type ButtonProps = PropsWithChildren<{
  type?: "primary" | "warning";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  const buttonType = type === "warning" ? "warning" : "primary";

  return (
    <button style={styleMapping[buttonType]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
