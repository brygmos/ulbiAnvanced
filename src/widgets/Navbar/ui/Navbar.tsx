import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModule = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModule}
            >
                {t('Login')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModule}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Cupiditate exercitationem
                facilis fugit iste laboriosam magnam
                maxime nesciunt quidem voluptatibus voluptatum.
            </Modal>
        </div>
    );
};
// const [] = useTranslation()
