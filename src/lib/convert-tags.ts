export function convertTagsBtoF(tags: string[]) {
  return tags.map((tag) => {
    return tag
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
}

export function convertTagsFtoB(tags: string[]) {
  return tags.map((tag) => {
    return tag.toLowerCase().replace(/\s/g, '-');
  });
}
