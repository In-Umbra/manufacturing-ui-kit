import type { Meta, StoryObj } from '@storybook/react';
import { ProductionProgressBar } from './ProductionProgressBar';

const meta = {
    title: 'Components/Card/ProductionProgressBar',
    component: ProductionProgressBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProductionProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 順調な稼働（ON TRACK）
export const OnTrack: Story = {
    args: {
        label: 'Line A - Daily Output',
        target: 2000,
        actual: 1850,
        defects: 2,
        unit: 'pcs',
    },
    decorators: [
        (Story) => (
            <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>
        ),
    ],
};

// 2. 遅延発生（BEHIND SCHEDULE）
export const Delayed: Story = {
    args: {
        label: 'Line B - Daily Output',
        target: 2000,
        actual: 1200, // 80%未満
        defects: 0,
    },
    decorators: [
        (Story) => (
            <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>
        ),
    ],
};

// 3. 不良品発生（Low Yield Rate）
export const HighDefects: Story = {
    args: {
        label: 'Line C - Precision Parts',
        target: 1000,
        actual: 800,
        defects: 85,
    },
    decorators: [
        (Story) => (
            <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>
        ),
    ],
};

// 4. 完了（Target Reached）
export const Completed: Story = {
    args: {
        label: 'Line D - Batch Complete',
        target: 1500,
        actual: 1500,
        defects: 5,
    },
    decorators: [
        (Story) => (
            <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>
        ),
    ],
};