import type { Meta, StoryObj } from '@storybook/react';
import { MetricsList } from './MetricsList';

const meta = {
    title: 'Components/Card/MetricsList',
    component: MetricsList,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MetricsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        metrics: [
            { label: 'CPU Temp', value: '45.2°C' },
            { label: 'Memory', value: '12.4GB' },
            { label: 'Fan Speed', value: '2400rpm', isAlert: true },
            { label: 'Uptime', value: '12d 4h' },
            { label: 'Voltage', value: '1.24V' },
            { label: 'Load', value: '88%', isAlert: true },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[300px]">
                <Story />
            </div>
        ),
    ],
};

export const Monitoring: Story = {
    args: {
        metrics: [
            { label: 'Node-01', value: 'Online' },
            { label: 'Node-02', value: 'Offline', isAlert: true },
            { label: 'Node-03', value: 'Online' },
            { label: 'Node-04', value: 'Online' },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[300px]">
                <Story />
            </div>
        ),
    ],
};