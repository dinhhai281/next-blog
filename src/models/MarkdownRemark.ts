import { FluidObject, FixedObject } from 'gatsby-image';

export interface MarkdownRemark {
  id: string;
  excerpt: string;
  html: string;
  frontmatter: {
    path: string;
    featuredImage: {
      childImageSharp: {
        fluid: FluidObject;
        fixed: FixedObject;
      };
    };
    tags: string;
    date: string;
    title: string;
    duration: string;
  };
}
