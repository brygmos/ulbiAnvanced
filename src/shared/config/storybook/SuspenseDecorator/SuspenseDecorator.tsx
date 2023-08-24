import React, { Suspense } from 'react';
import { Story } from '@storybook/react';

export const SuspenseDecorator = (StoryComponent: Story) => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback="...loading">
        <StoryComponent />
    </Suspense>
);
