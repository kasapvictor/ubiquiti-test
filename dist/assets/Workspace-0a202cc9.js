import{r as w,u as ce,a as de,R as j,I as Le,b as o,c as Be,g as b,e as Ae,d as Fe,q as Ne,f as D,a7 as C,h as H,k as r,n as z,i as T,A as E,a1 as ue,X as pe,j as Re,Y as x,Z as F,D as N,a3 as he,a2 as G,l as me,p,G as _,Q as Ge,a8 as De,a9 as He,aa as qe,ab as Me,m as Ve,a4 as te,ac as Qe,a5 as Ue,a0 as Ye,a6 as Ke}from"./index-ed74213a.js";import{E as Xe}from"./ErrorBlock-2b216bce.js";import{C as Ze,P as Je,W as er}from"./Webflow-1e200305.js";import{p as xe,u as rr,C as q}from"./immer.esm-44995c49.js";import{a as ge}from"./effector-react-0e880687.js";import{G as fe,a as g}from"./GridRow-619c468c.js";import{I as tr}from"./IconTrash-867080ac.js";import{T as je}from"./Title-f1bbc2af.js";import{C as sr}from"./ComponentWithLoader-fd42129e.js";import{I as nr}from"./InlineInput-516170fd.js";import{C as v}from"./Center-3517d2ba.js";import{I as or}from"./IconExternalLink-61db176b.js";import{B as se}from"./Badge-b46cd7ee.js";import"./Grid-5bae0909.js";const be=w.createContext(null),ir=be.Provider,ar=()=>w.useContext(be);var lr=Object.defineProperty,$=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?lr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,oe=(e,t)=>{for(var s in t||(t={}))ve.call(t,s)&&ne(e,s,t[s]);if($)for(var s of $(t))we.call(t,s)&&ne(e,s,t[s]);return e},cr=(e,t)=>{var s={};for(var n in e)ve.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&$)for(var n of $(e))t.indexOf(n)<0&&we.call(e,n)&&(s[n]=e[n]);return s};const dr={size:"sm"},ye=w.forwardRef((e,t)=>{const s=ce("SwitchGroup",dr,e),{children:n,value:l,defaultValue:i,onChange:a,size:c,wrapperProps:d}=s,h=cr(s,["children","value","defaultValue","onChange","size","wrapperProps"]),[u,m]=de({value:l,defaultValue:i,finalValue:[],onChange:a}),y=W=>{const P=W.currentTarget.value;m(u.includes(P)?u.filter(I=>I!==P):[...u,P])};return j.createElement(ir,{value:{value:u,onChange:y,size:c}},j.createElement(Le.Wrapper,oe(oe({labelElement:"div",size:c,__staticSelector:"SwitchGroup",ref:t},d),h),n))});ye.displayName="@mantine/core/SwitchGroup";var ur=Object.defineProperty,pr=Object.defineProperties,hr=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,mr=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable,ae=(e,t,s)=>t in e?ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,gr=(e,t)=>{for(var s in t||(t={}))mr.call(t,s)&&ae(e,s,t[s]);if(ie)for(var s of ie(t))xr.call(t,s)&&ae(e,s,t[s]);return e},fr=(e,t)=>pr(e,hr(t));const jr={xs:o(16),sm:o(20),md:o(24),lg:o(30),xl:o(36)},br={xs:o(32),sm:o(38),md:o(46),lg:o(56),xl:o(72)},vr={xs:o(12),sm:o(14),md:o(18),lg:o(22),xl:o(28)},wr={xs:o(5),sm:o(6),md:o(7),lg:o(9),xl:o(11)},yr={xs:o(4),sm:o(5),md:o(6),lg:o(8),xl:o(10)};var Sr=Be((e,{radius:t,color:s,labelPosition:n,error:l},{size:i})=>{const a=b({size:i,sizes:vr}),c=b({size:t,sizes:e.radius}),d=e.fn.variant({variant:"filled",color:s}),h=b({size:i,sizes:br}),u=o(i==="xs"?1:2),m=e.fn.variant({variant:"filled",color:"red"}).background;return{root:{position:"relative"},input:{height:0,width:0,overflow:"hidden",whiteSpace:"nowrap",padding:0,WebkitClipPath:"inset(50%)",clipPath:"inset(50%)",position:"absolute"},track:fr(gr({},e.fn.focusStyles("input:focus + &")),{cursor:e.cursorType,overflow:"hidden",WebkitTapHighlightColor:"transparent",position:"relative",borderRadius:c,backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[2],border:`${o(1)} solid ${l?m:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}`,height:b({size:i,sizes:jr}),minWidth:h,margin:0,transitionProperty:"background-color, border-color",transitionTimingFunction:e.transitionTimingFunction,transitionDuration:"150ms",boxSizing:"border-box",appearance:"none",display:"flex",alignItems:"center",fontSize:b({size:i,sizes:wr}),fontWeight:600,order:n==="left"?2:1,userSelect:"none",zIndex:0,lineHeight:0,color:e.colorScheme==="dark"?e.colors.dark[1]:e.colors.gray[6],transition:`color 150ms ${e.transitionTimingFunction}`,"input:checked + &":{backgroundColor:d.background,borderColor:d.background,color:e.white,transition:`color 150ms ${e.transitionTimingFunction}`},"input:disabled + &":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],borderColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],cursor:"not-allowed",pointerEvents:"none"}}),thumb:{position:"absolute",zIndex:1,borderRadius:c,boxSizing:"border-box",display:"flex",backgroundColor:e.white,height:a,width:a,border:`${o(1)} solid ${e.colorScheme==="dark"?e.white:e.colors.gray[3]}`,left:u,transition:`left 150ms ${e.transitionTimingFunction}`,"& > *":{margin:"auto"},"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":""},"input:checked + * > &":{left:`calc(100% - ${a} - ${u})`,borderColor:e.white},"input:disabled + * > &":{borderColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],backgroundColor:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[0]}},trackLabel:{height:"100%",display:"grid",placeContent:"center",minWidth:`calc(${h} - ${a})`,paddingInline:b({size:i,sizes:yr}),margin:`0 0 0 calc(${a} + ${u})`,transition:`margin 150ms ${e.transitionTimingFunction}`,"input:checked + * > &":{margin:`0 calc(${a} + ${u}) 0 0`}}}});const _r=Sr;var kr=Object.defineProperty,Cr=Object.defineProperties,Pr=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?kr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,R=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&le(e,s,t[s]);if(O)for(var s of O(t))_e.call(t,s)&&le(e,s,t[s]);return e},Ir=(e,t)=>Cr(e,Pr(t)),zr=(e,t)=>{var s={};for(var n in e)Se.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&O)for(var n of O(e))t.indexOf(n)<0&&_e.call(e,n)&&(s[n]=e[n]);return s};const $r={offLabel:"",onLabel:"",size:"sm",radius:"xl",error:!1},M=w.forwardRef((e,t)=>{var s;const n=ce("Switch",$r,e),{className:l,color:i,label:a,offLabel:c,onLabel:d,id:h,style:u,size:m,radius:y,wrapperProps:W,children:P,unstyled:I,styles:Q,classNames:U,thumbIcon:ke,sx:Ce,checked:Pe,defaultChecked:Ie,onChange:Y,labelPosition:K,description:ze,error:X,disabled:Z,variant:J}=n,$e=zr(n,["className","color","label","offLabel","onLabel","id","style","size","radius","wrapperProps","children","unstyled","styles","classNames","thumbIcon","sx","checked","defaultChecked","onChange","labelPosition","description","error","disabled","variant"]),f=ar(),Oe=(f==null?void 0:f.size)||m,{classes:S,cx:Te}=_r({color:i,radius:y,labelPosition:K,error:!!X},{name:"Switch",classNames:U,styles:Q,unstyled:I,size:Oe,variant:J}),{systemStyles:Ee,rest:ee}=Ae($e),L=Fe(h),B=f?{checked:f.value.includes(ee.value),onChange:f.onChange}:{},[re,We]=de({value:(s=B.checked)!=null?s:Pe,defaultValue:Ie,finalValue:!1});return j.createElement(nr,R(R({className:Te(l,S.root),sx:Ce,style:u,id:L,size:(f==null?void 0:f.size)||m,labelPosition:K,label:a,description:ze,error:X,disabled:Z,__staticSelector:"Switch",classNames:U,styles:Q,unstyled:I,"data-checked":B.checked||void 0,variant:J},Ee),W),j.createElement("input",Ir(R({},ee),{disabled:Z,checked:re,onChange:A=>{f?B.onChange(A):Y==null||Y(A),We(A.currentTarget.checked)},id:L,ref:t,type:"checkbox",className:S.input})),j.createElement("label",{htmlFor:L,className:S.track},j.createElement("div",{className:S.thumb},ke),j.createElement("div",{className:S.trackLabel},re?d:c)))});M.displayName="@mantine/core/Switch";M.Group=ye;var Or=Ne("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);const k=({size:e="lg",fullWidth:t=!1})=>{const s=D(),{workspaceId:n}=C(),[l,i]=w.useState(!1),a=H(()=>T({url:`${E.SITE.ADD}?workspace_id=${n}`,method:ue.GET})),c=()=>{i(!0),a.mutateAsync({}).then(d=>{Tr({url:d,name:"Webflow",width:1200,height:820,cb:()=>{s.invalidateQueries(["workspace",n]).then(()=>i(!1))}})})};return r.jsx(z,{size:e,fullWidth:t,loading:l,onClick:c,children:"Add site"})},Tr=({cb:e,url:t,name:s,width:n=700,height:l=800})=>{const i=window.screen.width/2-n/2,a=window.screen.height/2-l/2,c=window.open(t,s,`toolbar=no,
    location=no,
    directories=no,
    status=no,
    menubar=no,
    scrollbars=no,
    resizable=no,
    copyhistory=no,
    width=${n},
    height=${l},
    top=${a},
    left=${i}`),d=setInterval(()=>{c&&c.closed&&(clearInterval(d),e())},100)},Er=()=>{const{t:e}=Re("translation",{keyPrefix:"faq"});return r.jsxs(x,{variant:"filled",children:[r.jsxs(x.Item,{value:"customization",children:[r.jsx(x.Control,{icon:r.jsx(F,{size:o(20)}),children:"Customization"}),r.jsx(x.Panel,{children:r.jsx(N,{children:r.jsx("div",{dangerouslySetInnerHTML:{__html:e("1")}})})})]}),r.jsxs(x.Item,{value:"flexibility",children:[r.jsx(x.Control,{icon:r.jsx(F,{size:o(20)}),children:"Flexibility"}),r.jsx(x.Panel,{children:r.jsx(N,{children:r.jsx("div",{dangerouslySetInnerHTML:{__html:e("2")}})})})]}),r.jsxs(x.Item,{value:"focus-ring",children:[r.jsx(x.Control,{icon:r.jsx(F,{size:o(20)}),children:"No annoying focus ring"}),r.jsx(x.Panel,{children:r.jsx(N,{children:r.jsx("div",{dangerouslySetInnerHTML:{__html:e("3")}})})})]})]})},Wr=()=>r.jsx(pe,{size:"xl",title:"FAQ",trigger:r.jsx(z,{size:"lg",variant:"light",fullWidth:!0,children:"FAQ"}),children:r.jsx(Er,{})}),Lr=({siteId:e})=>{const{colors:t}=he(),s=D(),{workspaceId:n}=C(),l=E.SITE.ARCHIVE.replace("{id}",e),i=H({mutationFn:()=>T({url:l}),onSuccess:()=>{s.setQueryData([Ge.WORKSPACE,n],a=>xe(a,c=>c.sites=c.sites.filter(d=>d.id!==Number(e))))}});return r.jsx(pe,{size:"sm",title:" ",trigger:r.jsx(G,{children:r.jsx(tr,{color:t.gray[6],size:"1rem"})}),children:r.jsx(Br,{onClick:i.mutate})})},Br=({onClick:e,onClose:t})=>r.jsxs(me,{direction:"column",children:[r.jsx(je,{order:2,mb:"sm",align:"center",children:"Are you sure sure?"}),r.jsx(p,{size:"sm",color:"dimmed",mb:"xl",align:"center",children:"The site will be permanently deleted"}),r.jsxs(_,{spacing:"0",children:[r.jsx(z,{size:"lg",mb:"md",fullWidth:!0,variant:"danger",onClick:()=>{e(),t&&t()},children:"Yes! Do It!"}),r.jsx(z,{size:"lg",variant:"light",fullWidth:!0,onClick:t,children:"No, I changed my mind"})]})]}),V=De(""),{setSearch:Ar}=He(V,{setSearch:(e,t)=>t}),Fr=({siteId:e,status:t})=>{const s=D(),{workspaceId:n}=C(),[l,i]=w.useState(t),a=rr(),c=E.SITE.SWITCH_STATUS.replace("{id}",e),d=H({mutationFn:()=>T({url:c}),onSuccess:()=>{s.setQueryData(["workspace",n],h=>xe(h,u=>{const m=u.sites.find(y=>y.id===Number(e));m&&(m.active=m.active===1?0:1)})),i(!l)},onError:h=>{a.error({message:h})}});return r.jsx(sr,{isLoading:d.isLoading,component:r.jsx(M,{color:"green.6",checked:l,onChange:()=>d.mutate()})})},Nr=({sites:e})=>r.jsxs(r.Fragment,{children:[r.jsx(Rr,{}),r.jsx(Gr,{}),r.jsx(Dr,{sites:e})]}),Rr=()=>{const e=ge(V);return r.jsx(qe,{p:"sm",pl:"md",value:e,icon:r.jsx(Or,{size:"0.9rem"}),placeholder:"Search by website name",sx:{flex:1,input:{border:"none"}},onChange:t=>Ar(t.target.value)})},Gr=()=>r.jsxs(fe,{columns:24,isHeader:!0,withTopBorder:!0,children:[r.jsx(g,{span:14,children:r.jsx(p,{transform:"uppercase",size:"xs",weight:"400",children:"Websites"})}),r.jsx(g,{span:2,children:r.jsx(v,{children:r.jsx(p,{transform:"uppercase",size:"xs",weight:"400",children:"Messages"})})}),r.jsx(g,{span:2,children:r.jsx(v,{children:r.jsx(p,{transform:"uppercase",size:"xs",weight:"400",children:"Forms"})})}),r.jsx(g,{span:2,children:r.jsx(v,{children:r.jsx(p,{transform:"uppercase",size:"xs",weight:"400",children:"Status"})})})]}),Dr=({sites:e})=>{const t=ge(V),s=e.filter(n=>{const l=t.toLowerCase().trim();return n.title.toLowerCase().includes(l)});return r.jsxs(r.Fragment,{children:[!s.length&&r.jsxs(p,{p:"lg",children:["Nothing with: ",t]}),!!s.length&&s.map(n=>r.jsx(Hr,{site:n},n.id))]})},Hr=({site:e})=>{const{colors:t}=he(),{workspaceId:s}=C(),{active:n,id:l,title:i}=e,a=e.domains.find(c=>!!c.active)||e.domains[0];return r.jsxs(fe,{columns:24,disabled:!n,children:[r.jsx(g,{span:14,children:r.jsxs(_,{align:"start",children:[r.jsx(Me,{mih:40,miw:40,children:l}),r.jsxs(me,{direction:"column",children:[r.jsx(p,{size:"md",weight:500,children:i}),r.jsx(Ve,{size:"xs",href:`https://${a}`,target:"_blank",rel:"noreferrer",children:r.jsxs(_,{spacing:4,children:[r.jsx(p,{children:a.domain})," ",r.jsx(or,{size:"0.8rem"})]})})]})]})}),r.jsx(g,{span:2,children:r.jsx(v,{children:r.jsx(se,{children:"0"})})}),r.jsx(g,{span:2,children:r.jsx(v,{children:r.jsx(se,{children:"0"})})}),r.jsx(g,{span:2,children:r.jsx(v,{children:r.jsx(Fr,{siteId:String(e.id),status:!!e.active})})}),r.jsx(g,{span:4,children:r.jsxs(_,{position:"right",spacing:"xl",children:[r.jsx(Lr,{siteId:String(e.id)}),r.jsx(te,{to:`/site/${e.id}/settings`,children:r.jsx(G,{children:r.jsx(Qe,{color:t.gray[6],size:"1rem"})})}),r.jsx(te,{to:`/workspace/${s}/site/${e.id}`,children:r.jsx(G,{children:r.jsx(Ue,{color:t.gray[6],size:o(16)})})})]})})]})},qr=()=>{const{workspaceId:e}=C(),t=E.SITE.LIST.replace("{id}",e??"0");return Ye({queryFn:()=>T({url:t,method:ue.GET}),queryKey:["workspace",e],enabled:!!e,refetchOnWindowFocus:!1,refetchOnMount:!1,staleTime:1/0,cacheTime:1/0,retry:2})},lt=()=>{var t;const e=qr();return e.isLoading?r.jsx(Mr,{}):e.isError?r.jsx(Vr,{error:e.error}):(t=e.data)!=null&&t.sites.length?r.jsx(q,{title:"Added sites",pb:0,titleSize:"lg",topButton:r.jsx(k,{}),withHeaderBottomBorder:!0,children:r.jsx(Nr,{sites:e.data.sites})}):r.jsx(Qr,{})},Mr=()=>r.jsx(q,{title:"Added sites",titleSize:"lg",topButton:r.jsx(k,{}),withHeaderBottomBorder:!0,children:r.jsxs(_,{px:"1.85rem",pt:"xl",pb:"xs",children:[r.jsx(p,{children:"Loading ..."})," ",r.jsx(Ke,{size:"1rem"})]})}),Vr=({error:e})=>r.jsx(q,{title:"Added sites",titleSize:"lg",topButton:r.jsx(k,{}),withHeaderBottomBorder:!0,children:r.jsx(Xe,{px:"lg",children:r.jsxs(p,{children:[e,"lalla"]})})}),Qr=()=>r.jsxs(r.Fragment,{children:[r.jsx(Ze,{title:"Add sites",children:r.jsx(k,{})}),r.jsxs(Je,{icon:r.jsx(er,{}),children:[r.jsx(je,{order:1,children:"Integrate with Webflow"}),r.jsx(p,{align:"center",color:"dimmed",mb:"lg",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aspernatur ducimus fugit minus obcaecati, quod totam veniam?"}),r.jsx(k,{fullWidth:!0}),r.jsx(Wr,{})]})]});export{lt as default};