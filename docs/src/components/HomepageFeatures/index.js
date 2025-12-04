import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure API Integration',
    // Use hosted illustration to avoid bundling the old local SVG.
    Svg: () => (
      <img
        src="https://cdn.shopify.com/s/files/1/0733/1820/3680/files/secure-api-3.png?v=1764885770"
        alt="Secure API illustration"
        className={styles.featureSvg}
      />
    ),
    description: (
      <>
        Store request credentials securely. Execute authenticated API calls
        without exposing sensitive information.
      </>
    ),
  },
  {
    title: 'AI Assisted UI and App Server Solutions',
    Svg: () => (
      <img
        src="https://cdn.shopify.com/s/files/1/0733/1820/3680/files/ai-app-7.png?v=1764886079"
        alt="AI Assisted App illustration"
        className={styles.featureSvg}
      />
    ),
    description: (
      <>
        Get the power of a custom app without the cost. AI assisted UI and
        server solutions with no hosting or maintenance required.
      </>
    ),
  },
  {
    title: 'Multiple Ways to Trigger Your Requests',
    Svg: () => (
      <img
        src="https://cdn.shopify.com/s/files/1/0733/1820/3680/files/triggers-3.png?v=1764886331"
        alt="Multiple Triggers illustration"
        className={styles.featureSvg}
      />
    ),
    description: (
      <>
        Run any request from Proxy Endpoints, the storefront, Liquid,
        scheduled Cron Jobs, or incoming Webhooks.
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
        <Heading as="h3">{title}</Heading>
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
