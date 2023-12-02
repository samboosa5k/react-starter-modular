import { PropsType } from '@utils/compose';
import { FC } from 'react';


export interface TitleProps extends PropsType {
}

export const Title: FC<TitleProps> = ({ title }) => {
    return <h1>{title}</h1>;
};


