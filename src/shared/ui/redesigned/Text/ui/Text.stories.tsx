import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '../../../../const/theme';

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
    title: 'Title of the Text Component',
    text: 'Description of the Text Component',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title of the Text Component',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description of the Text Component description of the Text Component',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title of the Text Component',
    text: 'Description of the Text Component description of the Text Component',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title of the Text Component',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description of the Text Component description of the Text Component',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title of the Text Component',
    text: 'Description of the Text Component description of the Text Component',
    variant: 'error',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: 'l',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: 'm',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: 's',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
