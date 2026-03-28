import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

const meta = {
    title: 'Components/Table/DataTable',
    component: DataTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        onRowClick: { action: 'row clicked' },
    },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
    { key: 'id', label: 'ID', width: '80px' },
    { key: 'name', label: 'Device Name' },
    { key: 'status', label: 'Status', width: '120px' },
    { key: 'value', label: 'Value', width: '100px' },
    { key: 'lastUpdate', label: 'Last Update' },
];

const data = [
    { id: '001', name: 'Main Extruder A', status: 'running', value: '45.2°C', lastUpdate: '10:05:12' },
    { id: '002', name: 'Conveyor Unit B', status: 'error', value: '0 rpm', lastUpdate: '09:58:30' },
    { id: '003', name: 'Cooling System C', status: 'running', value: '18.5°C', lastUpdate: '10:04:45' },
    { id: '004', name: 'Packaging Robot D', status: 'idle', value: 'Standby', lastUpdate: '10:00:00' },
    { id: '005', name: 'Sensor Array E', status: 'running', value: '1,024 hPa', lastUpdate: '10:05:01' },
];

export const Default: Story = {
    args: {
        columns,
        data,
    },
};

export const StickyHeader: Story = {
    args: {
        columns,
        data: [...Array(20)].map((_, i) => ({
            ...data[i % 5],
            id: (i + 1).toString().padStart(3, '0'),
        })),
    },
};