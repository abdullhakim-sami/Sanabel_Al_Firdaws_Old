"use strict";(self.webpackChunksanabel_al_firdaws=self.webpackChunksanabel_al_firdaws||[]).push([[3608],{9228:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});s(959);var r=s(2384),t=s(7289),i=s(256),l=s(1649),n=s(2542),c=s(1527);function d(e){let{year:a,posts:s}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{as:"h3",id:a,children:a}),(0,c.jsx)("ul",{children:s.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:a}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(d,{...e})},a)))})})})}function o(e){let{archive:a}=e;const s=(0,t.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,t.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const a=e.reduce(((e,a)=>{const s=a.metadata.date.split("-")[0],r=e.get(s)??[];return e.set(s,[a,...r])}),new Map);return Array.from(a,(e=>{let[a,s]=e;return{year:a,posts:s}}))}(a.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.d,{title:s,description:r}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.Z,{as:"h1",className:"hero__title",children:s}),(0,c.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,c.jsx)("main",{children:d.length>0&&(0,c.jsx)(h,{years:d})})]})]})}}}]);