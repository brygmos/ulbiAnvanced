import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export type SelectOptions = {
    value: string,
    content: string
}

type SelectProps = {
    className?: string,
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (value: string) => void,
    readOnly?: boolean,
}

// export const Select = ({ className, label }: SelectProps) => {
export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readOnly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.options}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const mods: Mods = {

    };
    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    );
});
