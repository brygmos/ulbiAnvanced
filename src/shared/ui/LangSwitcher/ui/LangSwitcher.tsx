import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('sidebar');

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR_INVERTED}
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {short && <>{t('Language_short')}</>}
            {!short && <>{t('Language')}</>}
        </Button>
    );
});
