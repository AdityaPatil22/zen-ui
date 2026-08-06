'use client';
import 'zenkit-ui';

export const inputData = {
  title: 'Input',
  description:
    'Inputs allow users to enter text. They support labels, placeholders, error states, and multiple visual variants.',
  example: () => (
    <div className="flex flex-col gap-6 max-w-xs">
      <zen-input label="Email" placeholder="Enter your email" variant="default"></zen-input>
      <zen-input label="Name" placeholder="Enter your name" variant="filled"></zen-input>
      <zen-input label="Password" placeholder="Enter password" type="password" error="Password is required"></zen-input>
      <zen-input label="Disabled" placeholder="Cannot type here" disabled></zen-input>
    </div>
  ),
  code: `<zen-input label="Email" placeholder="Enter your email" variant="default"></zen-input>
<zen-input label="Name" placeholder="Enter your name" variant="filled"></zen-input>
<zen-input label="Password" type="password" error="Password is required"></zen-input>
<zen-input label="Disabled" placeholder="Cannot type here" disabled></zen-input>`,
};
