import{s as e}from"./iframe-CN-2U1D8.js";import{t}from"./react-Y-6QNYsc.js";import{t as n}from"./jsx-runtime--jJlx6pC.js";var r=e(t(),1),i=n(),a=({label:e,isEnabled:t,onChange:n})=>(0,i.jsxs)(`div`,{className:`flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 min-w-[200px] w-full shadow-sm`,children:[(0,i.jsx)(`span`,{className:`text-sm font-black text-slate-700 tracking-tight`,children:e}),(0,i.jsx)(`button`,{onClick:()=>n(!t),className:`w-12 h-6 rounded-full relative transition-colors duration-200 focus:outline-none ${t?`bg-green-500`:`bg-slate-300`}`,children:(0,i.jsx)(`div`,{className:`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm ${t?`right-1`:`left-1`}`})})]});a.__docgenInfo={description:``,methods:[],displayName:`DeviceSwitch`,props:{label:{required:!0,tsType:{name:`string`},description:``},isEnabled:{required:!0,tsType:{name:`boolean`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(val: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`val`}],return:{name:`void`}}},description:``}}};var o={title:`Components/Action/DeviceSwitch`,component:a,tags:[`autodocs`],args:{onChange:e=>console.log(`Toggled:`,e)},argTypes:{isEnabled:{control:`boolean`},onChange:{action:`toggled`}},parameters:{layout:`centered`}},s={args:{label:`メインパワー（操作可能）`,isEnabled:!1},render:e=>{let[t,n]=(0,r.useState)(e.isEnabled);return(0,i.jsx)(a,{...e,isEnabled:t,onChange:t=>{n(t),e.onChange(t)}})}},c={args:{label:`照明システム`,isEnabled:!0}},l={args:{label:`非常用アラート`,isEnabled:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'メインパワー（操作可能）',
    isEnabled: false
  },
  render: args => {
    const [enabled, setEnabled] = useState(args.isEnabled);
    return <DeviceSwitch {...args} isEnabled={enabled} onChange={val => {
      setEnabled(val);
      args.onChange(val);
    }} />;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: '照明システム',
    isEnabled: true
  }
}`,...c.parameters?.docs?.source},description:{story:`2. 有効（ON）状態`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: '非常用アラート',
    isEnabled: false
  }
}`,...l.parameters?.docs?.source},description:{story:`3. 無効（OFF）状態`,...l.parameters?.docs?.description}}};var u=[`Interactive`,`Enabled`,`Disabled`];export{l as Disabled,c as Enabled,s as Interactive,u as __namedExportsOrder,o as default};