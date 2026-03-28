import{s as e}from"./iframe-CN-2U1D8.js";import{t}from"./react-Y-6QNYsc.js";import{t as n}from"./jsx-runtime--jJlx6pC.js";e(t(),1);var r=n(),i=({label:e,target:t,actual:n,defects:i,unit:a=`pcs`})=>{let o=Math.min(n/t*100,100),s=n<t*.8;return(0,r.jsxs)(`div`,{className:`w-full bg-white p-5 rounded-xl border border-gray-200 shadow-sm`,children:[(0,r.jsxs)(`div`,{className:`flex justify-between items-end mb-3`,children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`h4`,{className:`text-xs font-bold text-gray-400 uppercase mb-1`,children:e}),(0,r.jsxs)(`div`,{className:`flex items-baseline gap-1`,children:[(0,r.jsx)(`span`,{className:`text-4xl font-black text-gray-900`,children:n.toLocaleString()}),(0,r.jsxs)(`span`,{className:`text-sm font-bold text-gray-400 italic`,children:[`/ `,t.toLocaleString(),` `,a]})]})]}),(0,r.jsxs)(`div`,{className:`text-right`,children:[(0,r.jsxs)(`p`,{className:`text-xl font-black ${i>0?`text-factory-stopped`:`text-factory-running`}`,children:[((n-i)/n*100||0).toFixed(1),`%`]}),(0,r.jsx)(`p`,{className:`text-[10px] font-bold text-gray-400 uppercase`,children:`Yield Rate`})]})]}),(0,r.jsx)(`div`,{className:`h-4 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-200`,children:(0,r.jsx)(`div`,{className:`h-full transition-all duration-700 ${s?`bg-factory-idle`:`bg-factory-primary`}`,style:{width:`${o}%`}})}),(0,r.jsxs)(`div`,{className:`mt-2 flex justify-between items-center`,children:[(0,r.jsx)(`span`,{className:`text-[10px] font-bold ${s?`text-factory-alert`:`text-gray-400`}`,children:s?`⚠️ BEHIND SCHEDULE`:`✓ ON TRACK`}),(0,r.jsxs)(`span`,{className:`text-[10px] font-bold text-factory-stopped text-red-600`,children:[`DEFECTS: `,i]})]})]})};i.__docgenInfo={description:``,methods:[],displayName:`ProductionProgressBar`,props:{label:{required:!0,tsType:{name:`string`},description:``},target:{required:!0,tsType:{name:`number`},description:``},actual:{required:!0,tsType:{name:`number`},description:``},defects:{required:!0,tsType:{name:`number`},description:``},unit:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'pcs'`,computed:!1}}}};var a={title:`Components/Card/ProductionProgressBar`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{label:`Line A - Daily Output`,target:2e3,actual:1850,defects:2,unit:`pcs`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[450px] bg-gray-50 p-8`,children:(0,r.jsx)(e,{})})]},s={args:{label:`Line B - Daily Output`,target:2e3,actual:1200,defects:0},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[450px] bg-gray-50 p-8`,children:(0,r.jsx)(e,{})})]},c={args:{label:`Line C - Precision Parts`,target:1e3,actual:800,defects:85},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[450px] bg-gray-50 p-8`,children:(0,r.jsx)(e,{})})]},l={args:{label:`Line D - Batch Complete`,target:1500,actual:1500,defects:5},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[450px] bg-gray-50 p-8`,children:(0,r.jsx)(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Line A - Daily Output',
    target: 2000,
    actual: 1850,
    defects: 2,
    unit: 'pcs'
  },
  decorators: [Story => <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Line B - Daily Output',
    target: 2000,
    actual: 1200,
    // 80%未満
    defects: 0
  },
  decorators: [Story => <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Line C - Precision Parts',
    target: 1000,
    actual: 800,
    defects: 85
  },
  decorators: [Story => <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Line D - Batch Complete',
    target: 1500,
    actual: 1500,
    defects: 5
  },
  decorators: [Story => <div className="w-[450px] bg-gray-50 p-8">
                <Story />
            </div>]
}`,...l.parameters?.docs?.source}}};var u=[`OnTrack`,`Delayed`,`HighDefects`,`Completed`];export{l as Completed,s as Delayed,c as HighDefects,o as OnTrack,u as __namedExportsOrder,a as default};