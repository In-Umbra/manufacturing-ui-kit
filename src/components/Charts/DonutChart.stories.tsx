import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './DonutChart';

const meta = {
    title: 'Components/Chart/DonutChart',
    component: DonutChart,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '稼働時間内訳',
        centerLabel: '稼働率',
        centerValue: '85%',
        data: [
            { label: '稼働中', value: 85, color: 'stroke-blue-500' },
            { label: '待機', value: 10, color: 'stroke-slate-300' },
            { label: '停止', value: 5, color: 'stroke-red-500' },
        ],
    },
};

export const ProductionMix: Story = {
    args: {
        title: '製品別 生産比率',
        centerLabel: '合計',
        centerValue: '1,240',
        data: [
            { label: '製品 A', value: 450, color: '#6366f1' }, // violet
            { label: '製品 B', value: 380, color: '#f43f5e' }, // rose
            { label: '製品 C', value: 210, color: '#f97316' }, // orange
            { label: '製品 D', value: 200, color: '#10b981' }, // emerald
        ],
    },
};