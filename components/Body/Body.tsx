import * as React from 'react'
import styles from '../../styles/Body.module.css'

const Body: React.FC = ({ children }) => {
    const listOfStyles : string[] = [
        styles.body,
        styles.containerRed
    ];

    return(
        <div className={listOfStyles.join(" ")}>
            {children}
        </div>
    )
}


export default Body;