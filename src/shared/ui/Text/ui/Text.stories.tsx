import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title etrgdjrboprjhordjopdr grjgrgrg',
    text: 'Description fgjfgjjjjjjjjjjjjfg jgjfgjgfjfgh jfj fgjfg jgfgr',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title etrgdjrboprjhordjopdr grjgrgrg',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description fgjfgjjjjjjjjjjjjfg jgjfgjgfjfgh jfj fgjfg jgfgr',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title etrgdjrboprjhordjopdr grjgrgrg',
    text: 'Description fgjfgjjjjjjjjjjjjfg jgjfgjgfjfgh jfj fgjfg jgfgr',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title etrgdjrboprjhordjopdr grjgrgrg',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description fgjfgjjjjjjjjjjjjfg jgjfgjgfjfgh jfj fgjfg jgfgr',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
