import { PropsType } from '@utils/compose';
import { useEffect, useRef } from 'react';
import { useGlobalContext } from '@context/GlobalContext';

export const useRenderCount = (props: PropsType) => {
    const context = useGlobalContext();
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current++;
    }, [context]);
    return { renderCount: renderCount.current, ...props };
};
