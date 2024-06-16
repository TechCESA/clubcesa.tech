export const convertTags = (tags: string[]) => {
  return tags.map((tag) => {
    const label = tag.replace(/([a-z])([A-Z])/g, '$1 $2').replace('.js', '.js');
    const value = tag.toLowerCase().replace(/ /g, '-');
    return { value, label };
  });
};
