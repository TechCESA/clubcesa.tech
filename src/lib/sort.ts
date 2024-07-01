import { TagType } from '@/types/dashboard';

export function sortTagByName({
  data,
  desc,
}: {
  data: TagType[];
  desc: boolean;
}) {
  return data.sort((a, b) => {
    if (desc) {
      return b.id.localeCompare(a.id);
    } else {
      return a.id.localeCompare(b.id);
    }
  });
}

export function sortTagByResource({
  data,
  desc,
}: {
  data: TagType[];
  desc: boolean;
}) {
  return data.sort((a, b) => {
    if (desc) {
      return a.numberOfRes - b.numberOfRes;
    } else {
      return b.numberOfRes - a.numberOfRes;
    }
  });
}
