import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
    xType,
    className,
    disabled,
    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    const finalClassName = `${s.button} ${disabled ? s.disabled : ''} ${xType ? s[xType] : ''} ${className || ''}`;

    return (
        <button disabled={disabled} className={finalClassName} {...restProps}>
            {restProps.children}
        </button>
    );
};

export default SuperButton;