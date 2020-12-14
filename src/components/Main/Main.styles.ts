import { padding } from 'polished';

import { MainStyles } from './Main.types';

const styles: MainStyles = {
  main: ({ theme }) => ({
    // background: `linear-gradient(180deg, ${theme.color.grey} 0%, ${theme.color.grey} 90%, #ffffff 100%)`,
  }),

  blurb: ({ theme }) => ({
    marginBottom: theme.spacing.medium,
  }),
};

export default styles;
