import { FC } from "react"
import styles from "./TemplateName.module.scss"
import { ITemplateName } from "./interface";

const TemplateName: FC<ITemplateName> = () => (
    <div className={styles["template-name"]} data-testid="TemplateName">
      TemplateName
    </div>
);

export default TemplateName;
