'use client';
import 'zenkit-ui';

export const alertData = {
  title: 'Alert',
  description:
    'Alerts communicate important messages to users. They come in info, success, warning, and error variants, with optional dismiss functionality.',
  example: () => (
    <div className="flex flex-col gap-4">
      <zen-alert variant="info">This is an informational alert.</zen-alert>
      <zen-alert variant="success" dismissible>Operation completed successfully!</zen-alert>
      <zen-alert variant="warning" dismissible>Please review your changes before submitting.</zen-alert>
      <zen-alert variant="error" dismissible>Something went wrong. Please try again.</zen-alert>
    </div>
  ),
  code: `<zen-alert variant="info">This is an informational alert.</zen-alert>
<zen-alert variant="success" dismissible>Operation completed!</zen-alert>
<zen-alert variant="warning" dismissible>Please review your changes.</zen-alert>
<zen-alert variant="error" dismissible>Something went wrong.</zen-alert>`,
};
