import { FC } from "react"
import styles from "./Header.module.scss"
import { IHeader } from "./interface";

const Header: FC<IHeader> = () => (
    <div className={styles["header"]} data-testid="Header">
      Header
    </div>
);

export default Header;
