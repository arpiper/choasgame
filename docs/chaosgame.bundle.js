!function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var t={};__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="./dist/",__webpack_require__(__webpack_require__.s=1)}([function(e,t,n){"use strict";function encapsulateStyles(e){(0,r.setAttribute)(e,"svelte-3192626690","")}function add_css(){var e=(0,r.createElement)("style");e.id="svelte-3192626690-style",e.textContent="[svelte-3192626690]#canvas-container,[svelte-3192626690] #canvas-container{width:100%;height:100%;display:grid;grid-template-columns:[controls] 20% [canvas] 75% [end];grid-template-rows:auto;grid-row-gap:10px;align-items:center;justify-content:stretch}[svelte-3192626690]#chaos,[svelte-3192626690] #chaos{display:block;grid-column-start:canvas;grid-column-end:end}[svelte-3192626690].user-inputs,[svelte-3192626690] .user-inputs{margin:0 auto;display:flex;flex-direction:column;justify-items:center;grid-column-start:controls;grid-column-end:canvas;padding:5px}[svelte-3192626690].user-inputs div,[svelte-3192626690] .user-inputs div{text-align:center}input[svelte-3192626690][type='number'],[svelte-3192626690] input[type='number']{width:50px;margin:5px}input[svelte-3192626690][name='runtime'],[svelte-3192626690] input[name='runtime']{width:75px}[svelte-3192626690].vertex,[svelte-3192626690] .vertex{display:inline-block}",(0,r.appendNode)(e,document.head)}function create_main_fragment(e,t){function select_change_handler(){xe=!0;var e=l.querySelector(":checked")||l.options[0];t.set({vertices:e&&e.__value}),xe=!1}function change_handler(e){t.updateVertices(l.value)}function input_input_handler(){Ne=!0,t.set({runtime:(0,r.toNumber)(P.value)}),Ne=!1}function input_1_input_handler(){t.set({rule:(0,r.toNumber)(O.value)})}function change_handler_1(e){t.animate()}function input_3_change_handler(){z.checked&&t.set({method:z.__value})}function input_4_change_handler(){$.checked&&t.set({method:$.__value})}function click_handler(e){t.runChaosGame()}function click_handler_1(e){t.stopChaosGame()}function click_handler_2(e){t.drawShape()}function click_handler_3(e){t.stepThrough()}for(var n,a,o,s,d,c,u,l,h,p,_,f,v,m,g,b,y,x,N,w,k,E,T,S,C,L,A,P,M,D,R,B,q,G,O,I,j,F,V,X,H,U,W,z,J,K,Q,Y,Z,$,ee,te,ne,re,ie,ae,oe,se,de,ce,ue,le,he,pe,_e,fe,ve,me,ge,be,ye,xe=!1,Ne=!1,we=i.helpers.formatNum(e.rule,2),ke=e.points,Ee=[],Te=0;Te<ke.length;Te+=1)Ee[Te]=create_each_block(e,ke,ke[Te],Te,t);return{create:function(){n=(0,r.createElement)("div"),a=(0,r.createElement)("div"),o=(0,r.createElement)("div"),s=(0,r.createElement)("div"),d=(0,r.createElement)("label"),c=(0,r.createText)("Vertices:"),u=(0,r.createText)("\n        "),l=(0,r.createElement)("select"),h=(0,r.createElement)("option"),p=(0,r.createText)("3"),_=(0,r.createElement)("option"),f=(0,r.createText)("4"),v=(0,r.createElement)("option"),m=(0,r.createText)("5"),g=(0,r.createElement)("option"),b=(0,r.createText)("6"),y=(0,r.createElement)("option"),x=(0,r.createText)("7"),N=(0,r.createElement)("option"),w=(0,r.createText)("8"),k=(0,r.createElement)("option"),E=(0,r.createText)("9"),T=(0,r.createText)("\n      "),S=(0,r.createElement)("div"),C=(0,r.createElement)("label"),L=(0,r.createText)("Iterations:"),A=(0,r.createText)("\n        "),P=(0,r.createElement)("input"),M=(0,r.createText)("\n      "),D=(0,r.createElement)("div"),R=(0,r.createElement)("label"),B=(0,r.createText)("Proportion:"),q=(0,r.createText)(we),G=(0,r.createText)("\n        "),O=(0,r.createElement)("input"),I=(0,r.createText)("\n      "),j=(0,r.createElement)("div"),F=(0,r.createElement)("input"),V=(0,r.createText)("\n        "),X=(0,r.createElement)("label"),H=(0,r.createText)("Animate"),U=(0,r.createElement)("br"),W=(0,r.createText)("\n        "),z=(0,r.createElement)("input"),J=(0,r.createText)("\n        "),K=(0,r.createElement)("label"),Q=(0,r.createText)("Method 1"),Y=(0,r.createElement)("br"),Z=(0,r.createText)("\n        "),$=(0,r.createElement)("input"),ee=(0,r.createText)("\n        "),te=(0,r.createElement)("label"),ne=(0,r.createText)("Method 2"),re=(0,r.createElement)("br"),ie=(0,r.createText)("\n      "),ae=(0,r.createElement)("div"),oe=(0,r.createElement)("input"),se=(0,r.createText)("\n        "),de=(0,r.createElement)("input"),ce=(0,r.createText)("\n        "),ue=(0,r.createElement)("input"),le=(0,r.createText)("\n        "),he=(0,r.createElement)("input"),pe=(0,r.createText)("\n\n    "),_e=(0,r.createElement)("div");for(var t=0;t<Ee.length;t+=1)Ee[t].create();fe=(0,r.createText)("\n    "),ve=(0,r.createElement)("span"),me=(0,r.createText)("Iterations: "),ge=(0,r.createText)(e.counter),be=(0,r.createText)("\n  "),ye=(0,r.createElement)("canvas"),this.hydrate()},hydrate:function(i){encapsulateStyles(n),n.id="canvas-container",a.className="user-inputs",o.className="variables",d.htmlFor="#vertices",h.__value="3",h.value=h.__value,_.__value="4",_.value=_.__value,v.__value="5",v.value=v.__value,g.__value="6",g.value=g.__value,y.__value="7",y.value=y.__value,N.__value="8",N.value=N.__value,k.__value="9",k.value=k.__value,l.name="vertices",l.id="vertices","vertices"in e||t._root._beforecreate.push(select_change_handler),(0,r.addListener)(l,"change",select_change_handler),(0,r.addListener)(l,"change",change_handler),C.htmlFor="runtime",P.id="runtime",P.type="number",P.name="runtime",(0,r.addListener)(P,"input",input_input_handler),R.htmlFor="rule",O.id="rule",O.type="range",O.min="0",O.max="1",O.step="0.01",(0,r.addListener)(O,"input",input_1_input_handler),(0,r.addListener)(O,"change",input_1_input_handler),F.type="checkbox",F.checked=!0,F.id="animate",F.name="animate",(0,r.addListener)(F,"change",change_handler_1),X.htmlFor="animate",z.id="midpoint",z.type="radio",z.name="midpoint",z.__value="midpoint",z.value=z.__value,t._bindingGroups[0].push(z),(0,r.addListener)(z,"change",input_3_change_handler),K.htmlFor="midpoint",$.id="endpoint",$.type="radio",$.name="endpoint",$.__value="endpoint",$.value=$.__value,t._bindingGroups[0].push($),(0,r.addListener)($,"change",input_4_change_handler),te.htmlFor="endpoint",oe.type="button",oe.value="Go",(0,r.addListener)(oe,"click",click_handler),de.type="button",de.value="Stop",(0,r.addListener)(de,"click",click_handler_1),ue.type="button",ue.value="Clear",(0,r.addListener)(ue,"click",click_handler_2),he.type="button",he.value="Step",(0,r.addListener)(he,"click",click_handler_3),_e.className="vertices",ye.id="chaos"},mount:function(t,i){(0,r.insertNode)(n,t,i),(0,r.appendNode)(a,n),(0,r.appendNode)(o,a),(0,r.appendNode)(s,o),(0,r.appendNode)(d,s),(0,r.appendNode)(c,d),(0,r.appendNode)(u,s),(0,r.appendNode)(l,s),(0,r.appendNode)(h,l),(0,r.appendNode)(p,h),(0,r.appendNode)(_,l),(0,r.appendNode)(f,_),(0,r.appendNode)(v,l),(0,r.appendNode)(m,v),(0,r.appendNode)(g,l),(0,r.appendNode)(b,g),(0,r.appendNode)(y,l),(0,r.appendNode)(x,y),(0,r.appendNode)(N,l),(0,r.appendNode)(w,N),(0,r.appendNode)(k,l),(0,r.appendNode)(E,k);for(var xe=e.vertices,Ne=0;Ne<l.options.length;Ne+=1){var we=l.options[Ne];if(we.__value===xe){we.selected=!0;break}}(0,r.appendNode)(T,o),(0,r.appendNode)(S,o),(0,r.appendNode)(C,S),(0,r.appendNode)(L,C),(0,r.appendNode)(A,S),(0,r.appendNode)(P,S),P.value=e.runtime,(0,r.appendNode)(M,o),(0,r.appendNode)(D,o),(0,r.appendNode)(R,D),(0,r.appendNode)(B,R),(0,r.appendNode)(q,R),(0,r.appendNode)(G,D),(0,r.appendNode)(O,D),O.value=e.rule,(0,r.appendNode)(I,o),(0,r.appendNode)(j,o),(0,r.appendNode)(F,j),(0,r.appendNode)(V,j),(0,r.appendNode)(X,j),(0,r.appendNode)(H,X),(0,r.appendNode)(U,j),(0,r.appendNode)(W,j),(0,r.appendNode)(z,j),z.checked=z.__value===e.method,(0,r.appendNode)(J,j),(0,r.appendNode)(K,j),(0,r.appendNode)(Q,K),(0,r.appendNode)(Y,j),(0,r.appendNode)(Z,j),(0,r.appendNode)($,j),$.checked=$.__value===e.method,(0,r.appendNode)(ee,j),(0,r.appendNode)(te,j),(0,r.appendNode)(ne,te),(0,r.appendNode)(re,j),(0,r.appendNode)(ie,o),(0,r.appendNode)(ae,o),(0,r.appendNode)(oe,ae),(0,r.appendNode)(se,ae),(0,r.appendNode)(de,ae),(0,r.appendNode)(ce,ae),(0,r.appendNode)(ue,ae),(0,r.appendNode)(le,ae),(0,r.appendNode)(he,ae),(0,r.appendNode)(pe,a),(0,r.appendNode)(_e,a);for(var Ne=0;Ne<Ee.length;Ne+=1)Ee[Ne].mount(_e,null);(0,r.appendNode)(fe,a),(0,r.appendNode)(ve,a),(0,r.appendNode)(me,ve),(0,r.appendNode)(ge,ve),(0,r.appendNode)(be,n),(0,r.appendNode)(ye,n)},update:function(e,n){if(!xe)for(var r=n.vertices,a=0;a<l.options.length;a+=1){var o=l.options[a];if(o.__value===r){o.selected=!0;break}}Ne||(P.value=n.runtime),e.rule&&we!==(we=i.helpers.formatNum(n.rule,2))&&(q.data=we),O.value=n.rule,z.checked=z.__value===n.method,$.checked=$.__value===n.method;var s=n.points;if(e.points){for(var a=0;a<s.length;a+=1)Ee[a]?Ee[a].update(e,n,s,s[a],a):(Ee[a]=create_each_block(n,s,s[a],a,t),Ee[a].create(),Ee[a].mount(_e,null));for(;a<Ee.length;a+=1)Ee[a].unmount(),Ee[a].destroy();Ee.length=s.length}e.counter&&(ge.data=n.counter)},unmount:function(){(0,r.detachNode)(n);for(var e=0;e<Ee.length;e+=1)Ee[e].unmount()},destroy:function(){(0,r.removeListener)(l,"change",select_change_handler),(0,r.removeListener)(l,"change",change_handler),(0,r.removeListener)(P,"input",input_input_handler),(0,r.removeListener)(O,"input",input_1_input_handler),(0,r.removeListener)(O,"change",input_1_input_handler),(0,r.removeListener)(F,"change",change_handler_1),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf(z),1),(0,r.removeListener)(z,"change",input_3_change_handler),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf($),1),(0,r.removeListener)($,"change",input_4_change_handler),(0,r.removeListener)(oe,"click",click_handler),(0,r.removeListener)(de,"click",click_handler_1),(0,r.removeListener)(ue,"click",click_handler_2),(0,r.removeListener)(he,"click",click_handler_3),(0,r.destroyEach)(Ee,!1,0)}}}function create_each_block(e,t,n,a,o){function input_input_handler(){g=!0,h._svelte.each_block_value[h._svelte.i].x=(0,r.toNumber)(h.value),o.set({points:o.get("points")}),g=!1}function input_1_input_handler(){b=!0,f._svelte.each_block_value[f._svelte.i].y=(0,r.toNumber)(f.value),o.set({points:o.get("points")}),b=!1}var s,d,c,u,l,h,p,_,f,v,m=i.helpers.indexToAlpha(a),g=!1,b=!1;return{create:function(){s=(0,r.createElement)("div"),d=(0,r.createElement)("span"),c=(0,r.createText)(m),u=(0,r.createText)(":"),l=(0,r.createText)("\n          "),h=(0,r.createElement)("input"),_=(0,r.createText)("\n          "),f=(0,r.createElement)("input"),this.hydrate()},hydrate:function(e){s.className="vertex",d.className="label",h.type="number",h.id=p="point-"+a+"-x",(0,r.addListener)(h,"input",input_input_handler),(0,r.addListener)(h,"change",change_handler),h._svelte={component:o,each_block_value:t,i:a},f.type="number",f.id=v="point-"+a+"-y",(0,r.addListener)(f,"input",input_1_input_handler),(0,r.addListener)(f,"change",change_handler_1),f._svelte={component:o,each_block_value:t,i:a}},mount:function(e,t){(0,r.insertNode)(s,e,t),(0,r.appendNode)(d,s),(0,r.appendNode)(c,d),(0,r.appendNode)(u,d),(0,r.appendNode)(l,s),(0,r.appendNode)(h,s),h.value=n.x,(0,r.appendNode)(_,s),(0,r.appendNode)(f,s),f.value=n.y},update:function(e,t,n,r,i){g||(h.value=r.x),h._svelte.each_block_value=n,h._svelte.i=i,b||(f.value=r.y),f._svelte.each_block_value=n,f._svelte.i=i},unmount:function(){(0,r.detachNode)(s)},destroy:function(){(0,r.removeListener)(h,"input",input_input_handler),(0,r.removeListener)(h,"change",change_handler),(0,r.removeListener)(f,"input",input_1_input_handler),(0,r.removeListener)(f,"change",change_handler_1)}}}function change_handler(e){this._svelte.component.drawShape()}function change_handler_1(e){this._svelte.component.drawShape()}function ChaosGame(e){this.options=e,this._state=(0,r.assign)(i.data(),e.data),this._bindingGroups=[[]],this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._handlers.destroy=[i.ondestroy],this._root=e._root||this,this._yield=e._yield,this._bind=e._bind,document.getElementById("svelte-3192626690-style")||add_css();var t=i.oncreate.bind(this);e._root?this._root._oncreate.push(t):(this._oncreate=[t],this._beforecreate=[]),this._fragment=create_main_fragment(this._state,this),e.target&&(this._fragment.create(),this._fragment.mount(e.target,e.anchor||null),(0,r.callAll)(this._beforecreate),(0,r.callAll)(this._oncreate))}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=function(){return{data:function(){return{height:0,width:0,ctx:void 0,vertices:3,runtime:1e3,points:[{x:0,y:200},{x:-225,y:-150},{x:225,y:-150}],point:{x:0,y:0},intervalID:0,counter:0,animate:!0,rule:.5,method:"midpoint"}},oncreate:function(){var e=document.getElementById("chaos"),t=e.getContext("2d"),n=document.getElementById("canvas-container");e.height=.8*n.offsetHeight,e.width=.8*n.offsetWidth,this.get("points").forEach(function(t,n){(t.x>e.width/2||t.x<-e.width/2)&&(t.x=e.width/4*(t.x/Math.abs(t.x)))}),t.translate(e.width/2,e.height/2),this.set({height:e.height,width:e.width,ctx:t}),this.drawAxes(),this.drawShape()},ondestroy:function(){},helpers:{indexToAlpha:function(e){return String.fromCharCode(65+e)},formatNum:function(e,t){return e.toPrecision(t)}},methods:{animate:function(){var e=this.get("animate");this.set({animate:!e})},updateVertices:function(e){this.clearCanvas();var t=this.get("points"),n=e-t.length;if(n>0)for(var r=0;r<n;r++)t.push({x:10*e,y:10*e});else n<0&&t.splice(n,Math.abs(n));this.set({points:t}),this.drawShape()},chooseStart:function(){var e=void 0,t=void 0,n=void 0;this.get("ctx"),e=Math.floor(Math.random()*this.get("width")),t=Math.floor(Math.random()*this.get("height")),n={x:e,y:t},this.set({point:n}),this.drawPoint(n,2)},chooseVertex:function(){var e=this.get("vertices"),t=Math.floor(Math.random()*e);return this.get("points")[t]},getMidPoint:function(e,t){var n=this.get("rule"),r=(e.x+t.x)*n,i=(e.y+t.y)*n;return this.set({point:{x:r,y:i}}),{x:r,y:i}},getDistance:function(e,t){var n=Math.pow(e.x-t.x,2),r=Math.pow(e.y-t.y,2),i=n+r;return Math.sqrt(i)},getPoint:function(e,t){var n=void 0,r=void 0,i=void 0;return i=this.get("rule"),n=e.x-t.x,r=e.y-t.y,{x:e.x-n*(1-i),y:e.y-r*(1-i)}},drawPoint:function(e,t,n){var r=this.get("ctx");void 0!==n&&(r.fillStyle=n,r.strokeSyle=n),r.beginPath(),r.arc(e.x,e.y,t,0,2*Math.PI),r.fill()},drawShape:function(){var e=this;this.clearCanvas(),this.get("points").forEach(function(t,n,r){e.drawPoint(t,5,"#f00"),e.labelPoint({x:t.x+5,y:t.y+5},String.fromCharCode(65+n))})},drawAxes:function(){var e=this.get("ctx"),t=this.get("width"),n=this.get("height");e.beginPath(),e.moveTo(-t/2,0),e.lineTo(t/2,0),e.moveTo(0,-n/2),e.lineTo(0,n/2),this.labelPoint({x:0,y:n-5},"(0,"+n+")"),this.labelPoint({x:t-50,y:15},"("+t+",0)"),e.stroke()},labelPoint:function(e,t){var n=this.get("ctx");n.font="14px arial",n.fillStyle="#f00",n.strokeStyle="#f00",n.strokeText(t,e.x,e.y),n.fillStyle="#000",n.strokeStyle="#000"},runChaosGame:function(){var e=this;if(this.clearCanvas(),this.drawShape(),this.chooseStart(),this.get("animate")){var t=void 0,n=void 0,r=void 0,i=void 0;t=0,n=this.get("runtime"),r=this.get("method"),i=window.setInterval(function(){var a=void 0,o=void 0,s=void 0;a=e.get("point"),o=e.chooseVertex(),"midpoint"===r?s=e.getMidPoint(a,o):"endpoint"===r&&(s=e.getPoint(a,o)),e.drawPoint(s,2),t++,e.set({counter:t,point:s}),t===n&&window.clearInterval(i)},25),this.set({intervalID:i})}else this.loopPoints(this.get("runtime"))},stepThrough:function(){var e=void 0,t=void 0,n=void 0,r=void 0;e=this.get("point"),t=this.chooseVertex(),n=this.getMidPoint(e,t),this.drawPoint(n,2,"#0d0"),r=this.getPoint(e,t),this.drawPoint(r,2,"#0f0"),this.set({point:r})},test:function(){var e=void 0,t=void 0,n=void 0;e=this.get("point");for(var r=0;r<this.get("runtime");r++)t=this.chooseVertex(),n=this.getPoint(e,t),this.drawPoint(n,3,"#0d0"),e=n,this.set({point:n})},clearCanvas:function(){var e=this.get("height"),t=this.get("width");this.get("ctx").clearRect(-t/2,-e/2,t,e),this.set({point:{x:0,y:0}}),this.drawAxes()},stopChaosGame:function(){window.clearInterval(this.get("intervalID"))},loopPoints:function(e){var t=void 0,n=void 0,r=void 0,i=void 0;i=this.get("method"),t=this.get("point");for(var a=0;a<e;a++)n=this.chooseVertex(),"midpoint"===i?r=this.getMidPoint(t,n):"endpoint"===i&&(r=this.getPoint(t,n)),this.drawPoint(r,2),t=r,this.set({point:t})}}}}();(0,r.assign)(ChaosGame.prototype,i.methods,r.proto),t.default=ChaosGame},function(e,t,n){"use strict";var r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r);new i.default({target:document.querySelector(".math-chaosgame")})},function(e,t,n){"use strict";function noop(){}function assign(e){for(var t,n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(t in n)e[t]=n[t]}return e}function appendNode(e,t){t.appendChild(e)}function insertNode(e,t,n){t.insertBefore(e,n)}function detachNode(e){e.parentNode.removeChild(e)}function detachBetween(e,t){for(;e.nextSibling&&e.nextSibling!==t;)e.parentNode.removeChild(e.nextSibling)}function detachBefore(e){for(;e.previousSibling;)e.parentNode.removeChild(e.previousSibling)}function detachAfter(e){for(;e.nextSibling;)e.parentNode.removeChild(e.nextSibling)}function reinsertBetween(e,t,n){for(;e.nextSibling&&e.nextSibling!==t;)n.appendChild(e.parentNode.removeChild(e.nextSibling))}function reinsertChildren(e,t){for(;e.firstChild;)t.appendChild(e.firstChild)}function reinsertAfter(e,t){for(;e.nextSibling;)t.appendChild(e.nextSibling)}function reinsertBefore(e,t){for(var n=e.parentNode;n.firstChild!==e;)t.appendChild(n.firstChild)}function destroyEach(e,t,n){for(var r=n;r<e.length;r+=1)e[r]&&e[r].destroy(t)}function createFragment(){return document.createDocumentFragment()}function createElement(e){return document.createElement(e)}function createSvgElement(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function createText(e){return document.createTextNode(e)}function createComment(){return document.createComment("")}function addListener(e,t,n){e.addEventListener(t,n,!1)}function removeListener(e,t,n){e.removeEventListener(t,n,!1)}function setAttribute(e,t,n){e.setAttribute(t,n)}function setXlinkAttribute(e,t,n){e.setAttributeNS("http://www.w3.org/1999/xlink",t,n)}function getBindingGroupValue(e){for(var t=[],n=0;n<e.length;n+=1)e[n].checked&&t.push(e[n].__value);return t}function toNumber(e){return""===e?void 0:+e}function timeRangesToArray(e){for(var t=[],n=0;n<e.length;n+=1)t.push({start:e.start(n),end:e.end(n)});return t}function children(e){return Array.from(e.childNodes)}function claimElement(e,t,n,r){for(var i=0;i<e.length;i+=1){var a=e[i];if(a.nodeName===t){for(var o=0;o<a.attributes.length;o+=1){var s=a.attributes[o];n[s.name]||a.removeAttribute(s.name)}return e.splice(i,1)[0]}}return r?createSvgElement(t):createElement(t)}function claimText(e,t){for(var n=0;n<e.length;n+=1){var r=e[n];if(3===r.nodeType)return r.data=t,e.splice(n,1)[0]}return createText(t)}function setInputType(e,t){try{e.type=t}catch(e){}}function setStyle(e,t,n){e.style.setProperty(t,n)}function linear(e){return e}function generateRule(e,t,n,r,i,a){for(var o="{\n",s=0;s<=1;s+=16.666/r){o+=100*s+"%{"+a(e+n*i(s))+"}\n"}return o+"100% {"+a(t)+"}\n}"}function hash(e){for(var t=5381,n=e.length;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function wrapTransition(e,t,n,i,a,o){var s,d=n(t,i),c=d.duration||300,u=d.easing||linear;if(d.css&&!r.stylesheet){var l=createElement("style");document.head.appendChild(l),r.stylesheet=l.sheet}return a&&(d.css&&d.delay&&(s=t.style.cssText,t.style.cssText+=d.css(0)),d.tick&&d.tick(0)),{t:a?0:1,running:!1,program:null,pending:null,run:function(e,t){var n={start:window.performance.now()+(d.delay||0),intro:e,callback:t};d.delay?this.pending=n:this.start(n),this.running||(this.running=!0,r.add(this))},start:function(n){e.fire(n.intro?"intro.start":"outro.start",{node:t}),n.a=this.t,n.b=n.intro?1:0,n.delta=n.b-n.a,n.duration=c*Math.abs(n.b-n.a),n.end=n.start+n.duration,d.css&&(d.delay&&(t.style.cssText=s),n.rule=generateRule(n.a,n.b,n.delta,n.duration,u,d.css),r.addRule(n.rule,n.name="__svelte_"+hash(n.rule)),t.style.animation=(t.style.animation||"").split(", ").filter(function(e){return e&&(n.delta<0||!/__svelte/.test(e))}).concat(n.name+" "+c+"ms linear 1 forwards").join(", ")),this.program=n,this.pending=null},update:function(e){var t=this.program;if(t){var n=e-t.start;this.t=t.a+t.delta*u(n/t.duration),d.tick&&d.tick(this.t)}},done:function(){var e=this.program;this.t=e.b,d.tick&&d.tick(this.t),d.css&&r.deleteRule(t,e.name),e.callback(),e=null,this.running=!!this.pending},abort:function(){d.tick&&d.tick(1),d.css&&r.deleteRule(t,this.program.name),this.program=this.pending=null,this.running=!1}}}function destroy(e){this.destroy=noop,this.fire("destroy"),this.set=this.get=noop,!1!==e&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=this._state=null}function destroyDev(e){destroy.call(this,e),this.destroy=function(){console.warn("Component was already destroyed")}}function differs(e,t){return e!==t||e&&"object"==typeof e||"function"==typeof e}function dispatchObservers(e,t,n,r,i){for(var a in t)if(n[a]){var o=r[a],s=i[a],d=t[a];if(d)for(var c=0;c<d.length;c+=1){var u=d[c];u.__calling||(u.__calling=!0,u.call(e,o,s),u.__calling=!1)}}}function get(e){return e?this._state[e]:this._state}function fire(e,t){var n=e in this._handlers&&this._handlers[e].slice();if(n)for(var r=0;r<n.length;r+=1)n[r].call(this,t)}function observe(e,t,n){var r=n&&n.defer?this._observers.post:this._observers.pre;return(r[e]||(r[e]=[])).push(t),n&&!1===n.init||(t.__calling=!0,t.call(this,this._state[e]),t.__calling=!1),{cancel:function(){var n=r[e].indexOf(t);~n&&r[e].splice(n,1)}}}function observeDev(e,t,n){var r=(e=""+e).search(/[^\w]/);if(r>-1){var i="The first argument to component.observe(...) must be the name of a top-level property";throw r>0&&(i+=", i.e. '"+e.slice(0,r)+"' rather than '"+e+"'"),new Error(i)}return observe.call(this,e,t,n)}function on(e,t){if("teardown"===e)return this.on("destroy",t);var n=this._handlers[e]||(this._handlers[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}}function onDev(e,t){return"teardown"===e?(console.warn("Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2"),this.on("destroy",t)):on.call(this,e,t)}function set(e){this._set(assign({},e)),this._root._lock||(this._root._lock=!0,callAll(this._root._beforecreate),callAll(this._root._oncreate),callAll(this._root._aftercreate),this._root._lock=!1)}function _set(e){var t=this._state,n={},r=!1;for(var i in e)differs(e[i],t[i])&&(n[i]=r=!0);r&&(this._state=assign({},t,e),this._recompute(n,this._state,t,!1),this._bind&&this._bind(n,this._state),dispatchObservers(this,this._observers.pre,n,this._state,t),this._fragment.update(n,this._state),dispatchObservers(this,this._observers.post,n,this._state,t))}function _setDev(e){if("object"!=typeof e)throw new Error(this._debugName+" .set was called without an object of data key-values to update.");this._checkReadOnly(e),_set.call(this,e)}function callAll(e){for(;e&&e.length;)e.pop()()}function _mount(e,t){this._fragment.mount(e,t)}function _unmount(){this._fragment.unmount()}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"destroy",function(){return destroy}),n.d(t,"destroyDev",function(){return destroyDev}),n.d(t,"differs",function(){return differs}),n.d(t,"dispatchObservers",function(){return dispatchObservers}),n.d(t,"get",function(){return get}),n.d(t,"fire",function(){return fire}),n.d(t,"observe",function(){return observe}),n.d(t,"observeDev",function(){return observeDev}),n.d(t,"on",function(){return on}),n.d(t,"onDev",function(){return onDev}),n.d(t,"set",function(){return set}),n.d(t,"_set",function(){return _set}),n.d(t,"_setDev",function(){return _setDev}),n.d(t,"callAll",function(){return callAll}),n.d(t,"_mount",function(){return _mount}),n.d(t,"_unmount",function(){return _unmount}),n.d(t,"proto",function(){return i}),n.d(t,"protoDev",function(){return a}),n.d(t,"appendNode",function(){return appendNode}),n.d(t,"insertNode",function(){return insertNode}),n.d(t,"detachNode",function(){return detachNode}),n.d(t,"detachBetween",function(){return detachBetween}),n.d(t,"detachBefore",function(){return detachBefore}),n.d(t,"detachAfter",function(){return detachAfter}),n.d(t,"reinsertBetween",function(){return reinsertBetween}),n.d(t,"reinsertChildren",function(){return reinsertChildren}),n.d(t,"reinsertAfter",function(){return reinsertAfter}),n.d(t,"reinsertBefore",function(){return reinsertBefore}),n.d(t,"destroyEach",function(){return destroyEach}),n.d(t,"createFragment",function(){return createFragment}),n.d(t,"createElement",function(){return createElement}),n.d(t,"createSvgElement",function(){return createSvgElement}),n.d(t,"createText",function(){return createText}),n.d(t,"createComment",function(){return createComment}),n.d(t,"addListener",function(){return addListener}),n.d(t,"removeListener",function(){return removeListener}),n.d(t,"setAttribute",function(){return setAttribute}),n.d(t,"setXlinkAttribute",function(){return setXlinkAttribute}),n.d(t,"getBindingGroupValue",function(){return getBindingGroupValue}),n.d(t,"toNumber",function(){return toNumber}),n.d(t,"timeRangesToArray",function(){return timeRangesToArray}),n.d(t,"children",function(){return children}),n.d(t,"claimElement",function(){return claimElement}),n.d(t,"claimText",function(){return claimText}),n.d(t,"setInputType",function(){return setInputType}),n.d(t,"setStyle",function(){return setStyle}),n.d(t,"linear",function(){return linear}),n.d(t,"generateRule",function(){return generateRule}),n.d(t,"hash",function(){return hash}),n.d(t,"wrapTransition",function(){return wrapTransition}),n.d(t,"transitionManager",function(){return r}),n.d(t,"noop",function(){return noop}),n.d(t,"assign",function(){return assign});var r={running:!1,transitions:[],bound:null,stylesheet:null,activeRules:{},add:function(e){this.transitions.push(e),this.running||(this.running=!0,requestAnimationFrame(this.bound||(this.bound=this.next.bind(this))))},addRule:function(e,t){this.activeRules[t]||(this.activeRules[t]=!0,this.stylesheet.insertRule("@keyframes "+t+" "+e,this.stylesheet.cssRules.length))},next:function(){this.running=!1;for(var e=window.performance.now(),t=this.transitions.length;t--;){var n=this.transitions[t];n.program&&e>=n.program.end&&n.done(),n.pending&&e>=n.pending.start&&n.start(n.pending),n.running?(n.update(e),this.running=!0):n.pending||this.transitions.splice(t,1)}if(this.running)requestAnimationFrame(this.bound);else if(this.stylesheet){for(var t=this.stylesheet.cssRules.length;t--;)this.stylesheet.deleteRule(t);this.activeRules={}}},deleteRule:function(e,t){e.style.animation=e.style.animation.split(", ").filter(function(e){return e.slice(0,t.length)!==t}).join(", ")}},i={destroy:destroy,get:get,fire:fire,observe:observe,on:on,set:set,teardown:destroy,_recompute:noop,_set:_set,_mount:_mount,_unmount:_unmount},a={destroy:destroyDev,get:get,fire:fire,observe:observeDev,on:onDev,set:set,teardown:destroyDev,_recompute:noop,_set:_setDev,_mount:_mount,_unmount:_unmount}}]);