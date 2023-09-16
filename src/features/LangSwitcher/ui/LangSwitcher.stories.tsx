import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { I18nDecorator } from '@/shared/config/storybook/I18nDecorator/I18nDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => (
    <LangSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [I18nDecorator, NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    I18nDecorator,
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
