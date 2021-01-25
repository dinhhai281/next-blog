interface Viewer {
  avatarUrl: string;
  email: string;
  name: string;
  login: string;
}

export interface GithubData {
  data: {
    viewer: Viewer;
  };
}
