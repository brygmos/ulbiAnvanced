import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
// import i18n from '../../i18n/i18n';
import i18nForTests from '../../i18n/i18nForTests';

export const I18nDecorator = (StoryComponent: Story) => {
    return (
        <I18nextProvider i18n={i18nForTests}>
            <Suspense fallback="/\/\/\...">
                <StoryComponent />
            </Suspense>
        </I18nextProvider>
    );
};
