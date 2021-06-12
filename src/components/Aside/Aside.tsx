import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Aside.styles';

const Aside: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  return (
    <aside className={css(styles.aside)}>
      <h1>Jon Deaves</h1>
      <h2>Senior Software Engineer</h2>
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

      <h3 className={css(styles.section)}>Core Skills</h3>
      <ul>
        <li>HTML / CSS / JS / TS</li>
        <li>NodeJS / React / Redux</li>
      </ul>

      <h3 className={css(styles.section)}>Learning</h3>
      <ul>
        <li>
          <h4>Rust</h4>
          I'm currently learning Rust through the official Book, Rustlings and have plans for a few small projects.
        </li>
        <li>
          <br />
          <h4>Flutter</h4>I have built a number of Flutter apps as learning experiences; including an app to track our
          office Table Tennis League which is deployed through a testing track on the Google Play Store.
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
