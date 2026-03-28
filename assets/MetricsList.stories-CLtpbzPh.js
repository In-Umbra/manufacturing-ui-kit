import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({metrics:e})=>(0,r.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:e.map((e,t)=>(0,r.jsxs)(`div`,{className:`p-2 rounded border ${e.isAlert?`bg-red-50 border-red-200`:`bg-slate-50 border-slate-200`}`,children:[(0,r.jsx)(`p`,{className:`text-[8px] font-bold text-gray-400 uppercase`,children:e.label}),(0,r.jsx)(`p`,{className:`text-sm font-mono font-bold ${e.isAlert?`text-red-600`:`text-slate-700`}`,children:e.value})]},t))});i.__docgenInfo={description:``,methods:[],displayName:`MetricsList`,props:{metrics:{required:!0,tsType:{name:`Array`,elements:[{name:`Metric`}],raw:`Metric[]`},description:``}}};var a={title:`Components/Card/MetricsList`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{metrics:[{label:`CPU Temp`,value:`45.2°C`},{label:`Memory`,value:`12.4GB`},{label:`Fan Speed`,value:`2400rpm`,isAlert:!0},{label:`Uptime`,value:`12d 4h`},{label:`Voltage`,value:`1.24V`},{label:`Load`,value:`88%`,isAlert:!0}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[300px]`,children:(0,r.jsx)(e,{})})]},s={args:{metrics:[{label:`Node-01`,value:`Online`},{label:`Node-02`,value:`Offline`,isAlert:!0},{label:`Node-03`,value:`Online`},{label:`Node-04`,value:`Online`}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[300px]`,children:(0,r.jsx)(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'CPU Temp',
      value: '45.2°C'
    }, {
      label: 'Memory',
      value: '12.4GB'
    }, {
      label: 'Fan Speed',
      value: '2400rpm',
      isAlert: true
    }, {
      label: 'Uptime',
      value: '12d 4h'
    }, {
      label: 'Voltage',
      value: '1.24V'
    }, {
      label: 'Load',
      value: '88%',
      isAlert: true
    }]
  },
  decorators: [Story => <div className="w-[300px]">\r
                <Story />\r
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Node-01',
      value: 'Online'
    }, {
      label: 'Node-02',
      value: 'Offline',
      isAlert: true
    }, {
      label: 'Node-03',
      value: 'Online'
    }, {
      label: 'Node-04',
      value: 'Online'
    }]
  },
  decorators: [Story => <div className="w-[300px]">\r
                <Story />\r
            </div>]
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`Monitoring`];export{o as Default,s as Monitoring,c as __namedExportsOrder,a as default};