const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};g();const e=document.querySelector.bind(document);window.onbeforeunload=function(){window.scrollTo(0,0)};function c(){document.documentElement.classList.toggle("dark")}window.onload=function(){e("#hello-svg").style.display="block"};ScrollTrigger.create({trigger:"#pin-1",start:0,end:1600,pin:!0,pinSpacing:!1,onUpdate:t=>{e("#hello").style.strokeDashoffset=1859.777587890625*(1-t.progress);const n=window.innerWidth/100;e("#hello-svg").style.transform=`translateX(${.01+(n*40-80*n*7.5/480)*(1-t.progress)}px)`,e("#scroll-indicator-div").children[0].style.opacity=t.progress>.1?0:1-10*t.progress},onLeave:t=>{e("#pin-1").style.transform="translateY(1600px)",e("#hello").style.strokeDashoffset=0}});ScrollTrigger.create({trigger:"#intro",start:"top bottom",end:"bottom top",onUpdate:t=>{const n=-16*(t.progress-.5)*(t.progress-.5)+1;e("#intro").style.opacity=n}});ScrollTrigger.create({trigger:"#interests",start:"top center",end:"bottom center",pin:!1,onUpdate:t=>{const n=-2*(t.progress-.5)*(t.progress-.5)+1;e("#interests").style.opacity=n}});ScrollTrigger.create({trigger:"#developer-link",start:"top bottom",end:"bottom center",pin:!1,onUpdate:t=>{const n=window.innerWidth/100;e("#developer-link").style.transform=`translateX(${n*40*(1-t.progress)}px)`,e("#developer-link").style.opacity=t.progress}});ScrollTrigger.create({trigger:"#journalist-link",start:"top bottom",end:"bottom center",pin:!1,onUpdate:t=>{const n=window.innerWidth/100;e("#journalist-link").style.transform=`translateX(${.01+n*40*(1-t.progress)}px)`,e("#journalist-link").style.opacity=t.progress}});ScrollTrigger.create({trigger:"#cyclist-link",start:"top bottom",end:"bottom center",pin:!1,onUpdate:t=>{const n=window.innerWidth/100;e("#cyclist-link").style.transform=`translateX(${.01+n*40*(1-t.progress)}px)`,e("#cyclist-link").style.opacity=t.progress}});ScrollTrigger.create({trigger:"#worked",start:"top center",end:"bottom top",pin:!1,onUpdate:t=>{const n=-2*(t.progress-.5)*(t.progress-.5)+1;e("#worked").style.opacity=n}});ScrollTrigger.create({trigger:"#big-text",start:"center center",end:"+=100%",pin:!0,pinType:"fixed",onUpdate:t=>{console.log(t.progress),e("#big-text").style.transform=`scale(${1+140*(t.progress*t.progress)})`},onEnter:t=>{document.body.classList.remove("transition-colors","duration-300")},onLeave:t=>{e("#small-text-wrapper").classList.remove("text-white","dark:text-black"),e("#small-text-wrapper").classList.add("text-black","dark:text-white"),c(),setTimeout(()=>{document.body.classList.add("transition-colors","duration-300")},0)},onEnterBack:t=>{e("#small-text-wrapper").classList.remove("text-black","dark:text-white"),e("#small-text-wrapper").classList.add("text-white","dark:text-black"),document.body.classList.remove("transition-colors","duration-300"),c()},onLeaveBack:t=>{document.body.classList.add("transition-colors","duration-300")}});ScrollTrigger.create({trigger:"#small-text",start:"center 80%",end:"center top",pin:!1,onUpdate:t=>{e("#small-text").style.transform=`scale(${1-t.progress*.7},1)`}});ScrollTrigger.create({trigger:"#fun",start:"top center",end:"bottom center",pin:!1,onUpdate:t=>{const n=-2*(t.progress-.5)*(t.progress-.5)+1;e("#fun").style.opacity=n}});ScrollTrigger.create({trigger:"#contact",start:"top center",end:"bottom center",pin:!1,onUpdate:t=>{const n=-2*(t.progress-.5)*(t.progress-.5)+1;e("#contact").style.opacity=n}});var l=0;e("#fun").addEventListener("click",()=>{l++,confetti({particleCount:25,angle:60,spread:55,origin:{x:0}}),confetti({particleCount:25,angle:120,spread:55,origin:{x:1}}),l==5&&(e("#super-confetti-button").style.opacity=1,e("#super-confetti-button").style.transform="translateY(0)",setTimeout(()=>{const t=(e("#super-confetti-button").getBoundingClientRect().x+e("#super-confetti-button").getBoundingClientRect().width/2)/window.innerWidth,n=(e("#super-confetti-button").getBoundingClientRect().y+e("#super-confetti-button").getBoundingClientRect().height/2)/window.innerHeight;confetti({particleCount:100,startVelocity:30,spread:360,zIndex:-1,origin:{x:t,y:n}})},300))});var d=0;e("#super-confetti-button").addEventListener("click",()=>{d++,(e("#super-confetti-button").getBoundingClientRect().x+e("#super-confetti-button").getBoundingClientRect().width/2)/window.innerWidth,(e("#super-confetti-button").getBoundingClientRect().y+e("#super-confetti-button").getBoundingClientRect().height/2)/window.innerHeight;for(let t=0;t<d;t++)confetti({particleCount:100,startVelocity:30,spread:360,origin:{x:Math.random(),y:Math.random()-.2}})});addEventListener("mousemove",t=>{const n=t.clientX/window.innerWidth,s=t.clientY/window.innerHeight,i=(e("#contact-button").getBoundingClientRect().x+e("#contact-button").getBoundingClientRect().width/2)/window.innerWidth,o=(e("#contact-button").getBoundingClientRect().y+e("#contact-button").getBoundingClientRect().height/2)/window.innerHeight,r=Math.abs(n-i)>1?Math.sign(n-i):n-i,a=Math.abs(s-o)>1?Math.sign(s-o):s-o;e("#contact-button").style.transform=`translate(${r*50}%, ${a*50}%)`});
