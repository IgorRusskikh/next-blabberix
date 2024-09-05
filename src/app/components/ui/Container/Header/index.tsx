import { HTMLAttributes, ReactNode } from "react";
import styles from "./ContainerHeader.module.css";

interface Props extends HTMLAttributes<HTMLHeadElement> {
  children: string | ReactNode;
  className?: string;
}

export default function ContainerHeader({
  children,
  className,
  ...props
}: Props) {
  return (
    <h1 className={`${styles.header} ${className}`} {...props}>
      {children}
    </h1>
  );
}
