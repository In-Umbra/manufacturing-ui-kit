import type { Meta, StoryObj } from '@storybook/react';
import { MiniSparkline } from './MiniSparkline';

const meta = {
    title: 'Components/Chart/MiniSparkline',
    component: MiniSparkline,
    tags: ['autodocs'],
    argTypes: {
        // ... argTypes ...
    },
    parameters: {
        layout: 'centered',
    },
    // ★ 修正：ここに decorators を移動して、全ストーリーに幅を持たせる
    decorators: [
        (Story) => (
            <div className="w-40 border p-3 rounded-xl bg-white shadow-sm flex flex-col gap-2">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Weekly Trend</p>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof MiniSparkline>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 標準（ decorators のdivの中に幅いっぱいに表示されます）
export const Default: Story = {
    args: {
        data: [20, 45, 30, 60, 80, 55, 90],
        color: 'blue',
        height: 40,
    },
    // ★ 修正：単体 decorators は削除
};

// 2. 良好（グリーン）
export const Success: Story = {
    args: {
        data: [70, 75, 80, 85, 90, 95, 100],
        color: 'green',
        height: 30,
    },
};

// 3. 警告（レッド）
export const Danger: Story = {
    args: {
        data: [10, 20, 40, 30, 70, 90, 95],
        color: 'red',
        height: 40,
    },
};

// 4. データ量が多い場合
const staticData = [
    30, 45, 60, 55, 40, 35, 50, 65, 80, 75, 90, 85,
    70, 60, 50, 45, 40, 35, 30, 40, 50, 60, 70, 80
];
export const HighDensity: Story = {
    args: {
        data: staticData,
        color: 'slate',
        height: 50,
    },
};