import { PropsType } from '@utils/compose';
import { FC } from 'react';

import { withPropsLogging } from '@src/HOC/withPropsLogging';

export interface TitleProps extends PropsType {
}

export const Title: FC<TitleProps> = ({ title }) => {
    return <h1>{title}</h1>;
};

export const TitleWithLogging = withPropsLogging(Title);
