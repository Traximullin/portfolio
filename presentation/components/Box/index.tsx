import { FC } from "react"
import styles from "./Box.module.scss"
import { IBox } from "./interface";

const Box: FC<IBox> = (props) => {
    const {title, children,} = props
    
    return (
        <div className={styles["box"]} data-testid="Box">
            <p className={styles["box__title"]}>Title</p>
            <div className={styles["box__content"]}>
                {children}
            </div>
        </div>
    )
};

export default Box;
