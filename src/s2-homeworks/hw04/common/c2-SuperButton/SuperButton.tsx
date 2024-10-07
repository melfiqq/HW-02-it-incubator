import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'default' | 'red' | 'secondary'; // ограничиваем возможные типы
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
    xType = 'default', // устанавливаем значение по умолчанию
    className,
    disabled,
    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    const finalClassName = `${s.button} ${s[xType]} ${disabled ? s.disabled : ''} ${className || ''}`.trim(); // смешивание классов

    return (
        <button disabled={disabled} className={finalClassName} {...restProps}>
            {restProps.children} {/* отображаем содержимое кнопки */}
        </button>
    );
};

export default SuperButton;