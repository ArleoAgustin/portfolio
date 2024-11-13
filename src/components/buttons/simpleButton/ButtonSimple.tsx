import style from './Button.module.css';

interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
}

function ButtonSimple({ text, type}: ButtonProps) {
    return (
        <button type={type} className={style.buttonSend}>
            {text}
        </button>
    );
}

export default ButtonSimple;