import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Aside.styles';

const Aside: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  return (
    <aside className={css(styles.aside)}>
      <p>I'm over here</p>
    </aside>
  );
};

export default Aside;
