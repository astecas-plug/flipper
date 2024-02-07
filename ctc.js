/**
 * @October/core ctc flipper v2.9.2 - MIT License
 */
"use strict";!function(){for(var e=document.querySelectorAll("a"),t=window.location,r=0;r<e.length;r++){var l=e[r],n=l.getAttribute("href");if(n&&n.includes("tel:")){var o=n.replace("tel:",""),u="tel"+t.phoneNumber+"."+o;l.setAttribute("href",u)}}}
//# sourceMappingURL=ctc.min.js.map
