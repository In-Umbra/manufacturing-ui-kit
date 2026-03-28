import React, { useState, useEffect } from 'react';

import { KpiCard } from './components/Stats/KpiCard';
import { BarChart } from './components/Charts/BarChart';
import { DonutChart } from './components/Charts/DonutChart';
import { MiniSparkline } from './components/Charts/MiniSparkline';
import { UniversalCard } from './components/Cards/UniversalCard';
import { MachineStatusCard } from './components/Machine/MachineStatusCard';
import { ProductionProgressBar } from './components/Progress/ProductionProgressBar';
import { StatusBadge } from './components/Badge/StatusBadge';
import { EventLog } from './components/List/EventLog';
import { DataTable } from './components/Table/DataTable';
import { SpecsTable } from './components/Table/SpecsTable';
import { OperatorCard } from './components/User/OperatorCard';
import { NoticeBoard } from './components/Feedback/NoticeBoard';
import { DayServiceBar } from './components/Timeline/DayServiceBar';
import { MetricsList } from './components/Stats/MetricsList';
import { QuickCheck } from './components/Action/QuickCheck';
import { DeviceSwitch } from './components/Action/DeviceSwitch';
import { AlertBar } from './components/Feedback/AlertBar';
import { TextField } from './components/Input/TextField';
import { SelectBox } from './components/Input/SelectBox';

function App() {
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [alert, setAlert] = useState<{ show: boolean; msg: string; type: 'info' | 'error' | 'warning' }>({
    show: false,
    msg: '',
    type: 'info'
  });
  const [inputValue, setInputValue] = useState("");
  const [selectedMachine, setSelectedMachine] = useState("NC-202");
  const [sparkData, setSparkData] = useState([30, 50, 40, 80, 60, 95, 70, 55, 90, 65]);

  const triggerAlert = (msg: string, type: 'info' | 'error' | 'warning' = 'info') => {
    setAlert({ show: true, msg, type });
    setTimeout(() => setAlert(prev => ({ ...prev, show: false })), 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkData(prev => [...prev.slice(1), Math.floor(Math.random() * 80) + 20]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 pb-0 selection:bg-blue-100">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${alert.show ? 'translate-y-0' : '-translate-y-full'}`}>
        <AlertBar type={alert.type} message={alert.msg} onClose={() => setAlert(prev => ({ ...prev, show: false }))} />
      </div>

      <header className="bg-white border-b border-slate-200 pt-20 pb-16 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
            Precision Engineering UI
          </div>
          <h1 className="text-6xl font-black tracking-tighter uppercase italic text-slate-900 leading-none">
            Manufacturing <span className="text-blue-600 not-italic">UI Kit</span>
          </h1>
          <p className="mt-8 text-slate-500 font-bold max-w-2xl text-xl leading-relaxed mx-auto lg:mx-0">
            インダストリアル・グレードの視覚体験を。
            In-Umbra Project が提供する、モダンな製造現場のための包括的なUIコンポーネントライブラリ。
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-32">

        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">01. Monitoring</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <KpiCard label="OEE Efficiency" value="84.2" unit="%" trend={{ value: 1.2, isUp: true }} />
            <KpiCard label="Defect Rate" value="0.51" unit="%" trend={{ value: 0.05, isUp: false }} />
            <UniversalCard title="Line Load Graph" statusColor="amber" value={42.8} unit="kW">
              <MiniSparkline data={sparkData} color="amber" height={50} />
            </UniversalCard>
            <UniversalCard title="System Status" statusColor="green" value="Active" description="All nodes operational" />
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">02. Analytics</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <BarChart title="Output Volume by Shift" data={[
                { label: 'Shift A', value: 800 },
                { label: 'Shift B', value: 950 },
                { label: 'Shift C', value: 1100 },
                { label: 'Shift D', value: 720 },
                { label: 'Shift E', value: 1050 }
              ]}
                height={260}
              />
            </div>
            <DonutChart title="Quality Breakdown" data={[
              { label: 'Good', value: 180, color: 'fill-blue-600' },
              { label: 'Waste', value: 200, color: 'fill-red-500' },
              { label: 'Rework', value: 415, color: 'fill-amber-400' }
            ]}
              centerValue="795"
            />
            <div className="lg:col-span-3">
              <ProductionProgressBar label="Current Job: #A-770 (Batch Processing)" target={2500} actual={1840} defects={15} />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">03. Interactivity</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 space-y-8 shadow-sm">
              <TextField label="Operator Identifier" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="SCAN ID..." />
              <SelectBox
                label="Target Machine"
                options={[
                  { value: 'NC-202', label: 'CNC Lathe #1' },
                  { value: 'IM-405', label: 'Molder #2' },
                  { value: 'PR-101', label: '3D Printer Cluster' },
                  { value: 'LC-500', label: 'Laser Cutter' },
                  { value: 'RB-007', label: 'Assembly Robot' }
                ]}
                value={selectedMachine}
                onChange={(e) => setSelectedMachine(e.target.value)}
              />
              <DeviceSwitch label="Auto-Cycle Mode" isEnabled={isAutoMode} onChange={(v) => { setIsAutoMode(v); triggerAlert(v ? "Autonomous Control Active" : "Manual Override Engaged", v ? "info" : "warning"); }} />
              <button onClick={() => triggerAlert("Data Sync Successful")} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 uppercase tracking-widest">Update Cloud</button>
            </div>

            <div className="space-y-6">
              <MachineStatusCard id="NC-202" machineName="CNC Lathe #1" status={isAutoMode ? "running" : "idle"} uptime="12:44" operator="T. Sato" history={['running', 'running', 'idle', 'running', 'stopped', 'running']} />
              <div className="flex flex-wrap gap-2">
                <StatusBadge level="info" text="Signal: Excellent" />
                <StatusBadge level="warning" text="Inspection Required" />
                <StatusBadge level="critical" text="Pressure High" />
              </div>
              <QuickCheck
                label="Safety Protocol Verified"
                defaultChecked
                onCheck={(checked) => triggerAlert(checked ? "Safety check COMPLETED" : "Safety check RESET", checked ? "info" : "warning")}
              />
              <QuickCheck
                label="Component Alignment Sync"
                onCheck={(checked) => triggerAlert(checked ? "Sync COMPLETED" : "Sync RESET")}
              />
              <QuickCheck
                label="Coolant Level Acknowledged"
                onCheck={(checked) => triggerAlert(checked ? "Acknowledged" : "Reset")}
              />
            </div>

            <div className="space-y-6">
              <EventLog events={[
                { time: '10:45', message: `Interface initialized`, type: 'system' },
                { time: '10:43', message: `Critical Error: B-02 (Pump Failure)`, type: 'alert' },
                { time: '10:42', message: 'Manual stop triggered by OP-99', type: 'user' },
                { time: '10:38', message: 'Cycle completed: 420 units', type: 'system' },
                { time: '10:30', message: 'Operator Shift Change: Sato -> Tanaka', type: 'user' },
                { time: '10:15', message: 'Predictive Maint: Spindle Wear', type: 'alert' },
                { time: '10:00', message: 'Calibration Success', type: 'system' }
              ]}
              />
              <OperatorCard name="Kenji Sato" role="Lead Systems Engineer" shift="Day" />
              <NoticeBoard date='2026/03/28' message='Weekly maintenance scheduled for Sunday 10:00 PM. All lines will be offline.' />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">04. Data Layers</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <DataTable
                columns={[
                  { key: 'id', label: 'ID', width: '80px' },
                  { key: 'name', label: 'Unit Name' },
                  { key: 'status', label: 'Status' },
                  { key: 'lastMaint', label: 'Last Maint' },
                  { key: 'health', label: 'Health' }
                ]}
                data={[
                  { id: 'M1', name: 'Injection Molder', status: 'Active', lastMaint: '2026-02-15', health: '92%' },
                  { id: 'M2', name: 'Vacuum Former', status: 'Idle', lastMaint: '2026-03-01', health: '88%' },
                  { id: 'M3', name: 'CNC-Lathe Pro', status: 'Running', lastMaint: '2026-03-20', health: '95%' },
                  { id: 'M4', name: 'Robot Arm #A', status: 'Active', lastMaint: '2026-01-10', health: '74%' },
                  { id: 'M5', name: 'Laser Cutter', status: 'Error', lastMaint: '2026-03-25', health: '42%' },
                  { id: 'M6', name: 'Conveyor-Main', status: 'Active', lastMaint: '2026-02-28', health: '91%' },
                  { id: 'M7', name: 'Pick & Place', status: 'Idle', lastMaint: '2026-03-12', health: '85%' },
                  { id: 'M8', name: 'Packaging Unit', status: 'Running', lastMaint: '2026-03-27', health: '99%' }
                ]}
                onRowClick={(r) => triggerAlert(`Unit Selected: ${r.name}`, "info")}
              />
            </div>
            <div className="lg:col-span-4 space-y-8">
              <SpecsTable
                title="System Specifications"
                specs={[
                  { label: 'Voltage', value: 'AC 200V / 3 Phase' },
                  { label: 'Firmware', value: 'v2.4.1-stable' },
                  { label: 'Network', value: '10Gbps Ethernet' },
                  { label: 'Air Press', value: '0.65 MPa' },
                  { label: 'Max Load', value: '12,000 kg' },
                  { label: 'OS Version', value: 'FactoryOS x64' }
                ]}
              />
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Active Sensor Array</p>
                <MetricsList metrics={[
                  { label: 'Internal Temp', value: '42.5 ℃' },
                  { label: 'Oil Pressure', value: '12.2 MPa' },
                  { label: 'Vibration', value: '0.04 mm/s' },
                  { label: 'Humidity', value: '34%' },
                  { label: 'Power Factor', value: '0.94' },
                  { label: 'Motor RPM', value: '14,200' }
                ]} />
              </div>
              <DayServiceBar slots={[{ status: 'running', width: 45 }, { status: 'idle', width: 15 }, { status: 'stopped', width: 10 }, { status: 'running', width: 30 }]} />
            </div>
          </div>
        </section>

      </main>

      <footer className="py-24 bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
          <div className="w-12 h-1 bg-blue-600 mb-8 rounded-full" />
          <p className="text-[12px] font-black text-slate-900 uppercase tracking-[0.8em] mb-4">
            Manufacturing UI Kit
          </p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span>© 2026 In-Umbra</span>
            <span className="w-1 h-1 bg-slate-200 rounded-full" />
            <span>All Rights Reserved</span>
          </p>
          <div className="mt-8 flex gap-6">
            <button onClick={() => triggerAlert("Access Restricted", "error")} className="text-slate-400 hover:text-blue-600 transition-colors text-[10px] font-bold uppercase tracking-widest">GitHub</button>
            <button onClick={() => triggerAlert("MIT License Details", "info")} className="text-slate-400 hover:text-blue-600 transition-colors text-[10px] font-bold uppercase tracking-widest">License</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;