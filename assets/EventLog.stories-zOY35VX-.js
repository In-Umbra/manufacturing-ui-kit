import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({events:e})=>(0,r.jsxs)(`div`,{className:`bg-gray-900 rounded-lg p-3 font-mono text-[11px]`,children:[(0,r.jsxs)(`div`,{className:`flex justify-between mb-2 border-b border-gray-700 pb-1`,children:[(0,r.jsx)(`span`,{className:`text-gray-500 font-bold uppercase`,children:`System Logs`}),(0,r.jsx)(`span`,{className:`text-green-500`,children:`● LIVE`})]}),(0,r.jsx)(`div`,{className:`space-y-1 max-h-32 overflow-y-auto`,children:e.map((e,t)=>(0,r.jsxs)(`div`,{className:`flex gap-2`,children:[(0,r.jsxs)(`span`,{className:`text-gray-500`,children:[`[`,e.time,`]`]}),(0,r.jsx)(`span`,{className:e.type===`alert`?`text-red-400`:`text-gray-300`,children:e.message})]},t))})]});i.__docgenInfo={description:``,methods:[],displayName:`EventLog`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`Event`}],raw:`Event[]`},description:``}}};var a={title:`Components/Card/EventLog`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{events:[...[{time:`22:01:05`,message:`System boot initiated`,type:`system`},{time:`22:01:12`,message:`Database connection established`,type:`system`},{time:`22:03:45`,message:`User "Admin" logged in`,type:`user`},{time:`22:05:00`,message:`High CPU load detected on Node-01`,type:`alert`},{time:`22:05:10`,message:`Auto-scaling group triggered`,type:`system`},{time:`22:08:22`,message:`Fan speed increased to 100%`,type:`alert`}]]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[400px]`,children:(0,r.jsx)(e,{})})]},s={args:{events:[{time:`23:59:59`,message:`CRITICAL: Thermal shutdown initiated`,type:`alert`},{time:`00:00:01`,message:`Backup power active`,type:`alert`}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[400px]`,children:(0,r.jsx)(e,{})})]},c={args:{events:[]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[400px]`,children:(0,r.jsxs)(`div`,{className:`p-4 bg-gray-100 rounded-xl`,children:[(0,r.jsx)(`p`,{className:`text-xs text-gray-400 mb-2`,children:`No active logs`}),(0,r.jsx)(e,{})]})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...sampleEvents]
  },
  decorators: [Story => <div className="w-[400px]">\r
                <Story />\r
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      time: '23:59:59',
      message: 'CRITICAL: Thermal shutdown initiated',
      type: 'alert'
    }, {
      time: '00:00:01',
      message: 'Backup power active',
      type: 'alert'
    }]
  },
  decorators: [Story => <div className="w-[400px]">\r
                <Story />\r
            </div>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    events: []
  },
  decorators: [Story => <div className="w-[400px]">\r
                <div className="p-4 bg-gray-100 rounded-xl">\r
                    <p className="text-xs text-gray-400 mb-2">No active logs</p>\r
                    <Story />\r
                </div>\r
            </div>]
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`CriticalOnly`,`Empty`];export{s as CriticalOnly,o as Default,c as Empty,l as __namedExportsOrder,a as default};