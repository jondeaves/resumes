import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';
import ExperienceItem from '../../common/types/ExperienceItem';
import Experience from '../Experience';

import styles from './Main.styles';

const Main: React.FC = () => {
  const { css } = useFela<ITheme, Record<string, unknown>>();

  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'FanDuel',
      startDate: '2020-01-01',
      highlights: [
        'Became more active in mentoring of junior members of team',
        "Taking ownership of the DataDog implementation and investigating it's value for usage as monitoring and analytics",
        'Working with other engineers in the team to plan and improve codebases as we scale',
      ],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'FanDuel',
      startDate: '2018-05-22',
      endDate: '2020-01-01',
      highlights: [
        'Working on React as part of the Frontend team',
        'Focused on Deposit and Withdrawals web pages',
        'Using Google Tag Manager and Amplitude to capture analytics',
        'Focus on improving user experience and code quality',
      ],
    },

    {
      id: 3,
      title: 'UI Developer',
      company: 'DeepMatter',
      startDate: '2018-01-08',
      endDate: '2018-05-18',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
      ],
    },

    {
      id: 4,
      title: 'UI Developer',
      company: 'CGI UK',
      startDate: '2016-01-25',
      endDate: '2018-01-05',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
      ],
    },

    {
      id: 5,
      title: 'Web Developer',
      company: 'Everyone',
      startDate: '2015-02-16',
      endDate: '2016-01-22',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
      ],
    },

    {
      id: 6,
      title: 'Web Developer',
      company: 'Arquila',
      startDate: '2013-05-13',
      endDate: '2015-02-05',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
      ],
    },

    {
      id: 7,
      title: 'Web Developer',
      company: 'SuperControl',
      startDate: '2011-12-10',
      endDate: '2013-05-10',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate',
      ],
    },
  ];

  return (
    <main className={css(styles.main)}>
      <p className={css(styles.blurb)}>
        I am an experienced developer specialising in interactive web applications. I take pride in creating modern,
        responsive and progressive user experiences. I am always learning, always improving, and I am always excited by
        what I do.
      </p>

      <div>
        <h3>Experience</h3>

        {experienceItems.map((item) => (
          <Experience key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
