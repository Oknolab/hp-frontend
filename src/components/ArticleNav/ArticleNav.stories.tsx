import type { Meta, StoryObj } from '@storybook/react';

import { ArticleNav } from '.';

const meta = {
  title: 'ArticleNav/ArticleNav',
  component: ArticleNav,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {};
