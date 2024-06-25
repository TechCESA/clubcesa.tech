export type ResourceType = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  isVerified: boolean;
  author: {
    name: string;
    email: string;
    github: string;
    avatar: string;
  };
  createdAt: Date;
};

export enum FilterOptions {
  All = 'all',
  Verified = 'true',
  Unverified = 'false',
}
