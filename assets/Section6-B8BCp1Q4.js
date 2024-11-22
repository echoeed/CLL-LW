import{d as w,n as p,o as L,c as C,b as e,a as l,w as o,u,e as r,r as n,L as y,I as k,_ as x}from"./index-DWntANb7.js";const P={class:"section-container"},D={class:"card-header"},T={class:"card-content"},V={class:"card-header"},X={class:"card-content"},q=w({__name:"Section6",setup(A){const b=p([{type:"初次沉淀池",settlingTime:"0.5~2.0",surfaceLoad:"1.5~4.5",sludgePerPerson:"16~36",waterContent:"95~97",solidLoad:"—"},{type:"二次沉淀池(生膜法后)",settlingTime:"1.5~4.0",surfaceLoad:"1.0~2.0",sludgePerPerson:"10~26",waterContent:"96~98",solidLoad:"≤150"},{type:"二次沉淀池(活性污泥法后)",settlingTime:"1.5~4.0",surfaceLoad:"0.6~1.5",sludgePerPerson:"12~32",waterContent:"99.2~99.6",solidLoad:"≤150"}]),c=p([{area:1388.89,flow:1.74,load:1.5,count:3,diameter:42.05}]),f=p([{actualArea:1452.2,diameter:43,flow:1.74,count:3,actualLoad:1.43}]),v=p([{depth:6,time:4,load:1.5,ratio:7.17}]),g=p([{concentration:4e3,returnConcentration:12e3,returnRatio:.5,interval:2,poolCount:3,maxFlow:15e4,volume:3125}]);return(F,a)=>{const m=n("el-icon"),t=n("el-table-column"),d=n("el-table"),s=n("el-descriptions-item"),_=n("el-descriptions"),i=n("el-card");return L(),C("div",P,[a[19]||(a[19]=e("h2",{class:"section-title"},"4.6 辐流沉淀池（二沉池）",-1)),l(i,{class:"mb-4"},{header:o(()=>[e("div",D,[l(m,null,{default:o(()=>[l(u(y))]),_:1}),a[0]||(a[0]=e("span",{class:"ml-2"},"4.6.1 设计原则及参数",-1))])]),default:o(()=>[e("div",T,[a[7]||(a[7]=e("h4",null,"1、沉淀池的设计数据宜按下表的规定取值",-1)),l(d,{class:"mb-4",data:b.value,border:"",style:{width:"100%"}},{default:o(()=>[l(t,{prop:"type",label:"沉淀池类型",width:"180"}),l(t,{prop:"settlingTime",label:"沉淀时间 h"}),l(t,{prop:"surfaceLoad",label:"表面水力负荷 m³/(m²·h)"}),l(t,{prop:"sludgePerPerson",label:"每人每日污泥量(g/人·d)"}),l(t,{prop:"waterContent",label:"污泥含水率%"}),l(t,{prop:"solidLoad",label:"固体负荷 kg/(m²·d)"})]),_:1},8,["data"]),l(_,{column:1,border:""},{default:o(()=>[l(s,{label:"超高要求"},{default:o(()=>a[1]||(a[1]=[r("不应小于 0.3m")])),_:1}),l(s,{label:"有效水深"},{default:o(()=>a[2]||(a[2]=[r("宜采用 2.0~4.0m")])),_:1}),l(s,{label:"污泥斗排泥"},{default:o(()=>a[3]||(a[3]=[r("每个污泥斗均应设单独的闸阀和排泥管")])),_:1}),l(s,{label:"污泥斗倾角"},{default:o(()=>a[4]||(a[4]=[r("方斗宜为 60°，圆斗宜为 55°")])),_:1}),l(s,{label:"污泥区容积"},{default:o(()=>a[5]||(a[5]=[r("活性污泥法：不大于2h的污泥量，需连续排泥；生物膜法：宜按4h的污泥量")])),_:1}),l(s,{label:"排泥管直径"},{default:o(()=>a[6]||(a[6]=[r("不应小于 200mm")])),_:1})]),_:1})])]),_:1}),l(i,{class:"mb-4"},{header:o(()=>[e("div",V,[l(m,null,{default:o(()=>[l(u(k))]),_:1}),a[8]||(a[8]=e("span",{class:"ml-2"},"4.6.2 沉淀池尺寸计算",-1))])]),default:o(()=>[e("div",X,[a[9]||(a[9]=e("h4",null,"（1）沉淀池表面积",-1)),a[10]||(a[10]=e("div",{class:"formula-block"},[e("div",{class:"formula"},"F = Q/(nq)"),e("div",{class:"formula-desc"},[e("p",null,"Q — 污水最大时流量，m³/s"),e("p",null,"q — 表面负荷，取 1.5m³/m²·h"),e("p",null,"n — 沉淀池个数，取 3 组")])],-1)),l(d,{class:"mb-4",data:c.value,border:"",style:{width:"100%"}},{default:o(()=>[l(t,{prop:"area",label:"沉淀池表面积(m²)"}),l(t,{prop:"flow",label:"污水最大时流量(m³/s)"}),l(t,{prop:"load",label:"表面负荷(m³/m²·h)"}),l(t,{prop:"count",label:"沉淀池个数"}),l(t,{prop:"diameter",label:"池子直径(m)"})]),_:1},8,["data"]),a[11]||(a[11]=e("h4",{class:"mt-4"},"（2）实际水面面积",-1)),a[12]||(a[12]=e("div",{class:"formula-block"},[e("div",{class:"formula"},"F' = πD²/4"),e("div",{class:"formula-desc"},[e("p",null,"D — 沉淀池直径，m")])],-1)),l(d,{class:"mb-4",data:f.value,border:"",style:{width:"100%"}},{default:o(()=>[l(t,{prop:"actualArea",label:"实际水面面积(m²)"}),l(t,{prop:"diameter",label:"池子直径(m)"}),l(t,{prop:"flow",label:"污水最大时流量(m³/s)"}),l(t,{prop:"count",label:"池子数"}),l(t,{prop:"actualLoad",label:"实际负荷"})]),_:1},8,["data"]),a[13]||(a[13]=e("h4",{class:"mt-4"},"（3）沉淀池有效水深",-1)),a[14]||(a[14]=e("div",{class:"formula-block"},[e("div",{class:"formula"},"h₁ = qt"),e("div",{class:"formula-desc"},[e("p",null,"t — 沉淀时间，取 4h"),e("p",null,"q — 表面负荷，m³/m²·h")])],-1)),l(d,{class:"mb-4",data:v.value,border:"",style:{width:"100%"}},{default:o(()=>[l(t,{prop:"depth",label:"有效水深(m)"}),l(t,{prop:"time",label:"沉淀时间(h)"}),l(t,{prop:"load",label:"表面负荷(m³/m²·h)"}),l(t,{prop:"ratio",label:"径深比"})]),_:1},8,["data"]),a[15]||(a[15]=e("h4",{class:"mt-4"},"（4）污泥部分所需容积",-1)),a[16]||(a[16]=e("div",{class:"formula-block"},[e("div",{class:"formula"},"V₁ = ((1+R)QXT)/(2(X+Xr)n)"),e("div",{class:"formula-desc"},[e("p",null,"R — 回流比，取值 60%"),e("p",null,"X — 污泥浓度，取值 4000mg/L"),e("p",null,"Xr — 回流污泥浓度，mg/L"),e("p",null,"T — 两次排泥的时间间隔，取 2h"),e("p",null,"n — 沉淀池个数，3 组")])],-1)),l(d,{class:"mb-4",data:g.value,border:"",style:{width:"100%"}},{default:o(()=>[l(t,{prop:"concentration",label:"污泥浓度(mg/L)"}),l(t,{prop:"returnConcentration",label:"污泥回流浓度(mg/L)"}),l(t,{prop:"returnRatio",label:"回流比"}),l(t,{prop:"interval",label:"时间间隔(h)"}),l(t,{prop:"poolCount",label:"池子数"}),l(t,{prop:"maxFlow",label:"污水最大流量(m³/d)"}),l(t,{prop:"volume",label:"容积(m³)"})]),_:1},8,["data"]),a[17]||(a[17]=e("h4",{class:"mt-4"},"二沉池结构示意图",-1)),a[18]||(a[18]=e("div",{class:"technical-drawing"},[e("img",{src:"/src/assets/images/chapter4/radial-flow-tank.svg",alt:"二沉池结构示意图"}),e("div",{class:"drawing-description text-center"},"图4-6 二沉池结构示意图")],-1))])]),_:1})])}}}),h=x(q,[["__scopeId","data-v-e3cd0b3f"]]);export{h as default};
