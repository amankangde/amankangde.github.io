import{i as n,j as e,k as p,l as d,m as c,e as i,n as u,R as g,g as x,P as f,h}from"../chunks/chunk-rDk7AD_c.js";const j=({data:o})=>{const{pageMeta:t}=o,{origin:r}=new URL(o.url),s={"@context":"https://schema.org","@type":"WebSite",name:p,url:r};let l=t.socialImageUrl;return t.socialImageAssetName&&(l=`${r}${n({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:p}),l&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:m})=>e.jsx("meta",{property:a,content:m},a)),d&&e.jsx("link",{rel:"icon",href:n({src:d.name,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),c.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),u.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"image"},a.id))]})},y=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),S=({data:o})=>{const{system:t,resources:r,url:s}=o;return e.jsx(g.Provider,{value:{imageLoader:n,assetBaseUrl:i,imageBaseUrl:x,resources:r},children:e.jsx(f,{system:t},s)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}}};export{T as configValuesSerialized};
