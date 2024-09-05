import { HTMLAttributes, ReactNode } from "react";

import ContainerHeader from "./Header";
import styles from "./Container.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

Container.Header = ContainerHeader;

export default Container;
