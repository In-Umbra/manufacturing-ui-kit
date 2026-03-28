import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({label:e,options:t,error:n,helperText:i,...a})=>(0,r.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[(0,r.jsx)(`label`,{className:`text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,children:e}),(0,r.jsxs)(`div`,{className:`relative`,children:[(0,r.jsx)(`select`,{...a,className:`
                        w-full py-3 pl-4 pr-10 bg-white border-2 rounded-xl text-sm font-bold transition-all outline-none appearance-none cursor-pointer truncate
                        ${n?`border-red-500 text-red-600 focus:ring-4 focus:ring-red-100`:`border-slate-200 text-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100`}
                        disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
                    `,children:t.map(e=>(0,r.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,r.jsx)(`div`,{className:`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400`,children:(0,r.jsx)(`svg`,{className:`w-4 h-4 fill-current`,viewBox:`0 0 20 20`,children:(0,r.jsx)(`path`,{d:`M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z`})})})]}),(n||i)&&(0,r.jsx)(`p`,{className:`text-[10px] font-bold ml-1 ${n?`text-red-500`:`text-slate-400`}`,children:n||i})]});i.__docgenInfo={description:``,methods:[],displayName:`SelectBox`,props:{label:{required:!0,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`Option`}],raw:`Option[]`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``}}};var a={title:`Components/Input/SelectBox`,component:i,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{onChange:{action:`changed`}}},o=[{value:`factory-1`,label:`第1工場`},{value:`factory-2`,label:`第2工場`},{value:`factory-3`,label:`第3工場`}],s={args:{label:`対象エリアを選択`,options:o,helperText:`データを表示するエリアを選択してください。`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[220px]`,children:(0,r.jsx)(e,{})})]},c={args:{label:`ライン番号`,options:[{value:``,label:`選択してください`},...o],error:`ラインの選択は必須です。`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[320px]`,children:(0,r.jsx)(e,{})})]},l={args:{label:`権限設定`,options:[{value:`admin`,label:`管理者`}],disabled:!0,helperText:`この設定は変更できません。`},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[320px]`,children:(0,r.jsx)(e,{})})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: '対象エリアを選択',
    options: commonOptions,
    helperText: 'データを表示するエリアを選択してください。'
  },
  decorators: [Story => <div className="w-[220px]">\r
                <Story />\r
            </div>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'ライン番号',
    options: [{
      value: '',
      label: '選択してください'
    }, ...commonOptions],
    error: 'ラインの選択は必須です。'
  },
  decorators: [Story => <div className="w-[320px]">\r
                <Story />\r
            </div>]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: '権限設定',
    options: [{
      value: 'admin',
      label: '管理者'
    }],
    disabled: true,
    helperText: 'この設定は変更できません。'
  },
  decorators: [Story => <div className="w-[320px]">\r
                <Story />\r
            </div>]
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Error`,`Disabled`];export{s as Default,l as Disabled,c as Error,u as __namedExportsOrder,a as default};