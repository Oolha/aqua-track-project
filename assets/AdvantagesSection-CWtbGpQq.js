import{r,j as t}from"./index-Db8iM6bG.js";import{u as i}from"./Loader-BQmCoBT0.js";const m="_happyCustomers_12ea7_1",g="_avatars_12ea7_9",d="_avatar_12ea7_9",v="_text_12ea7_44",x="_highlight_12ea7_54",u="_total_12ea7_59",b="_textParagraph_12ea7_65",j="_happy_12ea7_1",s={happyCustomers:m,avatars:g,avatar:d,text:v,highlight:x,total:u,textParagraph:b,happy:j},y=()=>{const{t:a}=i(),[h,o]=r.useState([]),[p,l]=r.useState(0);return r.useEffect(()=>{(async()=>{try{const c=await(await fetch("https://aqua-track-project-back.onrender.com/auth/total-users")).json();c.status===200&&l(c.totalUsers),o([{avatar:"../../assets/images/avatar_1.jpg"},{avatar:"../../assets/images/avatar_2.jpg"},{avatar:"../../assets/images/avatar_3.jpg"}])}catch(n){console.error("ERROR:",n),o([]),l(0)}})()},[]),t.jsxs("div",{className:s.happyCustomers,children:[t.jsx("div",{className:s.avatars,children:h.map((_,n)=>t.jsx("div",{className:s.avatar},n))}),t.jsxs("div",{className:s.text,children:[t.jsxs("p",{className:s.textParagraph,children:[a("homepage.advantages.our"),t.jsx("span",{className:s.happy,children:a("homepage.advantages.accent")}),a("homepage.advantages.customers")]}),t.jsxs("p",{className:s.total,children:["+",p]})]})]})},N="_fontSection_1dlah_1",S="_listBtn_1dlah_9",f="_btnHabit_1dlah_18",P="_ellipse_1dlah_34",H="_btnView_1dlah_45",I="_btnPersonal_1dlah_61",w="_listStylesImg_1dlah_77",U="_textParagraph_1dlah_104",C="_listItemHabit_1dlah_108",e={fontSection:N,listBtn:S,btnHabit:f,ellipse:P,btnView:H,btnPersonal:I,listStylesImg:w,textParagraph:U,listItemHabit:C};function R(){const{t:a}=i();return t.jsxs("div",{className:e.fontSection,children:[t.jsx("div",{className:`${e.listStylesImg} listStylesImg`,children:t.jsx(y,{})}),t.jsxs("div",{className:e.listBtn,children:[t.jsx("button",{className:e.btnHabit,type:"button",children:a("homepage.advantages.habitDrive")}),t.jsx("span",{className:e.ellipse}),t.jsx("button",{className:e.btnView,type:"button",children:a("homepage.advantages.viewStatistic")}),t.jsx("button",{className:e.btnPersonal,type:"button",children:a("homepage.advantages.personalSetting")})]})]})}export{R as A};
//# sourceMappingURL=AdvantagesSection-CWtbGpQq.js.map
