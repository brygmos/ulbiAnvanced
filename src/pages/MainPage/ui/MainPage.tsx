import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Text } from 'shared/ui/Text';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t('Главная страница')}</p>
            <Counter />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text text="text  fgdghgfh ghgfhghfhfghgd" title="title gfdhhb " />
        </div>
    );
};

export default MainPage;
