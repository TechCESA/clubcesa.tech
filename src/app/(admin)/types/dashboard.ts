export interface StatsType {
  adminsLen: number;
  tagsLen: number;
  authorsLen: number;
  resourcesLen: number;
}
export interface AdminType {
  email: string[];
}

export interface AuthorType {
  avatar: string;
  createdAt: string;
  email: string;
  github: string;
  name: string;
  resources: number;
}

export interface TagType {
  id: string;
  data: number;
}
