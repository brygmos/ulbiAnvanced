import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditadleProfileCardHeader } from './EditadleProfileCardHeader';

export default {
    title: 'shared/EditadleProfileCardHeader',
    component: EditadleProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditadleProfileCardHeader>;

const Template: ComponentStory<typeof EditadleProfileCardHeader> = (args) => <EditadleProfileCardHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [];
