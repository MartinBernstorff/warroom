(this.webpackJsonpwarroom=this.webpackJsonpwarroom||[]).push([[0],{35:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(27),s=n.n(i),a=(n(35),n(8)),c=n(28),l=n(4),d=n(5),u=n(7),f=n(6),p=n(2),b=n.n(p),g=n(0),m=new Date,h=m.toISOString().substring(8,10)+"/"+m.toISOString().substring(5,7),j=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),x=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities"),y=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState(Object(c.a)({},e.target.name,e.target.value))},r.handleSubmit=function(e){e.preventDefault(),console.log("A form was submitted with: "+r.state.name),x.create({fields:{Name:r.state.name}}).then((function(e){console.log(e),j.create({fields:{"What?":[e.id],Context:"Leisure","exec-date":h,"Group #":5}}).then((function(e){console.log(e),"undefined"!==typeof e.error&&e.error.message&&alert(e.error.message),document.getElementById("PropositionInput").reset()}))}))},r.state={name:""},r}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("form",{onSubmit:this.handleSubmit,id:"PropositionInput",className:"w-full",children:Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("div",{className:"w-full mr-2",children:Object(g.jsx)("input",{className:"appearance-none w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-md text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mr block",type:"text","aria-label":"Proposition",value:this.state.value,name:"name",onChange:this.handleChange})}),Object(g.jsx)("div",{className:"flex-none",children:Object(g.jsx)("input",{type:"submit",className:"w-full hover:border-light-blue-200 hover:text-light-blue-800 group items-center rounded-md text-md font-medium px-4 py-2 border border-gray-200 block",value:"Submit"})})]})})}}]),n}(o.a.Component),v=(n(49),n(16)),O=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(v.b,{to:this.props.to,className:"block rounded-lg py-2 px-3 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:this.props.text})})}}]),n}(r.Component),w=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),S=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).delete=function(){var e=document.getElementById(r.props.id);e.style.opacity="0.1",w.delete(r.props.id).then((function(t){console.log("Deleting"+r.props.id),console.log(t),e.style.borderColor="red",e.style.borderWidth="4px"}))},r.markComplete=function(){var e=document.getElementById(r.props.id);e.classList.add("border-green-700"),w.update(r.props.id,{Concluded:!0}).then((function(t){console.log(t),console.log("Concluded? "+r.props.concluded),e.classList.remove("border"),e.classList.add("border-4"),e.classList.add("opacity-50")}))},r.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwlybKN4v201IY8V/"+r.props.id)},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("a",{href:this.href,className:1===this.props.concluded?"border-4 border-green-700 shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 sm:m-0 text-left opacity-50 w-full":"shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 sm:m-0 text-left border w-full",id:this.props.id,children:[Object(g.jsxs)("div",{className:"pb-0",children:[Object(g.jsx)("div",{className:"font-medium text-black text-xl sm:text-2xl",children:this.props.name}),"undefined"!==typeof this.props.notes?Object(g.jsx)("div",{className:"text-xs sm:text-sm text-gray-500 m-t-3",children:this.props.notes}):""]}),Object(g.jsx)("div",{className:"space-y-0 hidden sm:block",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(g.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1 text-xs",children:e})})):""}),Object(g.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 space-x-1 mt-1 space-y-0 sm:space-y-0",children:[Object(g.jsx)("button",{onClick:function(){return e.markComplete()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50",children:"Mark"}),Object(g.jsx)("button",{onClick:function(){return e.delete()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50",children:"Delete"}),Object(g.jsx)("button",{onClick:function(){return e.openInAt()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50 hidden sm:block",children:"Airtable"})]})]})})}}]),n}(r.Component),C=new Date,N=String(C.getDate()).padStart(2,"0"),k=String(C.getMonth()+1).padStart(2,"0");function M(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Morning"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===C})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Morning")})).map((function(t){return Object(g.jsx)(S,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}C=N+"/"+k;var I=new Date,P=String(I.getDate()).padStart(2,"0"),R=String(I.getMonth()+1).padStart(2,"0");function D(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-3xl font-bold mt-4",children:"Afternoon"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===I})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Afternoon")})).map((function(t){return Object(g.jsx)(S,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}I=P+"/"+R;var L=new Date,A=String(L.getDate()).padStart(2,"0"),W=String(L.getMonth()+1).padStart(2,"0");function T(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-3xl font-bold mt-4",children:"Evening"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-1",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===L})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Evening")})).map((function(t){return Object(g.jsx)(S,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}L=A+"/"+W;var B=new Date,_=String(B.getDate()).padStart(2,"0"),E=String(B.getMonth()+1).padStart(2,"0");function F(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===B})).filter((function(e){return"undefined"===typeof e.fields["time-of-day"]})).map((function(t){return Object(g.jsx)(S,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})})}B=_+"/"+E;var V=new Date,X=String(V.getDate()).padStart(2,"0"),K=String(V.getMonth()+1).padStart(2,"0");function z(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-3xl font-bold mt-4",children:"Exclusively fun"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===V})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("fun")})).map((function(t){return Object(g.jsx)(S,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}V=X+"/"+K;var G=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");var H=function(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=(n[0],n[1]),i=Object(r.useState)({}),s=Object(a.a)(i,2),c=s[0],l=s[1];return Object(r.useEffect)((function(){G.list({maxRecords:999,pageSize:30,view:"L: Today's propositions",cellFormat:"json"}).then((function(e){l(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(c),Object(g.jsx)("div",{className:"grid max-w-5xl",children:Object(g.jsxs)("div",{className:"grid",children:[Object(g.jsx)(F,{reRun:o,activities:c,airtable:G}),Object(g.jsx)(M,{reRun:o,activities:c,airtable:G}),Object(g.jsx)(D,{reRun:o,activities:c,airtable:G}),Object(g.jsx)(T,{reRun:o,activities:c,airtable:G}),Object(g.jsx)(z,{activities:c,airtable:G})]})})},U=n(3),Y=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),J=new Date,Q=J.toISOString().substring(8,10)+"/"+J.toISOString().substring(5,7),Z=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).rateToday=function(e){console.log("Rating today"),r.setState({value:e});for(var t=function(t){r.state.activities[t].fields["exec-date"]!==Q&&Y.update(r.state.activities[t].id,{"T Well Spent?":e.toString()}).then((function(n){console.log("Rating "+r.state.activities[t].id+" a "+e),console.log(n)}))},n=0;n<r.state.activities.length;n++)t(n)},r.state={activities:[]},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;Y.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(t){e.setState({activities:t.records})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"w-full mb-4",children:[Object(g.jsx)("h1",{className:"font-medium text-black text-2xl mb-1",children:"Did you spend yesterday well?"}),Object(g.jsxs)("div",{className:"grid grid-cols-8",children:[Object(g.jsx)("button",{onClick:function(){return e.rateToday(1)},className:"rounded-l-lg border-l w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(1===this.state.value?"bg-gray-100":""),children:"1"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(2)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(2===this.state.value?"bg-gray-100":""),children:"2"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(3)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(3===this.state.value?"bg-gray-100":""),children:"3"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(4)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(4===this.state.value?"bg-gray-100":""),children:"4"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(5)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(5===this.state.value?"bg-gray-100":""),children:"5"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(6)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(6===this.state.value?"bg-gray-100":""),children:"6"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(7)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(7===this.state.value?"bg-gray-100":""),children:"7"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(8)},className:"rounded-r-lg w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(8===this.state.value?"bg-gray-100":""),children:"8"})]})]})}}]),n}(r.Component),q=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),$=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).promote=function(){q.update(e.props.id,{"T Well Spent?":e.props.val}).then((function(t){console.log("Rating "+e.props.id+"with "+e.props.val),console.log(t)}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){return e.promote()},className:"w-full px-1 py-1 border-gray-50 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs border-r border-t border-b text-gray-200 "+(this.props.rating===this.props.val?"bg-gray-50":"")+" "+this.props.style,children:this.props.val})})}}]),n}(r.Component),ee=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),te=new Date,ne=te.toISOString().substring(8,10)+"/"+te.toISOString().substring(5,7);String.prototype.toHHMM=function(){var e=parseInt(this,10),t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),r=e-3600*t-60*n;return t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),t+":"+n};var re=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).replan=function(){var t=document.getElementById(e.props.id);console.log(e.props.name+" "+e.props.promotion),t.style.opacity="0.2",ee.create({fields:{"What?":e.props.what_id,Context:"Leisure","exec-date":ne,"Group #":5}}).then((function(e){console.log(e),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.delete=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",ee.delete(e.props.id).then((function(e){console.log(e),t.style.borderColor="red",t.style.borderWidth="medium"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwO8FxxQGtiJGwTh/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("a",{href:this.href,className:"shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 text-left border "+(this.props.promotion>0?"opacity-25":""),id:this.props.id,children:[Object(g.jsx)("div",{className:"grid",children:Object(g.jsx)("div",{className:"font-medium text-black text-2xl mb-1",children:this.props.name})}),Object(g.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(g.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(g.jsxs)("div",{children:[this.props.notes," ","undefined"!==typeof this.props.duration?this.props.duration.toString().toHHMM():""]}),Object(g.jsxs)("div",{className:"grid grid-cols-3 mt-2 gap-2",children:[Object(g.jsx)("button",{onClick:function(){return e.delete()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Delete"}),Object(g.jsx)("button",{onClick:function(){return e.replan()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Replan"}),Object(g.jsx)("button",{onClick:function(){return e.openInAt()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Airtable"})]}),Object(g.jsxs)("div",{className:"grid grid-cols-8 mt-2",children:[Object(g.jsx)($,{val:"1",id:this.props.id,rating:this.props.rating,style:"rounded-l-lg border-l"}),Object(g.jsx)($,{val:"2",id:this.props.id,rating:this.props.rating}),Object(g.jsx)($,{val:"3",id:this.props.id,rating:this.props.rating}),Object(g.jsx)($,{val:"4",id:this.props.id,rating:this.props.rating}),Object(g.jsx)($,{val:"5",id:this.props.id,rating:this.props.rating}),Object(g.jsx)($,{val:"6",id:this.props.id,rating:this.props.rating}),Object(g.jsx)($,{val:"7",id:this.props.id,rating:this.props.rating}),Object(g.jsx)($,{val:"8",id:this.props.id,style:"rounded-r-lg"})]})]})})}}]),n}(r.Component),oe=new Date;oe.setDate(oe.getDate()-1);var ie=String(oe.getDate()).padStart(2,"0"),se=String(oe.getMonth()+1).padStart(2,"0");oe=ie+"/"+se;var ae=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function ce(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){ae.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{className:"mt-2",children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Morning"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===oe})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Morning")})).map((function(e){return Object(g.jsx)(re,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"]},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var le=new Date;le.setDate(le.getDate()-1);var de=String(le.getDate()).padStart(2,"0"),ue=String(le.getMonth()+1).padStart(2,"0");le=de+"/"+ue;var fe=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function pe(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){fe.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{className:"mt-2",children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Afternoon"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===le})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Afternoon")})).map((function(e){return Object(g.jsx)(re,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"]},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var be=new Date;be.setDate(be.getDate()-1);var ge=String(be.getDate()).padStart(2,"0"),me=String(be.getMonth()+1).padStart(2,"0");be=ge+"/"+me;var he=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function je(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){he.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{className:"mt-2",children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Evening"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===be})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Evening")})).map((function(e){return Object(g.jsx)(re,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"]},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var xe=new Date;xe.setDate(xe.getDate()-1);var ye=String(xe.getDate()).padStart(2,"0"),ve=String(xe.getMonth()+1).padStart(2,"0");xe=ye+"/"+ve;var Oe=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function we(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){Oe.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===xe})).filter((function(e){return"undefined"===typeof e.fields["time-of-day"]})).map((function(e){return Object(g.jsx)(re,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"],duration:e.fields.Duration},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})})}var Se=n(17),Ce=n.n(Se),Ne=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),ke=new Date,Me=ke.toISOString().substring(8,10)+"/"+ke.toISOString().substring(5,7),Ie=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).fin=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.1",Ne.update(e.props.id,{Fin:!0}).then((function(n){console.log("Mark as fin "+e.props.id),console.log(n),t.style.borderColor="red",t.style.borderWidth="medium"}))},e.propose=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",Ne.create({fields:{"What?":[e.props.id],Context:"Leisure","exec-date":Me,"Group #":5}}).then((function(n){console.log(n),console.log("Concluded? "+e.props.concluded),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("a",{href:this.href,className:"shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 text-left border",id:this.props.id,children:[Object(g.jsx)("div",{className:"grid",children:Object(g.jsx)("div",{className:"font-medium text-black text-2xl mb-1",children:this.props.name})}),Object(g.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(g.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(g.jsxs)("div",{className:"grid grid-cols-3 gap-2 mt-2",children:[Object(g.jsx)("button",{onClick:function(){return e.propose()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:"Propose"}),Object(g.jsx)("button",{onClick:function(){return e.fin()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:"Fin"}),Object(g.jsx)("button",{onClick:function(){return e.openInAt()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:"Airtable"})]})]})})}}]),n}(r.Component),Pe=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function Re(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){Pe.list({maxRecords:999,pageSize:100,view:"Multiple choice option",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),Object(g.jsx)("div",{children:o.length>0?o.map((function(e){return Object(g.jsx)(Ie,{name:e.fields.what_string,id:e.id},e.id)})):Object(g.jsx)("p",{children:"Loading..."})})}var De=n(30),Le=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Vals");function Ae(e){return Le.list({maxRecords:999,pageSize:100,view:"Grid view",cellFormat:"json"}).then((function(e){console.log(e.records);var t,n=Object(De.a)(e.records);try{for(n.s();!(t=n.n()).done;){var r=t.value;Le.update(r.id,{Promotion:0}).then((function(e){console.log(e)}))}}catch(o){n.e(o)}finally{n.f()}})).catch((function(e){console.log(e)})),null}var We={mobile:{breakpoint:{max:4e3,min:0},items:1}},Te=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(Ae,{}),Object(g.jsxs)(Ce.a,{responsive:We,showDots:!1,showArrows:!1,swipeable:!0,draggable:!0,removeArrowOnDeviceType:["desktop","tablet","mobile"],children:[Object(g.jsx)("div",{children:Object(g.jsx)(Re,{})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(Z,{}),Object(g.jsx)(we,{}),Object(g.jsx)(ce,{}),Object(g.jsx)(pe,{}),Object(g.jsx)(je,{})]})]})]})}}]),n}(r.Component),Be=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),_e=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).propose=function(){var t=document.getElementById(e.props.id);t.style.opacity="1",console.log(e.props.name+" "+e.props.promotion),Be.update(e.props.id,{Promotion:1}).then((function(e){console.log(e),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.reverse=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",Be.update(e.props.id,{Promotion:0}).then((function(e){console.log(e),t.style.borderColor="LightGray",t.style.borderWidth="thin"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tbl7pyCYwx12t7LHu/viwnPcTZz8PXg4Smt/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("a",{href:this.href,className:"shadow-sm active:border-gray-500 group block rounded-lg p-4 hover:border-gray-300 m-2 text-left justify-left text-justify border "+(this.props.promotion>0?"opacity-100":"opacity-25"),id:this.props.id,children:[Object(g.jsx)("div",{className:"grid",children:Object(g.jsx)("div",{className:"font-medium text-black text-2xl mb-1",children:this.props.name})}),Object(g.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(g.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(g.jsxs)("div",{className:"grid grid-cols-3 mt-2 space-x-2",children:[Object(g.jsx)("button",{onClick:function(){return e.propose()},className:"rounded-lg px-2 py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm "+(this.props.promotion>0?"border-2 border-yellow-200":"border"),children:this.props.promotion>0?"Endorsed":"Endorse"}),Object(g.jsx)("button",{onClick:function(){return e.reverse()},className:"rounded-lg px-2 py-2 border active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm",children:"Reverse"}),Object(g.jsx)("button",{onClick:function(){return e.openInAt()},className:"rounded-lg px-2 py-2 border active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm",children:"Airtable"})]})]})})}}]),n}(r.Component),Ee=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Vals");function Fe(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){Ee.list({maxRecords:999,pageSize:100,view:"Weekly review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2",children:o.length>0?o.filter((function(e){return 1!==e.fields["Value certainty"]})).sort((function(e,t){return t.fields.Promotion-e.fields.Promotion})).map((function(e){return Object(g.jsx)(_e,{name:e.fields.Name,id:e.id,goals:e.fields.goal_string,promotion:e.fields.Promotion},e.id)})):Object(g.jsx)("p",{children:"Fetching value-shepherd if any uncompleted..."})})}var Ve={mobile:{breakpoint:{max:4e3,min:0},items:1}},Xe=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(Ce.a,{responsive:Ve,showDots:!1,showArrows:!1,swipeable:!0,draggable:!0,removeArrowOnDeviceType:["desktop","tablet","mobile"],children:Object(g.jsx)("div",{children:Object(g.jsx)(Fe,{})})})})}}]),n}(r.Component),Ke=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities");function ze(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){Ke.list({maxRecords:999,pageSize:100,view:"L: All activities",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{className:"mt-4",children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Menu"}),Object(g.jsx)("div",{className:"mt-2 justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.filter((function(e){return 1===e.fields["Show in menu"]})).filter((function(e){return!0!==e.fields.Fin})).sort((function(e,t){return e.fields.Rting_UL<t.fields.Rting_UL?1:t.fields.Rting_UL<e.fields.Rting_UL?-1:0})).map((function(e){return Object(g.jsx)(Ie,{name:e.fields.name_string,id:e.id,goals:e.fields["Goals text"]},e.id)})):Object(g.jsx)("p",{children:"Fetching activity-menu if any uncompleted..."})})]})}var Ge=new Date,He=new Date;He.setDate(Ge.getDate()-1);var Ue=String(Ge.getDate()).padStart(2,"0"),Ye=String(Ge.getMonth()+1).padStart(2,"0"),Je=String(He.getDate()).padStart(2,"0"),Qe=String(He.getMonth()+1).padStart(2,"0");Ge=Ue+"/"+Ye,He=Je+"/"+Qe;var Ze=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");var qe=function(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0];return n[1],console.log(o),Object(g.jsx)(v.a,{children:Object(g.jsx)("div",{className:"grid mx-auto max-w-2xl",children:Object(g.jsxs)("div",{className:"grid md:m-4 m-2 md:gap-4 gap-2 content grid-cols-1",children:[Object(g.jsx)(y,{airtable:Ze}),Object(g.jsxs)("ul",{className:"grid grid-cols-4 gap-2",children:[Object(g.jsx)("li",{children:Object(g.jsx)(O,{to:"/yesterday",text:"Review"})}),Object(g.jsx)("li",{children:Object(g.jsx)(O,{to:"/values",text:"Values"})}),Object(g.jsx)("li",{children:Object(g.jsx)(O,{to:"/today/TaskList",text:"Plan"})}),Object(g.jsx)("li",{children:Object(g.jsx)(O,{to:"/propositions",text:"Today"})})]}),Object(g.jsx)(U.b,{path:"/yesterday",component:Te}),Object(g.jsx)(U.b,{path:"/values",component:Xe}),Object(g.jsx)(U.b,{path:"/today/TaskList",component:ze}),Object(g.jsx)(U.b,{path:"/propositions",component:H}),Object(g.jsx)(U.a,{exact:!0,from:"/",to:"/propositions"})]})})})};s.a.render(Object(g.jsx)(qe,{tasks:[]}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e20b3b30.chunk.js.map