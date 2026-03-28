import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';

const meta = {
    title: 'Components/Chart/BarChart',
    component: BarChart,
    tags: ['autodocs'],
    argTypes: {
        height: {
            control: { type: 'range', min: 100, max: 800, step: 50 },
            description: 'チャート表示エリアの高さ',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 生産ライン別の実績（標準的なデータ量）
export const ProductionByLine: Story = {
    args: {
        title: 'ライン別 生産実績 (本日)',
        height: 250,
        data: [
            { label: 'Line-A', value: 1240 },
            { label: 'Line-B', value: 980 },
            { label: 'Line-C', value: 1560 },
            { label: 'Line-D', value: 420 },
            { label: 'Line-E', value: 1100 },
        ],
    },
};

// 2. エラー発生頻度（データが少ない場合）
export const ErrorFrequency: Story = {
    args: {
        title: '異常検知件数 (直近24時間)',
        height: 180,
        data: [
            { label: '過熱', value: 3 },
            { label: '電圧低下', value: 12 },
            { label: '通信断', value: 1 },
        ],
    },
};

// 3. 多量のデータ（スクロールが発生するケース）
export const ManyItems: Story = {
    args: {
        title: '製品別 在庫状況',
        height: 300,
        data: [
            { label: 'P-001', value: 450 },
            { label: 'P-002', value: 120 },
            { label: 'P-003', value: 890 },
            { label: 'P-004', value: 300 },
            { label: 'P-005', value: 670 },
            { label: 'P-006', value: 50 },
            { label: 'P-007', value: 980 },
            { label: 'P-008', value: 410 },
            { label: 'P-009', value: 220 },
            { label: 'P-010', value: 750 },
        ],
    },
};

// 4. 極端な数値差がある場合
export const ContrastData: Story = {
    args: {
        title: '数値コントラスト確認',
        height: 200,
        data: [
            { label: '最大項目', value: 100000 },
            { label: '最小項目', value: 1 },
            { label: '中間項目', value: 50000 },
        ],
    },
};