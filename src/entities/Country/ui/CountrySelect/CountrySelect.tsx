import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { DropdownDirection } from '@/shared/types/ui';

export type CountrySelectProps = {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
    direction?: DropdownDirection;
};

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({
        className,
        onChange,
        value,
        readOnly,
        direction = 'bottom left',
    }: CountrySelectProps) => {
        const { t } = useTranslation();

        if (!value || !onChange) {
            return null;
        }

        const props = {
            className,
            value,
            defaultValue: t('Country'),
            label: t('Country'),
            items: options,
            onChange,
            readonly: readOnly,
            direction,
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
        );
    },
);
