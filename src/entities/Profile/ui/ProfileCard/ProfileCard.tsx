import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading }
    from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './ProfileCard.module.scss';

type ProfileCardProps = {
    className?: string,
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profile')} />
                <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('edit profile')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('your name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('your surname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
