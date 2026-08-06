import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Modal';
import type { Modal } from './Modal';

const meta: Meta<Modal> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  render: (args) => html`
    <zen-modal ?open="${args.open}" heading="${args.heading}">
      <p>This is the modal body content.</p>
      <div slot="footer">
        <zen-button variant="primary" size="small">Confirm</zen-button>
      </div>
    </zen-modal>
  `,
  argTypes: {
    open: { control: { type: 'boolean' } },
    heading: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<Modal>;

export const Open: Story = { args: { open: true, heading: 'Modal Title' } };
export const Closed: Story = { args: { open: false, heading: 'Modal Title' } };
