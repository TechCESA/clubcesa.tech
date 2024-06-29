import { convertTagsBtoF } from '@/lib/convert-tags';
import { ResourceType } from '@/types/resource';

/* We can filter directly from the firestore */
export const filterResources = ({
  resources,
  query,
  tag,
}: {
  resources: ResourceType[];
  query: string | null;
  tag: string | null;
}) => {
  let filteredResources = resources;

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
