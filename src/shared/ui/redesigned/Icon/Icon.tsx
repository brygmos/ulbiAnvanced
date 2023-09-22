import React, { memo } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inheritColor?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable = true,
        inheritColor = false,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(
                cls.Icon,
                {
                    [cls.inheritColor]: inheritColor,
                    [cls.clickable]: clickable,
                },
                [className],
            )}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );
    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(
                    cls.button,
                    { [cls.inheritColor]: inheritColor },
                    [],
                )}
                onClick={'onClick' in props ? props.onClick : undefined}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
