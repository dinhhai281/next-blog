import { contramap, ordNumber } from 'fp-ts/lib/Ord';
import { FluidObject, FixedObject } from 'gatsby-image';

type CategoryType = 'PROGRAMMING' | 'COOKING';

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
    category: CategoryType;
  };
}

export const byDate = contramap((markdownRemark: MarkdownRemark) => Date.parse(markdownRemark.frontmatter.date))(
  ordNumber,
);
