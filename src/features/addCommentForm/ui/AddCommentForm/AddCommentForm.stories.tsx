import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

const args = {
    onSendComment: action('onSendComment'),
};

export const Normal = Template.bind({});
Normal.args = args;
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = args;

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = args;
DarkDeprecated.decorators = [ThemeDecorator(Theme.DARK)];
