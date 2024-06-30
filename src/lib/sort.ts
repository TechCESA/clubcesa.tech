export function sortTags(data: { id: string; data: number }[], desc: boolean) {
  return data.sort((a, b) => {
    if (desc) {
      return a.id.charAt(0).localeCompare(b.id.charAt(0));
    } else {
      return b.id.charAt(0).localeCompare(a.id.charAt(0));
    }
  });
}
