import React, {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';
import brokenImg from '../../assets/brokenImg.png';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string,
    fallback?: ReactElement,
    errorFallback?: ReactElement,
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    if (hasError && !errorFallback) {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img src={brokenImg} />;
    }

    return (
        <img className={className} alt={alt} src={src} {...otherProps} />
    );
});
