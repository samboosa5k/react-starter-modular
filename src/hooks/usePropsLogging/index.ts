import { useCallback, useEffect } from 'react';
import { PropsType } from '@utils/compose';

export const usePropsLogging = (props: PropsType) => {
    const logProps = useCallback((p: PropsType) => {
        console.log('props logging: \n', p);
    }, []);

    useEffect(() => {
        logProps(props);
    }, [logProps, props]);

    return { logProps, ...props };
};
