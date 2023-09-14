import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '../../../shared/const/theme';
import { NewDesignDecorator } from '../../../shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

const profile = {
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
};

// export const Normal = Template.bind({});
// Normal.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [
//     ThemeDecorator(Theme.DARK),
//     StoreDecorator({
//         profile: profile,
//     }),
// ];
// Normal.decorators = [
//     StoreDecorator({
//         profile: profile,
//     }),
// ];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [NewDesignDecorator, StoreDecorator({ profile })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ profile }),
];

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = {};
NormalDeprecated.decorators = [StoreDecorator({ profile })];

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ profile }),
];
