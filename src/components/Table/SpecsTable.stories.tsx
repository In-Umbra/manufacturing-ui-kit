import type { Meta, StoryObj } from '@storybook/react';
import { SpecsTable } from './SpecsTable';

const meta = {
    title: 'Components/Table/SpecsTable',
    component: SpecsTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SpecsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. デバイス仕様（基本）
export const DeviceSpecifications: Story = {
    args: {
        title: 'Device Specs',
        specs: [
            { label: 'Model', value: 'TX-400-ALPHA' },
            { label: 'Serial No.', value: 'SN-2026-00328' },
            { label: 'Firmware', value: 'v2.4.1 (Stable)' },
            { label: 'Network', value: '192.168.1.105' },
            { label: 'CPU Load', value: '12.5%' },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[350px]">
                <Story />
            </div>
        ),
    ],
};

// 2. 製造パラメータ
export const ProductionParameters: Story = {
    args: {
        title: 'Threshold Settings',
        specs: [
            { label: 'Max Temp', value: '85.0°C' },
            { label: 'Min Temp', value: '15.0°C' },
            { label: 'Target Pressure', value: '1,024 hPa' },
            { label: 'Cooling Delay', value: '500 ms' },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[350px]">
                <Story />
            </div>
        ),
    ],
};