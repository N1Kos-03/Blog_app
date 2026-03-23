import { JSX } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";

export const Header = ({ ...props}: HeaderProps): JSX.Element => {
    return (
        <div className={styles.header} {...props}> 
            <h1 className={styles.logo}>.my_blog</h1>
            <a href="https://github.com/N1Kos-03?tab=repositories"><img src="./github.svg" alt="Ссылка на гитхаб"/></a>
       </div>
    );
};