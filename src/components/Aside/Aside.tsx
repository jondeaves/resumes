import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Aside.styles';

const Aside: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  return (
    <aside className={css(styles.aside)}>
      <h3>Contact</h3>
      <ul>
        <li>
          <a href="mailto:hello@jondeaves.me">hello@jondeaves.me</a>
        </li>
        <li>
          <a href="https://uk.linkedin.com/in/jondeaves" rel="external">
            linkedin.com/in/jondeaves
          </a>
        </li>
      </ul>

      <h3 className={css(styles.section)}>Skills</h3>
      <ul>
        <li>HTML / CSS / JS / TS</li>
        <li>NodeJS / React / Redux</li>
        <li>TDD / BDD</li>
        <li>AWS / Docker / Git / Jenkins</li>
      </ul>

      <h3 className={css(styles.section)}>Certifications</h3>
      <ul>
        <li>
          <small>
            <strong>JavaScript - Advanced Programming</strong>
            <br />
            NobleProg (2015)
          </small>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
