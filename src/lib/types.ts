export type ResourceType = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  isVerified: boolean;
};

export enum FilterOptions {
  All = 'all',
  Verified = 'true',
  Unverified = 'false',
}
