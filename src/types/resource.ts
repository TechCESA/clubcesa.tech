export type ResourceType = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  isVerified: boolean;
  author: string;
  createdAt: Date;
};

export enum FilterOptions {
  All = 'all',
  Verified = 'true',
  Unverified = 'false',
}

export interface BackTagType {
  id: string;
  isVerified: boolean;
}
