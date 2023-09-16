import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { toggleFeatures } from '@/shared/lib/features';

type ArticleInfiniteListProps = {
    className?: string;
};

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const errorContent = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => <Text text={t('Error while loading article')} />,
        off: () => <TextDeprecated text={t('Error while loading article')} />,
    });

    if (error) {
        return errorContent;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
