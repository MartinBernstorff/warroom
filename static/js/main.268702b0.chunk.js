(this.webpackJsonpwarroom=this.webpackJsonpwarroom||[]).push([[0],{35:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(28),s=n.n(i),a=(n(35),n(3)),c=n(13),l=n(4),d=n(5),u=n(7),b=n(6),p=n(2),g=n.n(p),f=n(0),j=new Date,h=j.toISOString().substring(8,10)+"/"+j.toISOString().substring(5,7),m=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),x=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities"),y=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState(Object(c.a)({},e.target.name,e.target.value))},r.handleSubmit=function(e){e.preventDefault(),console.log("A form was submitted with: "+r.state.name),x.create({fields:{Name:r.state.name}}).then((function(e){console.log(e),m.create({fields:{"What?":[e.id],Context:"Leisure","exec-date":h,"Group #":5}}).then((function(e){console.log(e),"undefined"!==typeof e.error&&e.error.message&&alert(e.error.message),document.getElementById("PropositionInput").reset()}))}))},r.state={name:""},r}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{onSubmit:this.handleSubmit,id:"PropositionInput",className:"w-full",children:Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("div",{className:"w-full mr-2",children:Object(f.jsx)("input",{className:"appearance-none w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-md text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mr block",type:"text","aria-label":"Proposition",value:this.state.value,name:"name",onChange:this.handleChange})}),Object(f.jsx)("div",{className:"flex-none",children:Object(f.jsx)("input",{type:"submit",className:"w-full hover:border-light-blue-200 hover:text-light-blue-800 group items-center rounded-md text-md font-medium px-4 py-2 border border-gray-200 block",value:"Submit"})})]})})}}]),n}(o.a.Component),v=(n(49),n(16)),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(v.b,{to:this.props.to,className:"block rounded-lg py-2 px-3 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:this.props.text})})}}]),n}(r.Component),w=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),N=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).delete=function(){var e=document.getElementById(r.props.id);e.style.opacity="0.1",w.delete(r.props.id).then((function(t){console.log("Deleting"+r.props.id),console.log(t),e.style.borderColor="red",e.style.borderWidth="4px"}))},r.markComplete=function(){var e=document.getElementById(r.props.id);e.classList.add("border-green-700"),w.update(r.props.id,{Concluded:!0}).then((function(t){console.log(t),console.log("Concluded? "+r.props.concluded),e.classList.remove("border"),e.classList.add("border-4"),e.classList.add("opacity-50")}))},r.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwlybKN4v201IY8V/"+r.props.id)},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{children:Object(f.jsxs)("a",{href:this.href,className:1===this.props.concluded?"border border-green-700 shadow-sm active:border-gray-500 group block rounded-lg p-1 sm:p-2 text-left opacity-50 w-full -mb-1":"shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 sm:m-0 text-left border w-full",id:this.props.id,children:[Object(f.jsxs)("div",{className:"grid grid-cols-2",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"pb-0",children:[Object(f.jsx)("div",{className:1===this.props.concluded?"font-medium text-xs":"font-medium text-black text-xl sm:text-2xl",children:this.props.name}),"undefined"!==typeof this.props.notes?Object(f.jsx)("div",{className:"text-xs sm:text-sm text-gray-500 m-t-3"+(1===this.props.concluded?" hidden":""),children:this.props.notes}):""]})}),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 space-x-1 mt-1 space-y-0 sm:space-y-0"+(1===this.props.concluded?" hidden":""),children:[Object(f.jsx)("button",{onClick:function(){return e.markComplete()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50",children:"Mark"}),Object(f.jsx)("button",{onClick:function(){return e.delete()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50",children:"Delete"}),Object(f.jsx)("button",{onClick:function(){return e.openInAt()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50 hidden sm:block",children:"Airtable"})]})})]}),Object(f.jsx)("div",{className:"",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(t){return Object(f.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1 mt-1 text-xs"+(1===e.props.concluded?" hidden":""),children:t})})):""})]})})}}]),n}(r.Component),S=new Date,k=String(S.getDate()).padStart(2,"0"),C=String(S.getMonth()+1).padStart(2,"0");function M(e){var t=e.activities;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{className:"text-xs font-bold mt-4 text-gray-300 text-center",children:["\u2013\u2013\u2013 ",e.Title," \u2013\u2013\u2013"]}),Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-1 grid-flow-row-dense gap-2",children:t.length>0?t.filter((function(e){return e.fields["exec-date"]===S})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(t){return!0===t.fields["time-of-day"].includes(e.TimeOfDay)})).map((function(t){return Object(f.jsx)(N,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(f.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}S=k+"/"+C;var L=new Date,T=String(L.getDate()).padStart(2,"0"),R=String(L.getMonth()+1).padStart(2,"0");function W(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-1 grid-flow-row-dense gap-2",children:t.length>0?t.filter((function(e){return e.fields["exec-date"]===L})).filter((function(e){return"undefined"===typeof e.fields["time-of-day"]})).map((function(t){return Object(f.jsx)(N,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(f.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})})}L=T+"/"+R;var D=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");var I=function(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=(n[0],n[1]),i=Object(r.useState)({}),s=Object(a.a)(i,2),c=s[0],l=s[1];return Object(r.useEffect)((function(){D.list({maxRecords:999,pageSize:30,view:"L: Today's propositions",cellFormat:"json"}).then((function(e){l(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(c),Object(f.jsx)("div",{className:"grid max-w-5xl",children:Object(f.jsxs)("div",{className:"grid",children:[Object(f.jsx)(W,{reRun:o,activities:c,airtable:D}),Object(f.jsx)(M,{reRun:o,Title:"Morning (8-11)",TimeOfDay:"Morning",activities:c,airtable:D}),Object(f.jsx)(M,{reRun:o,Title:"Noon (12-15)",TimeOfDay:"Noon",activities:c,airtable:D}),Object(f.jsx)(M,{reRun:o,Title:"Afternoon (16-18)",TimeOfDay:"Afternoon",activities:c,airtable:D}),Object(f.jsx)(M,{reRun:o,Title:"Evening (19-21)",TimeOfDay:"Evening",activities:c,airtable:D}),Object(f.jsx)(M,{reRun:o,Title:"Maybe",TimeOfDay:"Maybe",activities:c,airtable:D})]})})},A=n(8),P=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),Z=new Date,F=Z.toISOString().substring(8,10)+"/"+Z.toISOString().substring(5,7),X=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).rateToday=function(e){console.log("Rating today"),r.setState({value:e});for(var t=function(t){r.state.activities[t].fields["exec-date"]!==F&&P.update(r.state.activities[t].id,{"T Well Spent?":e.toString()}).then((function(n){console.log("Rating "+r.state.activities[t].id+" a "+e),console.log(n)}))},n=0;n<r.state.activities.length;n++)t(n)},r.state={activities:[]},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;P.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(t){e.setState({activities:t.records})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"w-full mb-4",children:[Object(f.jsx)("h1",{className:"font-medium text-black text-2xl mb-1",children:"Did you spend yesterday well?"}),Object(f.jsxs)("div",{className:"grid grid-cols-8",children:[Object(f.jsx)("button",{onClick:function(){return e.rateToday(1)},className:"rounded-l-lg border-l w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(1===this.state.value?"bg-gray-100":""),children:"1"}),Object(f.jsx)("button",{onClick:function(){return e.rateToday(2)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(2===this.state.value?"bg-gray-100":""),children:"2"}),Object(f.jsx)("button",{onClick:function(){return e.rateToday(3)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(3===this.state.value?"bg-gray-100":""),children:"3"}),Object(f.jsx)("button",{onClick:function(){return e.rateToday(4)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(4===this.state.value?"bg-gray-100":""),children:"4"}),Object(f.jsx)("button",{onClick:function(){return e.rateToday(5)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(5===this.state.value?"bg-gray-100":""),children:"5"}),Object(f.jsx)("button",{onClick:function(){return e.rateToday(6)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(6===this.state.value?"bg-gray-100":""),children:"6"}),Object(f.jsx)("button",{onClick:function(){return e.rateToday(7)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(7===this.state.value?"bg-gray-100":""),children:"7"}),Object(f.jsx)("button",{onClick:function(){return e.rateToday(8)},className:"rounded-r-lg w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(8===this.state.value?"bg-gray-100":""),children:"8"})]})]})}}]),n}(r.Component),B=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),V=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).promote=function(){B.update(e.props.id,{"T Well Spent?":e.props.val}).then((function(t){console.log("Rating "+e.props.id+"with "+e.props.val),console.log(t)}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){return e.promote()},className:"w-full px-1 py-1 border-gray-100 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs border-r border-t border-b text-gray-200 "+(this.props.rating===this.props.val?"bg-gray-50":"")+" "+this.props.style,children:this.props.val})})}}]),n}(r.Component),Y=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),E=new Date,G=E.toISOString().substring(8,10)+"/"+E.toISOString().substring(5,7);String.prototype.toHHMM=function(){var e=parseInt(this,10),t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),r=e-3600*t-60*n;return t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),t+":"+n};var K=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).replan=function(){var t=document.getElementById(e.props.id);console.log("Replanning "+e.props.name+"with 'What?' as "+e.props.what),t.style.opacity="0.5",Y.create({fields:{"What?":e.props.what,Context:"Leisure","exec-date":G,"Group #":5,"Learning points":e.props.notes}}).then((function(e){console.log(e),t.style.borderColor="yellow",t.style.borderWidth="small"}))},e.delete=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",Y.delete(e.props.id).then((function(e){console.log(e),t.style.borderColor="red",t.style.borderWidth="small",t.style.maxHeight="45 px",t.style.overflow="hidden"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwO8FxxQGtiJGwTh/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:this.href,className:"active:border-gray-500 group block rounded-lg p-2 sm:p-2 hover:border-gray-300 m-0 text-left border "+(this.props.promotion>0?"opacity-25":""),id:this.props.id,children:Object(f.jsxs)("div",{className:"flex gap-2 items-stretch",children:[Object(f.jsxs)("div",{className:"grid w-5/12 items-center grid-cols-6",children:[Object(f.jsxs)("div",{className:"col-span-5 text-sm",children:[this.props.name,Object(f.jsx)("div",{className:"text-xs text-gray-300",children:this.props.notes})]}),Object(f.jsx)("div",{className:"justify-end text-gray-200 font-light text-sm",children:"undefined"!==typeof this.props.duration?this.props.duration.toString().toHHMM():""})]}),Object(f.jsxs)("div",{className:"w-7/12 flex gap-2",children:[Object(f.jsxs)("div",{className:"w-9/12 grid grid-cols-8",children:[Object(f.jsx)(V,{val:"1",id:this.props.id,rating:this.props.rating,style:"rounded-l-lg border-l"}),Object(f.jsx)(V,{val:"2",id:this.props.id,rating:this.props.rating}),Object(f.jsx)(V,{val:"3",id:this.props.id,rating:this.props.rating}),Object(f.jsx)(V,{val:"4",id:this.props.id,rating:this.props.rating}),Object(f.jsx)(V,{val:"5",id:this.props.id,rating:this.props.rating}),Object(f.jsx)(V,{val:"6",id:this.props.id,rating:this.props.rating}),Object(f.jsx)(V,{val:"7",id:this.props.id,rating:this.props.rating}),Object(f.jsx)(V,{val:"8",id:this.props.id,style:"rounded-r-lg"})]}),Object(f.jsxs)("div",{className:"w-3/12 grid grid-cols-3 gap-2 h-4",children:[Object(f.jsx)("button",{onClick:function(){return e.delete()},className:"border rounded-lg w-full px-2 py-1 border-gray-100 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs text-gray-200",children:"D"}),Object(f.jsx)("button",{onClick:function(){return e.replan()},className:"border rounded-lg w-full px-2 py-1 border-gray-100 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs text-gray-200",children:"R"}),Object(f.jsx)("button",{onClick:function(){return e.openInAt()},className:"border rounded-lg w-full px-2 py-1 border-gray-100 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs text-gray-200",children:"A"})]})]})]})})})}}]),n}(r.Component),z=new Date;z.setDate(z.getDate()-1);var _=String(z.getDate()).padStart(2,"0"),J=String(z.getMonth()+1).padStart(2,"0");z=_+"/"+J;var U=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function H(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){U.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsxs)("div",{className:"mt-2",children:[Object(f.jsx)("h1",{className:"text-xs font-bold mt-4 text-gray-300 text-center",children:"\u2013\u2013\u2013 Morning \u2013\u2013\u2013"}),Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-1 grid-flow-row-dense gap-2",children:o.length>0?o.filter((function(e){return e.fields["exec-date"]===z})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Morning")})).map((function(e){return Object(f.jsx)(K,Object(c.a)({name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"],what:e.fields["What?"]},"notes",e.fields["Learning points"]),e.id)})):Object(f.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var Q=new Date;Q.setDate(Q.getDate()-1);var q=String(Q.getDate()).padStart(2,"0"),$=String(Q.getMonth()+1).padStart(2,"0");Q=q+"/"+$;var ee=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function te(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){ee.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsxs)("div",{className:"mt-2",children:[Object(f.jsx)("h1",{className:"text-xs font-bold mt-4 text-gray-300 text-center",children:"\u2013\u2013\u2013 Afternoon \u2013\u2013\u2013"}),Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-1 grid-flow-row-dense gap-2",children:o.length>0?o.filter((function(e){return e.fields["exec-date"]===Q})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Afternoon")})).map((function(e){return Object(f.jsx)(K,Object(c.a)({name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"],what:e.fields["What?"]},"notes",e.fields["Learning points"]),e.id)})):Object(f.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var ne=new Date;ne.setDate(ne.getDate()-1);var re=String(ne.getDate()).padStart(2,"0"),oe=String(ne.getMonth()+1).padStart(2,"0");ne=re+"/"+oe;var ie=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function se(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){ie.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsxs)("div",{className:"mt-2",children:[Object(f.jsx)("h1",{className:"text-xs font-bold mt-4 text-gray-300 text-center",children:"\u2013\u2013\u2013 Evening \u2013\u2013\u2013"}),Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-1 grid-flow-row-dense gap-1",children:o.length>0?o.filter((function(e){return e.fields["exec-date"]===ne})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Evening")})).map((function(e){return Object(f.jsx)(K,Object(c.a)({name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"],what:e.fields["What?"]},"notes",e.fields["Learning points"]),e.id)})):Object(f.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var ae=new Date;ae.setDate(ae.getDate()-1);var ce=String(ae.getDate()).padStart(2,"0"),le=String(ae.getMonth()+1).padStart(2,"0");ae=ce+"/"+le;var de=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function ue(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){de.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-xs font-bold mt-4 text-gray-300 text-center",children:"\u2013\u2013\u2013 Misc. \u2013\u2013\u2013"}),Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-1 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===ae})).filter((function(e){return"undefined"===typeof e.fields["time-of-day"]})).map((function(e){return Object(f.jsx)(K,Object(c.a)({name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"],duration:e.fields.Duration,what:e.fields["What?"]},"notes",e.fields["Learning points"]),e.id)})):Object(f.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var be=n(18),pe=n.n(be),ge=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),fe=new Date,je=fe.toISOString().substring(8,10)+"/"+fe.toISOString().substring(5,7),he=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).fin=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.1",ge.update(e.props.id,{Fin:!0}).then((function(n){console.log("Mark as fin "+e.props.id),console.log(n),t.style.borderColor="red",t.style.borderWidth="medium"}))},e.propose=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",ge.create({fields:{"What?":[e.props.id],Context:"Leisure","exec-date":je,"Group #":5}}).then((function(n){console.log(n),console.log("Concluded? "+e.props.concluded),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{children:Object(f.jsxs)("a",{href:this.href,className:"shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 text-left border",id:this.props.id,children:[Object(f.jsx)("div",{className:"grid",children:Object(f.jsx)("div",{className:"font-medium text-black text-2xl mb-1",children:this.props.name})}),Object(f.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(f.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(f.jsxs)("div",{className:"grid grid-cols-3 gap-2 mt-2",children:[Object(f.jsx)("button",{onClick:function(){return e.propose()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:"Propose"}),Object(f.jsx)("button",{onClick:function(){return e.fin()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:"Fin"}),Object(f.jsx)("button",{onClick:function(){return e.openInAt()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border",children:"Airtable"})]})]})})}}]),n}(r.Component),me=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function xe(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){me.list({maxRecords:999,pageSize:100,view:"Multiple choice option",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsx)("div",{children:o.length>0?o.map((function(e){return Object(f.jsx)(he,{name:e.fields.what_string,id:e.id},e.id)})):Object(f.jsx)("p",{children:"Loading..."})})}var ye=n(30),ve=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Vals");function Oe(e){return ve.list({maxRecords:999,pageSize:100,view:"Grid view",cellFormat:"json"}).then((function(e){console.log(e.records);var t,n=Object(ye.a)(e.records);try{for(n.s();!(t=n.n()).done;){var r=t.value;ve.update(r.id,{Promotion:0}).then((function(e){console.log(e)}))}}catch(o){n.e(o)}finally{n.f()}})).catch((function(e){console.log(e)})),null}var we={mobile:{breakpoint:{max:4e3,min:0},items:1}},Ne=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(Oe,{}),Object(f.jsxs)(pe.a,{responsive:we,showDots:!1,showArrows:!1,swipeable:!0,draggable:!0,removeArrowOnDeviceType:["desktop","tablet","mobile"],children:[Object(f.jsx)("div",{children:Object(f.jsx)(xe,{})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(H,{}),Object(f.jsx)(te,{}),Object(f.jsx)(se,{}),Object(f.jsx)(ue,{}),Object(f.jsx)(X,{})]})]})]})}}]),n}(r.Component),Se=new Date;Se.setDate(Se.getDate()-1);var ke=String(Se.getDate()).padStart(2,"0"),Ce=String(Se.getMonth()+1).padStart(2,"0");Se=ke+"/"+Ce;var Me=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities");function Le(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){Me.list({maxRecords:999,pageSize:100,view:"L: Recents/routines",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsxs)("div",{className:"mt-2",children:[Object(f.jsx)("h1",{className:"text-3xl font-bold",children:"This week's streaks"}),Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Random 1-10 half hour"]-t.fields["Random 1-10 half hour"]})).map((function(e){return Object(f.jsx)(he,{name:e.fields.Name,id:e.id,goals:e.fields["Goals text"]},e.id)})):Object(f.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var Te=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities");function Re(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){Te.list({maxRecords:999,pageSize:100,view:"L: All activities",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h1",{className:"text-3xl font-bold",children:"Menu"}),Object(f.jsx)("div",{className:"mt-2 justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.filter((function(e){return 1===e.fields["Show in menu"]})).filter((function(e){return!0!==e.fields.Fin})).sort((function(e,t){return e.fields.Rting_UL<t.fields.Rting_UL?1:t.fields.Rting_UL<e.fields.Rting_UL?-1:0})).map((function(e){return Object(f.jsx)(he,{name:e.fields.name_string,id:e.id,goals:e.fields["Goals text"]},e.id)})):Object(f.jsx)("p",{children:"Fetching activity-menu if any uncompleted..."})})]})}var We=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities");function De(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){We.list({maxRecords:999,pageSize:100,view:"L: Kernels",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h1",{className:"text-3xl font-bold",children:"Kernels"}),Object(f.jsx)("div",{className:"mt-2 justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields.Rting_UL<t.fields.Rting_UL?1:t.fields.Rting_UL<e.fields.Rting_UL?-1:0})).map((function(e){return Object(f.jsx)(he,{name:e.fields.name_string,id:e.id,goals:e.fields["Goals text"]},e.id)})):Object(f.jsx)("p",{children:"Fetching activity-menu if any uncompleted..."})})]})}function Ie(e){return Object(f.jsx)("div",{className:"",children:Object(f.jsx)("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FCopenhagen&src=bWFydGluYmVybnN0b3JmZkBnbWFpbC5jb20&src=NnAwNjZuMW9oYTlnbThyaTVybG4zcWMwaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bGYzdmlsa3RpbnZqYm1xNXEzMW1pZTV0dmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Ym9oaHVxOWRybWV0YTM5czBydWFyMTFrZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aXE0Z2tkZnAxaDFmYTRpbm5hZHNiY21ob3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=OXU4amp0YmNrMHB1NTUzbWpkNGQwZWpobmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cDl1dmRyb2NvNjc5bnZyMHN2YjQ5bGtiYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dmJiaW52OTExN2VocTF1ODVkN3JzaXIwc2xpaGc5ZTJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=MjUwdTlmMmY1ZTFtanZwYTJ0cGJlbDMxMWxxMzh0dmFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=dGU4cG9wZ2NsbWw3Ymo3NDV0c2k3Z3BhZXFuaTljazFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=NHNhNTEyYTU0anN2MDFmNHNqZTg3cDQ0b3RxaXJrbmpAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23691426&color=%2300a900&color=%2393afb2&color=%23a50000&color=%23711a76&color=%230042c7&color=%23009688&color=%234285F4&color=%23616161&color=%23F6BF26&color=%23039BE5&showTitle=0&mode=WEEK&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0",width:"100%",height:"600",frameborder:"0",scrolling:"no"})})}function Ae(e){return Object(f.jsx)("div",{className:""})}function Pe(e){return Object(f.jsx)("div",{className:""})}function Ze(e){return Object(f.jsx)("div",{className:""})}var Fe=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(v.a,{children:[Object(f.jsxs)("ul",{className:"grid grid-rows-2 grid-cols-3 gap-2 max-w-md",children:[Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today/Calendar",text:"Calendar"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today/Todoist",text:"Todoist"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today/Gmail",text:"Gmail"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today/ActivityListRecents",text:"Recents"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today/Taskheat",text:"Taskheat"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today/KernelList",text:"Kernels"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today/TaskList",text:"Activity menu"})})]}),Object(f.jsx)(A.b,{path:"/today/ActivityListRecents",component:Le}),Object(f.jsx)(A.b,{path:"/today/Calendar",component:Ie}),Object(f.jsx)(A.b,{path:"/today/Taskheat",component:Ae}),Object(f.jsx)(A.b,{path:"/today/Todoist",component:Pe}),Object(f.jsx)(A.b,{path:"/today/Gmail",component:Ze}),Object(f.jsx)(A.b,{path:"/today/KernelList",component:De}),Object(f.jsx)(A.b,{path:"/today/TaskList",component:Re})]})})}}]),n}(r.Component),Xe=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),Be=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).propose=function(){var t=document.getElementById(e.props.id);t.style.opacity="1",console.log(e.props.name+" "+e.props.promotion),Xe.update(e.props.id,{Promotion:1}).then((function(e){console.log(e),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.reverse=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",Xe.update(e.props.id,{Promotion:0}).then((function(e){console.log(e),t.style.borderColor="LightGray",t.style.borderWidth="thin"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tbl7pyCYwx12t7LHu/viwnPcTZz8PXg4Smt/"+e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{children:Object(f.jsxs)("a",{href:this.href,className:"shadow-sm active:border-gray-500 group block rounded-lg p-4 hover:border-gray-300 m-2 text-left justify-left text-justify border "+(this.props.promotion>0?"opacity-100":"opacity-25"),id:this.props.id,children:[Object(f.jsx)("div",{className:"grid",children:Object(f.jsx)("div",{className:"font-medium text-black text-2xl mb-1",children:this.props.name})}),Object(f.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(f.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(f.jsxs)("div",{className:"grid grid-cols-3 mt-2 space-x-2",children:[Object(f.jsx)("button",{onClick:function(){return e.propose()},className:"rounded-lg px-2 py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm "+(this.props.promotion>0?"border-2 border-yellow-200":"border"),children:this.props.promotion>0?"Endorsed":"Endorse"}),Object(f.jsx)("button",{onClick:function(){return e.reverse()},className:"rounded-lg px-2 py-2 border active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm",children:"Reverse"}),Object(f.jsx)("button",{onClick:function(){return e.openInAt()},className:"rounded-lg px-2 py-2 border active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm",children:"Airtable"})]})]})})}}]),n}(r.Component),Ve=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Vals");function Ye(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){Ve.list({maxRecords:999,pageSize:100,view:"Weekly review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(f.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2",children:o.length>0?o.filter((function(e){return 1!==e.fields["Value certainty"]})).sort((function(e,t){return t.fields.Promotion-e.fields.Promotion})).map((function(e){return Object(f.jsx)(Be,{name:e.fields.Name,id:e.id,goals:e.fields.goal_string,promotion:e.fields.Promotion},e.id)})):Object(f.jsx)("p",{children:"Fetching value-shepherd if any uncompleted..."})})}var Ee={mobile:{breakpoint:{max:4e3,min:0},items:1}},Ge=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(pe.a,{responsive:Ee,showDots:!1,showArrows:!1,swipeable:!0,draggable:!0,removeArrowOnDeviceType:["desktop","tablet","mobile"],children:Object(f.jsx)("div",{children:Object(f.jsx)(Ye,{})})})})}}]),n}(r.Component),Ke=new Date,ze=new Date;ze.setDate(Ke.getDate()-1);var _e=String(Ke.getDate()).padStart(2,"0"),Je=String(Ke.getMonth()+1).padStart(2,"0"),Ue=String(ze.getDate()).padStart(2,"0"),He=String(ze.getMonth()+1).padStart(2,"0");Ke=_e+"/"+Je,ze=Ue+"/"+He;var Qe=new g.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");var qe=function(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),o=n[0];return n[1],console.log(o),Object(f.jsx)(v.a,{children:Object(f.jsx)("div",{className:"grid mx-auto max-w-2xl",children:Object(f.jsxs)("div",{className:"grid md:m-4 m-2 md:gap-4 gap-2 content grid-cols-1",children:[Object(f.jsx)(y,{airtable:Qe}),Object(f.jsxs)("ul",{className:"grid sm:grid-cols-5 grid-cols-4 gap-2",children:[Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/yesterday",text:"Review"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/values",text:"Values"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/today",text:"Plan"})}),Object(f.jsx)("li",{children:Object(f.jsx)(O,{to:"/propositions",text:"Today"})}),Object(f.jsx)("li",{children:Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://airtable.com/tblJy7BTWYrsbf5M5/viwlybKN4v201IY8V?blocks=hide",className:"block rounded-lg py-2 px-3 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border sm:block hidden",children:"Schedule"})})})]}),Object(f.jsx)(A.b,{path:"/yesterday",component:Ne}),Object(f.jsx)(A.b,{path:"/values",component:Ge}),Object(f.jsx)(A.b,{path:"/today",component:Fe}),Object(f.jsx)(A.b,{path:"/propositions",component:I}),Object(f.jsx)(A.a,{exact:!0,from:"/",to:"/propositions"})]})})})};s.a.render(Object(f.jsx)(qe,{tasks:[]}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.268702b0.chunk.js.map