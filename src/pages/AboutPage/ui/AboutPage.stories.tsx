import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';
import { Theme } from '../../../shared/const/theme';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '../../../shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [NewDesignDecorator, StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    NewDesignDecorator,
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = {};
NormalDeprecated.decorators = [StoreDecorator({})];

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
