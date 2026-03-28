import type { Meta, StoryObj } from '@storybook/react';
import { KpiCard } from './KpiCard';

const meta = {
    title: 'Components/Card/KpiCard',
    component: KpiCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof KpiCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 上昇傾向（ポジティブ）
export const UpwardTrend: Story = {
    args: {
        label: 'Production Volume',
        value: '12,480',
        unit: 'pcs',
        trend: {
            value: 12.5,
            isUp: true,
        },
    },
    decorators: [
        (Story) => (
            <div className="w-[240px] bg-gray-50 p-6">
                <Story />
            </div>
        ),
    ],
};

// 2. 下落傾向（ネガティブ）
export const DownwardTrend: Story = {
    args: {
        label: 'Defect Rate',
        value: '0.42',
        unit: '%',
        trend: {
            value: 2.1,
            isUp: false,
        },
    },
    decorators: [
        (Story) => (
            <div className="w-[240px] bg-gray-50 p-6">
                <Story />
            </div>
        ),
    ],
};

// 3. トレンドなし（シンプル）
export const Simple: Story = {
    args: {
        label: 'Active Operators',
        value: '42',
        unit: 'persons',
    },
    decorators: [
        (Story) => (
            <div className="w-[240px] bg-gray-50 p-6">
                <Story />
            </div>
        ),
    ],
};