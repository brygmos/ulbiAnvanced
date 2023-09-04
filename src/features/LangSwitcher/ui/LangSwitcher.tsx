import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('sidebar');

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="clear" onClick={toggle}>
                    {short && <>{t('Language_short')}</>}
                    {!short && <>{t('Language')}</>}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={ThemeButton.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                >
                    {short && <>{t('Language_short')}</>}
                    {!short && <>{t('Language')}</>}
                </ButtonDeprecated>
            }
        />
    );
});
