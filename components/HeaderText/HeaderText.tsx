import TextProps from "../../types/TextProps";
import styles from '../../styles/HeaderText.module.css';

const HeaderText: React.FC<TextProps> = (props) => {
    return (
        <p className={styles.headerText}>{props.text}</p>
    )
}

export default HeaderText;