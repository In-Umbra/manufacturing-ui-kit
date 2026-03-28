import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta = {
    title: 'Components/Input/TextField',
    component: TextField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'デバイス名',
        placeholder: '例: SENSOR-01',
        helperText: '管理用のデバイスIDを入力してください。',
    },
    decorators: [
        (Story) => (
            <div className="w-[320px]">
                <Story />
            </div>
        ),
    ],
};

export const Error: Story = {
    args: {
        label: '閾値設定',
        defaultValue: 'Invalid Value',
        error: '数値で入力してください。',
    },
    decorators: [
        (Story) => (
            <div className="w-[320px]">
                <Story />
            </div>
        ),
    ],
};

export const Disabled: Story = {
    args: {
        label: 'システムID',
        value: 'SYS-X-999',
        disabled: true,
    },
    decorators: [
        (Story) => (
            <div className="w-[320px]">
                <Story />
            </div>
        ),
    ],
};