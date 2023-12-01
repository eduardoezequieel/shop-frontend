export const trimParagraph = (text: string, length: number) => {
  const trimmed = text.slice(0, length);
  return trimmed.length < text.length ? `${trimmed}...` : trimmed;
};
