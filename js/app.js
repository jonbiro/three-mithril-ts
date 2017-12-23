!function e(t,r,n){function i(s,a){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return i(r||e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril"),i=e("../config"),o=e("../state"),s=e("../lib/loader"),a=e("../game"),u=e("./title-block"),c=e("./hud");r.default=function(){function e(){l&&!v&&(l.run(),v=!0)}function t(){if(r){var e=r.getBoundingClientRect(),t=e.width,s=e.height;o.fontSize(i.DEFAULT_FONT_SIZE*s/i.DEFAULT_HEIGHT),l&&l.resize(t,s),n.redraw()}}var r,l,f,d=s.loadAssets({geometries:[{name:"monkey",url:"data/mesh/monkey.json"},{name:"bullet",url:"data/mesh/bullet.json"}],textures:[{name:"ground",url:"data/tex/ground.jpg"},{name:"bricks",url:"data/tex/bricks.jpg"}]}),h=d.promise,p=d.progress,v=!1;return{oncreate:function(e){var i=e.dom;r=i.querySelector("canvas.app-canvas"),window.addEventListener("resize",t),t(),h.then(function(e){setTimeout(function(){l=a.default(r,e),t()},100)}).catch(function(e){f=e,p.end(!0),n.redraw()})},onremove:function(){window.removeEventListener("resize",t),l&&(l.destroy(),r=l=void 0)},view:function(){return n(".app",n("canvas.app-canvas"),n(".ui",{style:"font-size: "+o.fontSize()+"px"},v?!!l&&n(c.default,{score:l.score,time:l.time,level:l.level}):n(u.default,{progress:p,ready:!!l,error:f,onStart:e})))}}}},{"../config":7,"../game":16,"../lib/loader":20,"../state":23,"./hud":2,"./title-block":6,mithril:"mithril"}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril"),i=e("../lib/string"),o=e("../lib/fullscreen"),s=e("./observer"),a=e("./svgs");r.default={view:function(e){var t=e.attrs,r=t.score,u=t.time,c=t.level;return n(".hud",n(".score-block",n(s.default,{value:r,render:function(e){return String(e)},view:function(){return n(".score")}}),n(s.default,{value:u,render:function(e){return i.formatTime(e)},view:function(){return n(".time")}}),n(s.default,{value:c,render:function(e){return String(e)},view:function(){return n(".level")}})),n(".control-block",n(".fullscreen",n("button",{type:"button",onclick:function(){o.toggle(document.querySelector(".app"))}},o.is()?a.fullscreenOff():a.fullscreenOn()))))}}},{"../lib/fullscreen":18,"../lib/string":21,"./observer":4,"./svgs":5,mithril:"mithril"}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril"),i=e("./observer");r.default={view:function(e){var t=e.attrs.progress;return n(i.default,{value:t,render:function(e){return n(".bar",{style:"width: "+100*e+"%"})},view:function(){return n(".bar-outer")}})}}},{"./observer":4,mithril:"mithril"}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril");r.default={value:void 0,oncreate:function(e){var t=e.dom,r=e.attrs,i=r.render,o=r.selector,s=r.value;this.value=s.map(function(e){return e});var a="string"==typeof o?t.querySelector(o):t;this.value.map(function(e){n.render(a,i(e))})},onremove:function(){this.value.end(!0)},view:function(e){return e.attrs.view(e)}}},{mithril:"mithril"}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril");r.widescreenOn=function(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 67.733 67.733"},n("path",{d:"M0 12.7v42.333h67.733V12.7zm8.467 8.467h50.8v25.4h-50.8z"}))},r.widescreenOff=function(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 67.733 67.733"},n("path",{d:"M8.467 16.933V50.8h50.8V16.933zm8.466 8.467H50.8v16.933H16.933z"}))},r.fullscreenOn=function(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 469 469"},n("g",n("path",{d:"M455.5 0h-442C6 0 0 6 0 13.5v211.9c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V27h415v415H242.4c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h213.1c7.5 0 13.5-6 13.5-13.5v-442C469 6 463 0 455.5 0z"}),n("path",{d:"M175.6 279.9H13.5c-7.5 0-13.5 6-13.5 13.5v162.1C0 463 6 469 13.5 469h162.1c7.5 0 13.5-6 13.5-13.5V293.4c0-7.4-6.1-13.5-13.5-13.5zM162.1 442H27V306.9h135.1V442zM360.4 127.7v71.5c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V95.1c0-7.5-6-13.5-13.5-13.5H269.8c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h71.5L212.5 237.4c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l128.9-128.8z"})))},r.fullscreenOff=function(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 469 469"},n("g",n("path",{d:"M455.5 0h-442C6 0 0 6 0 13.5v211.9c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V27h415v415H242.4c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h213.1c7.5 0 13.5-6 13.5-13.5v-442C469 6 463 0 455.5 0z"}),n("path",{d:"M13.514 468.986h162.1c7.5 0 13.5-6 13.5-13.5v-162.1c0-7.5-6-13.5-13.5-13.5h-162.1c-7.5 0-13.5 6-13.5 13.5v162.1c0 7.4 6.1 13.5 13.5 13.5zm13.5-162.1h135.1v135.1h-135.1zm221.7-102.843v-71.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v104.1c0 7.5 6 13.5 13.5 13.5h104.1c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-71.5l128.8-128.8c5.3-5.3 5.3-13.8 0-19.1-2.6-2.6-6.1-4-9.5-4-3.4 0-6.9 1.3-9.5 4z"})))}},{mithril:"mithril"}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril"),i=e("./loading-bar");r.default={view:function(e){var t=e.attrs,r=t.progress,o=t.ready,s=t.error,a=t.onStart;return n(".title-block",n("h1","Monkey Hunt"),n("p","Use arrow keys or WASD to move"),n("p","Space, control or shift to fire."),o?n(".start-block",n("button.btn-start",{onclick:a},"Start")):n(".loading",n(".message",s?s.message:"Loading"),n("div",n(i.default,{progress:r}))))}}},{"./loading-bar":3,mithril:"mithril"}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_FONT_SIZE=15,r.DEFAULT_HEIGHT=600,r.MIN_ASPECT=1,r.MAX_ASPECT=2},{}],8:[function(e,t,r){"use strict";function n(e,t,r){var n=i(e.x,t.x-r.x/2,t.x+r.x/2)+i(e.y,t.y-r.y/2,t.y+r.y/2)+i(e.z,t.z-r.z/2,t.z+r.z/2);return Math.sqrt(n)}function i(e,t,r){var n=e<t?t-e:e>r?e-r:0;return n*n}Object.defineProperty(r,"__esModule",{value:!0});var o=e("three"),s=function(){function e(t,r,n,i){this.type=t,this.size=new o.Vector3(r,t!==e.SPHERE&&"number"==typeof n?n:r,t!==e.SPHERE&&"number"==typeof i?i:r)}return e.hit=function(t,r,i,o){return t.type===e.SPHERE&&i.type===e.SPHERE?r.distanceTo(o)<=t.size.x+i.size.x:t.type===e.AABB&&i.type===e.AABB?Math.abs(r.x-o.x)<(t.size.x+i.size.x)/2&&Math.abs(r.y-o.y)<(t.size.y+i.size.y)/2&&Math.abs(r.z-o.z)<(t.size.z+i.size.z)/2:t.type===e.SPHERE?n(r,o,i.size)<t.size.x:n(o,r,t.size)<i.size.x},e.SPHERE=1,e.AABB=2,e}();r.default=s},{three:"three"}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("three");r.FOV=60,r.VIEW_DEPTH=2e3,r.FOG_COLOR=new n.Color(.4,.733,.8),r.FOG_NEAR=10,r.FOG_FAR=200,r.LIGHT_DIR=new n.Vector3(1,.5,-1).normalize(),r.LIGHT_COLOR=new n.Color(1,1,.95),r.AMBIENT_COLOR=new n.Color(.25,.25,.25),r.PLAYER_START_POS=new n.Vector3(0,0,2),r.PLAYER_START_ROT=new n.Euler(0,0,-Math.PI/2),r.GRID_SIZE=10,r.BUILDING_WIDTH=10,r.BUILDING_MIN_HEIGHT=6,r.BUILDING_MAX_HEIGHT=20},{three:"three"}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("three"),i=e("./collider"),o=function(){function e(e,t,r){this.visual=e,this.collider=void 0,this.position=t?t.clone():new n.Vector3,this.rotation=r?r.clone():new n.Euler,this.visual&&(this.visual.position.copy(this.position),this.visual.rotation.copy(this.rotation)),this.lifeT=0,this.isAlive=!0}return e.prototype.update=function(e){return!!this.isAlive&&(this.lifeT+=e,!0)},e.prototype.render=function(){this.visual&&(this.visual.position.copy(this.position),this.visual.rotation.copy(this.rotation))},e.prototype.snuff=function(){this.isAlive&&(this.isAlive=!1)},e.prototype.kill=function(){this.isAlive&&this.snuff()},e.updateList=function(e,t,r){for(var n=e.length-1;n>=0;--n)e[n].update(t)||(r&&r(e[n],n),e.splice(n,1))},e.renderList=function(e){for(var t=0;t<e.length;++t)e[t].render()},e.testHit=function(e,t){return!(!e.collider||!t.collider)&&i.default.hit(e.collider,e.position,t.collider,t.position)},e.testHitList=function(t,r,n){for(var i=0,o=r.length-1;o>=0;--o)if(e.testHit(t,r[o])&&(i+=1,n&&n(r[o])))return i;return i},e.testHitLists=function(t,r,n){for(var i=0,o=t.length-1;o>=0;--o)for(var s=r.length-1;s>=0&&!(e.testHit(t[o],r[s])&&(i+=1,n&&n(t[o],r[s])));--s);return i},e}();r.default=o},{"./collider":8,three:"three"}],11:[function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var i=e("../collider"),o=function(e){function t(t,r,n,o,s){var a=e.call(this,t,r,n)||this;return a.collider=new i.default(i.default.AABB,o,o,s),a}return n(t,e),t.prototype.render=function(){},t}(e("../gameobject").default);r.default=o},{"../collider":8,"../gameobject":10}],12:[function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var i=e("three"),o=e("../collider"),s=function(e){function t(t,r,n,s,a,u){void 0===a&&(a=10),void 0===u&&(u=1e3);var c=e.call(this,t,r,n)||this;c.lifeSpan=u;var l=c.rotation.z;return c.velocity=new i.Vector3(a*Math.cos(l),a*Math.sin(l),0),c.collider=new o.default(o.default.SPHERE,.5),c.actions=s,c}return n(t,e),t.prototype.update=function(t){if(!e.prototype.update.call(this,t))return!1;if(this.lifeT>=this.lifeSpan)return this.snuff(),!1;var r=t/1e3;return this.position.x+=r*this.velocity.x,this.position.y+=r*this.velocity.y,!0},t.prototype.kill=function(){this.isAlive&&(e.prototype.kill.call(this),this.actions.spark(this.position))},t}(e("../gameobject").default);r.default=s},{"../collider":8,"../gameobject":10,three:"three"}],13:[function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var i=e("three"),o=e("../collider"),s=function(e){function t(t,r,n,s){var a=e.call(this,t,r,n)||this;a.rotation.z;return a.velocity=new i.Vector3,a.collider=new o.default(o.default.SPHERE,1),a.actions=s,a}return n(t,e),t.prototype.update=function(t){if(!e.prototype.update.call(this,t))return!1;var r=t/1e3;return this.position.x+=r*this.velocity.x,this.position.y+=r*this.velocity.y,this.rotation.z+=r,!0},t.prototype.kill=function(){this.isAlive&&(e.prototype.kill.call(this),this.actions.die(this.position))},t}(e("../gameobject").default);r.default=s},{"../collider":8,"../gameobject":10,three:"three"}],14:[function(e,t,r){"use strict";function n(){return{forward:!1,back:!1,left:!1,right:!1,fire:!1}}var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=e("three"),s=e("../collider"),a=e("../gameobject"),u=Math.PI/2;r.createPlayerInputs=n;var c=function(e){function t(t,r,n,i){var o=e.call(this,t,r,n)||this;return o.collider=new s.default(s.default.SPHERE,1.5),o.inputs={forward:!1,back:!1,left:!1,right:!1,fire:!1},o.actions=i,o.fireT=0,o}return i(t,e),t.prototype.setInputs=function(e){Object.assign(this.inputs,e)},t.prototype.update=function(t){e.prototype.update.call(this,t),this.fireT=Math.max(this.fireT-t,0);var r=t/1e3,n=this.inputs,i=n.forward?8*r:n.back?-.5*r*8:0,o=n.left?r*u:n.right?-r*u:0,s=this.rotation.z+o,a=this.position;return a.x+=i*Math.cos(s),a.y+=i*Math.sin(s),this.rotation.z+=o,n.fire&&this.fireT<=0&&(l.set(this.position.x,this.position.y,this.position.z-.5),this.actions.shoot(l,this.rotation),this.fireT=333),!0},t}(a.default);r.default=c;var l=new o.Vector3},{"../collider":8,"../gameobject":10,three:"three"}],15:[function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function t(t,r,n,i){void 0===i&&(i=500);var o=e.call(this,t,r,n)||this;return o.lifeSpan=i,o}return n(t,e),t.prototype.update=function(t){return!!e.prototype.update.call(this,t)&&(!(this.lifeT>=this.lifeSpan)||(this.snuff(),!1))},t.prototype.render=function(){e.prototype.render.call(this);var t=this.visual,r=1+3*this.lifeT/this.lifeSpan;t.scale.set(r,r,r);t.material.opacity=.75-.75*this.lifeT/this.lifeSpan},t}(e("../gameobject").default);r.default=i},{"../gameobject":10}],16:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril/stream"),i=e("three"),o=e("./config"),s=e("../lib/input"),a=e("./scene"),u=e("./gameobject"),c=e("./gameobjects/player"),l=e("./gameobjects/monkey"),f=e("./gameobjects/bullet"),d=e("./gameobjects/building"),h=e("./gameobjects/spark"),p=100;r.default=function(e,t){function r(){!function(){for(var e=new i.Vector3,t=new i.Euler,r=2*o.BUILDING_WIDTH,n=0;n<o.GRID_SIZE;++n)for(var s=0;s<o.GRID_SIZE;++s){var a=o.BUILDING_MIN_HEIGHT+Math.random()*(o.BUILDING_MAX_HEIGHT-o.BUILDING_MIN_HEIGHT);e.set((s-o.GRID_SIZE/2)*r+o.BUILDING_WIDTH,(n-o.GRID_SIZE/2)*r+o.BUILDING_WIDTH,a/2);var u=b.addBuilding(e.x,e.y,o.BUILDING_WIDTH,a);T.push(new d.default(u,e,t,o.BUILDING_WIDTH,a))}}()}function v(e){E(e),function(){for(var e=2*o.BUILDING_WIDTH,t=new i.Vector3,r=new i.Euler,n=0;n<20;++n){t.set(Math.round(Math.random()*o.GRID_SIZE)*e-o.GRID_SIZE*e/2,Math.round(Math.random()*o.GRID_SIZE)*e-o.GRID_SIZE*e/2,2),r.z=Math.random()*Math.PI*2;var s=b.addMonkey(t,r),a=new l.default(s,t,r,z);S.push(a)}}(),L=new c.default(b.getCamera(),o.PLAYER_START_POS,o.PLAYER_START_ROT,j)}function m(){if(M){var e=Date.now(),t=e-k;t>0&&(t>p&&(k+=t-p,t=p),function(e){O(O()+e),s.getKeys(x),null!=L&&(L.setInputs(x),L.update(e),u.default.testHitList(L,T,y)),u.default.updateList(S,e,w),u.default.updateList(H,e,w),u.default.updateList(P,e,w),u.default.testHitLists(H,S,g),u.default.testHitLists(H,T,_)}(t),null!=L&&L.render(),u.default.renderList(H),u.default.renderList(S),u.default.renderList(P),b.render()),k=e,requestAnimationFrame(m)}}function y(e){if(L){var t=e.collider.size.x/2+L.collider.size.x,r=e.position,n=L.position;return Math.abs(n.x-r.x)>Math.abs(n.y-r.y)?n.x=n.x<r.x?r.x-t:r.x+t:n.y=n.y<r.y?r.y-t:r.y+t,!0}}function _(e,t){return e.kill(),!0}function g(e,t){return e.kill(),t.kill(),!0}function w(e){e.visual&&b.removeChild(e.visual)}var b=a.createScene(e,t,{antialias:!0}),I=n(0),O=n(0),E=n(0),k=0,M=!1,x=c.createPlayerInputs();s.createInput("forward",[38,87]),s.createInput("back",[40,83]),s.createInput("left",[37,65]),s.createInput("right",[39,68]),s.createInput("fire",[16,17,32]);var L,S=[],T=[],H=[],P=[],j={shoot:function(e,t){var r=new f.default(b.addBullet(e,t),e,t,R,25,2e3);H.push(r)}},z={die:function(e){I(I()+100);var t=new h.default(b.addSpark(e),e,void 0,500);P.push(t)}},R={spark:function(e){var t=new h.default(b.addSpark(e),e,void 0,500);P.push(t)}};return{run:function(){M?console.warn("Game already running"):(r(),v(1),M=!0,k=Date.now(),requestAnimationFrame(m))},resize:function(e,t){b&&b.resize(e,t)},destroy:function(){M=!1,b.destroy()},score:I,time:O,level:E}}},{"../lib/input":19,"./config":9,"./gameobject":10,"./gameobjects/building":11,"./gameobjects/bullet":12,"./gameobjects/monkey":13,"./gameobjects/player":14,"./gameobjects/spark":15,"./scene":17,"mithril/stream":"mithril/stream",three:"three"}],17:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("three"),i=e("./config");r.createScene=function(e,t,r){return new o(e,t,r)};var o=function(){function e(e,t,r){if(void 0===r&&(r={}),this.canvas=e,this.assets=t,this.assets.geometries.monkey.rotateX(.5*Math.PI),this.assets.geometries.bullet.scale(.5,.5,.5),this.assets.geometries.spark=new n.SphereBufferGeometry(.25,16,8),this.assets.textures.bricks.repeat.set(2,2),this.assets.textures.bricks.wrapS=this.assets.textures.bricks.wrapT=n.RepeatWrapping,this.materials={monkey:new n.MeshLambertMaterial({color:8943445}),building:new n.MeshLambertMaterial({color:16777215,map:this.assets.textures.bricks}),bullet:new n.MeshBasicMaterial({color:16737792}),spark:new n.MeshBasicMaterial({color:16763904,opacity:.75,transparent:!0})},this.renderer=new n.WebGLRenderer({canvas:e,antialias:!!r.antialias,clearColor:i.FOG_COLOR.getHex(),alpha:!0,clearAlpha:1}),!this.renderer)throw new Error("Failed to create THREE.WebGLRenderer");var o=e.getBoundingClientRect();this.displayWidth=o.width,this.displayHeight=o.height,this.camera=new n.PerspectiveCamera(i.FOV,this.displayWidth/this.displayHeight,1,i.VIEW_DEPTH),this.scene=new n.Scene,this.scene.fog=new n.Fog(i.FOG_COLOR.getHex(),i.FOG_NEAR,i.FOG_FAR),this.sunLight=new n.DirectionalLight(i.LIGHT_COLOR.getHex(),1),this.sunLight.position.set(-i.LIGHT_DIR.x,-i.LIGHT_DIR.y,-i.LIGHT_DIR.z),this.scene.add(this.sunLight),this.ambientLight=new n.AmbientLight(i.AMBIENT_COLOR.getHex()),this.scene.add(this.ambientLight),this.camera.rotation.order="ZXY",this.camera.rotation.x=.5*Math.PI,this.camera.rotation.y=.5*Math.PI,this.camera.rotation.z=Math.PI,this.camera.up.set(0,0,1),this.camHolder=new n.Object3D,this.camHolder.rotation.order="ZYX",this.camHolder.add(this.camera),this.camHolder.position.copy(i.PLAYER_START_POS),this.camHolder.rotation.x=i.PLAYER_START_ROT.x,this.camHolder.rotation.y=i.PLAYER_START_ROT.y,this.camHolder.rotation.z=i.PLAYER_START_ROT.z,this.scene.add(this.camHolder),this.addGround()}return e.prototype.removeChild=function(e){this.scene.remove(e)},e.prototype.setCamera=function(e,t){e&&this.camHolder.position.copy(e),t&&(this.camHolder.rotation.x=t.x,this.camHolder.rotation.y=t.y,this.camHolder.rotation.z=t.z)},e.prototype.getCamera=function(){return this.camHolder},e.prototype.addGround=function(){var e=this.assets.textures.ground;e.wrapS=e.wrapT=n.RepeatWrapping,e.repeat.x=100,e.repeat.y=100;var t=new n.Mesh(new n.PlaneBufferGeometry(1e3,1e3),new n.MeshLambertMaterial({color:10066329,map:e}));this.scene.add(t)},e.prototype.addBuilding=function(e,t,r,i){var o=Math.max(Math.round(i/r),1),s=new n.Mesh(new n.BoxBufferGeometry(r,i,r,1,o,1).rotateX(.5*Math.PI),this.materials.building);return s.position.set(e,t,i/2),this.scene.add(s),s},e.prototype.addMonkey=function(e,t){var r=new n.Mesh(this.assets.geometries.monkey,this.materials.monkey);return r.position.copy(e),r.rotation.copy(t),this.scene.add(r),r},e.prototype.addBullet=function(e,t){var r=new n.Mesh(this.assets.geometries.bullet,this.materials.bullet);return r.position.copy(e),r.rotation.copy(t),this.scene.add(r),r},e.prototype.addSpark=function(e){var t=new n.Mesh(this.assets.geometries.spark,this.materials.spark.clone());return t.position.copy(e),this.scene.add(t),t},e.prototype.render=function(){this.renderer.render(this.scene,this.camera)},e.prototype.resize=function(e,t){this.displayWidth=e,this.displayHeight=t,this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)},e.prototype.destroy=function(){this.renderer.dispose()},e}()},{"./config":9,three:"three"}],18:[function(e,t,r){"use strict";function n(){return!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)}Object.defineProperty(r,"__esModule",{value:!0}),r.toggle=function(e){n()?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},r.is=n},{}],19:[function(e,t,r){"use strict";function n(){g?console.warn("Key listeners already added."):(document.addEventListener("keydown",i,!0),document.addEventListener("keyup",o,!0),g=!0)}function i(e){var t=e.keyCode;if(!r.keyStates[t]){r.keyStates[t]=!0;for(var n=a(t),i=0;i<n.length;++i){var o=n[i];if(!o.pressed){o.pressed=!0;for(var s=o.listeners,u=0;u<s.length;++u){var c=s[u];"press"===c.type&&c.callback(o.name)}}}}}function o(e){var t=e.keyCode;if(r.keyStates[t]){r.keyStates[t]=!1;for(var n=a(t),i=0;i<n.length;++i){var o=n[i];if(o.pressed){if(u(o.name))return;if(function(e){var t=_[e];if(!t)return void console.warn("Unrecognized input name:",e);for(var r=t.elements,n=0,i=r.length;n<i;++n)if(r[n].pressed)return!0;return!1}(o.name))return;o.pressed=!1;for(var s=o.listeners,c=0;c<s.length;++c){var l=s[c];"release"===l.type&&l.callback(o.name)}}}}}function s(e,t){for(var r=0;r<e.listeners.length;++r){var n=e.listeners[r];if(n.type===t)return n}}function a(e){for(var t=[],r=Object.keys(_),n=0;n<r.length;++n)for(var i=_[r[n]],o=i.keyCodes,s=0;s<o.length;++s)o[s]===e&&t.push(i);return t}function u(e){var t=_[e];{if(t){for(var n=t.keyCodes,i=0;i<n.length;++i)if(r.keyStates[n[i]])return!0;return!1}console.warn("Unrecognized input name:",e)}}function c(e,t){var n=e.element;n.addEventListener("touchstart",function(){l(e,t,m)}),n.addEventListener("touchend",function(){f(e,t,m)}),n.addEventListener("mousedown",function(){l(e,t,v)}),n.addEventListener("mouseup",function(){f(e,t,v)}),n.addEventListener("touchmove",function(e){e.preventDefault()}),r.config.iOSHacks&&h(n)}function l(e,t,r){if((e.device===p||e.device===r)&&(e.device=r,e.pressed=!0,!t.pressed)){t.pressed=!0;var n=s(t,"press");n&&n.callback(t.name)}}function f(e,t,r){if((e.device===p||e.device===r)&&(e.pressed=!1,setTimeout(function(){e.device=p},500),t.pressed&&!u(name))){t.pressed=!1;var n=s(t,"release");n&&n.callback(t.name)}}function d(e){var t=_[e];return!!t&&t.pressed}function h(e){y&&r.config.iOSHacks&&w.forEach(function(t){e.addEventListener(t,function(e){e.preventDefault()})})}Object.defineProperty(r,"__esModule",{value:!0});var p=0,v=1,m=2,y=!!navigator.userAgent.match(/iPhone|iPad|iPod/i),_=Object.create(null);r.keyStates=new Array(256).fill(!1);var g=!1;r.addKeyListeners=n,r.removeKeyListeners=function(){g?(document.removeEventListener("keydown",i,!0),document.removeEventListener("keyup",o,!0),g=!1):console.warn("Key listeners were not yet added.")},r.listeningKeys=function(){return g},r.config={iOSHacks:!0},r.createInput=function(e,t,r){if(!e||"string"!=typeof e)throw new Error("Invalid name for input.");if(e in _)throw new Error("Input with name '"+e+" already exists.");var i={name:e,pressed:!1,keyCodes:[],elements:[],listeners:[]};if(t&&t.length>0){g||n();for(var o=0;o<t.length;++o){var s=t[o];i.keyCodes.indexOf(s)>=0&&console.warn("Duplicate key code ("+s+") specified for input '"+e+"'"),i.keyCodes[o]=s}}else if(!r||r.length<1)throw new Error("No keycodes or elements supplied to createInput");if(r&&r.length>0)for(o=0;o<r.length;++o){var a={element:r[o],pressed:!1,device:0};i.elements.push(a),c(a,i)}_[e]=i},r.get=d,r.getKeys=function(e){for(var t=Object.keys(e),r=0;r<t.length;++r){var n=t[r];e[n]=d(n)}return e},r.addListener=function(e,t,r){if(!e||"string"!=typeof e)throw new Error("Invalid type for name.");if("press"!==t&&"release"!==t)throw new Error("Invalid input event type.");var n=_[e];if(!n)throw new Error("Input with name '"+e+"' not found.");for(var i=n.listeners,o=0;o<i.length;++o){var s=i[o];if(s.type===t&&s.callback===r)return void console.warn("Already added this listener.")}i.push({type:t,callback:r})},r.removeListener=function(e,t,r){var n=_[e];n||console.warn("Input not found with name "+e);for(var i=n.listeners,o=i.length-1;o>=0;--o){var s=i[o];if(s.type===t&&s.callback===r)return void i.splice(o,1)}console.warn("Listener not found for input '"+e+"' with type "+t+", cannot remove.")};var w=["dblclick"];r.snuffiOSEvents=h},{}],20:[function(e,t,r){"use strict";function n(e){return u.request({url:e,extract:function(e){return e.responseText},background:!0})}function i(e){return u.request({url:e,background:!0})}function o(e){return new Promise(function(t,r){var n=new Image;n.onload=function(){t(n)},n.onerror=function(e){r(e)},n.src=e})}function s(e){return new Promise(function(t,r){(new l.TextureLoader).load(e,function(e){t(e)},void 0,function(t){r(t.message?t:new Error("Failed to load texture: "+e))})})}function a(e){return new Promise(function(t,r){(new l.BufferGeometryLoader).load(e,t,void 0,function(t){r(new Error("Failed to load '"+e+"' ("+t.status+")"))})})}Object.defineProperty(r,"__esModule",{value:!0});var u=e("mithril"),c=e("mithril/stream"),l=e("three"),f=e("pojod");r.loadAssets=function(e){var t={texts:Object.create(null),datas:Object.create(null),images:Object.create(null),geometries:Object.create(null),textures:Object.create(null)},r={texts:n,datas:i,images:o,geometries:a,textures:s},u=f.default.keys(t),l=c(0),d=u.reduce(function(t,r){return e[r]&&(t+=e[r].length),t},0),h=0,p=u.reduce(function(n,i){return e[i]?n.concat(e[i].map(function(e){return r[i](e.url).then(function(r){return t[i][e.name]=r,h+=1,l(h/d),r})})):n},[]);return{promise:Promise.all(p).then(function(){return t}),progress:l}}},{mithril:"mithril","mithril/stream":"mithril/stream",pojod:"pojod",three:"three"}],21:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.formatTime=function(e){var t=Math.round(e/1e3),r=t%60;return Math.floor(t/60)+":"+(r>=10?"":"0")+r.toString()}},{}],22:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril"),i=e("./components/app");n.mount(document.querySelector(".game-container"),i.default)},{"./components/app":1,mithril:"mithril"}],23:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("mithril/stream"),i=e("../config");r.fontSize=n(i.DEFAULT_FONT_SIZE),r.pixelScale=r.fontSize.map(function(e){return e/i.DEFAULT_FONT_SIZE}),r.isWidescreen=n(!1)},{"../config":7,"mithril/stream":"mithril/stream"}]},{},[22]);