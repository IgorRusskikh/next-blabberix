import { HTMLAttributes, ReactNode } from "react";
import styles from "./Container.module.css";
import ContainerHeader from "./Header";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({children, className}: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}

Container.Header = ContainerHeader;

export default Container;