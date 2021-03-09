import { math } from 'polished';

import { fontSize } from '../../common/helpers';

import { ExperienceStyles } from './Experience.types';

const styles: ExperienceStyles = {
  main: ({ theme }) => ({
    ':not(:last-child)': {
      marginBottom: theme.spacing.small,
    },
  }),

  title: ({ theme }) => ({
    letterSpacing: '0.1rem',
    marginBottom: math(`${theme.spacing.xsmall} / 2`),
    textTransform: 'uppercase',

    ...fontSize(theme, 'epsilon'),
  }),

  subTitle: ({ theme }) => ({
    fontStyle: 'italic',
    marginBottom: theme.spacing.xsmall,

    ...fontSize(theme, 'zeta'),
  }),
};

export default styles;
