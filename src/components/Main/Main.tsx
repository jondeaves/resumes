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
      startDate: '2020-01-01',
      highlights: [
        'Became more active in mentoring of junior members of team',
        "Taking ownership of the DataDog implementation and proving it's value for usage as monitoring and analytics",
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
        'Working with React as part of the Frontend team',
        'Focused on the Deposit and Withdrawal areas',
        'Using Google Tag Manager and Amplitude to capture analytics',
        'Focus on improving user experience and code quality',
        'Working in a multi-displined agile team',
      ],
    },

    {
      id: 3,
      title: 'UI Developer',
      company: 'DeepMatter',
      startDate: '2018-01-08',
      endDate: '2018-05-18',
      highlights: [
        'Working with React as part of the web team',
        'Took ownership of improvements to code quality and consistency for the web team',
        'Created and maintained the CI pipelines across Web and Backend',
        'Working in a multi-displined agile team',
      ],
    },

    {
      id: 4,
      title: 'UI Developer',
      company: 'CGI UK',
      startDate: '2016-01-25',
      endDate: '2018-01-05',
      highlights: [
        'Worked on a project that required strick adherence to GDS guidelines and is now live on gov.uk',
        'Working with Angular 1.x, NodeJS and end-to-end testing suites',
        'Working in a multi-displined agile team',
      ],
    },

    {
      id: 5,
      title: 'Web Developer',
      company: 'Everyone',
      startDate: '2015-02-16',
      endDate: '2016-01-22',
      highlights: [
        'Working with PHP and jQuery to build websites against provided designs',
        'Management and upkeep of server hardware, databases and site deployments',
      ],
    },

    {
      id: 6,
      title: 'Web Developer',
      company: 'Arquila',
      startDate: '2013-05-13',
      endDate: '2015-02-05',
      highlights: ['Working with PHP and jQuery', 'Working on feature development and support requests'],
    },

    {
      id: 7,
      title: 'Web Developer',
      company: 'SuperControl',
      startDate: '2011-12-10',
      endDate: '2013-05-10',
      highlights: [
        'Working with Classic ASP and PrototypeJS as part of a small feature development team',
        'Manage time between feature development of the main system and building client websites which integrated with the main system',
      ],
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

  // eslint-disable-next-line no-console
  console.log(limit);
  // eslint-disable-next-line no-console
  console.log(typeof limit);

  return (
    <main className={css(styles.main)}>
      <p className={css(styles.blurb)}>
        I am an experienced developer specialising in interactive web applications. I take pride in creating modern,
        responsive and progressive user experiences. I am always learning, always improving, and I am always excited by
        what I do.
      </p>

      <div>
        <h3>
          Experience
          {typeof limit === 'number' && limit > 0 && <small className={css(styles.limit)}>(Past {limit} years)</small>}
        </h3>

        {experienceItems.map((item) => (
          <Experience key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
