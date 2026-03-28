import type { Meta, StoryObj } from '@storybook/react';
import { AlertBar } from './AlertBar';

const meta = {
    title: 'Components/Feedback/AlertBar',
    component: AlertBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        onClose: { action: 'closed' },
    },
} satisfies Meta<typeof AlertBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. エラー（重大なアラート）
export const CriticalError: Story = {
    args: {
        type: 'error',
        message: 'サーバーとの通信が切断されました。自動再接続を試みています...',
    },
};

// 2. 警告（注意喚起）
export const AttentionWarning: Story = {
    args: {
        type: 'warning',
        message: '部品の在庫が残りわずかです（残り: 12個）。補充を検討してください。',
    },
};

// 3. 情報（お知らせ）
export const SystemInfo: Story = {
    args: {
        type: 'info',
        message: 'システムメンテナンスは本日 23:00 に終了予定です。',
    },
};

// 4. 閉じるボタンなし（強制通知）
export const PersistentAlert: Story = {
    args: {
        type: 'error',
        message: 'ライセンスの有効期限が切れました。管理者に連絡してください。',
        onClose: undefined, // ボタンを非表示に
    },
};