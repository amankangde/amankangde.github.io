import{r as b,j as c,u as z,f as k,l as v,m as q,P as p,a as t,b as d,s as a,y as f,c as e,p as l,R as N,i as x,d as m,e as A}from"../chunks/chunk-DTcmt_sX.js";import{f as y}from"../chunks/chunk-Doo1F7mT.js";import{a as n}from"../chunks/chunk-GsB_u2F5.js";/* empty css                      */const r=b.forwardRef((i,s)=>c.jsx("sub",{...i,ref:s}));r.displayName="Subscript";const g="AmanKangde | Game Developer Portfolio | Game Programmer Portfolio ",S="favicon-96x96_fXMN5JJ11fZWqLqjDH_F8.png",_=["Roboto-Medium_Sop9HdGzM3zsJLIcxuAb8.ttf","Roboto-Light_7yyMDHFerdlAfgfclhr4Q.ttf","Roboto-BoldItalic_eHh3A3pEqAAvVk6RrwSMa.ttf","Roboto-Thin_TarShzOF2MEm4ku0uOO07.ttf","Roboto-LightItalic_LyIHEuspeImgpfu7rcv6L.ttf","Roboto-Italic_wPA1a-_8jsNm1scL2Vhv4.ttf","Roboto-Bold_Z2z6fu3glYKM_OCGBmT7n.ttf","Roboto-Regular_Iakdi5Y2ev1m7z6uE_4Ip.ttf","Roboto-MediumItalic_vOsTXlQi5gCdCK5ZC7SH0.ttf","Roboto-BlackItalic_EYyTqNh_LcStP7cW2zgEX.ttf","Roboto-Black_OOAshRDRH1O3baOeVm9iF.ttf","Roboto-ThinItalic_oPeuURPv-hgWOWpOmpDNp.ttf"],O=["landingpagebg_2SLDMxzJp5SYKp0epuC02.jpg"],I=i=>(z(""),c.jsxs(k,{className:"w-body c1h0x9nu c1fcf6ik c1ud3tdx c1dqak3p c1p4e2xu c2c6xvq cid7ev6 c160afhs cj0cb1l cd9dz6m cz2bdwf c1s4ypa2 c1nb64q3 c2afyib c5zws24 c1kken2s c1xxuzk",children:[c.jsx(v,{children:c.jsxs(q,{children:[c.jsx(p,{code:'<script>(function(factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof module!=="undefined"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset==="number"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener("scroll",onScroll,true);window.removeEventListener("resize",onResize,true);window.removeEventListener("load",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector==="string"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener("resize",onResize,true);window.addEventListener("scroll",onScroll,true);window.addEventListener("load",onLoad,true);onResize()}function init(){if(!selector){console.error("must pass selector");return false}setupElements();if(!elements||!elements.length){console.error("no els found");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),c.jsx(p,{code:`<style>
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
</style>`,className:"w-html-embed"}),c.jsx(p,{code:'<script type="module">\nconst config = {\n	intersectionOffset: 0.2,\n	intersectionOnce: true,\n	progressOffset: 0,\n	progressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a="progress"===e;return enterView({selector:r,enter:e=>!a&&t(e,"in","out"),exit:e=>!a&&t(e,"out","in"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute("data-ani-progress")?r.getAttribute("data-ani-progress"):e.getAttribute("data-ani-progress"),s=parseFloat(getComputedStyle(e).getPropertyValue("--ani-slide-offset"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue("--ani-flip-rotate"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue("--ani-zoom-out-scale"))||1);switch(n){case"slide-up":return`translateY(${(1-t)*s}px)`;case"slide-down":return`translateY(-${(1-t)*s}px)`;case"slide-left":return`translateX(${(1-t)*s}px)`;case"slide-right":return`translateX(-${(1-t)*s}px)`;case"flip-x":return`rotateX(${(1-t)*a}deg)`;case"flip-y":return`rotateY(${(1-t)*a}deg)`;case"zoom":return`scale(${o})`;default:return"none"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?\'[data-ani-children="true"] > *\':\':not([data-ani-children="true"])\'}`;return Array.from(document.querySelectorAll(r))}const n=[...r("data-ani"),...r("data-ani",!0)],s=[...r("data-ani-progress"),...r("data-ani-progress",!0)];n.length&&e({trigger:"intersection",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:"progress",selector:s,offset:config.progressOffset,once:config.progressOnce});\n<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]})}),c.jsxs(t,{className:"w-box cvkckv6 cz2bdwf c1s4ypa2 c1erqoxd c1lymv48 c2afyib c1nuwo3l c1g6rofr cr0q0p1 c1u75sai ccoa5r cfxym3l civlday cbgr2xx c40a07 c6f3i4u cviayqa c13hppt6 c1oowefl c1ni8vj cw61n8i cqoa28d cjx46vi chkfdeq c160afhs cj0cb1l c1ujrs8b cu0zff1 ckwjri6",children:[c.jsxs(t,{className:"w-box cd9dz6m cz2bdwf c1s4ypa2 c5zws24 c1nb64q3 cjrbfdx",children:[c.jsx(d,{className:"w-link c7s8dzv c1kp3i04 c1igxz0h c17q93yr cjhhpuq c1oztfde c1l15mcd c1cotgea c19uwc7l cu8s5rj c1db964m c68ajjt ccw662a c1fip0r8 c16j6uqx ckh88ws c1emau58 cltw4ad cg8ckm3 c1j3xshe cx5663d c1ehzfsg c1v47cmq c1unkvnm ct2vt4s cy60rl6 c1sfu9eb c15pgdez clhlpg2 c1dwxf7z cuzzsyn cb41wxe c1qze9ar c147z5m4 c1v9gtas",children:"ABOUT"}),c.jsx(d,{href:"/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link c7s8dzv c1kp3i04 c1igxz0h c17q93yr cjhhpuq c1oztfde c1l15mcd c1cotgea c19uwc7l cu8s5rj c1db964m c68ajjt c1drh4rh c1fip0r8 c16j6uqx ckh88ws c1emau58 cltw4ad cg8ckm3 c1j3xshe cx5663d c1ehzfsg c1v47cmq c1unkvnm ct2vt4s cy60rl6 c1sfu9eb c15pgdez clhlpg2 c1dwxf7z cuzzsyn cb41wxe c1qze9ar c147z5m4",children:"GAMES"}),c.jsx(d,{href:"/copy-1/copy-1/about-me-or-aman-kangde-or-game-programmer-or-game-developer",className:"w-link c7s8dzv c1kp3i04 c1igxz0h c17q93yr cjhhpuq c1oztfde c1l15mcd c1cotgea c19uwc7l cu8s5rj c1db964m c68ajjt c1drh4rh c1fip0r8 c16j6uqx ckh88ws c1emau58 cltw4ad cg8ckm3 c1j3xshe cx5663d c1ehzfsg c1v47cmq c1unkvnm c16bie0q cy60rl6 c1sfu9eb c15pgdez clhlpg2 c1dwxf7z cuzzsyn c147z5m4 c1qze9ar",children:"EXTRAS"}),c.jsx(d,{href:"/",className:"w-link c7s8dzv c8ugpwr c14xj18t c9qn876 c1oujp9l c1oztfde c1g6rofr cr0q0p1 c1u75sai ccoa5r c1db964m c68ajjt c1drh4rh c1fip0r8 clpchwr c6p293z ckh88ws c15pgdez cvi6s9s c1sfu9eb casrry8 c18i0n1f c1sn1dll c1kq151v c1g45bbr cg1o0ha c1emau58 c1p6tfwy cxcwsy0 cim2zru c126px1e c10u7ten c1l1jhxc c15ew9so c18fv7zr c2jlvki",children:"x"})]}),c.jsx(a,{className:"w-text c1k2zur7 c1emau58 clk84jn ckh88ws cctemud c1f1u29k c1nu98lx c18uhatc c15pgdez c1p6tfwy cm57z0r c1cf0q2m cnpxgo2 cebnwtb c433usc",children:"ABOUT"}),c.jsx(t,{className:"w-box cuzzsyn cc6vflo c5zws24 c1nb64q3 c6p293z csiwqgm c1e8zuci crkkc95 cvkckv6 cz2bdwf c1s4ypa2 c1fip0r8 c11q0357 clpchwr c1iz8b5k c15aqwnb c166y50u c1gfhj91 creydqm cnff8qn c160afhs cj0cb1l c50h00u cvr27nm c1am9tnv c1updd4a c1hjkih9 c1wxjzjc cnm7ee6 czq155n cjrbfdx cdf1i4z c236hha c969t7o c1cr14dd",children:c.jsxs(t,{className:"w-box c1rh2dou c1e8zuci c4uw5fy cd9dz6m c1sfu9eb cz2bdwf c1s4ypa2 c1emv663 c1fip0r8 cj8ca6n c1ypo346 c33zfo2 c199qke0 c1cxdxs3",children:[c.jsx(f,{loading:"eager",src:"/assets/WebsitePhotoBG_cwPpsKg3yEynqSwQBC3m1.png",width:4800,height:1535,className:"w-image c1e8zuci c4uw5fy clfq9tc c1k7f6x7 c1nuwo3l c1sfu9eb c1gvy23o c11x9ksn c8pqec0 c1p59djb c1kuixjn c1kp3i04 c1igxz0h c17q93yr cjhhpuq cc7yjpo c1pqgcr6"}),c.jsx(f,{src:"/assets/Picsart_25-01-08_11-59-23-338_7Q3A5coB_AD3w3Ztapxw_.png",width:2099,height:2099,loading:"eager",className:"w-image crt6tsw c2afyib ccw662a c1kq151v c1sn1dll c1qze9ar"})]})}),c.jsx(a,{className:"w-text c1uvb8ee c1emau58 clk84jn ckh88ws cctemud c1sfu9eb cca9274 c18uhatc c15pgdez c1p6tfwy cm57z0r c1cf0q2m c1su8azh c433usc",children:"AMAN KANGDE"}),c.jsxs(t,{className:"w-box cuzzsyn c6p293z c5zws24 c1nb64q3 c1ehzfsg c1v47cmq c1r93fm8 c1n5eq0w",children:[c.jsx(a,{className:"w-text ccw662a c1emau58 clk84jn ckh88ws c3phcrh c1nu98lx c1f1u29k c15pgdez c1tv7wq8 c1angj1c c1db964m c19ldyiz c1g6rofr cr0q0p1 c1u75sai ccoa5r cjx46vi c1r1hxwn c433usc c13o5k7a",children:"  - ABOUT -"}),c.jsx(t,{className:"w-box cd9dz6m covltkn c4m5wle",children:c.jsxs(a,{className:"w-text c3phcrh ckh88ws cnazolu cuyd4wd c76ad7v c1dwxf7z c1f1u29k c1qzwqp cpxpvdr cuvkcf3 c1emau58 cdwax5p",children:["Hey! Aman here 😊","",c.jsx("br",{}),"","",c.jsx("br",{}),"","",c.jsx("br",{}),""," Welcome to My Portfolio! 🚀","",c.jsx("br",{}),"","",c.jsx("br",{}),"","",c.jsx("br",{}),"","⭐ ",c.jsx(e,{className:"w-bold-text cbbe7wq",children:"Key Info"})," ⭐","",c.jsx("br",{}),"","",c.jsx("br",{}),"","",c.jsx("br",{}),"","•  I’m a passionate ",c.jsx(e,{className:"w-bold-text",children:"Game Developer"})," and ",c.jsx(e,{className:"w-bold-text",children:"Technical Artist"})," 🕹️, currently pursuing my ",c.jsx(e,{className:"w-bold-text",children:"B.Sc. in Game Design and Development"})," at ",c.jsx(e,{className:"w-bold-text",children:"ICAT and Media College, Bangalore"})," 🎓.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","•  I specialize in ",c.jsx(e,{className:"w-bold-text",children:"building systems"}),", crafting ",c.jsx(e,{className:"w-bold-text",children:"innovative mechanics"}),", and creating ",c.jsx(e,{className:"w-bold-text",children:"one-of-a-kind games"})," that deliver unforgettable experiences 🌟.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","•  With a focus on ",c.jsx(e,{className:"w-bold-text",children:"continuous learning"})," 📚, I’m always diving into ",c.jsx(e,{className:"w-bold-text",children:"cutting-edge tools"})," 🛠️ and ",c.jsx(e,{className:"w-bold-text",children:"emerging technologies"})," to stay ahead in the game development industry.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","",c.jsx("br",{}),"",c.jsx(e,{className:"w-bold-text c15bp894",children:"My Projects 🖥️🎨"}),"",c.jsx("br",{}),"","",c.jsx("br",{}),"",c.jsx(e,{className:"w-bold-text",children:"- Mission 91A"}),": 🌌 A sci-fi survival adventure where players navigate a damaged space station, fend off alien threats, and send a distress signal to Earth.","",c.jsx("br",{}),"","",c.jsx("br",{}),"",c.jsx(e,{className:"w-bold-text",children:"- U.P.U.P."}),": 📈 A physics-based game that challenges players to rise above dynamically changing obstacles.","",c.jsx("br",{}),"","",c.jsx("br",{}),"",c.jsx(e,{className:"w-bold-text cmcow5a",children:"- Echoes of Evolution"}),": 🏅 A game jam entry that earned ",c.jsx(e,{className:"w-bold-text",children:"second prize"}),", blending creativity and technical prowess into an immersive runner game experience.","",c.jsx("br",{}),"","",c.jsx("br",{}),"",c.jsx(e,{className:"w-bold-text",children:"- Hanging Shapes"}),": 🎯 A physics-based puzzle game that combines simplicity with strategic problem-solving.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","These projects showcase my ability to innovate, adapt, and deliver ",c.jsx(e,{className:"w-bold-text",children:"high-quality gameplay experiences"})," even under tight deadlines! 🕒","",c.jsx("br",{}),"","",c.jsx("br",{}),"","",c.jsx("br",{}),"",c.jsx(e,{className:"w-bold-text c15bp894",children:"What Drives Me 💡✨"}),"",c.jsx("br",{}),"","",c.jsx("br",{}),"","<> As a developer, I strive to balance ",c.jsx(e,{className:"w-bold-text",children:"technical precision"}),", ",c.jsx(e,{className:"w-bold-text",children:"artistic creativity"}),", and a ",c.jsx(e,{className:"w-bold-text",children:"player-first mindset"}),". From designing ",c.jsx(e,{className:"w-bold-text",children:"procedural walking animations for a six-legged ant 🐜"})," to implementing ",c.jsx(e,{className:"w-bold-text",children:"dynamic parallax systems 🌌"}),", I thrive on bringing ideas to life in ways that are bold and captivating.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","I’m fueled by a relentless passion for ",c.jsx(e,{className:"w-bold-text",children:"exploration and innovation"})," 🚀—whether it’s mastering the latest industry trends 🔧, creating new gameplay loops 🔄, or blending ",c.jsx(e,{className:"w-bold-text",children:"mechanics with compelling narratives 📖"}),". My journey is about constantly evolving and pushing the boundaries of what games can achieve.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","",c.jsx("br",{}),"",c.jsx(e,{className:"w-bold-text cbbe7wq",children:"Let’s Connect! 🤝🎮"}),"",c.jsx("br",{}),"","",c.jsx("br",{}),"","If you're looking for ",c.jsx(e,{className:"w-bold-text",children:"games that challenge the ordinary"}),", ",c.jsx(e,{className:"w-bold-text",children:"systems that redefine mechanics"}),", or someone who brings energy and creativity to every project, you’re in the right place! 🌟","",c.jsx("br",{}),"","",c.jsx("br",{}),"","Explore my portfolio to see the worlds I’ve built 🌍, and whether you’re a fellow developer, recruiter, or just a gaming enthusiast, let’s collaborate and make something extraordinary together! 💻🔥"]})})]}),c.jsx(a,{className:"w-text c5zws24 c1nb64q3 c3phcrh c1emau58 ckh88ws c15bp894 c1nu98lx c1s2sf7x cumkra5 c1r0m8ci c13o5k7a c1mkgeco",children:"- EDUCATION & certificate -"}),c.jsxs(t,{className:"w-box cd9dz6m c1hoqbtg c1ijqnpf",children:[c.jsxs(t,{"data-ani-progress":"slide-left",className:"w-box c1uvb8ee cctemud cuzzsyn c817p8q c43h1ay cto1khr c1u5r66t cwuqf77 c2qs9ug c1r93fm8 c199qke0 c1f1u29k c1xxh21o cw27jft c1xgkw64 coc8t92 cs8nyfb",children:[c.jsx(l,{className:"w-separator cr2oqis c1hu9ywx c43h1ay cto1khr c1u5r66t cwuqf77 c930mzi c15pgdez c12hbkeh c1sfu9eb ccxcpmh"}),c.jsx(y,{className:"w-heading c11abn5y c1sfu9eb ckh88ws c11x9ksn c1emau58 cs8bato",children:"EDUCATION"}),c.jsxs(a,{className:"w-text ckh88ws c1emau58 c15bp894 c1sfu9eb c1g6rofr cr0q0p1 c1u75sai ccoa5r cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1moxpmp ckne0yh c1w91n8x co0z0em c1w4hwyo c1uvb8ee cctemud c1i8sl76 c19ytsmq c127mafx c1fip0r8 c1dwxf7z c17iwv4a c19zv9cp",children:["🎓📜 ","",c.jsx("br",{}),""," B.Sc In","",c.jsx("br",{}),""," Game Design & Development"]})]}),c.jsxs(t,{"data-ani-progress":"slide-right",className:"w-box c1uvb8ee cctemud cuzzsyn cpcrxig c43h1ay cto1khr c1u5r66t cwuqf77 c2qs9ug c1r93fm8 c199qke0 c1f1u29k c1xxh21o cw27jft c1xgkw64 c1ab5g02 c1vx1poq",children:[c.jsx(l,{className:"w-separator cr2oqis c1hu9ywx c43h1ay cto1khr c1u5r66t cwuqf77 c930mzi c15pgdez c12hbkeh c1sfu9eb ccxcpmh"}),c.jsx(y,{className:"w-heading c11abn5y c1sfu9eb ckh88ws c11x9ksn c1emau58 cradcmo",children:"CERTIFICATE"}),c.jsxs(a,{className:"w-text ckh88ws c1emau58 c15bp894 c1sfu9eb c1g6rofr cr0q0p1 c1u75sai ccoa5r cmnn8e3 c774fpv cpbf8u8 c1ichei8 c1moxpmp ckne0yh c1w91n8x co0z0em c1w4hwyo c1uvb8ee cctemud c1i8sl76 c19ytsmq c127mafx c1fip0r8 c1dwxf7z cdwax5p",children:["👉🖱️Click Here","",c.jsx("br",{}),"","  ",c.jsx(d,{href:"https://www.coursera.org/user/5d9af17fc424874d2ac89104ef443eaf",className:"w-rich-text-link chdi8pr c15pgdez c1g6rofr cr0q0p1 c1u75sai ccoa5r cvcn92e",children:"Website with HTML & CSS"})]})]})]}),c.jsx(a,{className:"w-text c5zws24 c1nb64q3 c3phcrh c1emau58 ckh88ws c15bp894 c1nu98lx c1s2sf7x cuzzsyn c1z0ybgj c13o5k7a",children:"- SKILLS INFO -"}),c.jsxs(t,{className:"w-box cd9dz6m covltkn c1s4ypa2 c1p6tfwy c1g6rofr cr0q0p1 c1u75sai ccoa5r c1txfss6 cuyd4wd c1y4yuef c1kwcg5o cicpoxx ccw662a c1sorqjv cnff8qn c1rh2dou ck7mrhy c1f1u29k c1nuwo3l cn40ar8 c1kxvshd c1rf34tp",children:[c.jsxs(t,{"data-ani-progress":"flip-y",className:"w-box cfiet8w c13wtir0 c1gvy23o cnhcv3z c43h1ay cto1khr c1u5r66t cwuqf77 c2qs9ug c1r93fm8 cy60rl6 c2afyib c1rh2dou c6990d6 c146cgyo cidte1p cu9opss c1f8hpi6 c160afhs cj0cb1l cnff8qn c1kzlx98 c1fip0r8 cvb36pw cw27jft ckwjri6 c236hha cdf1i4z",children:[c.jsx(l,{className:"w-separator cr2oqis c1hu9ywx c43h1ay cto1khr c1u5r66t cwuqf77 c930mzi c15pgdez c12hbkeh c1sfu9eb ccxcpmh c1vx1poq"}),c.jsx(a,{className:"w-text c1txfss6 cuzzsyn c1sfu9eb ckh88ws c15bp894 c1emau58 c15pgdez c1qzwqp c19ldyiz cumkra5 c1ribs8q",children:"MAIN SKILLS"}),c.jsx(a,{className:"w-text ckh88ws c1w4hwyo cf98875 c5h278 c1drh4rh c1qpyski c1jlai7f c1cpqceo c1nny07w clk84jn c1emau58 cuzzsyn c1cs31xc c1i8sl76 c19ytsmq",children:"• C# FOR UNITY DEVELOPMENT"}),c.jsx(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c9aif0s",children:"• GAME CODING & FUNDAMENTALS FOR DEVELOPMENT"}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:["• C++ FOR UNREAL ",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:"(Currently Learning)"})})]}),c.jsxs(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c9aif0s",children:["• TECHNICAL ARTIST ",c.jsx(n,{className:"w-italic-text",children:"(UNITY)"})]}),c.jsx(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:"• SYSTEM DESIGNING & OPTIMIZATION"}),c.jsx(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn cf98875 c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:"• HTML & CSS"}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c60z999 cpct8k3 cvuxt0o c1qi5eto c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc cpxpvdr c1i8sl76 c19ytsmq",children:["• SHADER HLSL ",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:"(Currently Learning)"})})]}),c.jsx(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn cf98875 c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:"• GITHUB"})]}),c.jsxs(t,{"data-ani-progress":"flip-x",className:"w-box cup9110 c1v20jxe c1emv663 cpcrxig c43h1ay cto1khr c1u5r66t cwuqf77 c2qs9ug c1r93fm8 cy60rl6 c2afyib c1rh2dou cpmy94p c6y68m8 c1ebbdgo cu9opss c1e8zuci crkkc95 c1f8hpi6 c1f1u29k chkfdeq c1kzlx98 cvb36pw cw27jft ckwjri6 c236hha cdf1i4z c433usc",children:[c.jsx(l,{className:"w-separator cr2oqis c1hu9ywx c43h1ay cto1khr c1u5r66t cwuqf77 c930mzi c15pgdez c12hbkeh c1sfu9eb ccxcpmh c1dc7y0n"}),c.jsx(a,{className:"w-text c1txfss6 cuzzsyn c1sfu9eb ckh88ws c15bp894 c1emau58 c15pgdez c1qzwqp c19ldyiz cumkra5 c1ribs8q",children:"SOFTWARES"}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 c5h278 c1drh4rh c1qpyski c1jlai7f c1cpqceo c1nny07w clk84jn c1emau58 cuzzsyn c1cs31xc c1i8sl76 c19ytsmq",children:["• UNITY & UNREAL  ",c.jsx(n,{className:"w-italic-text",children:"(GODOT "}),c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:"Currently Learning"})}),")"]}),c.jsx(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c9aif0s",children:"• MIRO, JIRA, NOTION & SLACK"}),c.jsx(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:"• PHOTOSHOP & PREMIERE PRO"}),c.jsxs(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c9aif0s",children:["• ZBRUSH, MAYA & SUBSTANCE PAINTER ",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:"(COMPLETE WORKFLOW )"})})]}),c.jsx(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:"• ADOBE XD & FIGMA "}),c.jsx(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn cf98875 c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:"• GAEA, MARMOSET TOOLBAG"}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c60z999 cpct8k3 cvuxt0o c1qi5eto c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc cpxpvdr c1i8sl76 c19ytsmq",children:["• FL STUDIO ",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:"(Currently Learning)"})})]})]})]}),c.jsxs(t,{className:"w-box cd9dz6m covltkn c1s4ypa2 cuzzsyn c1g6rofr cr0q0p1 c1u75sai ccoa5r c1txfss6 cuyd4wd c1y4yuef c1kwcg5o cicpoxx ccw662a c1sorqjv cnff8qn c1rh2dou ck7mrhy c1f1u29k c1nuwo3l c1rf34tp",children:[c.jsxs(t,{"data-ani-progress":"zoom",className:"w-box cfiet8w c13wtir0 c1gvy23o cpcrxig c43h1ay cto1khr c1u5r66t cwuqf77 c2qs9ug c1r93fm8 cy60rl6 c2afyib c1rh2dou c6990d6 c146cgyo cidte1p cu9opss c1f8hpi6 c160afhs cj0cb1l cnff8qn c1kzlx98 c157eg86 cw27jft ckwjri6 c236hha cdf1i4z",children:[c.jsx(l,{className:"w-separator cr2oqis c1hu9ywx c43h1ay cto1khr c1u5r66t cwuqf77 c930mzi c15pgdez c12hbkeh c1sfu9eb ccxcpmh c1vx1poq"}),c.jsx(a,{className:"w-text c1txfss6 cuzzsyn c1sfu9eb ckh88ws c15bp894 c1emau58 c15pgdez c1qzwqp c19ldyiz cumkra5 c1ribs8q c1ei3p98 c1y9e0e4 czl1web c1w2o3dg c1xh0xsq",children:"🎮🎬 Hobbies & Interests 🎧🧘"}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 c5h278 c1drh4rh c1qpyski c1jlai7f c1cpqceo c1nny07w clk84jn c1emau58 cuzzsyn c1cs31xc c1i8sl76 c19ytsmq",children:["• ",c.jsx(e,{className:"w-bold-text",children:"Watching Movies & Series"})," 🎥🍿"]}),c.jsxs(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c9aif0s",children:["• ",c.jsx(e,{className:"w-bold-text",children:"Anime Enthusiast"})," 🌸📺"]}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:["• ",c.jsx(e,{className:"w-bold-text",children:"Gaming"})," 🕹️"]}),c.jsxs(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c9aif0s",children:["• ",c.jsx(e,{className:"w-bold-text clk84jn",children:"Music & Podcasts"})," 🎶🎙️"]}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:["• ",c.jsx(e,{className:"w-bold-text",children:"Psychology Buff"})," 🧠📖: ",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:"I’m fascinated by understanding the human mind and behavior—it fuels both my personal growth and game design ideas."})})]}),c.jsxs(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn cf98875 c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c1i8sl76 c19ytsmq",children:["• ",c.jsx(e,{className:"w-bold-text",children:"Exercise & Meditation"})," 💪🧘"]})]}),c.jsxs(t,{"data-ani-progress":"zoom",className:"w-box cup9110 c1v20jxe c1emv663 cpcrxig c43h1ay cto1khr c1u5r66t cwuqf77 c2qs9ug c1r93fm8 cy60rl6 c2afyib c1rh2dou cpmy94p c6y68m8 c1ebbdgo cu9opss c1e8zuci crkkc95 c1f8hpi6 c1f1u29k chkfdeq c1kzlx98 cvb36pw cw27jft ckwjri6 c433usc",children:[c.jsx(l,{className:"w-separator cr2oqis c1hu9ywx c43h1ay cto1khr c1u5r66t cwuqf77 c930mzi c15pgdez c12hbkeh c1sfu9eb ccxcpmh c1vx1poq"}),c.jsx(a,{className:"w-text c1txfss6 cuzzsyn c1sfu9eb ckh88ws c15bp894 c1emau58 c15pgdez c1qzwqp c19ldyiz cumkra5 c1ribs8q c1ei3p98 c1y9e0e4 czl1web c1w2o3dg c1xh0xsq",children:"Languages I Know 🌐💬"}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 c5h278 c1drh4rh c1qpyski c1jlai7f c1cpqceo c1nny07w clk84jn c1emau58 cuzzsyn c1cs31xc c1i8sl76 c19ytsmq",children:["• ",c.jsx(e,{className:"w-bold-text",children:"Hindi"})," 🇮🇳:",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:" Native proficiency."})})]}),c.jsxs(a,{className:"w-text ckh88ws co0cmt4 cuzzsyn c1drh4rh c5h278 c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc c9aif0s",children:["• ",c.jsx(e,{className:"w-bold-text",children:"English"})," 🌎: ",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:"Fluent in speaking, reading, and writing."})})]}),c.jsxs(a,{className:"w-text ckh88ws c154us2t cf98875 cuzzsyn c1drh4rh c5h278 c60z999 cpct8k3 cvuxt0o c1qi5eto c1qpyski c1jlai7f c1cpqceo c1nny07w c1emau58 clk84jn c18uhatc cpxpvdr c1i8sl76 c19ytsmq",children:["• ",c.jsx(e,{className:"w-bold-text",children:"Japanese"})," 🇯🇵:",c.jsx(n,{className:"w-italic-text",children:c.jsx(r,{className:"w-subscript-text",children:" Currently exploring and excited to learn in the future!"})})]})]})]}),c.jsx(t,{className:"w-box cd9dz6m cz2bdwf c1s4ypa2 cuzzsyn",children:c.jsx(f,{src:"/assets/Lime_ownn4Csym4hU3kQa1sEib.png",width:528,height:528,className:"w-image c1emv663 c1x14jcs c1qw6n9v"})})]})]})),E=({data:i})=>{const{system:s,resources:h,url:u}=i;return c.jsx(N.Provider,{value:{imageLoader:x,assetBaseUrl:m,resources:h},children:c.jsx(I,{system:s},u)})},T=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),R=({data:i})=>{const{pageMeta:s}=i,{origin:h}=new URL(i.url),u={"@context":"https://schema.org","@type":"WebSite",name:g,url:h};let w=s.socialImageUrl;return s.socialImageAssetName&&(w=`${h}${x({src:s.socialImageAssetName,format:"raw"})}`),c.jsxs(c.Fragment,{children:[i.url&&c.jsx("meta",{property:"og:url",content:i.url}),c.jsx("title",{children:s.title}),c.jsx("meta",{property:"og:title",content:s.title}),s.description&&c.jsxs(c.Fragment,{children:[c.jsx("meta",{name:"description",content:s.description}),c.jsx("meta",{property:"og:description",content:s.description})]}),c.jsx("meta",{property:"og:type",content:"website"}),c.jsx("meta",{property:"og:site_name",content:g}),w&&c.jsx("meta",{property:"og:image",content:s.socialImageUrl}),c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(u,null,2)}}),s.excludePageFromSearch&&c.jsx("meta",{name:"robots",content:"noindex, nofollow"}),s.custom.map(({property:o,content:j})=>c.jsx("meta",{property:o,content:j},o)),c.jsx("link",{rel:"icon",href:x({src:`${m}${S}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),_.map(o=>c.jsx("link",{rel:"preload",href:`${m}${o}`,as:"font",crossOrigin:"anonymous"},o)),O.map(o=>c.jsx("link",{rel:"preload",href:`${m}${o}`,as:"image"},o))]})},L=Object.freeze(Object.defineProperty({__proto__:null,Head:R},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about-me-or-aman-kangde-or-game-programmer-or-game-developer/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about-me-or-aman-kangde-or-game-programmer-or-game-developer/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}}};export{D as configValuesSerialized};
