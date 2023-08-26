import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '../../../shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Тимур',
            lastname: 'Ульби',
            age: 22,
            currency: Currency.USD,
            country: Country.Belarus,
            city: 'Moscow',
            username: 'admin',
            avatar,
        },

    },
})];
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Тимур',
            lastname: 'Ульби',
            age: 22,
            currency: Currency.USD,
            country: Country.Belarus,
            city: 'Moscow',
            username: 'admin',
            avatar,
        },

    },
})];
