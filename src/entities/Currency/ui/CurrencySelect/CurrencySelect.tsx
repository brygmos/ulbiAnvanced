import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';

type CurrencySelectProps<T extends Currency> = {
    className?: string;
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean;
};

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

    const props = {
        className,
        value,
        defaultValue: t('currency'),
        label: t('currency'),
        items: options,
        onChange,
        readonly: readOnly,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListBoxDeprecated {...props} />}
        />
    );
};
