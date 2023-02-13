import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Un blog',
    Svg: require('@site/static/img/rss.svg').default,
    description: (
      <>
        Ceci est la description du blog assez accrocheuse
      </>
    ),
  },
  {
    title: 'Une chaine Youtube',
    Svg: require('@site/static/img/youtube.svg').default,
    description: (
      <>
        Ceci est la description de la chaine bla bla bla bla bla.
      </>
    ),
  },
  {
    title: 'Une communauté',
    Svg: require('@site/static/img/discord.svg').default,
    description: (
      <>
        Bla bla l'entraide, bla bla les pro et les débutant, bla bla la confiance
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
