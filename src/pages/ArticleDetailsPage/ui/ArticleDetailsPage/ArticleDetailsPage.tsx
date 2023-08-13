import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { Comment, CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments }
    from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

type ArticleDetailsPageProps = {
    className?: string,
}

const comments: Comment[] = [
    {
        id: '1',
        text: 'some comment',
        user: {
            id: '1',
            username: 'fggdff',
            avatar: 'https://rare-gallery.com/uploads/posts/758939-Sweets-Cakes-Strawberry.jpg',
        },
    },
    {
        id: '2',
        text: 'some comment 2',
        user: {
            id: '2',
            username: 'fgghhhhhhdff',
            // eslint-disable-next-line max-len
            avatar: 'https://mykaleidoscope.ru/uploads/posts/2021-09/1632725852_12-mykaleidoscope-ru-p-tortikov-krasivo-foto-12.jpg',
        },

    },
    {
        id: '3',
        text: 'some comment 3',
        user: {
            id: '7',
            username: 'fgggfffffffffffdff',
            // eslint-disable-next-line max-len
            avatar: 'https://mykaleidoscope.ru/uploads/posts/2021-09/1632725852_12-mykaleidoscope-ru-p-tortikov-krasivo-foto-12.jpg',
        },

    },
];

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Comments')} className={cls.commentTitle} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
