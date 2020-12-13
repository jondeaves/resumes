import { padding } from 'polished';

import { LayoutStyles } from './Layout.types';

const styles: LayoutStyles = {
  wrapper: ({ theme }) => ({
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between',

    '> main': {
      width: '70%',

      ...padding(theme.spacing.large, theme.spacing.small, theme.spacing.large, theme.spacing.large),
    },

    '> aside': {
      width: '30%',

      ...padding(theme.spacing.large, theme.spacing.small),
    },
  }),

  main: ({ theme }) => ({
    background: 'deepskyblue',
    // width: '70%',

    // ...padding(theme.spacing.large, theme.spacing.small, theme.spacing.large, theme.spacing.large),
  }),

  aside: ({ theme }) => ({
    // background: theme.color.grey,
    // width: '30%',
    // ...padding(theme.spacing.large, theme.spacing.small),
  }),
};

export default styles;
