import type { Meta, StoryObj } from '@storybook/react';
import { NoticeBoard } from './NoticeBoard';

const meta = {
    title: 'Components/Feedback/NoticeBoard',
    component: NoticeBoard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof NoticeBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 標準的なお知らせ
export const Default: Story = {
    args: {
        message: '第2工場のラインメンテナンスは、予定通り15:00から開始します。各自、安全確認をお願いします。',
        date: '2026.03.28 10:00',
    },
    decorators: [
        (Story) => (
            <div className="w-[350px]">
                <Story />
            </div>
        ),
    ],
};

// 2. 短いメッセージ（付箋風）
export const Memo: Story = {
    args: {
        message: '本日の生産目標：残り 120個',
        date: '2026.03.28',
    },
    decorators: [
        (Story) => (
            <div className="w-[200px]">
                <Story />
            </div>
        ),
    ],
};

// 3. 長文メッセージ（改行の確認）
export const LongMessage: Story = {
    args: {
        message: '【重要】来週月曜日に安全講習会が開催されます。対象者は全員13:00までに会議室Aに集合してください。筆記用具を忘れずに持参すること。',
        date: '2026.03.27 17:30',
    },
    decorators: [
        (Story) => (
            <div className="w-[400px]">
                <Story />
            </div>
        ),
    ],
};