import{$ as g,k as s,h as w,i as h,A as j,E as y,H as b,J as L,j as l,l as p,p as u,G as c,n as m,K as k,F as n,P as E,M as T,N as F,O as N,r as _,S as A,U as C,V as v,C as H,m as z,L as M,b as S}from"./index-ed74213a.js";import{a as d}from"./effector-react-0e880687.js";import{E as x}from"./ErrorBlock-2b216bce.js";import{V as O,I as G}from"./VerifyEmailForm-6fb13799.js";import{S as U}from"./SuccessBlock-d7ef8ef1.js";import{P as W,I,a as P,b as R}from"./is-email-37029383.js";import{I as D}from"./IconReload-e57a2e11.js";import{u as $}from"./use-form-721559d2.js";import{m as B}from"./matches-field-125e59be.js";import{H as V}from"./HeaderBlock-c2289573.js";import{C as q}from"./Center-3517d2ba.js";import{I as Q}from"./IconArrowNarrowRight-5e7e299d.js";import"./IconMail-ecf3bd8a.js";import"./Title-f1bbc2af.js";const J=()=>w({mutationFn:({email:e})=>h({url:j.AUTH.REQUEST_PIN,data:{email:e,type:y.PASSWORD_RESET}}),networkMode:"always",onSuccess:(e,r)=>{b(r.email),L()}}),K=()=>{const e=d(g),r=J();return s.jsxs(s.Fragment,{children:[r.error&&s.jsx(x,{reset:r.reset,children:r.error}),s.jsx(O,{email:e,verifyFn:r,label:"Email",buttonText:"Next"})]})},Y=({email:e})=>h({url:j.AUTH.REQUEST_PIN,data:{email:e,type:y.PASSWORD_RESET}}),X=()=>{const e=d(g);return w({mutationFn:()=>Y({email:e||""}),networkMode:"always"})},Z=({password:e,passwordConfirmation:r,pin:o,email:t})=>h({url:j.AUTH.PASSWORD_RESET,data:{password:e,password_confirmation:r,code:o,email:t}}),ss=()=>{const e=d(g),r=T(),{t:o}=l("translation",{keyPrefix:"auth"});return w({mutationFn:t=>Z({...t,email:e||""}),networkMode:"always",onSuccess:()=>{F.show({color:"teal",title:o("reset-password.notify.success-title"),message:o("reset-password.notify.success-text"),icon:s.jsx(N,{size:"1rem"})}),r("/sign-in")}})},es=()=>{const{t:e}=l("translation",{keyPrefix:"auth"});return $({initialValues:{pin:"",password:"",passwordConfirmation:""},validate:{pin:r=>`${r}`.length<n.PIN_MIN_LENGTH?e("verify.error"):null,password:r=>r.length<n.PASSWORD_MIN_LENGTH?e("password.error",{count:n.PASSWORD_MIN_LENGTH}):null,passwordConfirmation:B("password",e("password.confirm.error"))}})},rs=()=>{var f;const e=es(),{t:r}=l("translation",{keyPrefix:"auth"}),o=ss(),t=X();return s.jsxs(s.Fragment,{children:[o.error&&s.jsx(x,{reset:o.reset,children:o.error}),t.error&&s.jsx(x,{reset:t.reset,children:t.error}),t.isSuccess&&s.jsx(U,{reset:t.reset,children:r("password-reset.resend-ok")}),s.jsxs("form",{onSubmit:e.onSubmit(i=>{t.reset(),o.mutate(i)}),autoComplete:"new-password",children:[s.jsxs(p,{align:"center",direction:"column",gap:"lg",children:[s.jsx(W,{size:"lg",autoFocus:!0,length:6,oneTimeCode:!0,type:"number",...e.getInputProps("pin"),disabled:o.isLoading||t.isLoading}),s.jsx(u,{size:"sm",align:"center",color:"dimmed",children:r("password-reset.notice")}),s.jsxs(c,{spacing:"md",children:[s.jsx(m,{onClick:()=>k(),size:"xs",variant:"light",disabled:o.isLoading||t.isLoading,children:s.jsxs(c,{spacing:4,children:[s.jsx(G,{size:"0.75rem"}),s.jsx(u,{children:r("password-reset.prev")})]})}),s.jsx(m,{size:"xs",variant:"light",onClick:()=>{o.reset(),t.mutate()},loading:t.isLoading,disabled:o.isLoading||t.isLoading,children:s.jsxs(c,{spacing:4,children:[r("password-reset.resend"),s.jsx(D,{size:"0.9rem"})]})})]})]}),((f=e.values.pin)==null?void 0:f.length)===n.PIN_MIN_LENGTH&&s.jsxs(p,{align:"center",direction:"column",gap:"lg",w:"100%",mt:"md",children:[s.jsx(E,{withAsterisk:!0,autoComplete:"new-password",icon:s.jsx(I,{size:"1rem"}),...e.getInputProps("password"),label:r("password-reset.password.label"),disabled:o.isLoading||t.isLoading,placeholder:`${r("password-reset.password.placeholder",{count:n.PASSWORD_MIN_LENGTH})}`,visibilityToggleIcon:({reveal:i,size:a})=>i?s.jsx(P,{size:a}):s.jsx(R,{size:a})}),s.jsx(E,{withAsterisk:!0,icon:s.jsx(I,{size:"1rem"}),autoComplete:"new-password-confirm",disabled:o.isLoading||t.isLoading,label:r("password-reset.password.confirm.label"),...e.getInputProps("passwordConfirmation"),placeholder:`${r("password-reset.password.confirm.placeholder")}`,visibilityToggleIcon:({reveal:i,size:a})=>i?s.jsx(P,{size:a}):s.jsx(R,{size:a})}),s.jsx(m,{fullWidth:!0,size:"lg",type:"submit",disabled:o.isLoading||t.isLoading,loading:o.isLoading,children:r("password-reset.submit")})]})]})]})},ts=()=>{const e=d(v);return _.useEffect(()=>()=>{A(),C()},[]),s.jsxs(s.Fragment,{children:[e===1&&s.jsx(K,{}),e===2&&s.jsx(rs,{})]})},os=()=>{const{t:e}=l("translation",{keyPrefix:"auth"});return s.jsx(V,{title:e("password-reset.title"),children:s.jsx(u,{size:"sm",align:"center",color:"dimmed",children:e("password-reset.subtitle")})})},is=()=>{const{t:e}=l("translation",{keyPrefix:"auth"});return s.jsx(q,{children:s.jsxs(z,{component:M,to:"/sign-in",size:"sm",sx:{display:"flex",alignItems:"center",gap:S(2)},children:[e("password-reset.back-to"),e("sign-in.title"),s.jsx(Q,{size:S(12)})]})})},Es=()=>s.jsx(H,{maw:420,pt:60,h:"100%",py:"lg",children:s.jsxs(p,{gap:"lg",direction:"column",justify:"center",h:"100%",children:[s.jsx(os,{}),s.jsx(ts,{}),s.jsx(is,{})]})});export{Es as default};