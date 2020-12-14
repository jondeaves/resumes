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
    </React.Fragment>
  );
};

export default Layout;
