import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

type ArticlesPageProps = {
    className?: string,
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('ArticlesPage')}
        </div>
    );
};

export default memo(ArticlesPage);