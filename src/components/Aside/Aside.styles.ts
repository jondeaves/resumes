import { fontSize } from '../../common/helpers';

import { AsideStyles } from './Aside.types';

const styles: AsideStyles = {
  aside: ({ theme }) => ({
    background: theme.color.grey,

    '> ul': {
      listStyle: 'none',
      marginBottom: theme.spacing.medium,
      marginLeft: 0,
    },

    '> ul > li': {
      marginBottom: theme.spacing.xsmall,

      ...fontSize(theme, 'epsilon'),
    },
  }),

  contact: () => ({}),

  skills: ({ theme }) => ({
    marginTop: theme.spacing.medium,
  }),
};

export default styles;
