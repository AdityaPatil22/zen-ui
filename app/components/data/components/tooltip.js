'use client';
import 'zenkit-ui';

export const tooltipData = {
  title: 'Tooltip',
  description:
    'Tooltips display helpful text when hovering over an element. They support top, bottom, left, and right positioning.',
  example: () => (
    <div className="flex gap-8 flex-wrap items-center justify-center py-12">
      <zen-tooltip text="Tooltip on top" position="top">
        <zen-button variant="outline">Top</zen-button>
      </zen-tooltip>
      <zen-tooltip text="Tooltip on bottom" position="bottom">
        <zen-button variant="outline">Bottom</zen-button>
      </zen-tooltip>
      <zen-tooltip text="Tooltip on left" position="left">
        <zen-button variant="outline">Left</zen-button>
      </zen-tooltip>
      <zen-tooltip text="Tooltip on right" position="right">
        <zen-button variant="outline">Right</zen-button>
      </zen-tooltip>
    </div>
  ),
  code: `<zen-tooltip text="Tooltip on top" position="top">
  <zen-button variant="outline">Hover me</zen-button>
</zen-tooltip>`,
};
