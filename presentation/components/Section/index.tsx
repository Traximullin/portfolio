import { FC } from "react"
import styles from "./Section.module.scss"
import { ISection } from "./interface";

const Section: FC<ISection> = (props) => {
    const {title, children,} = props
    
    return (
        <section 
            className={styles["section"]} 
            data-testid="Section"
        >
            <h1 className={styles["section__title"]}>
                <span className={styles["section__sharp"]}>&#35;</span>
                {title}
            </h1>
            {children}
        </section>
    )
}

export default Section;
