(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),s=(n(17),n(8)),i=n(2),l=n(1),o=(n(18),n(0)),r=function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})},d=(n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:n}),Object(o.jsx)("div",{className:"expense-date__day",children:c})]})}),j=(n(21),function(e){return Object(o.jsxs)(r,{className:"expense-item",children:[Object(o.jsx)(d,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})}),u=(n(22),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.preSelectedYear,onChange:function(t){console.log("in ExpensesFilter:",t.target.value),e.onSelectedYear(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=(n(23),function(e){var t=Object(l.useState)("2021"),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(o.jsxs)(r,{className:"expenses",children:[Object(o.jsx)(u,{preSelectedYear:c,onSelectedYear:function(e){console.log("in Expenses:",e),a(e)}}),e.items.map((function(e){return Object(o.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})}),b=n(5),p=(n(24),function(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(l.useState)(""),r=Object(i.a)(s,2),d=r[0],j=r[1],u=Object(l.useState)(""),x=Object(i.a)(u,2),b=x[0],p=x[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:b,date:new Date(d)};e.onSaveExpenseData(n),a(""),p(""),j("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){a(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:b,onChange:function(e){p(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:d,onChange:function(e){j(e.target.value)}})]})]}),Object(o.jsx)("div",{className:"new-expense__actions",children:Object(o.jsx)("button",{type:"submit",children:"Add expense"})})]})}),O=(n(25),function(e){return Object(o.jsx)("div",{className:"new-expense",children:Object(o.jsx)(p,{onSaveExpenseData:function(t){var n=Object(b.a)(Object(b.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})}),m=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],h=function(){var e=Object(l.useState)(m),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{onAddExpense:function(e){console.log("in App newExpense:",e),console.log("dummy-expenses:",n),c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(o.jsx)(x,{items:n})]})};a.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(h,{}))}],[[26,1,2]]]);
//# sourceMappingURL=main.40e9ed8c.chunk.js.map