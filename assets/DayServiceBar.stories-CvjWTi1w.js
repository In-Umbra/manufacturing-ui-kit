import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({slots:e})=>(0,r.jsxs)(`div`,{className:`space-y-1`,children:[(0,r.jsxs)(`div`,{className:`flex justify-between text-[8px] font-bold text-gray-400 uppercase`,children:[(0,r.jsx)(`span`,{children:`08:00`}),(0,r.jsx)(`span`,{children:`12:00`}),(0,r.jsx)(`span`,{children:`17:00`})]}),(0,r.jsx)(`div`,{className:`h-3 w-full flex rounded-sm overflow-hidden border border-gray-200 bg-gray-100`,children:e.map((e,t)=>{let n=e.status===`running`?`bg-green-500`:e.status===`stopped`?`bg-red-500`:`bg-yellow-400`;return(0,r.jsx)(`div`,{style:{width:`${e.width}%`},className:`${n} h-full border-r border-white/20 last:border-0`},t)})})]});i.__docgenInfo={description:``,methods:[],displayName:`DayServiceBar`,props:{slots:{required:!0,tsType:{name:`Array`,elements:[{name:`TimeSlot`}],raw:`TimeSlot[]`},description:``}}};var a={title:`Components/Chart/DayServiceBar`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},o={args:{slots:[{status:`running`,width:30},{status:`stopped`,width:10},{status:`running`,width:25},{status:`idle`,width:15},{status:`running`,width:20}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[400px]`,children:(0,r.jsx)(e,{})})]},s={args:{slots:[{status:`running`,width:10},{status:`stopped`,width:20},{status:`running`,width:10},{status:`stopped`,width:30},{status:`running`,width:30}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[400px]`,children:(0,r.jsx)(e,{})})]},c={args:{slots:[{status:`running`,width:95},{status:`idle`,width:5}]},decorators:[e=>(0,r.jsx)(`div`,{className:`w-[400px]`,children:(0,r.jsx)(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    slots: [{
      status: 'running',
      width: 30
    },
    // 08:00 -
    {
      status: 'stopped',
      width: 10
    },
    // トラブル停止
    {
      status: 'running',
      width: 25
    },
    // 12:00前後
    {
      status: 'idle',
      width: 15
    },
    // 調整中
    {
      status: 'running',
      width: 20
    } // - 17:00
    ]
  },
  decorators: [Story => <div className="w-[400px]">\r
                <Story />\r
            </div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    slots: [{
      status: 'running',
      width: 10
    }, {
      status: 'stopped',
      width: 20
    }, {
      status: 'running',
      width: 10
    }, {
      status: 'stopped',
      width: 30
    }, {
      status: 'running',
      width: 30
    }]
  },
  decorators: [Story => <div className="w-[400px]">\r
                <Story />\r
            </div>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    slots: [{
      status: 'running',
      width: 95
    }, {
      status: 'idle',
      width: 5
    }]
  },
  decorators: [Story => <div className="w-[400px]">\r
                <Story />\r
            </div>]
}`,...c.parameters?.docs?.source}}};var l=[`NormalDay`,`HighAlertDay`,`StableDay`];export{s as HighAlertDay,o as NormalDay,c as StableDay,l as __namedExportsOrder,a as default};