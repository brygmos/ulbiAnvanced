import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/articleRating/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = {};
NormalDeprecated.decorators = [];

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [ThemeDecorator(Theme.DARK)];
