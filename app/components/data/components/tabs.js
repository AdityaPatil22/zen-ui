'use client';
import 'zenkit-ui';

export const tabsData = {
  title: 'Tabs',
  description:
    'Tabs organize content into separate views where only one view is visible at a time. Users can switch between tabs to navigate content.',
  example: () => (
    <zen-tabs
      tabs={[
        { label: 'Overview', content: 'This is the overview content.' },
        { label: 'Features', content: 'This is the features content.' },
        { label: 'Pricing', content: 'This is the pricing content.' },
      ]}
    ></zen-tabs>
  ),
  code: `<zen-tabs tabs={[
  { label: 'Overview', content: 'This is the overview content.' },
  { label: 'Features', content: 'This is the features content.' },
  { label: 'Pricing', content: 'This is the pricing content.' },
]}></zen-tabs>`,
};
