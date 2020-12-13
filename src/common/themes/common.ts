import ITheme from './ITheme';

const commonTheme: ITheme = {
  color: {
    primary: '#02394A',
    secondary: '#043565',
    tertiary: '#F5F8FC',
    grey: '#E4E8EE',
  },
  spacing: {
    tiny: '0.5rem',
    xsmall: '1.1rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
  },
  typography: {
    lineheight: {
      base: '100%',
      theta: '150%',
      eta: '150%',
      zeta: '150%',
      epsilon: '150%',
      delta: '150%',
      gamma: '125%',
      alpha: '125%',
      giga: '125%',
      mega: '125%',
    },
    sizes: {
      theta: '1rem',
      eta: '1.2rem',
      zeta: '1.4rem',
      epsilon: '1.6rem',
      delta: '1.8rem',
      gamma: '2.0rem',
      alpha: '2.4rem',
      giga: '3.6rem',
      mega: '4.0rem',
    },
  },
};

export default commonTheme;
