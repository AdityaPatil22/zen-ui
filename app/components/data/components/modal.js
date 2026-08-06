'use client';
import 'zenkit-ui';
import { useState } from 'react';

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <zen-button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </zen-button>
      <zen-modal
        open={open || undefined}
        heading="Example Modal"
        onzen-close={() => setOpen(false)}
      >
        <p>This is the modal body content. Click outside or the close button to dismiss.</p>
        <div slot="footer">
          <zen-button variant="primary" size="small" onClick={() => setOpen(false)}>
            Close
          </zen-button>
        </div>
      </zen-modal>
    </div>
  );
};

export const modalData = {
  title: 'Modal',
  description:
    'Modals display content in a layer above the page. They are used for dialogs, confirmations, and focused tasks that require user attention.',
  example: ModalExample,
  code: `<zen-modal open heading="Example Modal">
  <p>This is the modal body content.</p>
  <div slot="footer">
    <zen-button variant="primary" size="small">Close</zen-button>
  </div>
</zen-modal>`,
};
