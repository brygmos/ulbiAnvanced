import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

type CurrencySelectProps = {
    className?: string,
    value?: Currency,
    onChange?: (value: Currency) => void;
    readOnly?: boolean,
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.RUB, content: Currency.RUB },
];

export const CurrencySelect = memo(({
    className,
    onChange,
    value,
    readOnly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            label={t('currency')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            defaultValue={t('currency')}
            readonly={readOnly}
            direction="top right"
        />
    );
});
