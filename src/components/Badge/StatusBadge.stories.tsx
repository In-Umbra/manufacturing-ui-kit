import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';
import React from 'react';

const meta = {
    title: 'Components/Badge/StatusBadge',
    component: StatusBadge,
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: 'select',
            options: ['info', 'warning', 'critical'],
            description: '重要度レベル（色とアニメーションが変化します）',
        },
        text: {
            control: 'text',
            description: '表示するテキスト',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 情報（Info）：通常の状態
export const Info: Story = {
    args: {
        level: 'info',
        text: '正常稼働中',
    },
};

// 2. 警告（Warning）：注意が必要な状態
export const Warning: Story = {
    args: {
        level: 'warning',
        text: '材料残量わずか',
    },
};

// 3. 緊急（Critical）：即時対応が必要な状態（点滅します）
export const Critical: Story = {
    args: {
        level: 'critical',
        text: '緊急停止：過負荷',
    },
};
