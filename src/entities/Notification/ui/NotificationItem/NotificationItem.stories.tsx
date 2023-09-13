import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem, NotificationItemProps } from './NotificationItem';
import { NewDesignDecorator } from '../../../../shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../shared/const/theme';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const normalArgs: NotificationItemProps = {
    item: { id: 'id', title: 'title', description: 'description' },
};

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = normalArgs;
Normal.decorators = [NewDesignDecorator];

export const NormalDark = Template.bind({});
NormalDark.args = normalArgs;
NormalDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const NormalOrange = Template.bind({});
NormalOrange.args = normalArgs;
NormalOrange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = normalArgs;
