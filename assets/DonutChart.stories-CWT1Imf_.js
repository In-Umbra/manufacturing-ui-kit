import{s as e}from"./iframe-CN-2U1D8.js";import{t}from"./react-Y-6QNYsc.js";import{t as n}from"./jsx-runtime--jJlx6pC.js";e(t(),1);var r=n(),i=({title:e,data:t,centerLabel:n,centerValue:i})=>{let a=t.reduce((e,t)=>e+t.value,0),o=2*Math.PI*53,s=-90;return(0,r.jsxs)(`div`,{className:`bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center`,children:[(0,r.jsx)(`h3`,{className:`w-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5 text-center`,children:e}),(0,r.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center gap-6`,children:[(0,r.jsxs)(`div`,{className:`relative`,style:{width:120,height:120},children:[(0,r.jsxs)(`svg`,{viewBox:`0 0 120 120`,className:`w-full h-full`,children:[(0,r.jsx)(`circle`,{cx:120/2,cy:120/2,r:53,fill:`none`,className:`stroke-slate-100`,strokeWidth:14}),t.map((e,t)=>{if(a===0)return null;let n=e.value/a,i=`${o*n} ${o}`,c=s;s+=n*360;let l=e.color.includes(`-`);return(0,r.jsx)(`circle`,{cx:120/2,cy:120/2,r:53,fill:`none`,className:`${l?e.color.replace(`fill-`,`stroke-`):``} transition-all duration-700 ease-out`,style:l?{}:{stroke:e.color},strokeWidth:14,strokeDasharray:i,strokeDashoffset:0,strokeLinecap:`round`,transform:`rotate(${c} ${120/2} ${120/2})`},t)})]}),(0,r.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center text-center`,children:[i&&(0,r.jsx)(`span`,{className:`text-xl font-black text-slate-800 leading-none`,children:i}),n&&(0,r.jsx)(`span`,{className:`text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1`,children:n})]})]}),(0,r.jsx)(`div`,{className:`flex flex-row sm:flex-col flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-start`,children:t.map((e,t)=>{let n=a>0?(e.value/a*100).toFixed(1):0,i=e.color.includes(`-`);return(0,r.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,r.jsx)(`span`,{className:`w-2 h-2 rounded-full ${i?e.color.replace(`stroke-`,`bg-`).replace(`fill-`,`bg-`):``}`,style:i?{}:{backgroundColor:e.color}}),(0,r.jsx)(`span`,{className:`text-[10px] font-bold text-slate-600`,children:e.label}),(0,r.jsxs)(`span`,{className:`text-[10px] font-black ${i?e.color.replace(`stroke-`,`text-`).replace(`fill-`,`text-`):``}`,style:i?{}:{color:e.color},children:[n,`%`]})]},t)})})]})]})};i.__docgenInfo={description:``,methods:[],displayName:`DonutChart`,props:{title:{required:!0,tsType:{name:`string`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`ChartSegment`}],raw:`ChartSegment[]`},description:``},centerLabel:{required:!1,tsType:{name:`string`},description:``},centerValue:{required:!1,tsType:{name:`string`},description:``}}};var a={title:`Components/Chart/DonutChart`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{title:`稼働時間内訳`,centerLabel:`稼働率`,centerValue:`85%`,data:[{label:`稼働中`,value:85,color:`stroke-blue-500`},{label:`待機`,value:10,color:`stroke-slate-300`},{label:`停止`,value:5,color:`stroke-red-500`}]}},s={args:{title:`製品別 生産比率`,centerLabel:`合計`,centerValue:`1,240`,data:[{label:`製品 A`,value:450,color:`#6366f1`},{label:`製品 B`,value:380,color:`#f43f5e`},{label:`製品 C`,value:210,color:`#f97316`},{label:`製品 D`,value:200,color:`#10b981`}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '稼働時間内訳',
    centerLabel: '稼働率',
    centerValue: '85%',
    data: [{
      label: '稼働中',
      value: 85,
      color: 'stroke-blue-500'
    }, {
      label: '待機',
      value: 10,
      color: 'stroke-slate-300'
    }, {
      label: '停止',
      value: 5,
      color: 'stroke-red-500'
    }]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '製品別 生産比率',
    centerLabel: '合計',
    centerValue: '1,240',
    data: [{
      label: '製品 A',
      value: 450,
      color: '#6366f1'
    },
    // violet
    {
      label: '製品 B',
      value: 380,
      color: '#f43f5e'
    },
    // rose
    {
      label: '製品 C',
      value: 210,
      color: '#f97316'
    },
    // orange
    {
      label: '製品 D',
      value: 200,
      color: '#10b981'
    } // emerald
    ]
  }
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`ProductionMix`];export{o as Default,s as ProductionMix,c as __namedExportsOrder,a as default};