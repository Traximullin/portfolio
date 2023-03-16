import { FC } from "react"
import styles from "./Grid.module.scss"
import { IGrid } from "./interface";

const Grid: FC<IGrid> = (props) => {
    const {children, gap, gridTemplateColumns, } = props

    return (
        <div 
            className={styles["grid"]}
            style={{
                gap: `${gap}px`,
                gridTemplateColumns,    
            }}
        >
            {
                children
            }
        </div>

    )
};

export default Grid;
