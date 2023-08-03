import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

type LoginModalProps = {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose, className } = props;
    return (
        <Modal
            className={classNames(cls.loginModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
