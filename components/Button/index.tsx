import { MouseEventHandler, ReactNode } from "react";
import cx from "classnames";
import { Typography } from "../Typography";
import styles from "./Button.module.scss";

type ButtonColor =
  | "forest-green"
  | "pastel-pink"
  | "pastel-orange"
  | "pastel-green";

interface ButtonBaseProps {
  children: ReactNode;
  color?: ButtonColor;
  className?: string;
}

interface LinkButtonProps extends ButtonBaseProps {
  href: string;
  target?: "_blank";
}

export function LinkButton({ href, target, ...rest }: LinkButtonProps) {
  return (
    <a href={href} target={target}>
      <Button {...rest} onClick={() => {}} />
    </a>
  );
}

interface ButtonProps extends ButtonBaseProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  onClick,
  color = "forest-green",
  className,
  children,
}: ButtonProps) {
  return (
    <button
      className={cx(
        styles.Button,
        {
          [styles[`Button__${color}`]]: !!color,
        },
        className
      )}
      onClick={onClick}
    >
      <Typography tag="b">{children}</Typography>
    </button>
  );
}
