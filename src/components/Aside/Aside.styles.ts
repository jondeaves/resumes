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
      fontSize: theme.typography.sizes.epsilon,
      marginBottom: theme.spacing.xsmall,
    },
  }),

  contact: () => ({}),

  section: ({ theme }) => ({
    marginTop: theme.spacing.medium,
  }),
};

export default styles;
