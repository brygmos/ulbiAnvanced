import React from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import i18n from 'i18next';
import { Currency } from 'shared/const/common';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

type ProfileCardProps = {
    className?: string,
    data?: Profile,
    error?: string,
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstname?: (value?: string) => void,
    onChangeLastname?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, mods, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error while fetching profile')}
                    text={t('try to reload page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            {/* eslint-disable-next-line i18next/no-literal-string */}
                            <Avatar src={data?.avatar} alt="avatar" />
                        </div>
                    )}
                <Input
                    value={data?.first}
                    placeholder={t('your name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('your surname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('your city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('your username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('link to your avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <Select
                    label={i18n.t('currency')}
                    options={[
                        { value: Currency.EUR, content: Currency.EUR },
                        { value: Currency.USD, content: Currency.USD },
                        { value: Currency.RUB, content: Currency.RUB },
                    ]}
                />
            </div>
        </div>
    );
};
