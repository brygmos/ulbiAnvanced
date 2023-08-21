import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

type ProfilePageHeaderProps = {
    className?: string,
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack
            max
            justify="between"
            className={classNames('cls.ProfilePageHeader', {}, [className])}
        >
            <Text title={t('profile')} />
            {canEdit
                && (
                    <div>
                        {readonly
                            ? (
                                <Button
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onEdit}
                                >
                                    {t('edit profile')}
                                </Button>
                            )
                            : (
                                <HStack gap="8">
                                    <Button
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('cancel')}
                                    </Button>
                                    <Button
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onSave}
                                    >
                                        {t('save profile')}
                                    </Button>
                                </HStack>
                            )}
                    </div>
                )}

        </HStack>
    );
};
