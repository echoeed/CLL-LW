import{d as k,n as s,ae as B,o as F,c as P,b as o,a as e,w as a,u as b,e as u,s as E,r as i,ad as W,x as q,I,af as N,_ as V}from"./index-DWntANb7.js";import{i as y,L as O}from"./index-CrL2ELlk.js";const G={class:"section-container"},R={class:"card-header"},H={class:"card-content"},M={class:"chart-container mt-4"},j={class:"card-header"},J={class:"card-content"},K={class:"chart-container mt-4"},Q={class:"card-header"},U={class:"card-content"},X={class:"card-header"},Y={class:"card-content"},Z={class:"cost-summary"},$=k({__name:"Section1",setup(ee){const r=s([{date:"2023-12-01",cod:380,bod:180,ss:220,tn:45,tp:5.5,ph:7.2},{date:"2023-12-02",cod:360,bod:170,ss:200,tn:42,tp:5.2,ph:7.3},{date:"2023-12-03",cod:400,bod:190,ss:240,tn:48,tp:5.8,ph:7.1},{date:"2023-12-04",cod:370,bod:175,ss:210,tn:44,tp:5.4,ph:7.2},{date:"2023-12-05",cod:390,bod:185,ss:230,tn:46,tp:5.6,ph:7.3}]),c=s([{parameter:"COD",influent:380,effluent:38,efficiency:90,standard:50,status:"达标"},{parameter:"BOD5",influent:180,effluent:12,efficiency:93,standard:10,status:"达标"},{parameter:"SS",influent:220,effluent:15,efficiency:93,standard:10,status:"达标"},{parameter:"TN",influent:45,effluent:12,efficiency:73,standard:15,status:"达标"},{parameter:"TP",influent:5.5,effluent:.4,efficiency:93,standard:.5,status:"达标"}]),h=s([{equipment:"鼓风机",power:75,runningTime:24,dailyConsumption:1800,monthlyConsumption:54e3},{equipment:"水泵",power:45,runningTime:20,dailyConsumption:900,monthlyConsumption:27e3},{equipment:"搅拌机",power:22,runningTime:24,dailyConsumption:528,monthlyConsumption:15840},{equipment:"污泥脱水机",power:15,runningTime:8,dailyConsumption:120,monthlyConsumption:3600},{equipment:"其他设备",power:30,runningTime:12,dailyConsumption:360,monthlyConsumption:10800}]),w=s(null),x=s(null),C=s(null),S=s(null),L=s(null);return B(()=>{const _=y(w.value);_.setOption({title:{text:"进水水质趋势",textStyle:{fontSize:14}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["COD","BOD5","SS","TN","TP"],bottom:0},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:r.value.map(l=>l.date),axisLabel:{rotate:15}},yAxis:{type:"value",name:"浓度 (mg/L)",nameLocation:"middle",nameGap:40},series:[{name:"COD",type:"line",smooth:!0,data:r.value.map(l=>l.cod),itemStyle:{color:"#FF6B6B"}},{name:"BOD5",type:"line",smooth:!0,data:r.value.map(l=>l.bod),itemStyle:{color:"#4ECDC4"}},{name:"SS",type:"line",smooth:!0,data:r.value.map(l=>l.ss),itemStyle:{color:"#45B7D1"}},{name:"TN",type:"line",smooth:!0,data:r.value.map(l=>l.tn),itemStyle:{color:"#96CEB4"}},{name:"TP",type:"line",smooth:!0,data:r.value.map(l=>l.tp),itemStyle:{color:"#D4A5A5"}}]});const t=y(x.value);t.setOption({title:{text:"污染物去除效率",textStyle:{fontSize:14}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:["进水","出水","去除率"],bottom:0},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:c.value.map(l=>l.parameter),axisLabel:{interval:0}},yAxis:[{type:"value",name:"浓度 (mg/L)",position:"left",axisLine:{show:!0},axisLabel:{formatter:"{value}"}},{type:"value",name:"去除率 (%)",max:100,position:"right",axisLine:{show:!0},axisLabel:{formatter:"{value}%"}}],series:[{name:"进水",type:"bar",data:c.value.map(l=>l.influent),itemStyle:{color:"#FF9F43"}},{name:"出水",type:"bar",data:c.value.map(l=>l.effluent),itemStyle:{color:"#28C76F"}},{name:"去除率",type:"line",yAxisIndex:1,data:c.value.map(l=>l.efficiency),itemStyle:{color:"#5A8DEE"},smooth:!0,lineStyle:{width:3},symbol:"circle",symbolSize:8}]});const d=y(C.value);d.setOption({title:{text:"设备能耗分布",textStyle:{fontSize:14}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:h.value.map(l=>l.equipment),axisLabel:{interval:0,rotate:15}},yAxis:{type:"value",name:"kWh/月"},series:[{type:"bar",data:h.value.map(l=>l.monthlyConsumption),itemStyle:{color:new O(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new O(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}}}]});const n=y(S.value);n.setOption({title:{text:"能耗占比",textStyle:{fontSize:14}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} kWh ({d}%)"},legend:{orient:"vertical",right:10,top:"center"},series:[{name:"月度能耗",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"14",fontWeight:"bold"}},labelLine:{show:!1},data:h.value.map(l=>({name:l.equipment,value:l.monthlyConsumption}))}]});const m=y(L.value);m.setOption({title:{text:"运行成本构成",textStyle:{fontSize:14}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}元 ({d}%)"},legend:{orient:"vertical",right:10,top:"center"},series:[{name:"月度成本",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"14",fontWeight:"bold"}},labelLine:{show:!1},data:[{name:"电费支出",value:45e3,itemStyle:{color:"#FF9F43"}},{name:"药剂费用",value:15e3,itemStyle:{color:"#28C76F"}},{name:"人工成本",value:3e4,itemStyle:{color:"#5A8DEE"}},{name:"维护费用",value:1e4,itemStyle:{color:"#EA5455"}},{name:"其他支出",value:5e3,itemStyle:{color:"#A8A8A8"}}]}]}),window.addEventListener("resize",()=>{_.resize(),t.resize(),d.resize(),n.resize(),m.resize()})}),(_,t)=>{const d=i("el-icon"),n=i("el-table-column"),m=i("el-table"),l=i("el-card"),A=i("el-tag"),p=i("el-col"),v=i("el-row"),f=i("el-descriptions-item"),T=i("el-descriptions"),z=i("el-divider"),g=i("el-statistic");return F(),P("div",G,[t[15]||(t[15]=o("h2",{class:"section-title"},"第7章 模拟运行数据分析",-1)),e(l,{class:"mb-4"},{header:a(()=>[o("div",R,[e(d,null,{default:a(()=>[e(b(W))]),_:1}),t[0]||(t[0]=o("span",{class:"ml-2"},"7.1 进水水质模拟数据",-1))])]),default:a(()=>[o("div",H,[e(m,{data:r.value,border:"",style:{width:"100%"}},{default:a(()=>[e(n,{prop:"date",label:"日期",width:"120"}),e(n,{prop:"cod",label:"COD (mg/L)",width:"120"}),e(n,{prop:"bod",label:"BOD5 (mg/L)",width:"120"}),e(n,{prop:"ss",label:"SS (mg/L)",width:"120"}),e(n,{prop:"tn",label:"TN (mg/L)",width:"120"}),e(n,{prop:"tp",label:"TP (mg/L)",width:"120"}),e(n,{prop:"ph",label:"pH",width:"100"})]),_:1},8,["data"]),o("div",M,[o("div",{ref_key:"influentChart",ref:w,style:{width:"100%",height:"400px"}},null,512)])])]),_:1}),e(l,{class:"mb-4"},{header:a(()=>[o("div",j,[e(d,null,{default:a(()=>[e(b(q))]),_:1}),t[1]||(t[1]=o("span",{class:"ml-2"},"7.2 处理效率分析",-1))])]),default:a(()=>[o("div",J,[e(m,{data:c.value,border:"",style:{width:"100%"}},{default:a(()=>[e(n,{prop:"parameter",label:"参数",width:"150"}),e(n,{prop:"influent",label:"进水 (mg/L)",width:"120"}),e(n,{prop:"effluent",label:"出水 (mg/L)",width:"120"}),e(n,{prop:"efficiency",label:"去除率 (%)",width:"120"}),e(n,{prop:"standard",label:"排放标准 (mg/L)",width:"150"}),e(n,{prop:"status",label:"达标状态"},{default:a(D=>[e(A,{type:D.row.status==="达标"?"success":"danger"},{default:a(()=>[u(E(D.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:1},8,["data"]),o("div",K,[o("div",{ref_key:"efficiencyChart",ref:x,style:{width:"100%",height:"400px"}},null,512)])])]),_:1}),e(l,{class:"mb-4"},{header:a(()=>[o("div",Q,[e(d,null,{default:a(()=>[e(b(I))]),_:1}),t[2]||(t[2]=o("span",{class:"ml-2"},"7.3 能耗分析",-1))])]),default:a(()=>[o("div",U,[e(v,{gutter:20},{default:a(()=>[e(p,{span:12},{default:a(()=>[t[3]||(t[3]=o("h4",null,"月度能耗统计",-1)),o("div",{ref_key:"energyChart",ref:C,style:{width:"100%",height:"300px"}},null,512)]),_:1}),e(p,{span:12},{default:a(()=>[t[4]||(t[4]=o("h4",null,"能耗分布",-1)),o("div",{ref_key:"energyPieChart",ref:S,style:{width:"100%",height:"300px"}},null,512)]),_:1})]),_:1}),e(m,{class:"mt-4",data:h.value,border:"",style:{width:"100%"}},{default:a(()=>[e(n,{prop:"equipment",label:"设备类型",width:"150"}),e(n,{prop:"power",label:"功率 (kW)",width:"120"}),e(n,{prop:"runningTime",label:"运行时间 (h/d)",width:"150"}),e(n,{prop:"dailyConsumption",label:"日耗电量 (kWh/d)",width:"150"}),e(n,{prop:"monthlyConsumption",label:"月耗电量 (kWh/m)",width:"150"})]),_:1},8,["data"])])]),_:1}),e(l,{class:"mb-4"},{header:a(()=>[o("div",X,[e(d,null,{default:a(()=>[e(b(N))]),_:1}),t[5]||(t[5]=o("span",{class:"ml-2"},"7.4 运行成本分析",-1))])]),default:a(()=>[o("div",Y,[e(v,{gutter:20},{default:a(()=>[e(p,{span:12},{default:a(()=>[t[6]||(t[6]=o("h4",null,"月度成本构成",-1)),o("div",{ref_key:"costChart",ref:L,style:{width:"100%",height:"300px"}},null,512)]),_:1}),e(p,{span:12},{default:a(()=>[o("div",Z,[t[13]||(t[13]=o("h4",null,"成本汇总",-1)),e(T,{column:1,border:""},{default:a(()=>[e(f,{label:"电费支出"},{default:a(()=>t[7]||(t[7]=[u("¥ 45,000 /月")])),_:1}),e(f,{label:"药剂费用"},{default:a(()=>t[8]||(t[8]=[u("¥ 15,000 /月")])),_:1}),e(f,{label:"人工成本"},{default:a(()=>t[9]||(t[9]=[u("¥ 30,000 /月")])),_:1}),e(f,{label:"维护费用"},{default:a(()=>t[10]||(t[10]=[u("¥ 10,000 /月")])),_:1}),e(f,{label:"其他支出"},{default:a(()=>t[11]||(t[11]=[u("¥ 5,000 /月")])),_:1}),e(f,{label:"总运行成本"},{default:a(()=>t[12]||(t[12]=[o("span",{class:"total-cost"},"¥ 105,000 /月",-1)])),_:1})]),_:1})])]),_:1})]),_:1}),e(z,null,{default:a(()=>t[14]||(t[14]=[u("单位处理成本")])),_:1}),e(v,{gutter:20},{default:a(()=>[e(p,{span:8},{default:a(()=>[e(g,{title:"吨水处理成本",value:"0.35",suffix:"元/吨"})]),_:1}),e(p,{span:8},{default:a(()=>[e(g,{title:"COD去除成本",value:"1.25",suffix:"元/kg"})]),_:1}),e(p,{span:8},{default:a(()=>[e(g,{title:"污泥处理成本",value:"180",suffix:"元/吨"})]),_:1})]),_:1})])]),_:1})])}}}),le=V($,[["__scopeId","data-v-d6a3bb3c"]]);export{le as default};