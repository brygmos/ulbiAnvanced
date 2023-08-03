// import { fireEvent, screen } from '@testing-library/react';
// import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { User } from '../model/types/User';
//
// describe('Counter', () => {
//     test('render counter', () => {
//         componentRender(<User />, { initialState: { counter: { value: 10 } } });
//         expect(screen.getByTestId('value-title')).toHaveTextContent('10');
//     });
//
//     test('increment', () => {
//         componentRender(<User />, { initialState: { counter: { value: 10 } } });
//
//         const incBtn = screen.getByTestId('increment-btn');
//         expect(screen.getByTestId('value-title')).toHaveTextContent('10');
//
//         fireEvent.click(incBtn);
//         expect(screen.getByTestId('value-title')).toHaveTextContent('11');
//     });
//
//     test('decrement', () => {
//         componentRender(<User />, { initialState: { counter: { value: 10 } } });
//
//         const incBtn = screen.getByTestId('decrement-btn');
//         expect(screen.getByTestId('value-title')).toHaveTextContent('10');
//
//         fireEvent.click(incBtn);
//         expect(screen.getByTestId('value-title')).toHaveTextContent('9');
//     });
// });
