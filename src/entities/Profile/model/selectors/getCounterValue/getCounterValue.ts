import { createSelector } from '@reduxjs/toolkit';
import { Profile } from '../../types/profile';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: Profile) => counter.value,
);
