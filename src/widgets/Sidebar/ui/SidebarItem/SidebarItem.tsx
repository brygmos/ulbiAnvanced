import React from 'react';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

type SidebarItemProps = {
    item: SidebarItemType;
    collapsed?: boolean;
};

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
};
