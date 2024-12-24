export function convertTagsBtoF(tags: string[]) {
  return tags.map((tag) => {
    return tag
      .split('-')
      .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ''))
      .join(' ');
  });
}

export function convertTagsFtoB(tags: string[]) {
  return tags.map((tag) => {
    return tag ? tag.toLowerCase().replace(/\s/g, '-') : '';
  });
}

export function convertTagBtoF(tag: string) {
  return tag
    .split('-')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ''))
    .join(' ');
}

export function convertTagFtoB(tag: string) {
  return tag ? tag.toLowerCase().replace(/\s/g, '-') : '';
}
