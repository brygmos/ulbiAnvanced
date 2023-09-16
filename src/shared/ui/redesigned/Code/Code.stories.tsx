import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '../../../const/theme';
import { NewDesignDecorator } from '../../../config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};

Normal.decorators = [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};

Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};

Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];
