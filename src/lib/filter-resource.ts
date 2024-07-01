import { convertTagsBtoF } from '@/lib/convert-tags';
import { ResourceType } from '@/types/resource';

export const filterResources = ({
  resources,
  query,
  tag,
  isVerified = null,
}: {
  resources: ResourceType[];
  query: string | null;
  tag: string | null;
  isVerified?: boolean | null;
}) => {
  let filteredResources = resources;

  if (isVerified === false) {
    filteredResources = filteredResources.filter(
      (res) => res.isVerified === false,
    );
  } else if (isVerified === true) {
    filteredResources = filteredResources.filter(
      (res) => res.isVerified === true,
    );
  }

  if (tag && tag !== 'all') {
    filteredResources = filteredResources.filter((res) =>
      res.tags.includes(tag),
    );
  }

  if (query) {
    filteredResources = filteredResources.filter((res) => {
      const formattedTags = convertTagsBtoF(res.tags).map((tag) =>
        tag.toLowerCase(),
      );

      return (
        res.title.toLowerCase().includes(query) ||
        formattedTags.includes(query) ||
        formattedTags.some((tag) => tag.includes(query))
      );
    });
  }

  return filteredResources;
};
