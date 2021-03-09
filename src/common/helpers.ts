import ITheme from './themes/ITheme';
import Size from './types/Size';

export const fontSize = (theme: ITheme, size: Size): { fontSize: string; lineHeight: string } => ({
  fontSize: theme.typography.sizes[size],
  lineHeight: theme.typography.lineheight[size],
});

export const fontSizeStr = (theme: ITheme, size: Size): string => {
  const obj = fontSize(theme, size);

  return `
    font-size: ${obj.fontSize};
    line-height: ${obj.lineHeight};
  `;
};

export const getParameterByName = (name: string, defaultValue = '', url = window.location.href): string => {
  const parsedName = name.replace(/[[\]]/g, '\\$&');

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);

  if (!results || !results[2]) {
    return defaultValue;
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
