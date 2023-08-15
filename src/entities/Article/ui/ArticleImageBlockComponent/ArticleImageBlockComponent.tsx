import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = {
    className?: string,
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title
                && (
                    <Text
                        text={block.title}
                        align={TextAlign.CENTER}
                    />
                )}
        </div>
    );
});