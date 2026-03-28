import type { Meta, StoryObj } from '@storybook/react';
import { UniversalCard } from './UniversalCard';
import React from 'react';

const meta = {
    title: 'Components/Card/UniversalCard',
    component: UniversalCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof UniversalCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '設備稼働率',
        value: '87.5',
        unit: '%',
        statusColor: 'green',
        description: 'ラインAの本日平均稼働率',
        trend: {
            value: '2.4%',
            isPositive: true
        }
    },
};

export const Alert: Story = {
    args: {
        title: '異常検知',
        value: '3',
        unit: '件',
        statusColor: 'red',
        description: '未確認の警告メッセージ',
        trend: {
            value: '1件増加',
            isPositive: false
        }
    },
};