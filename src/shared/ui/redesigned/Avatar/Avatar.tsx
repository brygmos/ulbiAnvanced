import React, { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage/AppImage';
import UserIcon from '../../../assets/icons/user-filled.svg';

import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

type AvatarProps = {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
};

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt, fallbackInverted } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
