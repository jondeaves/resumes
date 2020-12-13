export default interface ITheme {
  color: {
    primary: string; // Text color
    secondary: string; // Link underline
    tertiary: string; // Page background
    grey: string;
  };
  spacing: {
    tiny: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
  };
  typography: {
    lineheight: {
      base: string;
      theta: string;
      eta: string;
      zeta: string;
      epsilon: string;
      delta: string;
      gamma: string;
      alpha: string;
      giga: string;
      mega: string;
    };
    sizes: {
      theta: string;
      eta: string;
      zeta: string;
      epsilon: string;
      delta: string;
      gamma: string;
      alpha: string;
      giga: string;
      mega: string;
    };
  };
}
