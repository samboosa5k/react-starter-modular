// Hook wrapper using the hook composer
import { compose } from '@utils/compose';
import { usePropsLogging } from '@src/hooks/usePropsLogging';

export const withPropsLogging = compose(usePropsLogging);
