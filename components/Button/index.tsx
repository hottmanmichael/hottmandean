import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
}
