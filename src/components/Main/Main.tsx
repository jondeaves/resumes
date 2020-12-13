import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Main.styles';

const Main: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  return (
    <main className={css(styles.main)}>
      <p className={css(styles.blurb)}>
        I am an experienced developer specialising in interactive web applications. I take pride in creating modern,
        responsive and progressive user experiences. I am always learning, always improving, and I am always excited by
        what I do.
      </p>

      <div>
        <h3>Experience</h3>
      </div>
    </main>
  );
};

export default Main;
