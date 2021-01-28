import { SiteMetadata } from '@app/models';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
interface QueryData {
  site: {
    siteMetadata: SiteMetadata;
  };
}

interface SEOProps {
  title?: string;
}

export const SEO: FC<SEOProps> = ({ title }) => {
  const { site } = useStaticQuery<QueryData>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          keywords
        }
      }
    }
  `);

  return (
    <Helmet
      defer={false}
      title={title ?? site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.author}`}
      htmlAttributes={{ lang: 'vi' }}
      meta={[
        { name: 'description', content: site.siteMetadata.description },
        { name: 'keywords', content: site.siteMetadata.keywords.join(',') },
        { property: 'og:title', content: title ?? site.siteMetadata.title },
        { property: 'og:type', content: 'website' },
      ]}
    />
  );
};
