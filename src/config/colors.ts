export const TAG_COLORS: Record<string, string> = {
  hci: '#1565C0',
  dev: '#C62828',
  research: '#F9A825',
};

export const DEFAULT_COLOR = '#212121';

export const BAUHAUS_PALETTE = ['#C62828', '#1565C0', '#F9A825', '#212121'];

export function getTagColor(tag: string): string {
  return TAG_COLORS[tag] ?? DEFAULT_COLOR;
}

export function getCardColor(tags?: string[]): string {
  return tags?.[0] ? getTagColor(tags[0]) : DEFAULT_COLOR;
}
