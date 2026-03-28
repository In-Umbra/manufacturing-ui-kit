import type { Meta, StoryObj } from '@storybook/react';
import { DayServiceBar } from './DayServiceBar';

const meta = {
    title: 'Components/Chart/DayServiceBar',
    component: DayServiceBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DayServiceBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 標準的な稼働日（午前中に一度停止、午後にアイドリング）
export const NormalDay: Story = {
    args: {
        slots: [
            { status: 'running', width: 30 }, // 08:00 -
            { status: 'stopped', width: 10 }, // トラブル停止
            { status: 'running', width: 25 }, // 12:00前後
            { status: 'idle', width: 15 },    // 調整中
            { status: 'running', width: 20 }, // - 17:00
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[400px]">
                <Story />
            </div>
        ),
    ],
};

// 2. トラブルの多い日
export const HighAlertDay: Story = {
    args: {
        slots: [
            { status: 'running', width: 10 },
            { status: 'stopped', width: 20 },
            { status: 'running', width: 10 },
            { status: 'stopped', width: 30 },
            { status: 'running', width: 30 },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[400px]">
                <Story />
            </div>
        ),
    ],
};

// 3. ほぼ安定稼働
export const StableDay: Story = {
    args: {
        slots: [
            { status: 'running', width: 95 },
            { status: 'idle', width: 5 },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[400px]">
                <Story />
            </div>
        ),
    ],
};