import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

type ScrollToolbarProps = {
    className?: string;
};

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;
    return (
        <VStack
            justify="center"
            align="center"
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
