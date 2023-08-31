import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

type CounterProps = {
    className?: string;
};

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { decrement, increment } = useCounterActions();

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>
                +
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                -
            </Button>
        </div>
    );
};
