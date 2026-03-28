import{s as e}from"./iframe-CN-2U1D8.js";import{t}from"./react-Y-6QNYsc.js";import{t as n}from"./jsx-runtime--jJlx6pC.js";e(t(),1);var r=n(),i=({name:e,role:t,avatarUrl:n,shift:i})=>(0,r.jsxs)(`div`,{className:`flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-sm`,children:[(0,r.jsx)(`div`,{className:`w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white shadow-inner`,children:n?(0,r.jsx)(`img`,{src:n,alt:e}):(0,r.jsx)(`span`,{className:`text-xl`,children:`👤`})}),(0,r.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,r.jsx)(`p`,{className:`text-xs font-black text-slate-800 truncate`,children:e}),(0,r.jsx)(`p`,{className:`text-[9px] font-bold text-slate-400 uppercase tracking-tighter`,children:t})]}),(0,r.jsx)(`div`,{className:`px-2 py-0.5 rounded text-[8px] font-black ${i===`Day`?`bg-orange-100 text-orange-600`:`bg-indigo-100 text-indigo-600`}`,children:i.toUpperCase()})]});i.__docgenInfo={description:``,methods:[],displayName:`OperatorCard`,props:{name:{required:!0,tsType:{name:`string`},description:``},role:{required:!0,tsType:{name:`string`},description:``},avatarUrl:{required:!1,tsType:{name:`string`},description:``},shift:{required:!0,tsType:{name:`union`,raw:`'Day' | 'Night'`,elements:[{name:`literal`,value:`'Day'`},{name:`literal`,value:`'Night'`}]},description:``}}};var a={title:`Components/Card/OperatorCard`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{name:`Sato Kenji`,role:`Senior Technician`,avatarUrl:`https://i.pravatar.cc/150?u=sato`,shift:`Day`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[280px]`,children:(0,r.jsx)(e,{})})]},s={args:{name:`Tanaka Yumi`,role:`Line Manager`,shift:`Night`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[280px]`,children:(0,r.jsx)(e,{})})]},c={args:{name:`Alexander Maximilian von Hindenburg`,role:`External Quality Consultant`,shift:`Day`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[280px]`,children:(0,r.jsx)(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Sato Kenji',
    role: 'Senior Technician',
    avatarUrl: 'https://i.pravatar.cc/150?u=sato',
    shift: 'Day'
  },
  decorators: [Story => <div className="w-[280px]">
                <Story />
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Tanaka Yumi',
    role: 'Line Manager',
    shift: 'Night'
  },
  decorators: [Story => <div className="w-[280px]">
                <Story />
            </div>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Alexander Maximilian von Hindenburg',
    role: 'External Quality Consultant',
    shift: 'Day'
  },
  decorators: [Story => <div className="w-[280px]">
                <Story />
            </div>]
}`,...c.parameters?.docs?.source}}};var l=[`DayShift`,`NightShift`,`LongName`];export{o as DayShift,c as LongName,s as NightShift,l as __namedExportsOrder,a as default};