import{s as e}from"./iframe-CN-2U1D8.js";import{t}from"./react-Y-6QNYsc.js";import{t as n}from"./jsx-runtime--jJlx6pC.js";e(t(),1);var r=n(),i=({data:e,color:t=`blue`,height:n=40})=>{let i={blue:`bg-blue-100 group-hover:bg-blue-200`,green:`bg-green-100 group-hover:bg-green-200`,red:`bg-red-100 group-hover:bg-red-200`,amber:`bg-amber-100 group-hover:bg-amber-200`,slate:`bg-slate-100 group-hover:bg-slate-200`},a=e.length>40?`gap-0`:e.length>20?`gap-[1px]`:`gap-1`;return(0,r.jsx)(`div`,{style:{height:`${n}px`},className:`flex items-end ${a} px-0.5 group w-full`,children:e.map((e,n)=>(0,r.jsx)(`div`,{className:`flex-1 ${i[t]} rounded-t-[1px] transition-all duration-700 ease-out`,style:{height:`${Math.min(Math.max(e,5),100)}%`}},n))})};i.__docgenInfo={description:``,methods:[],displayName:`MiniSparkline`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},color:{required:!1,tsType:{name:`union`,raw:`'blue' | 'green' | 'red' | 'amber' | 'slate'`,elements:[{name:`literal`,value:`'blue'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'red'`},{name:`literal`,value:`'amber'`},{name:`literal`,value:`'slate'`}]},description:``,defaultValue:{value:`'blue'`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`40`,computed:!1}}}};var a={title:`Components/Chart/MiniSparkline`,component:i,tags:[`autodocs`],argTypes:{},parameters:{layout:`centered`},decorators:[e=>(0,r.jsxs)(`div`,{className:`w-40 border p-3 rounded-xl bg-white shadow-sm flex flex-col gap-2`,children:[(0,r.jsx)(`p`,{className:`text-[10px] text-slate-400 font-bold uppercase tracking-widest`,children:`Weekly Trend`}),(0,r.jsx)(e,{})]})]},o={args:{data:[20,45,30,60,80,55,90],color:`blue`,height:40}},s={args:{data:[70,75,80,85,90,95,100],color:`green`,height:30}},c={args:{data:[10,20,40,30,70,90,95],color:`red`,height:40}},l={args:{data:[30,45,60,55,40,35,50,65,80,75,90,85,70,60,50,45,40,35,30,40,50,60,70,80],color:`slate`,height:50}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: [20, 45, 30, 60, 80, 55, 90],
    color: 'blue',
    height: 40
  }
  // ★ 修正：単体 decorators は削除
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: [70, 75, 80, 85, 90, 95, 100],
    color: 'green',
    height: 30
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: [10, 20, 40, 30, 70, 90, 95],
    color: 'red',
    height: 40
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: staticData,
    color: 'slate',
    height: 50
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Success`,`Danger`,`HighDensity`];export{c as Danger,o as Default,l as HighDensity,s as Success,u as __namedExportsOrder,a as default};