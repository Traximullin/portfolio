import { FC } from "react"
import styles from "./BaseLayout.module.scss"
import { gitHubSvg } from "@/presentation/assets/svg"
import { ContactIcon } from "@/presentation/components"

const BaseLayout: FC = () => {
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
                12
            </div>
            <div className={styles["base-layout__side-bar"]}>

            </div>
        </div>
    )
}

export default BaseLayout
