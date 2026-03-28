import{s as e}from"./iframe-CN-2U1D8.js";import{t}from"./react-Y-6QNYsc.js";import{t as n}from"./jsx-runtime--jJlx6pC.js";e(t(),1);var r=n(),i=({title:e,value:t,unit:n,icon:i,description:a,trend:o,statusColor:s=`blue`,children:c})=>{let l={blue:`border-blue-500 text-blue-600 bg-blue-50/50`,green:`border-green-500 text-green-600 bg-green-50/50`,red:`border-red-500 text-red-600 bg-red-50/50`,amber:`border-amber-500 text-amber-600 bg-amber-50/50`,slate:`border-slate-500 text-slate-600 bg-slate-50/50`};return(0,r.jsxs)(`div`,{className:`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group`,children:[(0,r.jsx)(`div`,{className:`absolute left-0 top-0 bottom-0 w-1 ${l[s].split(` `)[0]}`}),(0,r.jsxs)(`div`,{className:`flex justify-between items-start mb-3`,children:[(0,r.jsx)(`span`,{className:`text-[10px] font-black text-slate-400 uppercase tracking-widest`,children:e}),i&&(0,r.jsx)(`div`,{className:`p-2 rounded-lg ${l[s]}`,children:i})]}),t!==void 0&&(0,r.jsxs)(`div`,{className:`flex items-baseline gap-1`,children:[(0,r.jsx)(`span`,{className:`text-2xl font-black text-slate-800 tracking-tight`,children:t}),n&&(0,r.jsx)(`span`,{className:`text-xs font-bold text-slate-400`,children:n})]}),c&&(0,r.jsx)(`div`,{className:`mt-4`,children:c}),(a||o)&&(0,r.jsxs)(`div`,{className:`mt-3 flex items-center gap-2`,children:[o&&(0,r.jsxs)(`span`,{className:`text-[10px] font-black px-1.5 py-0.5 rounded ${o.isPositive?`bg-green-100 text-green-700`:`bg-red-100 text-red-700`}`,children:[o.isPositive?`↑`:`↓`,` `,o.value]}),a&&(0,r.jsx)(`span`,{className:`text-[10px] font-bold text-slate-500`,children:a})]})]})};i.__docgenInfo={description:``,methods:[],displayName:`UniversalCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},unit:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},description:{required:!1,tsType:{name:`string`},description:``},trend:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
    value: string;
    isPositive: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`isPositive`,value:{name:`boolean`,required:!0}}]}},description:``},statusColor:{required:!1,tsType:{name:`union`,raw:`'blue' | 'green' | 'red' | 'amber' | 'slate'`,elements:[{name:`literal`,value:`'blue'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'red'`},{name:`literal`,value:`'amber'`},{name:`literal`,value:`'slate'`}]},description:``,defaultValue:{value:`'blue'`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}};var a={title:`Components/Card/UniversalCard`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{title:`設備稼働率`,value:`87.5`,unit:`%`,statusColor:`green`,description:`ラインAの本日平均稼働率`,trend:{value:`2.4%`,isPositive:!0}}},s={args:{title:`異常検知`,value:`3`,unit:`件`,statusColor:`red`,description:`未確認の警告メッセージ`,trend:{value:`1件増加`,isPositive:!1}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '設備稼働率',
    value: '87.5',
    unit: '%',
    statusColor: 'green',
    description: 'ラインAの本日平均稼働率',
    trend: {
      value: '2.4%',
      isPositive: true
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '異常検知',
    value: '3',
    unit: '件',
    statusColor: 'red',
    description: '未確認の警告メッセージ',
    trend: {
      value: '1件増加',
      isPositive: false
    }
  }
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`Alert`];export{s as Alert,o as Default,c as __namedExportsOrder,a as default};