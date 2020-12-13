import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Aside.styles';

const Aside: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  return (
    <aside className={css(styles.aside)}>
      <div className={css(styles.contact)}>
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
      </div>

      <div className={css(styles.skills)}>
        <h3>Skills</h3>
        <ul>
          <li>HTML / CSS / JS / TS</li>
          <li>NodeJS / React / Redux</li>
          <li>TDD / BDD</li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
