import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ReactNode,
} from 'react';
import s from './SuperInputText.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void;
    onEnter?: () => void;
    error?: ReactNode;
    spanClassName?: string;
};

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
    onChange,
    onChangeText,
    onKeyPress,
    onEnter,
    error,
    className,
    spanClassName,
    id,
    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e); // если есть пропс onChange, то передать ему e
        onChangeText?.(e.currentTarget.value);
    };

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress?.(e);
        if (onEnter && e.key === 'Enter') {
            onEnter(); // если нажата кнопка Enter, вызываем onEnter
        }
    };

    const finalSpanClassName = `${s.error} ${spanClassName || ''}`;
    const finalInputClassName = `${s.input} ${error ? s.errorInput : s.superInput} ${className || ''}`.trim(); // исправлено смешивание классов

    return (
        <div className={s.inputWrapper}>
            <input
                id={id}
                type="text"
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps} // передаём остальные пропсы
            />
            <span id={id ? `${id}-span` : undefined} className={finalSpanClassName}>
                {error}
            </span>
        </div>
    );
};

export default SuperInputText;