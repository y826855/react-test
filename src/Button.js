import PropTypes from "prop-types"
import styles from "./Button.module.css"

//css 임포트를 각각의 기능들에 하는 기술을 css modules 라고 함

function Button({text, clicked})
{
    return <button className={styles.btn} onClick={clicked}>{text}</button>
    //위와 같이 스타일을 적용시키면 Button_btn__랜덤 형태의 클래스이름이 자동으로 생성됨
}

Button.propTypes = 
{
    text: PropTypes.string.isRequired,
    clicked: PropTypes.func
}

export default Button;