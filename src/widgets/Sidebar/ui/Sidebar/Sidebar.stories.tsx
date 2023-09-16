import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { I18nDecorator } from '@/shared/config/storybook/I18nDecorator/I18nDecorator';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    // decorators: [I18nDecorator],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    I18nDecorator,
    NewDesignDecorator,
    StoreDecorator({}),
    ThemeDecorator(Theme.LIGHT),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    NewDesignDecorator,
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [NewDesignDecorator, StoreDecorator({})];

export const LightDeprecated = Template.bind({});
LightDeprecated.args = {};
LightDeprecated.decorators = [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)];

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const NoAuthDeprecated = Template.bind({});
NoAuthDeprecated.args = {};
NoAuthDeprecated.decorators = [StoreDecorator({})];
