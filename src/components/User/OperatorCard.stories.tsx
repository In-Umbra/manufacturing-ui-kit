import type { Meta, StoryObj } from '@storybook/react';
import { OperatorCard } from './OperatorCard';

const meta = {
    title: 'Components/Card/OperatorCard',
    component: OperatorCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof OperatorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 日勤のオペレーター（画像あり）
export const DayShift: Story = {
    args: {
        name: 'Sato Kenji',
        role: 'Senior Technician',
        avatarUrl: 'https://i.pravatar.cc/150?u=sato',
        shift: 'Day',
    },
    decorators: [
        (Story) => (
            <div className="w-[280px]">
                <Story />
            </div>
        ),
    ],
};

// 2. 夜勤のマネージャー（画像なし・プレースホルダー）
export const NightShift: Story = {
    args: {
        name: 'Tanaka Yumi',
        role: 'Line Manager',
        shift: 'Night',
    },
    decorators: [
        (Story) => (
            <div className="w-[280px]">
                <Story />
            </div>
        ),
    ],
};

// 3. 名前が非常に長い場合（truncateの確認）
export const LongName: Story = {
    args: {
        name: 'Alexander Maximilian von Hindenburg',
        role: 'External Quality Consultant',
        shift: 'Day',
    },
    decorators: [
        (Story) => (
            <div className="w-[280px]">
                <Story />
            </div>
        ),
    ],
};