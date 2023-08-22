import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

type EditableProfileCardHeaderProps = {
    className?: string,
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
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
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    {t('edit profile')}
                                </Button>
                            )
                            : (
                                <HStack gap="8">
                                    <Button
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileCardHeader.CancelButton"

                                    >
                                        {t('cancel')}
                                    </Button>
                                    <Button
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCardHeader.SaveButton"

                                    >
                                        {t('save profile')}
                                    </Button>
                                </HStack>
                            )}
                    </div>
                )}

        </HStack>
    );
});
