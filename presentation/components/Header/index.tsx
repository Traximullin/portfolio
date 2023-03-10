import { FC } from "react"
import styles from "./Header.module.scss"

const Header: FC = () => {

    return (
        <header className={styles["header"]}>
            <input 
                className={styles["header__side-menu"]} 
                type="checkbox" 
                id="side-menu"
            />
            <label 
                className={styles["header__hamb"]} 
                htmlFor="side-menu"
            >
                <span className={styles["header__hamb-line"]}/>
            </label>
            <nav className={styles["header__nav"]}>
                <ul className={styles["header__menu"]}>
                    <li className={styles["header__menu-item"]}>
                        Привет
                    </li>
                    <li className={styles["header__menu-item"]}>
                        Привет
                    </li>
                </ul>        
            </nav>
        </header>
    )
}

export default Header