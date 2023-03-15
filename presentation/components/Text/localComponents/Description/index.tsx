import { FC } from "react"
import styles from "./Description.module.scss"
import { IDescription } from "./interface";

const Description: FC<IDescription> = (props) => {
    const {children,} = props

    return (
        <p className={styles["description"]} data-testid="Description">
            {children}
        </p>
    )
};

export default Description;
