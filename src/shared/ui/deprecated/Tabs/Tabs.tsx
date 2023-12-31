import React, { memo, ReactNode } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

type TabsProps = {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
};

/**
 * Deprecated, use components from "redesigned" folder
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    onClick={() => {
                        onTabClick(tab);
                    }}
                    // onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
