import{j as a,o as r,c as f,d as c,b as s,n as k,g as u,_ as d}from"./index.8e9cc30a.js";const b={class:"h-full flex items-center justify-center m-auto font-bold text-base text-zinc-900 dark:text-zinc-200"},g={name:"index",props:{clickLeft:Function,clickRight:Function,sticky:Boolean},setup(i){const e=i,l=a(),n=()=>{if(e.clickLeft){e.clickLeft();return}l.back()},o=()=>{e.clickRight&&e.clickRight()};return(t,h)=>(r(),f("div",{class:k(["w-full h-5 border-b flex items-center z-10 bg-white dark:bg-zinc-800 border-b-zinc-200 dark:border-b-zinc-700",[i.sticky?"sticky top-0 left-0":"relative"]])},[c("div",{class:"h-full w-5 absolute left-0 flex items-center justify-center",onClick:n},[s(t.$slots,"left",{},()=>[u(d,{name:"back",class:"w-2 h-2",fillClass:"fill-zinc-900 dark:fill-zinc-200"})])]),c("div",b,[s(t.$slots,"default")]),c("div",{class:"h-full w-5 absolute right-0 flex items-center justify-center",onClick:o},[s(t.$slots,"right")])],2))}};export{g as _};