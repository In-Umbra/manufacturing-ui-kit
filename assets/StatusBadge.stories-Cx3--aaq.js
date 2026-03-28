import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({level:e,text:t})=>(0,r.jsxs)(`span`,{className:`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${{info:`bg-blue-100 text-blue-700 border-blue-200`,warning:`bg-yellow-100 text-yellow-700 border-yellow-200`,critical:`bg-red-100 text-red-700 border-red-200 animate-pulse`}[e]}`,children:[(0,r.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full mr-1.5 ${e===`critical`?`bg-red-600`:e===`warning`?`bg-yellow-600`:`bg-blue-600`}`}),t]});i.__docgenInfo={description:``,methods:[],displayName:`StatusBadge`,props:{level:{required:!0,tsType:{name:`union`,raw:`'info' | 'warning' | 'critical'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'critical'`}]},description:``},text:{required:!0,tsType:{name:`string`},description:``}}};var a={title:`Components/Badge/StatusBadge`,component:i,tags:[`autodocs`],argTypes:{level:{control:`select`,options:[`info`,`warning`,`critical`],description:`重要度レベル（色とアニメーションが変化します）`},text:{control:`text`,description:`表示するテキスト`}},parameters:{layout:`centered`}},o={args:{level:`info`,text:`正常稼働中`}},s={args:{level:`warning`,text:`材料残量わずか`}},c={args:{level:`critical`,text:`緊急停止：過負荷`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'info',
    text: '正常稼働中'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'warning',
    text: '材料残量わずか'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'critical',
    text: '緊急停止：過負荷'
  }
}`,...c.parameters?.docs?.source}}};var l=[`Info`,`Warning`,`Critical`];export{c as Critical,o as Info,s as Warning,l as __namedExportsOrder,a as default};