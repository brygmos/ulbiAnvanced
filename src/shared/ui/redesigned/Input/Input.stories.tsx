import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';
import { NewDesignDecorator } from '../../../config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../const/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Type text',
    value: '123123',
};
PrimaryDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];
