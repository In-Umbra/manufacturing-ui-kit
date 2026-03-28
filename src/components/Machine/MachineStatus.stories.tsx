import type { Meta, StoryObj } from '@storybook/react';
import { MachineStatusCard } from './MachineStatusCard';

const meta = {
    title: 'Components/Card/MachineStatusCard',
    component: MachineStatusCard,
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'inline-radio',
            options: ['running', 'stopped', 'idle', 'error'],
        },
        history: {
            control: false,
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MachineStatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 共通のヒストリーデータ
const sampleHistory: ('running' | 'stopped' | 'idle' | 'error')[] = [
    'running', 'running', 'running', 'idle', 'running', 'running', 'stopped', 'stopped', 'running', 'error', 'running', 'running'
];

export const Running: Story = {
    args: {
        machineName: '高速プレス機 Alpha-1',
        id: 'PR-A1-001',
        status: 'running',
        uptime: '124h 45m',
        operator: '田中 健一',
        history: sampleHistory,
    },
};

export const Stopped: Story = {
    args: {
        ...Running.args,
        machineName: '自動溶接ロボット RX-7',
        id: 'WLD-RX7-04',
        status: 'stopped',
        uptime: '0h 00m',
        operator: '未割当',
        history: ['stopped', 'stopped', 'stopped', 'stopped', 'stopped', 'stopped'],
    },
};

export const Idle: Story = {
    args: {
        ...Running.args,
        machineName: '検査用カメラユニット',
        id: 'INSP-CAM-09',
        status: 'idle',
        uptime: '45h 12m',
        operator: '佐藤 亮太',
        history: ['running', 'running', 'idle', 'idle', 'idle', 'idle'],
    },
};

export const Alert: Story = {
    args: {
        ...Running.args,
        machineName: '射出成形機 Beta-5',
        id: 'INJ-B5-22',
        status: 'error',
        uptime: '12h 05m',
        operator: '高橋 浩二',
        history: ['running', 'running', 'running', 'running', 'running', 'error'],
    },
};