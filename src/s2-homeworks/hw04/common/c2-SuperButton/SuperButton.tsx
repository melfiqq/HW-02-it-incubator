import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'default' | 'red' | 'secondary'; 
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
    xType = 'default', // значение по умолчанию
    className,
    disabled,
    ...restProps // остальные пропсы
}) => {
    const finalClassName = `${s.button} ${s[xType]} ${className || ''}`.trim(); // смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // передаем остальные пропсы
        >
            {restProps.children} {/* отображаем содержимое кнопки */}
        </button>
    );
};

export default SuperButton;