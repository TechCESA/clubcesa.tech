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
      return a.id.charAt(0).localeCompare(b.id.charAt(0));
    } else {
      return b.id.charAt(0).localeCompare(a.id.charAt(0));
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
