import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from 'react';
import s from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void;
    spanClassName?: string;
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
    onChange,
    onChangeChecked,
    className,
    spanClassName,
    children,
    id,
    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked?.(e.currentTarget.checked); // передаем состояние чекбокса
        onChange?.(e); // передаем событие onChange
    };

    const finalInputClassName = `${s.checkbox} ${className || ''}`.trim();

    return (
        <label className={s.label}>
            <input
                id={id}
                type="checkbox"
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps} // передаём остальные пропсы
            />
            {children && (
                <span
                    id={id ? `${id}-span` : undefined}
                    className={s.spanClassName}
                >
                    {children}
                </span>
            )}
        </label>
    );
};

export default SuperCheckbox;