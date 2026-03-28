import type { Meta, StoryObj } from '@storybook/react';
import { SelectBox } from './SelectBox';

const meta = {
    title: 'Components/Input/SelectBox',
    component: SelectBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onChange: { action: 'changed' },
    },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonOptions = [
    { value: 'factory-1', label: '第1工場' },
    { value: 'factory-2', label: '第2工場' },
    { value: 'factory-3', label: '第3工場' },
];

// 1. 標準的な状態
export const Default: Story = {
    args: {
        label: '対象エリアを選択',
        options: commonOptions,
        helperText: 'データを表示するエリアを選択してください。',
    },
    decorators: [
        (Story) => (
            <div className="w-[220px]">
                <Story />
            </div>
        ),
    ],
};

// 2. エラー状態
export const Error: Story = {
    args: {
        label: 'ライン番号',
        options: [
            { value: '', label: '選択してください' },
            ...commonOptions,
        ],
        error: 'ラインの選択は必須です。',
    },
    decorators: [
        (Story) => (
            <div className="w-[320px]">
                <Story />
            </div>
        ),
    ],
};

// 3. 無効化状態
export const Disabled: Story = {
    args: {
        label: '権限設定',
        options: [
            { value: 'admin', label: '管理者' },
        ],
        disabled: true,
        helperText: 'この設定は変更できません。',
    },
    decorators: [
        (Story) => (
            <div className="w-[320px]">
                <Story />
            </div>
        ),
    ],
};