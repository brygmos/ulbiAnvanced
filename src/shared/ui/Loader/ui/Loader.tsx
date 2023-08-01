import React from 'react';
import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type PageLoaderProps = {
  className?: string;
};

export const Loader = ({ className }: PageLoaderProps) => <div className={classNames('lds-dual-ring', {}, [className])} />;
