(()=>{var r="🌝",m="💞️",h="disqus",s="light",f="dark",i=document.getElementById("theme-switcher");i.innerHTML=localStorage.theme===s?r:m;i.addEventListener("click",function(){let e=localStorage.theme,t=e===s?f:s;p(e,t),h==="utterances"&&y(`github-${t}`)});function p(e,t){let{classList:c}=document.documentElement,n=t===s?r:m;c.remove(e),c.add(t),localStorage.theme=t,i.innerHTML=n}var g=".utterances-frame",o;function y(e){o||(o=document.querySelector(g)),o.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}document.querySelectorAll(".md ul").forEach(e=>{/<li><input .+>.+<\/li>/.test(e.innerHTML)&&e.classList.add("ul-checkbox")});document.querySelector("body").style.setProperty("--global-font-family","");var S="true";S==="false"&&(document.documentElement.style="user-select:none");var b=document.getElementById("friends"),k="<no value>",w="<no value>",v=w.replace(/^\[|\]$/g,"").split(" ");v.forEach(e=>fetch(e).then(t=>t.text()).then(t=>x(t)));function x(e){e=e.trim().replace(/\n/g,"");let t=e.matchAll(/<(item|entry)>.*?<\/(item|entry)>/g),c=+k||2;for(;c;){let n=t.next();if(n.done)break;let l=n.value[0].match(/(?<=<title>).*(?=<\/title>)/)[0],d=n.value[0].match(/(?<=<(link|id)>).*(?=<\/(link|id)>)/)[0],u=n.value[0].match(/(?<=<(pubDate|updated)>).*(?=<\/(pubDate|updated)>)/)[0],a=document.createElement("div");a.className="flex justify-between sm:flex-col-reverse my-4 sm:mb-6 sm:mt-3",a.innerHTML=P(d,l,u),b.appendChild(a),c--}}function E(e){return new Date(e).toDateString()}function P(){let e=arguments;return`
    <a href=${e[0]}>${e[1]}</a>
    <div class="sm:mb-2 sm:text-xs">${E(e[2])}</div>
  `.trim()}})();
