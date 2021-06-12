import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import Aside from '../Aside';
import Header from '../Header';
import Main from '../Main';

import styles from './Layout.styles';

const Layout: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  return (
    <React.Fragment>
      <Header />

      <div className={css(styles.wrapper)}>
        <Aside />
        <Main />
      </div>

      <footer>
        <p>** Note that printing at 85% zoom should make it fit neatly onto one page</p>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
