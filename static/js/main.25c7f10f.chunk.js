(this["webpackJsonpdemit-answers"]=this["webpackJsonpdemit-answers"]||[]).push([[0],{49:function(e,a,t){e.exports=t(57)},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),c=t(13);function i(){return r.a.createElement("div",{className:"Heading"},r.a.createElement("img",{className:"satan-logo",src:"/logo.png",width:"100vw",alt:"satan-logo"}),r.a.createElement("h1",null,"Hail Friend"),r.a.createElement("p",null,"Tanyakan apapun pada dedemit dan ia akan datang kepadamu untuk menjawabnya. Hati-hati saat dirimu merasa diawasi di kemudian hari, mungkin ia menempel kepadamu."),r.a.createElement("p",null,"Matranya adalah ",r.a.createElement("b",null,'"Demit jawaben pitakonan iki!"')))}var u=t(4),s=t(97),m=t(98),d=t(94);function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}var g=Object(u.a)((function(e){return{root:{color:e.palette.getContrastText("#080307"),backgroundColor:"#080307",fontFamily:"Crete Round","&:hover":{backgroundColor:"#080307"}}}}))(m.a);function b(e){var a=e.setToggle,t=e.setAnswer,o="Demit jawaben pitakonan iki!",l=Object(n.useState)(""),i=Object(c.a)(l,2),u=i[0],m=i[1],b=Object(n.useState)(""),k=Object(c.a)(b,2),f=k[0],y=k[1],E=Object(n.useState)(!1),h=Object(c.a)(E,2),v=h[0],w=h[1],j=Object(n.useState)(!1),C=Object(c.a)(j,2),O=C[0],A=C[1],T=Object(n.useState)(""),x=Object(c.a)(T,2),S=x[0],N=x[1],B=function(){""!==u&&""!==f?(a(!0),A(!1),m(""),y(""),w(!1)):(A(!0),N(""===u?"Mantranyaa woyyy!":"Pertanyaannya woyyy!"))};return r.a.createElement("div",{className:"Form"},r.a.createElement(s.a,{fullWidth:!0,id:"mantra",color:"secondary",placeholder:"Masukkan mantra",style:{marginBottom:"20px"},onChange:function(e){var a=e.target.value,n=(a=p(a)).length;v?(!a.includes(".")&&t((function(e){return p(e+a.charAt(n-1))})),m((function(e){return e+o.charAt(n-1)}))):a.includes(".")?m((function(e){return e+o.charAt(n-1)})):m(a)},onKeyDown:function(e){return"."===e.key&&w((function(){return!v}))},value:u,spellCheck:"false"}),r.a.createElement(d.a,{container:!0,spacing:3},r.a.createElement(d.a,{item:!0,xs:12,sm:12,md:10},r.a.createElement(s.a,{id:"question",color:"secondary",placeholder:"Masukkan pertanyaan",fullWidth:!0,value:f,onChange:function(e){var a=e.target.value;y((function(){return p(a)}))},onKeyDown:function(e){return"?"===e.key&&B()},spellCheck:"false"})),r.a.createElement(d.a,{item:!0,xs:12,sm:12,md:2},r.a.createElement(g,{onClick:B,variant:"contained"},"Tanya"))),O&&r.a.createElement("p",{style:{marginBottom:"-2%",color:"red"}},S))}var k=t(95),f=t(99),y=t(96),E=t(58),h=Object(k.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),textAlign:"center"}}})),v=Object(u.a)((function(e){return{root:{color:e.palette.getContrastText("#080307"),backgroundColor:"#080307",fontFamily:"Crete Round","&:hover":{backgroundColor:"#080307"}}}}))(m.a);function w(e){var a=h();return r.a.createElement("div",null,r.a.createElement(f.a,{className:a.modal,open:e.toggle,closeAfterTransition:!0,BackdropComponent:y.a,BackdropProps:{timeout:500}},r.a.createElement(E.a,{in:e.toggle},r.a.createElement("div",{className:a.paper},r.a.createElement("p",null,"Demit menjawab"),r.a.createElement("h1",null,e.answer),r.a.createElement(v,{onClick:function(){e.setToggle(!1),e.setAnswer("")},variant:"contained"},"Tanya Lagi")))))}var j=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(""),u=Object(c.a)(l,2),s=u[0],m=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(b,{setToggle:o,setAnswer:m}),r.a.createElement(w,{toggle:t,setToggle:o,answer:s,setAnswer:m}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.25c7f10f.chunk.js.map