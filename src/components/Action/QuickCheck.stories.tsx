import type { Meta, StoryObj } from '@storybook/react';
import { QuickCheck } from './QuickCheck';
import React from 'react';

const meta = {
    title: 'Components/Action/QuickCheck',
    component: QuickCheck,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '項目名',
        },
        defaultChecked: {
            control: 'boolean',
            description: '初期状態',
        },
        onCheck: {
            action: 'checked-changed',
            description: '状態が変わった時のイベント'
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof QuickCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 基本（未チェック）
export const Unchecked: Story = {
    args: {
        label: '日常点検 A-01',
        defaultChecked: false,
    },
};

// 2. 初期状態でチェック済み
export const PreChecked: Story = {
    args: {
        label: '安全装置の確認',
        defaultChecked: true,
    },
};