import { gitHubSvg } from "@/presentation/assets/svg";
import { ContactIcon } from "@/presentation/components";
import { FC } from "react"
import styles from "./Footer.module.scss"

const Footer: FC = () => (
    <footer className={styles["footer"]} data-testid="Footer">
        <div className={styles["footer__content"]}>
            <div className={styles["footer__information"]}>
                <p>
                  Traximullin 
                    <span className={styles["footer__email"]}>
                      traximullin@bk.ru
                    </span>
                </p>
                <p className={styles["footer__media-title"]}>
                  Media
                </p>
                <p>
                  Front-end developer
                </p>
                <p>
                    <ContactIcon
                        src={gitHubSvg}
                        alt="github"
                    />
                </p>
            </div>
            <p className={styles["footer__copyright"]}>
              © Copyright 2023. Made by Traximullin
            </p>
        </div>
    </footer>
);

export default Footer;
