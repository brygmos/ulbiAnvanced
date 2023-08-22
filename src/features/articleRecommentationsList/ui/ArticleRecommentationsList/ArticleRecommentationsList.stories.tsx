import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecommentationsList } from './ArticleRecommentationsList';

export default {
    title: 'features/ArticleRecommentationsList',
    component: ArticleRecommentationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommentationsList>;

const Template: ComponentStory<typeof ArticleRecommentationsList> = (args) => <ArticleRecommentationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
