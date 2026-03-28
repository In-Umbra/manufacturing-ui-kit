import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({label:e,error:t,helperText:n,...i})=>(0,r.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[(0,r.jsx)(`label`,{className:`text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,children:e}),(0,r.jsxs)(`div`,{className:`relative`,children:[(0,r.jsx)(`input`,{...i,className:`
            w-full px-4 py-3 bg-white border-2 rounded-xl text-sm font-bold transition-all outline-none
            placeholder:text-slate-300
            ${t?`border-red-500 text-red-600 focus:ring-4 focus:ring-red-100`:`border-slate-200 text-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100`}
            disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
          `}),t&&(0,r.jsx)(`span`,{className:`absolute right-3 top-1/2 -translate-y-1/2 text-red-500`,children:`⚠️`})]}),(t||n)&&(0,r.jsx)(`p`,{className:`text-[10px] font-bold ml-1 ${t?`text-red-500`:`text-slate-400`}`,children:t||n})]});i.__docgenInfo={description:``,methods:[],displayName:`TextField`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``}}};var a={title:`Components/Input/TextField`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{label:`デバイス名`,placeholder:`例: SENSOR-01`,helperText:`管理用のデバイスIDを入力してください。`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[320px]`,children:(0,r.jsx)(e,{})})]},s={args:{label:`閾値設定`,defaultValue:`Invalid Value`,error:`数値で入力してください。`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[320px]`,children:(0,r.jsx)(e,{})})]},c={args:{label:`システムID`,value:`SYS-X-999`,disabled:!0},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[320px]`,children:(0,r.jsx)(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'デバイス名',
    placeholder: '例: SENSOR-01',
    helperText: '管理用のデバイスIDを入力してください。'
  },
  decorators: [Story => <div className="w-[320px]">\r
                <Story />\r
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: '閾値設定',
    defaultValue: 'Invalid Value',
    error: '数値で入力してください。'
  },
  decorators: [Story => <div className="w-[320px]">\r
                <Story />\r
            </div>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'システムID',
    value: 'SYS-X-999',
    disabled: true
  },
  decorators: [Story => <div className="w-[320px]">\r
                <Story />\r
            </div>]
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Error`,`Disabled`];export{o as Default,c as Disabled,s as Error,l as __namedExportsOrder,a as default};