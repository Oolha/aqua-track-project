import{r as n,j as t}from"./index-D2nZjuIL.js";const h="_happyCustomers_12ea7_1",p="_avatars_12ea7_9",m="_avatar_12ea7_9",d="_text_12ea7_44",x="_highlight_12ea7_54",b="_total_12ea7_59",g="_textParagraph_12ea7_65",u="_happy_12ea7_1",s={happyCustomers:h,avatars:p,avatar:m,text:d,highlight:x,total:b,textParagraph:g,happy:u},v=()=>{const[c,r]=n.useState([]),[i,l]=n.useState(0);return n.useEffect(()=>{(async()=>{try{const o=await(await fetch("https://aqua-track-project-back.onrender.com/auth/total-users")).json();o.status===200&&l(o.totalUsers),r([{avatar:"../../assets/images/avatar_1.jpg"},{avatar:"../../assets/images/avatar_2.jpg"},{avatar:"../../assets/images/avatar_3.jpg"}])}catch(e){console.error("ERROR:",e),r([]),l(0)}})()},[]),t.jsxs("div",{className:s.happyCustomers,children:[t.jsx("div",{className:s.avatars,children:c.map((_,e)=>t.jsx("div",{className:s.avatar},e))}),t.jsxs("div",{className:s.text,children:[t.jsxs("p",{className:s.textParagraph,children:["Our ",t.jsx("span",{className:s.happy,children:"happy"})," customers"]}),t.jsxs("p",{className:s.total,children:["+",i]})]})]})},j="_fontSection_1dlah_1",y="_listBtn_1dlah_9",N="_btnHabit_1dlah_18",f="_ellipse_1dlah_34",P="_btnView_1dlah_45",S="_btnPersonal_1dlah_61",H="_listStylesImg_1dlah_77",I="_textParagraph_1dlah_104",w="_listItemHabit_1dlah_108",a={fontSection:j,listBtn:y,btnHabit:N,ellipse:f,btnView:P,btnPersonal:S,listStylesImg:H,textParagraph:I,listItemHabit:w};function C(){return t.jsxs("div",{className:a.fontSection,children:[t.jsx("div",{className:`${a.listStylesImg} listStylesImg`,children:t.jsx(v,{})}),t.jsxs("div",{className:a.listBtn,children:[t.jsx("button",{className:a.btnHabit,type:"button",children:"Habit drive"}),t.jsx("span",{className:a.ellipse}),t.jsx("button",{className:a.btnView,type:"button",children:"View statistics"}),t.jsx("button",{className:a.btnPersonal,type:"button",children:"Personal rate setting"})]})]})}export{C as A};
//# sourceMappingURL=AdvantagesSection-BbLeGfhA.js.map