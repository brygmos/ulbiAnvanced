import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrencySelect, CurrencySelectProps } from './CurrencySelect';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Currency } from '../../model/types/currency';

export default {
    title: 'entities/Currency/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

const args: CurrencySelectProps<Currency> = {
    value: Currency.RUB,
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
