import ITheme from './themes/ITheme';
import Size from './types/Size';

export const fontSize = (theme: ITheme, size: Size): { fontSize: string; lineHeight: string } => ({
  fontSize: theme.typography.sizes[size],
  lineHeight: theme.typography.lineheight[size],
});
