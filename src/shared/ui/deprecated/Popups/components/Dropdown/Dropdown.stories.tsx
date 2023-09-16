import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button as ButtonDeprecated } from '../../../Button';
import { Dropdown as DropdownDeprecated } from './Dropdown';
import { StoreDecorator } from '../../../../../config/storybook/StoreDecorator/StoreDecorator';
import { Button } from '../../../../redesigned/Button';
import { Dropdown } from '../../../../redesigned/Popups';
import { NewDesignDecorator } from '../../../../../config/storybook/NewDesignDecorator/NewDesignDecorator';

const items = [
    {
        content: 'first',
    },
    {
        content: 'second',
    },
    {
        content: 'third',
    },
];

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items,
};
Normal.decorators = [NewDesignDecorator];

const TemplateDeprecated: ComponentStory<typeof DropdownDeprecated> = (
    args,
) => <DropdownDeprecated {...args} />;

export const NormalDeprecated = TemplateDeprecated.bind({});
NormalDeprecated.args = {
    trigger: <ButtonDeprecated>Open</ButtonDeprecated>,
    items,
};
