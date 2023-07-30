import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ErrorPage.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation("ErrorPage");

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.errorPage, {}, [className])}>
      <p>{t("ErrorPageText")}</p>
      <Button onClick={reloadPage}>{t("ReloadPage")}</Button>
    </div>
  );
};
