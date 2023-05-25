import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

const FeatureList = [
  {
    title: 'About',
    Svg: require('@site/static/img/faq.svg').default,
    link: '$baseUrl/docs/about',
    description: (
      <>
        What is Energi?
      </>
    ),
  },
  {
    title: 'Energi Guides',
    Svg: require('@site/static/img/guides.svg').default,
    link: '$baseUrl/docs/guides',
    description: (
      <>
        Everything related to Energi Core.
      </>
    ),
  },
  {
    title: 'For Developers',
    Svg: require('@site/static/img/for-developers.svg').default,
    link: '$baseUrl/docs/developers',
    description: (
      <>
        Developers documentation for all those tech-savvy.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    
    <div className={clsx('col col--4')}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--left padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
    
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
