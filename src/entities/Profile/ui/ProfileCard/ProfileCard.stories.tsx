import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const args = {
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

export const Primary = Template.bind({});
Primary.args = args;
Primary.decorators = [NewDesignDecorator];

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};
WithError.decorators = [NewDesignDecorator];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
IsLoading.decorators = [NewDesignDecorator];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = args;
PrimaryDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {
    error: 'true',
};
WithErrorDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
    isLoading: true,
};
IsLoadingDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = args;

export const PrimaryDeprecatedDark = Template.bind({});
PrimaryDeprecatedDark.args = args;
PrimaryDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
