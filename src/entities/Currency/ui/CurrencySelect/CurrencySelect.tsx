import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

type CurrencySelectProps<T extends Currency> = {
    className?: string,
    value?: T,
    onChange?: (value: T) => void;
    readOnly?: boolean,
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.RUB, content: Currency.RUB },
];

export const CurrencySelect = <T extends Currency>({
    className,
    onChange,
    value,
    readOnly,
}: CurrencySelectProps<T>) => {
    const { t } = useTranslation();

    if (!value || !onChange) {
        return null;
    }

    return (
        <ListBox
            className={className}
            label={t('currency')}
            items={options}
            value={value}
            onChange={onChange}
            defaultValue={t('currency')}
            readonly={readOnly}
            direction="top right"
        />
    );
};
