import{r as e,R as a}from"./react.ca74714e.js";import{y as t,a as r,b as s,m as n}from"./index.f646073d.js";var m=t((()=>({keepElements:e.exports.useRef({}),isKeepPath:e.exports.useCallback((e=>["/list"].includes(e)),[])})),{global:!0});var p=e.exports.memo((()=>{const{keepElements:t,isKeepPath:p}=m(),l=r(),c=e.exports.useRef(l.pathname),o=s(),u=p(l.pathname);o&&!t.current[l.pathname]&&u&&(t.current[l.pathname]=o);const i=n(l.pathname,c.current);return a.createElement(a.Fragment,null,i&&u?Object.entries(t.current).map((([e,t])=>a.createElement("div",{key:e,hidden:!i||!n(l.pathname,e)},t))):o)}));var l=e.exports.memo((()=>a.createElement("div",{className:"tabbar_page"},a.createElement(p,null))));export{l as default};