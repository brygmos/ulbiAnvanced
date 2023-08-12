import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
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

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
