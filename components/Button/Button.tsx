import TextProps from "../../types/TextProps";
import styles from "../../styles/Button.module.css";

const Button: React.FC<TextProps> = ({ text }) => {
    const listOfButtonStyles: string[] = [
        styles.button,
        styles.buttonRed,
    ] 
    return(
        <button className={listOfButtonStyles.join(" ")}>{text}</button>
    )
}

export default Button