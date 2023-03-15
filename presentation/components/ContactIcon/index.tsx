import Image from "next/image";
import { FC } from "react"
import styles from "./ContactIcon.module.scss"
import { IContactIcon } from "./interface";

const ContactIcon: FC<IContactIcon> = (props) => {
    const {src, alt,} = props
    
    return(
        <Image
            src={src} 
            className={styles["contact-icon"]} 
            data-testid="ContactIcon"
            alt={alt || "contact icon"}
        />
    )
}

export default ContactIcon;
