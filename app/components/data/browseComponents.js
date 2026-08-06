'use client';
import { useEffect, useState } from 'react';

const componentData = [
  {
    id: 1,
    title: 'Button',
    link: 'button',
    description:
      'A customizable button component that provides consistent styling and interaction states.',
  },
  {
    id: 2,
    title: 'Card',
    link: 'card',
    description:
      'A flexible card component that can contain various types of content with consistent styling.',
  },
  {
    id: 3,
    title: 'Accordion',
    link: 'accordion',
    description:
      'A collapsible accordion component for displaying content in a space-efficient manner.',
  },
  {
    id: 4,
    title: 'Badge',
    link: 'badge',
    description:
      'A badge component for highlighting status, labels, or counts with color-coded variants.',
  },
  {
    id: 5,
    title: 'Tooltip',
    link: 'tooltip',
    description:
      'A tooltip component that displays helpful text on hover with multiple positioning options.',
  },
  {
    id: 6,
    title: 'Tabs',
    link: 'tabs',
    description:
      'A tabs component for organizing content into switchable views.',
  },
  {
    id: 7,
    title: 'Modal',
    link: 'modal',
    description:
      'A modal dialog component for focused tasks, confirmations, and content overlays.',
  },
  {
    id: 8,
    title: 'Input',
    link: 'input',
    description:
      'A text input component with labels, placeholders, error states, and multiple variants.',
  },
  {
    id: 9,
    title: 'Alert',
    link: 'alert',
    description:
      'An alert component for communicating important messages with dismissible functionality.',
  }
];

export function useComponents() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Import and initialize zenkit-ui only on the client side
    import('zenkit-ui').then(() => {
      setLoaded(true);
    });
  }, []);

  const getPreview = (id) => {
    if (!loaded) return null;

    switch (id) {
      case 1:
        return <zen-button variant="primary" size="medium">Click me</zen-button>;
      case 2:
        return (
          <zen-card interactive>
            <h3 slot="header">Card Title</h3>
            <p>This is a sample card content.</p>
            <div slot="footer">
              <zen-button variant="secondary" size="small">Learn More</zen-button>
            </div>
          </zen-card>
        );
      case 3:
        return (
          <zen-accordion items={[
          {
            header: 'Section 1',
            content: 'This is the content for section 1',
            expanded: true
          },
        ]}>
        </zen-accordion>
        );
      case 4:
        return (
          <div className="flex gap-3 flex-wrap">
            <zen-badge variant="success">Active</zen-badge>
            <zen-badge variant="warning">Pending</zen-badge>
            <zen-badge variant="error">Failed</zen-badge>
          </div>
        );
      case 5:
        return (
          <zen-tooltip text="Hello!" position="top">
            <zen-button variant="outline" size="small">Hover me</zen-button>
          </zen-tooltip>
        );
      case 6:
        return (
          <zen-tabs tabs={[
            { label: 'Tab 1', content: 'Content 1' },
            { label: 'Tab 2', content: 'Content 2' },
          ]}></zen-tabs>
        );
      case 7:
        return <zen-button variant="primary" size="small">Open Modal</zen-button>;
      case 8:
        return <zen-input placeholder="Type here..." variant="default"></zen-input>;
      case 9:
        return <zen-alert variant="info">This is an alert.</zen-alert>;
      default:
        return null;
    }
  };

  return { componentData, getPreview, loaded };
}
