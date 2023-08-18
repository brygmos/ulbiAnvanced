import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <p>{t('Главная страница')}</p>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text text="text  fgdghgfh ghgfhghfhfghgd" title="title gfdhhb " />
        </Page>
    );
};

export default MainPage;
