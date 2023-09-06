import React, { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Loader } from '../../../../shared/ui/deprecated/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

type LoginModalProps = {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose, className } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
