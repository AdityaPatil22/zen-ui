import { html } from 'lit';
import type { StoryObj, Meta } from '@storybook/web-components';
import './Tabs';

interface TabsArgs {
  tabs: Array<{ label: string; content: string }>;
  activeIndex: number;
}

export default {
  title: 'Components/Tabs',
  component: 'zen-tabs',
  argTypes: {
    tabs: { control: 'object' },
    activeIndex: { control: 'number' },
  },
} as Meta<TabsArgs>;

const Template = (args: TabsArgs) => html`
  <zen-tabs .tabs="${args.tabs}" active-index="${args.activeIndex}"></zen-tabs>
`;

export const Default: StoryObj<TabsArgs> = {
  render: Template,
  args: {
    tabs: [
      { label: 'Tab 1', content: 'Content for tab 1' },
      { label: 'Tab 2', content: 'Content for tab 2' },
      { label: 'Tab 3', content: 'Content for tab 3' },
    ],
    activeIndex: 0,
  },
};
