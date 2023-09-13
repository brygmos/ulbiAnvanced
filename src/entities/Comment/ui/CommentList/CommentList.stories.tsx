import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../shared/const/theme';

const normalArgs = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', username: 'Petya' },
        },
    ],
};

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = normalArgs;
Normal.decorators = [NewDesignDecorator];

export const NormalDark = Template.bind({});
NormalDark.args = normalArgs;
NormalDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
Loading.decorators = [NewDesignDecorator];

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = normalArgs;

export const NormalDeprecatedDark = Template.bind({});
NormalDeprecatedDark.args = normalArgs;
NormalDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingDeprecated = Template.bind({});
LoadingDeprecated.args = {
    comments: [],
    isLoading: true,
};
