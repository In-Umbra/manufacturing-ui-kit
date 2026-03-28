import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({message:e,type:t,onClose:n})=>(0,r.jsxs)(`div`,{className:`w-full py-2 px-4 flex items-center justify-between shadow-md ${{error:`bg-red-600 text-white`,warning:`bg-amber-400 text-amber-950`,info:`bg-blue-600 text-white`}[t]} transition-all`,children:[(0,r.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,r.jsx)(`span`,{className:`text-sm font-black uppercase tracking-widest`,children:t===`error`?`⚠️ Critical`:t===`warning`?`🔔 Attention`:`ℹ️ Info`}),(0,r.jsx)(`span`,{className:`text-xs font-bold border-l border-white/30 pl-2`,children:e})]}),n&&(0,r.jsx)(`button`,{onClick:n,className:`text-lg font-bold hover:opacity-70`,children:`×`})]});i.__docgenInfo={description:``,methods:[],displayName:`AlertBar`,props:{message:{required:!0,tsType:{name:`string`},description:``},type:{required:!0,tsType:{name:`union`,raw:`'error' | 'warning' | 'info'`,elements:[{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'info'`}]},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};var a={title:`Components/Feedback/AlertBar`,component:i,tags:[`autodocs`],parameters:{layout:`fullscreen`},argTypes:{onClose:{action:`closed`}}},o={args:{type:`error`,message:`サーバーとの通信が切断されました。自動再接続を試みています...`}},s={args:{type:`warning`,message:`部品の在庫が残りわずかです（残り: 12個）。補充を検討してください。`}},c={args:{type:`info`,message:`システムメンテナンスは本日 23:00 に終了予定です。`}},l={args:{type:`error`,message:`ライセンスの有効期限が切れました。管理者に連絡してください。`,onClose:void 0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'サーバーとの通信が切断されました。自動再接続を試みています...'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: '部品の在庫が残りわずかです（残り: 12個）。補充を検討してください。'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'システムメンテナンスは本日 23:00 に終了予定です。'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'ライセンスの有効期限が切れました。管理者に連絡してください。',
    onClose: undefined // ボタンを非表示に
  }
}`,...l.parameters?.docs?.source}}};var u=[`CriticalError`,`AttentionWarning`,`SystemInfo`,`PersistentAlert`];export{s as AttentionWarning,o as CriticalError,l as PersistentAlert,c as SystemInfo,u as __namedExportsOrder,a as default};