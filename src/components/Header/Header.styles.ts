import { padding } from 'polished';
import { HeaderStyles } from './Header.types';

const styles: HeaderStyles = {
  main: ({ theme }) => ({
    backgroundColor: theme.color.secondary,
    width: '100%',

    ...padding(theme.spacing.large),

    '> *': {
      color: theme.color.tertiary,
    },

    '@media print': {
      ...padding(0),
    },
  }),
};

export default styles;
