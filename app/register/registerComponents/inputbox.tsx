import React from 'react'
import styles from './../styles/inputStyles.module.css';

interface InputBoxProps {
    placeholder: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const InputBox = (props: InputBoxProps) => {
    return (
        <div className={styles.container}>
                <input type={props.type} placeholder={props.placeholder}  className={styles.input} onChange={props.onChange} value={props.value}/>
        </div>
    )
}

export default InputBox