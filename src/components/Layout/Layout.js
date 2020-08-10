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

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${slug}/twitter-card.jpg`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${siteUrl}${slug}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}${slug}/twitter-card.jpg`} />
      </Helmet>
      {children}
    </div>
);

export default Layout;
