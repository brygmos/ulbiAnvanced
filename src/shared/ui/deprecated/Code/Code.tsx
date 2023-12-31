import React, { memo, useCallback } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import { Button, ThemeButton } from '../Button';
import CopyIcon from '../../../assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

type CodeProps = {
    className?: string;
    text: string;
};

/**
 * Deprecated, use components from "redesigned" folder
 * @deprecated
 */
export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ThemeButton.CLEAR}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
