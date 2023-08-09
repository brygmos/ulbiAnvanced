import React, { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

type AvatarProps = {
    className?: string,
    src?: string,
    alt?: string,
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const { t } = useTranslation();
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
