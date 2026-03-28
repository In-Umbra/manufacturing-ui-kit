import{s as e}from"./iframe-wxJWlUcg.js";import{t}from"./react-fQ_YxLGA.js";import{t as n}from"./jsx-runtime-ZfytAITw.js";e(t(),1);var r=n(),i=({title:e,data:t,height:n=200})=>{let i=Math.max(...t.map(e=>e.value),1),a=28*t.length;return(0,r.jsxs)(`div`,{className:`bg-white p-5 rounded-xl border border-slate-200 shadow-sm`,children:[(0,r.jsx)(`h3`,{className:`text-xs font-black text-slate-400 uppercase tracking-widest mb-4`,children:e}),(0,r.jsx)(`div`,{style:{height:`${n}px`},className:`w-full overflow-y-auto pr-2`,children:(0,r.jsx)(`svg`,{viewBox:`0 0 300 ${a}`,className:`w-full h-auto`,children:t.map((e,t)=>{let n=t*28,a=e.value/i*200;return(0,r.jsxs)(`g`,{className:`group`,children:[(0,r.jsx)(`text`,{x:60,y:n+12/2,textAnchor:`end`,dominantBaseline:`middle`,className:`text-[10px] fill-slate-500 font-bold`,children:e.label}),(0,r.jsx)(`rect`,{x:68,y:n,width:232,height:12,rx:2,className:`fill-slate-100`}),(0,r.jsx)(`rect`,{x:68,y:n,width:a,height:12,rx:2,className:`fill-blue-500 transition-all duration-500 ease-out`}),(0,r.jsx)(`text`,{x:68+a+6,y:n+12/2,dominantBaseline:`middle`,className:`text-[10px] fill-blue-700 font-black`,children:e.value.toLocaleString()})]},e.label)})})})]})};i.__docgenInfo={description:``,methods:[],displayName:`BarChart`,props:{title:{required:!0,tsType:{name:`string`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`ChartData`}],raw:`ChartData[]`},description:``},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}}}};var a={title:`Components/Chart/BarChart`,component:i,tags:[`autodocs`],argTypes:{height:{control:{type:`range`,min:100,max:800,step:50},description:`チャート表示エリアの高さ`}},parameters:{layout:`centered`}},o={args:{title:`ライン別 生産実績 (本日)`,height:250,data:[{label:`Line-A`,value:1240},{label:`Line-B`,value:980},{label:`Line-C`,value:1560},{label:`Line-D`,value:420},{label:`Line-E`,value:1100}]}},s={args:{title:`異常検知件数 (直近24時間)`,height:180,data:[{label:`過熱`,value:3},{label:`電圧低下`,value:12},{label:`通信断`,value:1}]}},c={args:{title:`製品別 在庫状況`,height:300,data:[{label:`P-001`,value:450},{label:`P-002`,value:120},{label:`P-003`,value:890},{label:`P-004`,value:300},{label:`P-005`,value:670},{label:`P-006`,value:50},{label:`P-007`,value:980},{label:`P-008`,value:410},{label:`P-009`,value:220},{label:`P-010`,value:750}]}},l={args:{title:`数値コントラスト確認`,height:200,data:[{label:`最大項目`,value:1e5},{label:`最小項目`,value:1},{label:`中間項目`,value:5e4}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'ライン別 生産実績 (本日)',
    height: 250,
    data: [{
      label: 'Line-A',
      value: 1240
    }, {
      label: 'Line-B',
      value: 980
    }, {
      label: 'Line-C',
      value: 1560
    }, {
      label: 'Line-D',
      value: 420
    }, {
      label: 'Line-E',
      value: 1100
    }]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '異常検知件数 (直近24時間)',
    height: 180,
    data: [{
      label: '過熱',
      value: 3
    }, {
      label: '電圧低下',
      value: 12
    }, {
      label: '通信断',
      value: 1
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: '製品別 在庫状況',
    height: 300,
    data: [{
      label: 'P-001',
      value: 450
    }, {
      label: 'P-002',
      value: 120
    }, {
      label: 'P-003',
      value: 890
    }, {
      label: 'P-004',
      value: 300
    }, {
      label: 'P-005',
      value: 670
    }, {
      label: 'P-006',
      value: 50
    }, {
      label: 'P-007',
      value: 980
    }, {
      label: 'P-008',
      value: 410
    }, {
      label: 'P-009',
      value: 220
    }, {
      label: 'P-010',
      value: 750
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: '数値コントラスト確認',
    height: 200,
    data: [{
      label: '最大項目',
      value: 100000
    }, {
      label: '最小項目',
      value: 1
    }, {
      label: '中間項目',
      value: 50000
    }]
  }
}`,...l.parameters?.docs?.source}}};var u=[`ProductionByLine`,`ErrorFrequency`,`ManyItems`,`ContrastData`];export{l as ContrastData,s as ErrorFrequency,c as ManyItems,o as ProductionByLine,u as __namedExportsOrder,a as default};