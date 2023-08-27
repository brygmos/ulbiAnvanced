import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

type CountrySelectProps = {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void;
    readOnly?: boolean,
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className,
    onChange,
    value,
    readOnly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    if (!value || !onChange) {
        return null;
    }

    return (
        <ListBox
            onChange={onChange}
            value={value}
            defaultValue={t('Country')}
            label={t('Country')}
            items={options}
            readonly={readOnly}
            direction="top left"
        />
    );
});
