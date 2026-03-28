import type { Meta, StoryObj } from '@storybook/react';
import { EventLog } from './EventLog';

const meta = {
    title: 'Components/Card/EventLog',
    component: EventLog,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof EventLog>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleEvents = [
    { time: '22:01:05', message: 'System boot initiated', type: 'system' },
    { time: '22:01:12', message: 'Database connection established', type: 'system' },
    { time: '22:03:45', message: 'User "Admin" logged in', type: 'user' },
    { time: '22:05:00', message: 'High CPU load detected on Node-01', type: 'alert' },
    { time: '22:05:10', message: 'Auto-scaling group triggered', type: 'system' },
    { time: '22:08:22', message: 'Fan speed increased to 100%', type: 'alert' },
] as const;

export const Default: Story = {
    args: {
        events: [...sampleEvents],
    },
    decorators: [
        (Story) => (
            <div className="w-[400px]">
                <Story />
            </div>
        ),
    ],
};

export const CriticalOnly: Story = {
    args: {
        events: [
            { time: '23:59:59', message: 'CRITICAL: Thermal shutdown initiated', type: 'alert' },
            { time: '00:00:01', message: 'Backup power active', type: 'alert' },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-[400px]">
                <Story />
            </div>
        ),
    ],
};

export const Empty: Story = {
    args: {
        events: [],
    },
    decorators: [
        (Story) => (
            <div className="w-[400px]">
                <div className="p-4 bg-gray-100 rounded-xl">
                    <p className="text-xs text-gray-400 mb-2">No active logs</p>
                    <Story />
                </div>
            </div>
        ),
    ],
};