import React, { ReactNode } from "react";
import styles from "./index.module.css";

interface TileProps {
  children: ReactNode;
}

function Tile(props: TileProps) {
  const {children} = props;

  return <div className={styles.tile}>{children}</div>;
}

export default Tile;
