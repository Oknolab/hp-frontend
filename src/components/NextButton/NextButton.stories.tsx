import type { Meta, StoryObj } from '@storybook/react';

import { NextButton } from '.';

const meta = {
  title: 'NextButton',
  component: NextButton,
  tags: ['autodocs'],
} satisfies Meta<typeof NextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
