import{j as c,f as w,l as y,m as g,P as d,a,b as o,s as e,p as t,R as j,i as u,d as p,e as k}from"../chunks/chunk-DTcmt_sX.js";import{f as n}from"../chunks/chunk-Doo1F7mT.js";/* empty css                      */const x="AmanKangde | Game Developer Portfolio | Game Programmer Portfolio ",v="favicon-96x96_fXMN5JJ11fZWqLqjDH_F8.png",b=["Roboto-Medium_Sop9HdGzM3zsJLIcxuAb8.ttf","Roboto-Light_7yyMDHFerdlAfgfclhr4Q.ttf","Roboto-BoldItalic_eHh3A3pEqAAvVk6RrwSMa.ttf","Roboto-Thin_TarShzOF2MEm4ku0uOO07.ttf","Roboto-LightItalic_LyIHEuspeImgpfu7rcv6L.ttf","Roboto-Italic_wPA1a-_8jsNm1scL2Vhv4.ttf","Roboto-Bold_Z2z6fu3glYKM_OCGBmT7n.ttf","Roboto-Regular_Iakdi5Y2ev1m7z6uE_4Ip.ttf","Roboto-MediumItalic_vOsTXlQi5gCdCK5ZC7SH0.ttf","Roboto-BlackItalic_EYyTqNh_LcStP7cW2zgEX.ttf","Roboto-Black_OOAshRDRH1O3baOeVm9iF.ttf","Roboto-ThinItalic_oPeuURPv-hgWOWpOmpDNp.ttf"],z=["tbrender_001_99j_XGHSJx16xdForG89h.jpg","Zoro_vpfgGlwyy6mG_WYgjz51w.jpg","catdragon1_(1)_Sq9CpSqSX6NoMIvEEkPmD.jpg","With_Details_added_PF6-faXknA-kVinGcKmtn.jpg","landingpagebg_2SLDMxzJp5SYKp0epuC02.jpg","tbrender_003_HgLiqPB24mMNVb2afR5eB.jpg","Astranaut_final_output_RP2Uls0dqo_ILiwCVkWII.jpg","desert_5XuDymKct0FVyA8vg_azR.jpg","Unreal_output1_qusTJftlwtnxowATo7sZr.jpg","Aqua_Man_Final_pQbX2Ap3FhF0PoDDPk_DH.jpg","2nd_Mermaid_Final_i6G_YdQSINnLFucP1pKWi.jpg"],q=i=>c.jsxs(w,{className:"w-body c1h0x9nu c1fcf6ik c1ud3tdx c1dqak3p c1p4e2xu c2c6xvq cid7ev6 c160afhs cj0cb1l cd9dz6m cz2bdwf c1s4ypa2 c1sorqjv c2afyib ccw662a c13hppt6 c1f1u29k cvi6s9s c1xxuzk",children:[c.jsx(y,{children:c.jsxs(g,{children:[c.jsx(d,{code:'<script>(function(factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof module!=="undefined"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset==="number"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener("scroll",onScroll,true);window.removeEventListener("resize",onResize,true);window.removeEventListener("load",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector==="string"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener("resize",onResize,true);window.addEventListener("scroll",onScroll,true);window.addEventListener("load",onLoad,true);onResize()}function init(){if(!selector){console.error("must pass selector");return false}setupElements();if(!elements||!elements.length){console.error("no els found");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),c.jsx(d,{code:`<style>
:root {
  --ani-duration: var(--duration-default, .2s);
  --ani-delay: 0s;
  --ani-slide-offset: 20%;
  --ani-zoom-in-scale: 1;
  --ani-zoom-out-scale: .85;
  --ani-flip-rotate: 30deg;
  --ani-easing: var(--easing-default, ease);
  --ani-fill-mode: forwards;
}
[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}
@keyframes fadeIn{from{opacity:0}
to{opacity:1}}
@keyframes fadeOut{from{opacity:1}
to{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}
@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}
to{opacity:1;translate:none}}
@keyframes slideOut{from{opacity:1;translate:none}
to{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}
@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}
to{opacity:1;scale:1}}
@keyframes zoomOut{from{opacity:1;scale:1}
to{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}
@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}
to{rotate:y 0;opacity:1}}
@keyframes flipOutY{from{rotate:y 0;opacity:1}
to{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}
@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}
to{rotate:x 0;opacity:1}}
@keyframes flipOutX{from{rotate:x 0;opacity:1}
to{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}
@keyframes expandDown{from{height:0}
to{height:var(--newHeight)}}
@keyframes expandUp{from{height:var(--newHeight)}
to{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}
@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}
</style>`,className:"w-html-embed"}),c.jsx(d,{code:'<script type="module">\nconst config = {\n	intersectionOffset: 0.2,\n	intersectionOnce: true,\n	progressOffset: 0,\n	progressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a="progress"===e;return enterView({selector:r,enter:e=>!a&&t(e,"in","out"),exit:e=>!a&&t(e,"out","in"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute("data-ani-progress")?r.getAttribute("data-ani-progress"):e.getAttribute("data-ani-progress"),s=parseFloat(getComputedStyle(e).getPropertyValue("--ani-slide-offset"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue("--ani-flip-rotate"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue("--ani-zoom-out-scale"))||1);switch(n){case"slide-up":return`translateY(${(1-t)*s}px)`;case"slide-down":return`translateY(-${(1-t)*s}px)`;case"slide-left":return`translateX(${(1-t)*s}px)`;case"slide-right":return`translateX(-${(1-t)*s}px)`;case"flip-x":return`rotateX(${(1-t)*a}deg)`;case"flip-y":return`rotateY(${(1-t)*a}deg)`;case"zoom":return`scale(${o})`;default:return"none"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?\'[data-ani-children="true"] > *\':\':not([data-ani-children="true"])\'}`;return Array.from(document.querySelectorAll(r))}const n=[...r("data-ani"),...r("data-ani",!0)],s=[...r("data-ani-progress"),...r("data-ani-progress",!0)];n.length&&e({trigger:"intersection",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:"progress",selector:s,offset:config.progressOffset,once:config.progressOnce});\n<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]})}),c.jsx(d,{code:`<style>
  .demo-ani-motion {
    --ani-duration: 1s;
  }
</style>`,className:"w-html-embed"}),c.jsxs(a,{className:"w-box cvkckv6 cz2bdwf c1s4ypa2 c1erqoxd c1lymv48 c2afyib c1nuwo3l c1g6rofr cr0q0p1 c1u75sai ccoa5r cfxym3l civlday cbgr2xx c40a07 c6f3i4u cviayqa c13hppt6 c1oowefl c1ni8vj cw61n8i cqoa28d cjx46vi chkfdeq c160afhs cj0cb1l c1ujrs8b cu0zff1 cbt1nsy c18zz1q9",children:[c.jsxs(a,{className:"w-box cd9dz6m cz2bdwf c1s4ypa2 c5zws24 c1nb64q3 c1y4yuef",children:[c.jsx(o,{href:"/about-me-or-aman-kangde-or-game-programmer-or-game-developer",target:"_self",className:"w-link c7s8dzv c1kp3i04 c1igxz0h c17q93yr cjhhpuq c1oztfde c1l15mcd c1cotgea c19uwc7l cu8s5rj c1db964m c68ajjt ccw662a c1fip0r8 c16j6uqx ckh88ws c1emau58 cltw4ad cg8ckm3 c1j3xshe cx5663d c1ehzfsg c1v47cmq c1unkvnm ct2vt4s cy60rl6 c1sfu9eb c15pgdez clhlpg2 c1dwxf7z cuzzsyn cwgbvh6 c5dlqll cbwfq2h c1l1j842",children:"ABOUT"}),c.jsx(o,{href:"/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link c7s8dzv c1kp3i04 c1igxz0h c17q93yr cjhhpuq c1oztfde c1l15mcd c1cotgea c19uwc7l cu8s5rj c1db964m c68ajjt c1drh4rh c1fip0r8 c16j6uqx ckh88ws c1emau58 cltw4ad cg8ckm3 c1j3xshe cx5663d c1ehzfsg c1v47cmq c1unkvnm ct2vt4s cy60rl6 c1sfu9eb c15pgdez clhlpg2 c1dwxf7z cuzzsyn c5dlqll cwgbvh6 cbwfq2h",children:"GAMES"}),c.jsx(o,{href:"/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link c7s8dzv c1kp3i04 c1igxz0h c17q93yr cjhhpuq c1oztfde c1l15mcd c1cotgea c19uwc7l cu8s5rj c1db964m c68ajjt c1drh4rh c1fip0r8 c16j6uqx ckh88ws c1emau58 cltw4ad cg8ckm3 c1j3xshe cx5663d c1ehzfsg c1v47cmq c1unkvnm c16bie0q cy60rl6 c1sfu9eb c15pgdez clhlpg2 c1dwxf7z cuzzsyn cwgbvh6 c5dlqll",children:"EXTRAS"}),c.jsx(o,{href:"/",className:"w-link c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 clpchwr ckh88ws cvi6s9s c1emau58 c1sn1dll c15pgdez cg1o0ha c1g45bbr c18i0n1f casrry8 c1p6tfwy cmjm5nq c147z5m4 c1cr14dd c969t7o cbmdg92 c798j6q",children:"X"})]}),c.jsx(e,{className:"w-text c1k2zur7 c1emau58 clk84jn ckh88ws cctemud c1f1u29k c1nu98lx c18uhatc c15pgdez c1p6tfwy cm57z0r c1cf0q2m cumkra5 cnpxgo2 c5dlqll cdfxi7v",children:"extras"}),c.jsx(a,{className:"w-box cnazolu cc6vflo c5zws24 c1nb64q3 c6p293z csiwqgm c1e8zuci crkkc95 cvkckv6 cz2bdwf c1s4ypa2 c1fip0r8 c11q0357 clpchwr c1iz8b5k c15aqwnb c166y50u c1gfhj91 creydqm cnff8qn c160afhs cj0cb1l c1g6rofr cr0q0p1 c1u75sai ccoa5r c1hjkih9 c1wxjzjc cnm7ee6 czq155n",children:c.jsx(a,{className:"w-box c1rh2dou c1e8zuci c4uw5fy cd9dz6m c1sfu9eb cz2bdwf c1s4ypa2 c1emv663 c1fip0r8 cj8ca6n c1ypo346 c33zfo2 c1rkilre c1q7xjgq c1hvsmdr c6sskog c1jdcgh7 c18rrbfy cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq cid7ev6 c1y9e0e4 czl1web c1w2o3dg c1xh0xsq cbuualy"})}),c.jsxs(e,{className:"w-text c5zws24 c1nb64q3 c3phcrh c1emau58 ckh88ws c15bp894 c1nu98lx c1s2sf7x cumkra5 c1f1u29k c1x719cy c127mafx cjrbfdx cjvlcpu",children:[c.jsx(e,{tag:"span",className:"w-text c13o5k7a",children:"- 2d works -"}),c.jsx(t,{className:"w-separator c1fyeg9z c1u5v3wu c1f1u29k cmnn8e3 c774fpv cpbf8u8 c1ichei8 c43h1ay cto1khr c1u5r66t cwuqf77 c1rkyfp9 c1p6tfwy cdfxi7v c1i8iudx cjvlcpu"})]}),c.jsxs(a,{"data-ani-progress":"flip-y","data-ani-children":"true",className:"w-box cd9dz6m cz2bdwf c1s4ypa2 cunvofv c1rf34tp",children:[c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c1pk78z4 cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d cbuualy cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"Khonshu"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 c6r3wlc ck6frnr",children:"🎨digital illustration"})]})]}),c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c37638v cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d c1hjoqom cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"evil mermaid"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 c6r3wlc ck6frnr",children:"🎨digital illustration"})]})]}),c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl cnazolu ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c1kagepf cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d cbuualy cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"multiverse"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 c6r3wlc ck6frnr",children:"🎨digital illustration"})]})]}),c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl cnazolu ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c1xj8wk8 cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d c1hjoqom cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"Aqua man"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 ck6frnr c6r3wlc",children:"🎨digital illustration"})]})]}),c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl cnazolu ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c1do87sl cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d c1hjoqom cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"astronaut"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 c6r3wlc ck6frnr",children:"🎨digital illustration"})]})]}),c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl cnazolu ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l coalilc cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d cbuualy cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"2d cat dragon"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 ck6frnr c6r3wlc",children:"🎨2d concept art"})]})]})]}),c.jsxs(e,{className:"w-text c5zws24 c1nb64q3 c3phcrh c1emau58 ckh88ws c15bp894 c1nu98lx c1s2sf7x cumkra5 c1f1u29k c1x719cy c127mafx cjrbfdx cjvlcpu",children:[c.jsx(e,{tag:"span",className:"w-text c13o5k7a",children:"- 3d works -"}),c.jsx(t,{className:"w-separator c1fyeg9z c1u5v3wu c1f1u29k cmnn8e3 c774fpv cpbf8u8 c1ichei8 c43h1ay cto1khr c1u5r66t cwuqf77 c1rkyfp9 c1p6tfwy cdfxi7v c1i8iudx cjvlcpu"})]}),c.jsxs(a,{"data-ani-progress":"flip-y","data-ani-children":"true",className:"w-box cd9dz6m cz2bdwf c1s4ypa2 c1fihbfn cunvofv c1rf34tp",children:[c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl cnazolu ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c4kf35w cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d cbuualy cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"3d cat dragon"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 ck6frnr c6r3wlc",children:"🎁3d model"})]})]}),c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl cnazolu ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c1wodxj8 cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d cbuualy cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"3d ak47"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 ck6frnr c6r3wlc",children:"🎁3d model"})]})]}),c.jsxs(a,{className:"w-box c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 c1r93fm8 cdqkt6n ct1fkdx c1oowefl c1ni8vj cw61n8i cqoa28d c5h278 czwsprl cnazolu ckwjri6 c1dsz8s5 c11ax2ly",children:[c.jsx(o,{href:"/extras-solo-pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-2/copy-1/copy-1/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link cj8ca6n cid7ev6 c1sn1dll"}),c.jsx(a,{className:"w-box cj8ca6n c1nuwo3l c1g5gtlt cpy2rkc c1ud3tdx c1h7fa4 c1p4e2xu c2c6xvq c5zws24 c1nb64q3 c1emv663 c11ugd1c c1oowefl c1ni8vj cw61n8i cqoa28d cbuualy cjrbfdx"}),c.jsx(t,{className:"w-separator cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1s4npub c52mo7k c43h1ay cto1khr c1u5r66t cwuqf77 cuzzsyn"}),c.jsxs(n,{className:"w-heading c1f1u29k c3phcrh ckh88ws c1k3my6n c15pgdez c6f3i4u",children:[c.jsx(e,{tag:"span",className:"w-text cebnwtb cs1pw7l c4rnskk",children:c.jsx(e,{tag:"span",className:"w-text c1u5h9as cumkra5",children:"3d m416"})}),c.jsx(t,{className:"w-separator cm377fi c1qokiw7 ck7mrhy c1puzv0t c1rkyfp9 c43h1ay cto1khr c1u5r66t cwuqf77"})]}),c.jsxs(a,{className:"w-box",children:[c.jsx(e,{className:"w-text ckh88ws c1emau58 clk84jn c1z103mr c127mafx c1cs31xc c1xxh21o cumkra5 cdmco3n c1uvb8ee c5dlqll c433usc",children:"work Type    "}),c.jsx(e,{className:"w-text c1p59djb cq32di2 ctuimwu ckh88ws cafhxtu c1oowefl c1ni8vj cw61n8i cqoa28d c1ejynx3 c1qokiw7 c1sfu9eb cctemud cdcyy4g c1xu6mt7 c1emau58 cyni66w cumkra5 c15pgdez c1yx5l9a c19ooej3 ck6frnr c6r3wlc",children:"🎁3d model"})]})]})]})]})]}),N=({data:i})=>{const{system:s,resources:l,url:m}=i;return c.jsx(j.Provider,{value:{imageLoader:u,assetBaseUrl:p,resources:l},children:c.jsx(q,{system:s},m)})},_=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),S=({data:i})=>{const{pageMeta:s}=i,{origin:l}=new URL(i.url),m={"@context":"https://schema.org","@type":"WebSite",name:x,url:l};let f=s.socialImageUrl;return s.socialImageAssetName&&(f=`${l}${u({src:s.socialImageAssetName,format:"raw"})}`),c.jsxs(c.Fragment,{children:[i.url&&c.jsx("meta",{property:"og:url",content:i.url}),c.jsx("title",{children:s.title}),c.jsx("meta",{property:"og:title",content:s.title}),s.description&&c.jsxs(c.Fragment,{children:[c.jsx("meta",{name:"description",content:s.description}),c.jsx("meta",{property:"og:description",content:s.description})]}),c.jsx("meta",{property:"og:type",content:"website"}),c.jsx("meta",{property:"og:site_name",content:x}),f&&c.jsx("meta",{property:"og:image",content:s.socialImageUrl}),c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(m,null,2)}}),s.excludePageFromSearch&&c.jsx("meta",{name:"robots",content:"noindex, nofollow"}),s.custom.map(({property:r,content:h})=>c.jsx("meta",{property:r,content:h},r)),c.jsx("link",{rel:"icon",href:u({src:`${p}${v}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),b.map(r=>c.jsx("link",{rel:"preload",href:`${p}${r}`,as:"font",crossOrigin:"anonymous"},r)),z.map(r=>c.jsx("link",{rel:"preload",href:`${p}${r}`,as:"image"},r))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{I as configValuesSerialized};
