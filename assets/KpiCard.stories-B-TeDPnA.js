import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({label:e,value:t,unit:n,trend:i})=>(0,r.jsxs)(`div`,{className:`bg-white p-4 rounded-lg border border-gray-200 shadow-sm`,children:[(0,r.jsx)(`p`,{className:`text-[10px] font-bold text-gray-400 uppercase tracking-wider`,children:e}),(0,r.jsxs)(`div`,{className:`flex items-baseline gap-1 mt-1`,children:[(0,r.jsx)(`span`,{className:`text-2xl font-black text-gray-900`,children:t}),n&&(0,r.jsx)(`span`,{className:`text-xs font-bold text-gray-400`,children:n})]}),i&&(0,r.jsxs)(`div`,{className:`mt-2 text-[10px] font-bold flex items-center ${i.isUp?`text-green-600`:`text-red-600`}`,children:[i.isUp?`▲`:`▼`,` `,i.value,`%`,(0,r.jsx)(`span`,{className:`text-gray-400 ml-1 font-normal text-[9px]`,children:`vs yesterday`})]})]});i.__docgenInfo={description:``,methods:[],displayName:`KpiCard`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},unit:{required:!1,tsType:{name:`string`},description:``},trend:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{\r
    value: number;\r
    isUp: boolean;\r
}`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`isUp`,value:{name:`boolean`,required:!0}}]}},description:``}}};var a={title:`Components/Card/KpiCard`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{label:`Production Volume`,value:`12,480`,unit:`pcs`,trend:{value:12.5,isUp:!0}},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[240px] bg-gray-50 p-6`,children:(0,r.jsx)(e,{})})]},s={args:{label:`Defect Rate`,value:`0.42`,unit:`%`,trend:{value:2.1,isUp:!1}},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[240px] bg-gray-50 p-6`,children:(0,r.jsx)(e,{})})]},c={args:{label:`Active Operators`,value:`42`,unit:`persons`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[240px] bg-gray-50 p-6`,children:(0,r.jsx)(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Production Volume',
    value: '12,480',
    unit: 'pcs',
    trend: {
      value: 12.5,
      isUp: true
    }
  },
  decorators: [Story => <div className="w-[240px] bg-gray-50 p-6">\r
                <Story />\r
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Defect Rate',
    value: '0.42',
    unit: '%',
    trend: {
      value: 2.1,
      isUp: false
    }
  },
  decorators: [Story => <div className="w-[240px] bg-gray-50 p-6">\r
                <Story />\r
            </div>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Active Operators',
    value: '42',
    unit: 'persons'
  },
  decorators: [Story => <div className="w-[240px] bg-gray-50 p-6">\r
                <Story />\r
            </div>]
}`,...c.parameters?.docs?.source}}};var l=[`UpwardTrend`,`DownwardTrend`,`Simple`];export{s as DownwardTrend,c as Simple,o as UpwardTrend,l as __namedExportsOrder,a as default};