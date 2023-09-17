import React, { memo, useEffect, useState } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon';
import { Icon } from '../Icon';
import StarIcon from '../../../assets/icons/star.svg';
import { ToggleFeatures, toggleFeatures } from '../../../lib/features';

type StarRatingProps = {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
};

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    useEffect(() => {
        setCurrentStarCount(selectedStars);
    }, [selectedStars]);

    const onClick = (starsCount: number) => () => {
        onSelect?.(starsCount);
        setCurrentStarCount(starsCount);
        setIsSelected(true);
    };

    const onHover = (starsCount: number) => () => {
        setCurrentStarCount(starsCount);
    };

    const onLeave = () => {
        setCurrentStarCount(selectedStars);
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => cls.StarRating,
                    on: () => cls.StarRatingRedesigned,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        { [cls.selected]: false },
                        [
                            currentStarCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    ),
                    Svg: StarIcon,
                    key: starNumber,
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarCount >= starNumber,
                };

                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Icon clickable {...commonProps} />}
                        off={<IconDeprecated {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});
