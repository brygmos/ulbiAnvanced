import React, { useCallback, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Page } from '@/widgets/Page';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { Button } from '@/shared/ui/redesigned/Button';

const MainPage = () => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <Page data-testid="MainPage">
            <p>{t('Главная страница')}</p>
            {!authData && (
                <p>
                    <Trans i18nKey="Please login">
                        without this text not working!
                        <Button
                            variant="clear"
                            color="accent"
                            onClick={onShowModal}
                            inline
                        >
                            {t('Login')}
                        </Button>
                    </Trans>
                </p>
            )}
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </Page>
    );
};

export default MainPage;
