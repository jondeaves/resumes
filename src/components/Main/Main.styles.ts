import { fontSize } from '../../common/helpers';
import { MainStyles } from './Main.types';

const styles: MainStyles = {
  main: ({ theme }) => ({
    // background: `linear-gradient(180deg, ${theme.color.grey} 0%, ${theme.color.grey} 90%, #ffffff 100%)`,
  }),

  blurb: ({ theme }) => ({
    ...fontSize(theme, 'epsilon'),
    marginBottom: theme.spacing.medium,
  }),

  limit: ({ theme }) => ({
    marginLeft: theme.spacing.xsmall,

    ...fontSize(theme, 'eta'),
  }),
};

export default styles;
