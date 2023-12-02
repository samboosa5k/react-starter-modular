import { FC } from 'react';

export type HooksArray = Array<Function>;
export type PropsType = { [key: string]: any } extends Object ? { [key: string]: any } : never;
export type WrappedComponentType = FC<PropsType>;
export const compose = (...hooks: HooksArray) => {
    return (WrappedComponent: WrappedComponentType) => {
        return (props: PropsType) => {
            const reduced = hooks.reduce((acc, fn) => fn(acc), props);
            return <WrappedComponent {...reduced} />;
        };
    };
};

