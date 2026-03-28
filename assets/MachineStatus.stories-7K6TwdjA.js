import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i={running:{label:`稼働中`,color:`bg-factory-running`,bg:`bg-green-50`,text:`text-green-700`},stopped:{label:`停止中`,color:`bg-factory-stopped`,bg:`bg-red-50`,text:`text-red-700`},idle:{label:`待機中`,color:`bg-factory-idle`,bg:`bg-yellow-50`,text:`text-yellow-700`},error:{label:`異常`,color:`bg-factory-alert`,bg:`bg-orange-50`,text:`text-orange-800`,animate:`animate-pulse`}},a=({machineName:e,id:t,status:n,uptime:a,operator:o,history:s})=>{let c=i[n];return(0,r.jsxs)(`div`,{className:`relative overflow-hidden rounded-lg border-l-8 ${c.color} ${c.bg} p-4 shadow-sm border border-gray-200 transition-all hover:shadow-md`,children:[(0,r.jsxs)(`div`,{className:`flex justify-between items-start`,children:[(0,r.jsxs)(`div`,{children:[(0,r.jsxs)(`span`,{className:`text-[10px] font-bold text-gray-400 uppercase tracking-widest`,children:[`ID: `,t]}),(0,r.jsx)(`h3`,{className:`text-lg font-bold text-gray-900 leading-tight`,children:e})]}),(0,r.jsx)(`div`,{className:`px-2 py-1 rounded text-[10px] font-black text-white ${c.color} ${c.animate||``}`,children:c.label})]}),(0,r.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-2`,children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`text-[10px] text-gray-400 font-bold uppercase`,children:`Uptime`}),(0,r.jsx)(`p`,{className:`text-md font-mono font-bold text-gray-800 tracking-tighter`,children:a})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`text-[10px] text-gray-400 font-bold uppercase`,children:`Operator`}),(0,r.jsx)(`p`,{className:`text-sm font-bold text-gray-700 truncate`,children:o||`---`})]})]}),(0,r.jsx)(`div`,{className:`mt-4 flex gap-1 h-1.5`,children:s.map((e,t)=>(0,r.jsx)(`div`,{className:`flex-1 rounded-full ${i[e].color} opacity-30`},t))})]})};a.__docgenInfo={description:``,methods:[],displayName:`MachineStatusCard`,props:{machineName:{required:!0,tsType:{name:`string`},description:``},id:{required:!0,tsType:{name:`string`},description:``},status:{required:!0,tsType:{name:`union`,raw:`'running' | 'stopped' | 'idle' | 'error'`,elements:[{name:`literal`,value:`'running'`},{name:`literal`,value:`'stopped'`},{name:`literal`,value:`'idle'`},{name:`literal`,value:`'error'`}]},description:``},uptime:{required:!0,tsType:{name:`string`},description:``},operator:{required:!1,tsType:{name:`string`},description:``},history:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`'running' | 'stopped' | 'idle' | 'error'`,elements:[{name:`literal`,value:`'running'`},{name:`literal`,value:`'stopped'`},{name:`literal`,value:`'idle'`},{name:`literal`,value:`'error'`}]}],raw:`MachineStatus[]`},description:``}}};var o={title:`Components/Card/MachineStatusCard`,component:a,tags:[`autodocs`],argTypes:{status:{control:`inline-radio`,options:[`running`,`stopped`,`idle`,`error`]},history:{control:!1}},parameters:{layout:`centered`}},s={args:{machineName:`高速プレス機 Alpha-1`,id:`PR-A1-001`,status:`running`,uptime:`124h 45m`,operator:`田中 健一`,history:[`running`,`running`,`running`,`idle`,`running`,`running`,`stopped`,`stopped`,`running`,`error`,`running`,`running`]}},c={args:{...s.args,machineName:`自動溶接ロボット RX-7`,id:`WLD-RX7-04`,status:`stopped`,uptime:`0h 00m`,operator:`未割当`,history:[`stopped`,`stopped`,`stopped`,`stopped`,`stopped`,`stopped`]}},l={args:{...s.args,machineName:`検査用カメラユニット`,id:`INSP-CAM-09`,status:`idle`,uptime:`45h 12m`,operator:`佐藤 亮太`,history:[`running`,`running`,`idle`,`idle`,`idle`,`idle`]}},u={args:{...s.args,machineName:`射出成形機 Beta-5`,id:`INJ-B5-22`,status:`error`,uptime:`12h 05m`,operator:`高橋 浩二`,history:[`running`,`running`,`running`,`running`,`running`,`error`]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    machineName: '高速プレス機 Alpha-1',
    id: 'PR-A1-001',
    status: 'running',
    uptime: '124h 45m',
    operator: '田中 健一',
    history: sampleHistory
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Running.args,
    machineName: '自動溶接ロボット RX-7',
    id: 'WLD-RX7-04',
    status: 'stopped',
    uptime: '0h 00m',
    operator: '未割当',
    history: ['stopped', 'stopped', 'stopped', 'stopped', 'stopped', 'stopped']
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Running.args,
    machineName: '検査用カメラユニット',
    id: 'INSP-CAM-09',
    status: 'idle',
    uptime: '45h 12m',
    operator: '佐藤 亮太',
    history: ['running', 'running', 'idle', 'idle', 'idle', 'idle']
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Running.args,
    machineName: '射出成形機 Beta-5',
    id: 'INJ-B5-22',
    status: 'error',
    uptime: '12h 05m',
    operator: '高橋 浩二',
    history: ['running', 'running', 'running', 'running', 'running', 'error']
  }
}`,...u.parameters?.docs?.source}}};var d=[`Running`,`Stopped`,`Idle`,`Alert`];export{u as Alert,l as Idle,s as Running,c as Stopped,d as __namedExportsOrder,o as default};