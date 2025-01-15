import{g as k,o as s,c,a as y,C as u,G as h,u as n,E as f,t as M,b as p,Y as C,X as R,k as g,l as $,Q as V,h as F}from"./js/runtime-dom.esm-bundler.5c3c7d72.js";import{c as T,b as U}from"./js/vue-router.2f910c93.js";import{e as P,l as x}from"./js/index.7c01c5f2.js";import{l as B}from"./js/index.8c70464a.js";import{e as v,y as j,c as D,J as q}from"./js/index.62477ee8.js";import{d as w,a as W}from"./js/Caret.d9cc70ba.js";import{o as N,m as O,i as z}from"./js/helpers.9b039fd1.js";import{i as G}from"./js/isEqual.4981d166.js";import"./js/translations.d159963e.js";import{l as I}from"./js/index.d80c2c2c.js";import{_ as Q}from"./js/default-i18n.20001971.js";import{M as H}from"./js/Modal.849350d3.js";import{_ as J}from"./js/ScoreButton.78818232.js";import{S as b}from"./js/LogoGear.cb664d3b.js";import"./js/_plugin-vue_export-helper.eefbdd86.js";import"./js/helpers.c7282833.js";import"./js/metabox.8dab9766.js";import"./js/cleanForSlug.c4a9e111.js";import"./js/toString.a2dfb892.js";import"./js/_baseTrim.11b89ad9.js";import"./js/_stringToArray.f9ddb970.js";import"./js/_baseSet.ab668497.js";import"./js/regex.8a6101c0.js";import"./js/_baseIsEqual.44a599a3.js";import"./js/_getTag.805e37e1.js";import"./js/App.b582c12e.js";/* empty css                */import"./js/LicenseKeyBar.63474522.js";import"./js/ScrollTo.81bea8a7.js";import"./js/params.af7ed354.js";import"./js/allowed.c5017e4f.js";import"./js/constants.24c44c43.js";import"./js/SettingsRow.9f92e269.js";import"./js/Row.df38a5f6.js";import"./js/Checkbox.6db0b9ed.js";import"./js/Checkmark.e40641dd.js";import"./js/Url.3a754ef4.js";import"./js/Tabs.7a016195.js";import"./js/ProBadge.751e0b85.js";import"./js/Information.13e8cece.js";import"./js/Slide.39c07c03.js";import"./js/Index.9bf18920.js";import"./js/MaxCounts.7c38e980.js";import"./js/Tags.103f5786.js";import"./js/Tooltip.73441134.js";import"./js/Ellipse.e3ae0692.js";import"./js/Eye.8dc261a7.js";import"./js/debounce.d28a679a.js";import"./js/toNumber.9174f39a.js";import"./js/toFinite.a7fa1cc6.js";import"./js/TruSeoScore.8d32b7a8.js";import"./js/Statistics.2cff8c0a.js";import"./js/Plus.426117bd.js";import"./js/RadioToggle.333e7750.js";import"./js/GoogleSearchPreview.7b5bf30a.js";import"./js/HtmlTagsEditor.744f9f96.js";import"./js/Editor.34061631.js";import"./js/_baseClone.04585615.js";import"./js/_arrayEach.6af5abac.js";import"./js/UnfilteredHtml.8cfccf1f.js";import"./js/popup.3e33f8c7.js";import"./js/SetupWizardStore.f7bc7af4.js";import"./js/datetime.f197aeae.js";import"./js/license.20795cf4.js";import"./js/upperFirst.eac3a366.js";import"./js/Mobile.ada2591a.js";import"./js/Settings.8166179e.js";import"./js/TableOfContentsStore.4a96d77f.js";import"./js/vue3-apexcharts.57b6886c.js";import"./js/ConnectCta.31b92f22.js";import"./js/GoogleSearchConsole.59dc6246.js";import"./js/Index.0e872043.js";import"./js/Blur.edde4939.js";import"./js/Graph.f19a86b9.js";import"./js/numbers.9fc174f3.js";import"./js/WpTable.b5a0979d.js";import"./js/Table.50d8ec51.js";import"./js/Download.17eb5e1f.js";import"./js/RequiredPlans.97e0043b.js";import"./js/addons.274d2a7a.js";import"./js/PostTypes.dafa8837.js";import"./js/External.3b8c2917.js";import"./js/InternalOutbound.8d129cbf.js";import"./js/Image.68a4ffc1.js";import"./js/FacebookPreview.324acf8f.js";import"./js/Img.90c4fd14.js";import"./js/Profile.ad607616.js";import"./js/ImageUploader.4861085d.js";import"./js/TwitterPreview.6c32e38c.js";import"./js/Book.74a13fcd.js";import"./js/Build.b598c742.js";import"./js/Redirects.40a4ab5f.js";import"./js/Index.7d91a986.js";import"./js/JsonValues.3fcfec97.js";import"./js/External.c9d4f255.js";import"./js/escapeRegExp.622432b4.js";import"./js/Exclamation.22e53a8b.js";import"./js/Gear.bd4e1565.js";import"./js/date.a32abd75.js";import"./js/DatePicker.24f35bd1.js";import"./js/Calendar.b69b61c4.js";import"./js/pick.aeb091b6.js";import"./js/Card.da4d4921.js";import"./js/Upsell.78bd0d1e.js";let S={};const X=()=>{const o={...S},t=N();G(o,t)||(S=t,O())},Y=()=>{const o=v();o.saveCurrentPost(o.currentPost).then(()=>{j().fetch()})},K=()=>{var e;const{vc:o,vc_mode:t}=window;return t==="admin_frontend_editor"?o.builder.getContent():((e=document.querySelector("#content"))==null?void 0:e.value)||""},l=async()=>{v().processContent({content:K()}).finally(()=>{X()})},Z=({vc:o})=>{l(),o.events.on("shortcodeView:updated",()=>{w(l,1e3)}),o.shortcodes.on("sync",()=>{w(l,1e3)}),["#vc_button-update","#vc_button-save-draft","#vc_button-save-as-pending"].forEach(t=>{var e;(e=document.querySelector(t))==null||e.addEventListener("click",Y)})},tt={class:"aioseo-limit-modified-date-wpbakery"},ot={key:0,class:"aioseo-limit-modified-date-wpbakery__options"},et={__name:"App",props:{buttonTitle:String,buttonEvent:String},setup(o){const t=k(!1),e=o,a=()=>{t.value=!1,P.emit(e.buttonEvent)};return(r,m)=>(s(),c("div",tt,[y("div",{class:"aioseo-limit-modified-date-wpbakery__toggle",onClick:m[0]||(m[0]=f(d=>t.value=!t.value,["prevent"]))},[u(n(W),{class:h({rotated:t.value})},null,8,["class"])]),t.value?(s(),c("div",ot,[y("div",{class:"aioseo-limit-modified-date-wpbakery__option",onClick:f(a,["prevent"])},M(e.buttonTitle),1)])):p("",!0)]))}},i={id:"aioseo-limit-modified-date-wpbakery",param:"aioseo_limit_modified_date",event:"save-limit-modified-date",title:Q("Update (Don't Modify Date)","all-in-one-seo-pack"),flag:!1},_=()=>document.getElementById("vc_button-update"),it=()=>{if(document.getElementById(i.id))return;const o=document.createElement("div");o.id=i.id,_().insertAdjacentElement("afterend",o);let t=C({...et,name:"Standalone/WPBakery/LimitModifiedDate"},{buttonTitle:i.title,buttonEvent:i.event});t=x(t),t=B(t),t=I(t),D(t),t.mount(`#${i.id}`)},rt=o=>{o(document).on("ajaxSend",function(t,e,a){const r=new URLSearchParams(a.data);r.get("action")!=="vc_save"||!i.flag||(r.set(i.param,!0),a.data=r.toString())}),P.on(i.event,()=>{i.flag=!0,_().click(),setTimeout(()=>{i.flag=!1})})},nt=({jQuery:o})=>{_()&&(it(),rt(o))},st={class:"aioseo-wpbakery-integration"},at={key:2,class:"aioseo-gear-icon"},E={__name:"App",props:{isFrontendEditor:Boolean},setup(o){const t=k(!1),{currentPost:e}=q(v());return(a,r)=>{const m=R("scroll-to");return s(),c("div",st,[o.isFrontendEditor?(s(),g(n(J),{key:0,"show-score":n(z)(),score:n(e).seo_score,class:h([t.value?"aioseo-score-button--active":""]),onClick:r[0]||(r[0]=f(d=>t.value=!t.value,["prevent"]))},{icon:$(()=>[u(n(b))]),_:1},8,["show-score","score","class"])):p("",!0),o.isFrontendEditor?(s(),g(n(H),{key:1,score:n(e).seo_score,"is-open":t.value,"onUpdate:isOpen":r[1]||(r[1]=d=>t.value=d)},null,8,["score","is-open"])):p("",!0),o.isFrontendEditor?p("",!0):V((s(),c("div",at,[u(n(b))])),[[m,{el:"#aioseo-settings",offset:-150}]])])}}},{vc:mt}=window,pt=()=>{const{vc_mode:o}=window,t=T({history:U(),routes:[{path:"/",component:E}]});let e=C({name:"Standalone/WPBakery",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>F(E)},{isFrontendEditor:o==="admin_frontend_editor"});e=x(e),e=B(e),e.use(t),t.app=e,D(e,t),e.mount("#aioseo-wpbakery")},A=()=>{pt(),Z(window),nt(window)};let L=!1;mt.events.on("app.render",()=>{A(),L=!0});window.addEventListener("load",()=>{L||A()});
