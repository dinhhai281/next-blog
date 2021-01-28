export interface MarkdownRemark {
  id: string;
  excerpt: string;
  frontmatter: {
    path: string;
    featuredIamage: string;
    tags: string;
    date: string;
    title: string;
    duration: string;
  };
}
