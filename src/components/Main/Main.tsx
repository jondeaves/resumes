import React from 'react';
import { useFela } from 'react-fela';
import { differenceInDays, isAfter, sub } from 'date-fns';

import { getParameterByName } from '../../common/helpers';

import ITheme from '../../common/themes/ITheme';
import ExperienceItem from '../../common/types/ExperienceItem';
import Experience from '../Experience';

import styles from './Main.styles';

const Main: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  let experienceItems: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'FanDuel',
      startDate: '2018-05-22',
      highlights: [
        'Working mainly with React, Redux and CSS-in-JS supported by Jest, Cypress and BuildKite',
        'Historically worked as part of a scrum team to build and maintain Deposit and Withdrawal pages',
        'More recently moved into an acting SEM role where I lead a team of engineers, from Intern to Lead Engineer, working across the account and wallet screens',
      ],
    },

    {
      id: 2,
      title: 'UI Developer',
      company: 'DeepMatter',
      startDate: '2018-01-08',
      endDate: '2018-05-18',
      highlights: [
        'Working with React as part of a multi-disciplined scrum team',
        'Took ownership of improvements to code quality and consistency for the web team',
        'Created and maintained the CI pipelines for web and backend',
      ],
    },

    {
      id: 3,
      title: 'UI Developer',
      company: 'CGI UK',
      startDate: '2016-01-25',
      endDate: '2018-01-05',
      highlights: [
        'Working with HTML, CSS, NodeJS and Handlebars as part of a multi-disciplined scrum team',
        'Developing the online jury response system for England and Wales ensuring strict adherence to the GDS Guidelines while using the publicly available design system',
        'Developing a detailed suite of end-to-end tests which made use of Cucumber to translate business requirements into test steps',
      ],
    },

    {
      id: 4,
      title: 'Web Developer',
      company: 'Everyone',
      startDate: '2015-02-16',
      endDate: '2016-01-22',
      highlights: [
        'Working with HTML, CSS, jQuery, PHP and MySQL',
        'Develop and maintain client websites',
        'Work closely with the design team to implement pixel-perfect, modern and performant web experiences',
      ],
    },

    {
      id: 5,
      title: 'Web Developer',
      company: 'Arquila',
      startDate: '2013-05-13',
      endDate: '2015-02-05',
      highlights: [
        'Working with HTML, CSS, jQuery, PHP and MySQL',
        'Work as part of a small feature development team on the main system',
      ],
    },

    {
      id: 6,
      title: 'Web Developer',
      company: 'SuperControl',
      startDate: '2011-12-10',
      endDate: '2013-05-10',
      highlights: ['Working with Classic ASP and PrototypeJS as part of a small feature development team'],
    },
  ];

  const limit = Number.parseInt(getParameterByName('limit', '0'), 10);

  if (typeof limit === 'number' && limit > 0) {
    const compareDate = sub(new Date(), {
      years: limit,
    });

    experienceItems = experienceItems.filter((item) => {
      if (!item.endDate) {
        return true;
      }

      return isAfter(new Date(item.endDate), compareDate);
    });
  }

  return (
    <main className={css(styles.main)}>
      <p className={css(styles.blurb)}>
        I am an experienced developer specialising in interactive web applications. I take pride in creating modern,
        responsive and progressive user experiences.
      </p>

      <div>
        <h3>
          Experience
          {typeof limit === 'number' && limit > 0 && <small className={css(styles.limit)}>(Past {limit} years)</small>}
        </h3>

        {experienceItems.map((item, idx) => (
          <Experience key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
