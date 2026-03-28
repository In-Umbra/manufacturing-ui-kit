<div align="center">
  
  # ⚙️ Manufacturing UI Kit
  ### Precision Engineering for Modern Industrial Dashboards
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38bdf8.svg)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg)](https://www.typescriptlang.org/)

  **「現場」を、美しく。** Manufacturing UI Kit は、製造業の複雑なデータを直感的なインテリジェンスに変える、  
  **In-Umbra Project** による React 専用コンポーネントライブラリです。
</div>

---

## 🏗 Key Features

- 🛠 **Industrial Grade Components**: 設備稼働状況、KPIカード、製造ログなど、現場に必要なパーツを網羅。
- 📊 **Reactive Analytics**: ドーナツチャートやスパークラインなど、リアルタイムデータに最適化された可視化ツール。
- ⚙️ **High Interactivity**: 現場のミスを防ぐためのステートフルなチェックボックスやデバイススイッチ。
- 🎨 **Blue-Print Design**: 設計図のような美しさと、可視性を両立させたデザインシステム。
- 🛡 **Fully Typed**: TypeScript による堅牢な型定義で、大規模開発でも安心。

---

## 🚀 Getting Started

### 1. Prerequisites

このライブラリは以下の環境を前提としています：
- **React** 18.0+
- **Tailwind CSS** 3.0+
- **Lucide React** (アイコンセット)

### 2. Installation

```bash
npm install @in-umbra/manufacturing-ui-kit
# or
yarn add @in-umbra/manufacturing-ui-kit
3. Basic UsageTypeScriptimport { KpiCard, MachineStatusCard, QuickCheck } from '@in-umbra/manufacturing-ui-kit';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-slate-50">
      {/* 効率性の表示 */}
      <KpiCard 
        label="Overall Efficiency" 
        value="84.2" 
        unit="%" 
        trend={{ value: 1.2, isUp: true }} 
      />
      
      {/* 設備の状態確認 */}
      <MachineStatusCard 
        id="NC-202" 
        machineName="CNC Lathe #1" 
        status="running" 
        uptime="12:44" 
      />
      
      {/* 現場の安全点検 */}
      <QuickCheck 
        label="Safety Interlock Verified" 
        onCheck={(checked) => console.log("Safety Status:", checked)} 
      />
    </div>
  );
};
🎨 Component GalleryCategoryComponentsMonitoringKpiCard, UniversalCard, MiniSparklineAnalyticsBarChart, DonutChart, ProductionProgressBarInteractionDeviceSwitch, QuickCheck, TextField, SelectBoxData LayersDataTable, SpecsTable, MetricsList, DayServiceBarFeedbackAlertBar, StatusBadge, NoticeBoard, EventLog📄 LicenseMIT LicenseCopyright (c) 2026 In-UmbraPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<div align="center"><p>Created with Precision by <strong>In-Umbra</strong></p><p>© 2026 In-Umbra. All Rights Reserved.</p></div>