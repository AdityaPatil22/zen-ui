'use client';
import 'zenkit-ui';

export const badgeData = {
  title: 'Badge',
  description:
    'Badges are used to highlight status, labels, or counts. They come in multiple variants to convey meaning through color.',
  example: () => (
    <div className="flex gap-4 flex-wrap items-center">
      <zen-badge variant="default">Default</zen-badge>
      <zen-badge variant="success">Success</zen-badge>
      <zen-badge variant="warning">Warning</zen-badge>
      <zen-badge variant="error">Error</zen-badge>
      <zen-badge variant="info">Info</zen-badge>
    </div>
  ),
  code: `<div className="flex gap-4 flex-wrap items-center">
  <zen-badge variant="default">Default</zen-badge>
  <zen-badge variant="success">Success</zen-badge>
  <zen-badge variant="warning">Warning</zen-badge>
  <zen-badge variant="error">Error</zen-badge>
  <zen-badge variant="info">Info</zen-badge>
</div>`,
};
