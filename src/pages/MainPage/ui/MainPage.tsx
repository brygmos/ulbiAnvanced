import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <Counter />
            <p>{t('Главная страница')}</p>
        </Page>
    );
};

export default MainPage;
