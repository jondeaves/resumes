import React from 'react';
import { useFela } from 'react-fela';
import { format } from 'date-fns';

import ITheme from '../../common/themes/ITheme';

import styles from './Experience.styles';
import { ExperienceProps } from './Experience.types';

const Experience: React.FC<ExperienceProps> = (props) => {
  const { css } = useFela<ITheme, ExperienceProps>();
  const { item } = props;

  return (
    <div className={css(styles.main)}>
      <h4 className={css(styles.title)}>{item.title}</h4>
      <h5 className={css(styles.subTitle)}>
        {item.company}&nbsp;&nbsp;/&nbsp;&nbsp;
        <abbr title={format(new Date(item.startDate), 'do MMMM yyyy')}>
          {format(new Date(item.startDate), 'MMMM yyyy')}
        </abbr>{' '}
        –{' '}
        {item.endDate ? (
          <abbr title={format(new Date(item.endDate), 'do MMMM yyyy')}>
            {format(new Date(item.endDate), 'MMMM yyyy')}
          </abbr>
        ) : (
          'Present'
        )}
      </h5>

      {item.highlights.length > 0 && (
        <ul>
          {item.highlights.map((highlight, idx) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Experience;
