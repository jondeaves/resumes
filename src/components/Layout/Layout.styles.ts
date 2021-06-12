import { padding } from 'polished';

import { LayoutStyles } from './Layout.types';

const styles: LayoutStyles = {
  wrapper: ({ theme }) => ({
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between',

    '> main': {
      width: '100%',

      ...padding(theme.spacing.large, theme.spacing.small, theme.spacing.large, theme.spacing.large),
    },

    '> aside': {
      width: 380,

      ...padding(theme.spacing.large, theme.spacing.small),
    },
  }),
};

export default styles;
