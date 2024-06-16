export function convertTags(tags: string[]) {
  return tags.map((tag) => {
    const label = tag
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { value: tag, label: label };
  });
}
