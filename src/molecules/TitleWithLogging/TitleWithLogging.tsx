import { withPropsLogging } from '@HOC/withPropsLogging';
import { Title } from '@atoms/Title';

export const TitleWithLogging = withPropsLogging(({ title, logProps }) => {
        return (<>
            <h2 onClick={(e) => logProps(e.currentTarget.innerText)}>Title With Logging</h2>
            {Title({ title, logProps })}
        </>);
    },
);
