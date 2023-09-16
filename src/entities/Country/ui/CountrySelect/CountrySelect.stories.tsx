import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountrySelect, CountrySelectProps } from './CountrySelect';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Country } from '../../model/types/country';

export default {
    title: 'entities/Country/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

const args: CountrySelectProps = {
    value: Country.Russia,
};

export const Primary = Template.bind({});
Primary.args = args;
Primary.decorators = [NewDesignDecorator];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = args;
PrimaryDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = args;

export const PrimaryDeprecatedDark = Template.bind({});
PrimaryDeprecatedDark.args = args;
PrimaryDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
