import { FC } from "react"
import styles from "./Flex.module.scss"
import { IFlex } from "./interface";

const Flex: FC<IFlex> = (props) => {
    const {children, gap, flexDirection, justifyContent, alignItems, flexWrap, } = props

    return (
        <div 
            className={styles["flex"]} 
            data-testid="Flex"
            style={{
                gap: `${gap}px`,
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap,
            }}
        >
            {children}
        </div>
    )
};

export default Flex;
