import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { toggleFeatures } from '@/shared/lib/features';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [isArticlesPageWasOpened, dispatch]);

    const onClose = () => setIsOpen(false);

    const text = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => (
            <Text
                title={t('Welcome')}
                text={t(
                    'Here you can search and read articles at different topics',
                )}
            />
        ),
        off: () => (
            <TextDeprecated
                title={t('Welcome')}
                text={t(
                    'Here you can search and read articles at different topics',
                )}
            />
        ),
    });

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
