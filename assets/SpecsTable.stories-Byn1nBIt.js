import{s as e}from"./iframe-CN-2U1D8.js";import{t}from"./react-Y-6QNYsc.js";import{t as n}from"./jsx-runtime--jJlx6pC.js";e(t(),1);var r=n(),i=({title:e,specs:t})=>(0,r.jsxs)(`div`,{className:`bg-white rounded-lg border border-gray-200 overflow-hidden`,children:[(0,r.jsx)(`div`,{className:`bg-gray-50 px-4 py-2 border-b border-gray-200`,children:(0,r.jsx)(`h3`,{className:`text-[10px] font-bold text-gray-500 uppercase`,children:e})}),(0,r.jsx)(`table`,{className:`w-full text-left text-xs`,children:(0,r.jsx)(`tbody`,{children:t.map((e,t)=>(0,r.jsxs)(`tr`,{className:`border-b border-gray-100 last:border-0`,children:[(0,r.jsx)(`td`,{className:`px-4 py-2 font-bold text-gray-400 bg-gray-50/30 w-1/3`,children:e.label}),(0,r.jsx)(`td`,{className:`px-4 py-2 text-gray-700 font-mono`,children:e.value})]},t))})})]});i.__docgenInfo={description:``,methods:[],displayName:`SpecsTable`,props:{title:{required:!0,tsType:{name:`string`},description:``},specs:{required:!0,tsType:{name:`Array`,elements:[{name:`SpecRow`}],raw:`SpecRow[]`},description:``}}};var a={title:`Components/Table/SpecsTable`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{title:`Device Specs`,specs:[{label:`Model`,value:`TX-400-ALPHA`},{label:`Serial No.`,value:`SN-2026-00328`},{label:`Firmware`,value:`v2.4.1 (Stable)`},{label:`Network`,value:`192.168.1.105`},{label:`CPU Load`,value:`12.5%`}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[350px]`,children:(0,r.jsx)(e,{})})]},s={args:{title:`Threshold Settings`,specs:[{label:`Max Temp`,value:`85.0°C`},{label:`Min Temp`,value:`15.0°C`},{label:`Target Pressure`,value:`1,024 hPa`},{label:`Cooling Delay`,value:`500 ms`}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[350px]`,children:(0,r.jsx)(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Device Specs',
    specs: [{
      label: 'Model',
      value: 'TX-400-ALPHA'
    }, {
      label: 'Serial No.',
      value: 'SN-2026-00328'
    }, {
      label: 'Firmware',
      value: 'v2.4.1 (Stable)'
    }, {
      label: 'Network',
      value: '192.168.1.105'
    }, {
      label: 'CPU Load',
      value: '12.5%'
    }]
  },
  decorators: [Story => <div className="w-[350px]">
                <Story />
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Threshold Settings',
    specs: [{
      label: 'Max Temp',
      value: '85.0°C'
    }, {
      label: 'Min Temp',
      value: '15.0°C'
    }, {
      label: 'Target Pressure',
      value: '1,024 hPa'
    }, {
      label: 'Cooling Delay',
      value: '500 ms'
    }]
  },
  decorators: [Story => <div className="w-[350px]">
                <Story />
            </div>]
}`,...s.parameters?.docs?.source}}};var c=[`DeviceSpecifications`,`ProductionParameters`];export{o as DeviceSpecifications,s as ProductionParameters,c as __namedExportsOrder,a as default};