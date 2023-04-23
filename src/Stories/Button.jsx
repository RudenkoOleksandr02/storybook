import React from "react";
import style from './Button.module.css'

const Button = ({ onClick, children }) => (
    <button className={`${style.main} ${style.primaryStyle}`} type="button" onClick={onClick}>{children}</button>
);

export default Button;