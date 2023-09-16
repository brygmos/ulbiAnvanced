import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [NewDesignDecorator];

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = {};

export const NormalDeprecatedDark = Template.bind({});
NormalDeprecatedDark.args = {};
NormalDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
