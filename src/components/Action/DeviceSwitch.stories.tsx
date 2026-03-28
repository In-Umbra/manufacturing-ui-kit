import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DeviceSwitch } from './DeviceSwitch';

const meta = {
    title: 'Components/Action/DeviceSwitch',
    component: DeviceSwitch,
    tags: ['autodocs'],
    args: {
        onChange: (val: boolean) => console.log('Toggled:', val),
    },
    argTypes: {
        isEnabled: { control: 'boolean' },
        onChange: { action: 'toggled' },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DeviceSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
    args: {
        label: 'メインパワー（操作可能）',
        isEnabled: false,
    },
    render: (args) => {
        const [enabled, setEnabled] = useState(args.isEnabled);
        return (
            <DeviceSwitch
                {...args}
                isEnabled={enabled}
                onChange={(val) => {
                    setEnabled(val);
                    args.onChange(val);
                }}
            />
        );
    },
};

/**
 * 2. 有効（ON）状態
 */
export const Enabled: Story = {
    args: {
        label: '照明システム',
        isEnabled: true,
    },
};

/**
 * 3. 無効（OFF）状態
 */
export const Disabled: Story = {
    args: {
        label: '非常用アラート',
        isEnabled: false,
    },
};
