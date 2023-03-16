import { IThemeStruct, themeBuilder } from "@/presentation/helpers/themeBuilder";
import { FC } from "react"
import styles from "./Box.module.scss"
import { IBox } from "./interface";

const boxThemeSctruct: IThemeStruct = {
    noneInternalBorder: styles["box_theme_none-internal-border"],
}

const Box: FC<IBox> = (props) => {
    const {title, children, themes,} = props

    const currentClasses = [styles["box"]]
    themeBuilder(currentClasses,boxThemeSctruct,themes)

    return (
        <div className={currentClasses.join(" ")} data-testid="Box">
            <p className={styles["box__title"]}>Title</p>
            <div className={styles["box__content"]}>
                {children}
            </div>
        </div>
    )
};

export default Box;
