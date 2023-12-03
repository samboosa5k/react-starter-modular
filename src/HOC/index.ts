import { compose } from '@utils/compose';
import { usePropsLogging } from '@hooks/usePropsLogging';
import { useRenderCount } from '@hooks/useRenderCount';

export { withPropsLogging } from './withPropsLogging';

export const withContextAndLogging = compose(useRenderCount, usePropsLogging);
