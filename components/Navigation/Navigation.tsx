import Link from 'next/link';
import * as React from 'react';
import styles from '../../styles/Navigation.module.css';
import { IoIosArrowDropleftCircle, IoIosSettings } from 'react-icons/io';

const Navigation: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li className={styles.navLinkItem}>
                    <Link href={"/"} passHref>
                        <IoIosArrowDropleftCircle size={36} />
                    </Link>
                </li>
                <li className={styles.navLinkItem}>
                    <Link href={"/about"} passHref>
                        <IoIosSettings size={36} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;