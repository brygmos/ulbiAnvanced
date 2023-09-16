import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { NewDesignDecorator } from '../../../config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    width: '100%',
    height: 200,
};
NormalDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];
