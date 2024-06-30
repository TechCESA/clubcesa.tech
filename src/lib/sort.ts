export function sortTagByName({
  data,
  desc,
}: {
  data: { id: string; data: number }[];
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
  data: { id: string; data: number }[];
  desc: boolean;
}) {
  return data.sort((a, b) => {
    if (desc) {
      return a.data - b.data;
    } else {
      return b.data - a.data;
    }
  });
}
