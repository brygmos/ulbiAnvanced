import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '../../../shared/const/theme';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};

export const AuthNavbarDark = Template.bind({});
AuthNavbarDark.args = {};

Light.decorators = [StoreDecorator({})];
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
AuthNavbar.decorators = [StoreDecorator({ user: { authData: {} } })];
AuthNavbarDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
];
