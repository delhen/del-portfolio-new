import * as React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './../../styles/Layout.module.css';

const Layout: React.FC = ({children}) => {
    const listOfStyles = [
        styles.container, 
        styles.containerLaptop,
        styles.containerRed
    ]
    return(
        <div className={listOfStyles.join(" ")}>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout