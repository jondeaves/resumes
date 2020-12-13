import { math } from 'polished';

import { AsideStyles } from './Aside.types';

const styles: AsideStyles = {
  aside: ({ theme }) => ({
    background: theme.color.grey,
  }),

  contact: ({ theme }) => ({
    marginBottom: math(`${theme.spacing.medium} * 2 - 0.5rem`),
  }),

  skills: ({ theme }) => ({}),
};

export default styles;
