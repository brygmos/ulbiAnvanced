import React, { ReactNode } from 'react';
import { classNames, Mods } from '../../../../lib/classNames/classNames';
import { Portal } from '../../../redesigned/Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../../../redesigned/Overlay/Overlay';
import { useModal } from '../../../../lib/hooks/useModal/useModal';
import { useTheme } from '../../../../lib/hooks/useTheme/useTheme';
import { Button } from '../../Button/ui/Button';

type ModalProps = {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
};

const ANIMATION_DELAY = 300;

/**
 * Deprecated, use components from "redesigned" folder
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
            <Button />
        </Portal>
    );
};