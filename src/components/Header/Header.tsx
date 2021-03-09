import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Header.styles';

const Header: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  return (
    <header className={css(styles.main)}>
      <h1>Jon Deaves</h1>
      <h2>Senior Software Engineer</h2>
    </header>
  );
};

export default Header;
