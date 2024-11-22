import{d as f,n as m,o as x,c as h,b as l,a,w as e,e as o,r,_ as k}from"./index-DWntANb7.js";const _={class:"section-container"},V={class:"card-content"},g={class:"card-content"},w={class:"card-content"},y={class:"card-content"},C={class:"card-content"},q={class:"card-content"},L=f({__name:"Section4",setup(D){const u=m([{poolCount:3,qmax:.58,time:2,volume:69.44}]),p=m([{qmax:.58,velocity:.1,area:5.79}]),i=m([{area:5.79,depth:2,totalWidth:2.89,poolCount:2,singleWidth:1.45}]),c=m([{volume:69.44,area:5.79,length:12}]),b=m([{airPerM3:.2,qmax:.58,airSupply:416.67}]),v=m([{avgFlow:1e5,sandContent:30,cleanTime:2,totalVolume:6,poolCount:3,singleVolume:2}]);return(N,s)=>{const t=r("el-table-column"),d=r("el-table"),n=r("el-card");return x(),h("div",_,[s[14]||(s[14]=l("h2",null,"4.4 曝气沉砂池设计",-1)),a(n,{class:"mb-4"},{default:e(()=>[s[1]||(s[1]=l("div",{class:"card-header"},[l("h3",null,"4.4.1 沉砂池有效容积")],-1)),l("div",V,[s[0]||(s[0]=l("div",{class:"formula-block"},[l("p",null,"计算公式："),l("div",{class:"formula"},[o("V = Q"),l("sub",null,"max"),o("t × 60 (m³)")]),l("div",{class:"formula-desc"},[l("p",null,"式中："),l("p",null,[o("Q"),l("sub",null,"max"),o(" —— 最大设计流量，m³/s")]),l("p",null,"t —— 最大设计流量时的运行时间，min")])],-1)),a(d,{data:u.value},{default:e(()=>[a(t,{prop:"poolCount",label:"池子个数 N"}),a(t,{prop:"qmax",label:"Qmax(m³/s)"}),a(t,{prop:"time",label:"t 停留时间"}),a(t,{prop:"volume",label:"有效容积 V(m³)"})]),_:1},8,["data"])])]),_:1}),a(n,{class:"mb-4"},{default:e(()=>[s[3]||(s[3]=l("div",{class:"card-header"},[l("h3",null,"4.4.2 水流断面面积")],-1)),l("div",g,[s[2]||(s[2]=l("div",{class:"formula-block"},[l("p",null,"计算公式："),l("div",{class:"formula"},[o("A = Q"),l("sub",null,"max"),o("/v"),l("sub",null,"1"),o(" (m²)")]),l("div",{class:"formula-desc"},[l("p",null,"式中："),l("p",null,"A —— 水流断面面积，m²"),l("p",null,[o("v"),l("sub",null,"1"),o(" —— 最大设计流量时的水平流速，m/s")])])],-1)),a(d,{data:p.value},{default:e(()=>[a(t,{prop:"qmax",label:"Qmax(m³/s)"}),a(t,{prop:"velocity",label:"水平流速(m/s)"}),a(t,{prop:"area",label:"水流断面面积(m²)"})]),_:1},8,["data"])])]),_:1}),a(n,{class:"mb-4"},{default:e(()=>[s[5]||(s[5]=l("div",{class:"card-header"},[l("h3",null,"4.4.3 池总宽度")],-1)),l("div",w,[s[4]||(s[4]=l("div",{class:"formula-block"},[l("p",null,"计算公式："),l("div",{class:"formula"},[o("B = A/h"),l("sub",null,"2"),o(" (m)")]),l("div",{class:"formula-desc"},[l("p",null,"式中："),l("p",null,[o("h"),l("sub",null,"2"),o(" —— 设计有效水深，m")]),l("p",null,"B —— 沉砂池宽度，m"),l("p",null,"A —— 水流断面面积，m²")])],-1)),a(d,{data:i.value},{default:e(()=>[a(t,{prop:"area",label:"水流断面面积(m²)"}),a(t,{prop:"depth",label:"有效水深(m)"}),a(t,{prop:"totalWidth",label:"池子宽度 B(m)"}),a(t,{prop:"poolCount",label:"池子数 n"}),a(t,{prop:"singleWidth",label:"每个池子宽度 b(m)"})]),_:1},8,["data"])])]),_:1}),a(n,{class:"mb-4"},{default:e(()=>[s[7]||(s[7]=l("div",{class:"card-header"},[l("h3",null,"4.4.4 池长计算")],-1)),l("div",y,[s[6]||(s[6]=l("div",{class:"formula-block"},[l("p",null,"计算公式："),l("div",{class:"formula"},"L = V/A (m)")],-1)),a(d,{data:c.value},{default:e(()=>[a(t,{prop:"volume",label:"有效容积 V(m³)"}),a(t,{prop:"area",label:"水流断面面积(m²)"}),a(t,{prop:"length",label:"池长 L(m)"})]),_:1},8,["data"])])]),_:1}),a(n,{class:"mb-4"},{default:e(()=>[s[9]||(s[9]=l("div",{class:"card-header"},[l("h3",null,"4.4.5 每小时所需空气量")],-1)),l("div",C,[s[8]||(s[8]=l("div",{class:"formula-block"},[l("p",null,"计算公式："),l("div",{class:"formula"},"q = 3600Qd"),l("div",{class:"formula-desc"},[l("p",null,"式中："),l("p",null,"d —— 每m³污水所需空气量，m³/m³"),l("p",null,"q —— 每小时所需空气量m³/h")])],-1)),a(d,{data:b.value},{default:e(()=>[a(t,{prop:"airPerM3",label:"d 所需空气量(m³/m³)"}),a(t,{prop:"qmax",label:"Qmax(m³/s)"}),a(t,{prop:"airSupply",label:"供气量 q(m³/h)"})]),_:1},8,["data"])])]),_:1}),a(n,{class:"mb-4"},{default:e(()=>[s[11]||(s[11]=l("div",{class:"card-header"},[l("h3",null,"4.4.6 沉砂室容积计算")],-1)),l("div",q,[s[10]||(s[10]=l("div",{class:"formula-block"},[l("p",null,"计算公式："),l("div",{class:"formula"},"V = (86400Q̅XT)/(10⁶) (m³)"),l("div",{class:"formula"},"V₀ = V/N"),l("div",{class:"formula-desc"},[l("p",null,"式中："),l("p",null,"X —— 城市污水沉沙量，一般采用30m³/10⁶m³污水"),l("p",null,"T —— 清除沉沙的间隔时间，d"),l("p",null,"V —— 沉砂室所需容积，m³"),l("p",null,"V₀ —— 每个沉砂斗容积，m³")])],-1)),a(d,{data:v.value},{default:e(()=>[a(t,{prop:"avgFlow",label:"平均流量(m³)"}),a(t,{prop:"sandContent",label:"X(m³/10⁶m³)"}),a(t,{prop:"cleanTime",label:"T(d)"}),a(t,{prop:"totalVolume",label:"V 沉砂室所需容积(m³)"}),a(t,{prop:"poolCount",label:"池子个数 N"}),a(t,{prop:"singleVolume",label:"V₀沉沙斗容积(m³)"})]),_:1},8,["data"])])]),_:1}),a(n,{class:"mb-4"},{default:e(()=>s[12]||(s[12]=[l("div",{class:"card-header"},[l("h3",null,"4.4.7 进出水设施")],-1),l("div",{class:"card-content"},[l("p",{class:"mb-2"},"进水渠道：采用DN900mm管道，进水渠道尺寸1.2m×0.8m"),l("p",{class:"mb-2"},"出水堰：采用薄壁堰，堰上水头0.26m"),l("p",{class:"mb-2"},"排砂装置：采用DN200mm吸砂泵排砂")],-1)])),_:1}),a(n,{class:"mb-4"},{default:e(()=>s[13]||(s[13]=[l("div",{class:"card-header"},[l("h3",null,"曝气沉砂池示意图")],-1),l("div",{class:"card-content text-center"},[l("svg",{class:"technical-drawing",width:"800",height:"400",viewBox:"0 0 800 400"},[l("rect",{x:"100",y:"50",width:"600",height:"300",fill:"none",stroke:"black","stroke-width":"2"}),l("path",{d:"M100,150 L50,150 L50,250 L100,250",fill:"none",stroke:"black","stroke-width":"2"}),l("path",{d:"M700,100 L750,100 L750,200",fill:"none",stroke:"black","stroke-width":"2"}),l("path",{d:"M300,350 L400,300 L500,350",fill:"none",stroke:"black","stroke-width":"2"}),l("circle",{cx:"350",cy:"200",r:"5",fill:"black"}),l("circle",{cx:"450",cy:"200",r:"5",fill:"black"}),l("text",{x:"400",y:"30"},"曝气沉砂池平面图"),l("text",{x:"50",y:"130"},"进水口"),l("text",{x:"750",y:"130"},"出水堰"),l("text",{x:"400",y:"370"},"沉砂斗")])],-1)])),_:1})])}}}),B=k(L,[["__scopeId","data-v-3b4eac57"]]);export{B as default};