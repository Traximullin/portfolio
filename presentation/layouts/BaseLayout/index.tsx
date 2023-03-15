import { FC } from "react"
import styles from "./BaseLayout.module.scss"
import { gitHubSvg } from "@/presentation/assets/svg"
import { ContactIcon } from "@/presentation/components"
import { IBaseLayout } from "./interface"

const BaseLayout: FC<IBaseLayout> = (props) => {
    const {children,} = props
    
    return (
        <div className={styles["base-layout"]}>
            <div className={styles["base-layout__side-bar"]}>
                <div className={styles["base-layout__links"]}>
                    <ContactIcon
                        src={gitHubSvg}
                        alt="github"
                    />
                </div>
            </div>
            <div className={styles["base-layout__content"]}>
                {children}
            </div>
            <div className={styles["base-layout__side-bar"]}>

            </div>
        </div>
    )
}

export default BaseLayout
