"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[25],{5025:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(2791),r=n(9434),s=n(5861),c=n(7757),o=n.n(c),u=n(4569),i=n.n(u),l=n(8245),m={fetchContacts:function(){return function(){var e=(0,s.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,l.$0)()),e.prev=1,e.next=4,i().get("/contacts");case 4:n=e.sent,a=n.data,t((0,l.v2)(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t((0,l.I7)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},addContact:function(e,t){return function(){var n=(0,s.Z)(o().mark((function n(a){var r,s,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:e,number:t},a((0,l.md)()),n.prev=2,n.next=5,i().post("/contacts",r);case 5:s=n.sent,c=s.data,a((0,l.ff)(c)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),a((0,l.xZ)(n.t0.message)),alert(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},deleteContact:function(e){return function(){var t=(0,s.Z)(o().mark((function t(n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n((0,l.us)()),t.prev=1,t.next=4,i().delete("/contacts/".concat(e));case 4:n((0,l.uv)(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),n((0,l.EF)(t.t0.message)),alert(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}},d=m,p=n(885),f=n(8174),h=function(e){return e.contacts.items},v=function(e){return e.contacts.filter},_=function(e){var t=h(e),n=v(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},x="Form_form__sJZBb",b="Form_label__WhLY3",C="Form_input__wdR67",j="Form_button__aSHIj",N=n(184);function g(){var e=(0,a.useState)(""),t=(0,p.Z)(e,2),n=t[0],s=t[1],c=(0,a.useState)(""),o=(0,p.Z)(c,2),u=o[0],i=o[1],l=(0,r.v9)(h),m=(0,r.I0)(),v=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":i(a)}};return(0,N.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault();var t=l.find((function(e){return e.name===n}));if(t)return f.Am.error("".concat(t.name," is already in your list"));m(d.addContact(n,u)),s(""),i("")},children:[(0,N.jsxs)("label",{className:b,children:["Name",(0,N.jsx)("input",{className:C,type:"text",name:"name",value:n,onChange:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,N.jsxs)("label",{className:b,children:["Number",(0,N.jsx)("input",{className:C,type:"tel",name:"number",value:u,onChange:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,N.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})}var k="Filter_label__vEd1E",w="Filter_input__N7T3z";function y(){var e=(0,r.v9)(v),t=(0,r.I0)();return(0,N.jsxs)("label",{className:k,children:["Find contact by name",(0,N.jsx)("input",{className:w,type:"text",name:"name",value:e,onChange:function(e){return t(l.M6(e.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}var Z="Contacts_list__Gxku1",A="Contacts_item__-6wZN";function F(){var e=(0,r.v9)(_),t=(0,r.I0)();return(0,N.jsx)("ul",{className:Z,children:e.map((function(e){return(0,N.jsxs)("li",{className:A,children:[e.name,": ",e.number,(0,N.jsx)("button",{onClick:function(){return n=e.id,t(d.deleteContact(n));var n},children:"Delete"})]},e.id)}))})}n(5462);var z="ContactsPage_phonebook__Vs2ct",I="ContactsPage_title__X03js";function E(){var e=(0,r.I0)();return(0,a.useEffect)((function(){e(d.fetchContacts())}),[e]),(0,N.jsx)("main",{children:(0,N.jsxs)("section",{className:z,children:[(0,N.jsx)("h1",{className:I,children:"Phonebook"}),(0,N.jsx)(g,{}),(0,N.jsx)("h2",{className:I,children:"Contacts"}),(0,N.jsx)(y,{}),(0,N.jsx)(F,{})]})})}}}]);
//# sourceMappingURL=25.abf11b46.chunk.js.map