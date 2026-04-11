export const TAG_COLORS: Record<string, string> = {
  hci: '#009DDC',
  dev: '#E03A3E',
  research: '#61BB46',
};

export const DEFAULT_COLOR = '#212121';

export const BAUHAUS_PALETTE = [
  '#E03A3E',  // red
  '#F5821F',  // orange
  '#FDB827',  // yellow
  '#61BB46',  // green
  '#009DDC',  // blue
  '#963D97',  // purple
];

export function getTagColor(tag: string): string {
  return TAG_COLORS[tag] ?? DEFAULT_COLOR;
}

export function getCardColor(tags?: string[]): string {
  return tags?.[0] ? getTagColor(tags[0]) : DEFAULT_COLOR;
}
