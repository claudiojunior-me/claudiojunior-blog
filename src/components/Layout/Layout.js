import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({
  children, title, description, siteUrl, slug
}) => (
    <div className={styles.layout}>
      <Helmet>
        <html lang="pt-br" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${siteUrl}${slug}/twitter-card.jpg`}
        />
      </Helmet>
      {children}
    </div>
  );

export default Layout;
