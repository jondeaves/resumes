import { AsideStyles } from './Aside.types';

const styles: AsideStyles = {
  aside: ({ theme }) => ({
    background: `linear-gradient(180deg, ${theme.color.grey} 0%, ${theme.color.grey} 80%, ${theme.color.tertiary} 100%)`,

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
