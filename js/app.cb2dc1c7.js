(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"1b40":function(t,e,s){},"435b":function(t,e,s){"use strict";s("4ae5")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=n,t.exports=o,o.id="4678"},"4ae5":function(t,e,s){},"52c0":function(t,e,s){"use strict";s("670a")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("Navbar"),s("router-view",{staticStyle:{"margin-top":"190px"}})],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",fixed:"",color:"red",dark:"",prominent:"",src:s("8ea9")},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",[a("v-tab",{attrs:{to:"/"}},[a("v-icon",{attrs:{right:""}},[t._v("fa-home")]),t._v(" בית")],1),a("v-tab",{attrs:{to:"/videos"}},[a("v-icon",{attrs:{right:""}},[t._v("fa-video")]),t._v(" סרטונים")],1),a("v-tab",{attrs:{to:"/downloads"}},[a("v-icon",{attrs:{right:""}},[t._v("fa-download")]),t._v(" הורדות")],1),a("v-tab",{attrs:{to:"/posts"}},[a("v-icon",{attrs:{right:""}},[t._v("fa-comment")]),t._v(" הודעות")],1)],1)]},proxy:!0}])},[a("v-app-bar-nav-icon"),a("v-spacer"),t.loggedIn?a("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(e){return t.logout()}}},[a("font-awesome-icon",{attrs:{size:"xl",icon:"fa-solid fa-right-from-bracket"}})],1):a("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(e){return t.login()}}},[a("font-awesome-icon",{attrs:{size:"xl",icon:"fa-solid fa-right-to-bracket"}})],1),a("v-btn",{attrs:{icon:"",color:"red",href:"https://youtube.com/shinybunny"}},[a("v-icon",[t._v("fab fa-youtube")])],1),a("v-btn",{attrs:{icon:"",color:"red",href:"https://discord.gg/arUMT5m4w8"}},[a("v-icon",[t._v("fab fa-discord")])],1),a("v-btn",{staticClass:"mr-0",attrs:{icon:"",color:"red",href:"https://twitter.com/shiny_bunny"}},[a("v-icon",[t._v("fab fa-twitter")])],1)],1)},i=[],c=s("be92"),l=Object(c["c"])("main",{state(){return{loggedIn:!1}},actions:{checkLoggedIn(){a["default"].prototype.$gapi.isSignedIn().then(t=>{console.log("signed in?",t),this.loggedIn=t})},login(){a["default"].prototype.$gapi.signIn().then(t=>{this.loggedIn=!0})},logout(){console.log("logging out"),a["default"].prototype.$gapi.signOut().then(()=>{this.loggedIn=!1,console.log("logged out")})}}}),d={data(){return{}},computed:{...Object(c["e"])(l,["loggedIn"])},methods:{...Object(c["d"])(l,["login","logout"])}},u=d,f=(s("c708"),s("2877")),b=s("6544"),v=s.n(b),p=s("40dc"),h=s("5bc1"),j=s("8336"),m=s("132d"),g=s("2fa4"),y=s("71a3"),_=s("fe57"),k=Object(f["a"])(u,r,i,!1,null,"5ced89de",null),w=k.exports;v()(k,{VAppBar:p["a"],VAppBarNavIcon:h["a"],VBtn:j["a"],VIcon:m["a"],VSpacer:g["a"],VTab:y["a"],VTabs:_["a"]});var V={components:{Navbar:w},created(){l().checkLoggedIn()}},x=V,C=(s("034f"),s("7496")),O=Object(f["a"])(x,o,n,!1,null,null,null),I=O.exports;v()(O,{VApp:C["a"]});var z=s("9483");Object(z["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var T=s("8c4f"),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},P=[],$={name:"Home"},A=$,E=Object(f["a"])(A,S,P,!1,null,null,null),F=E.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("div",[s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("v-skeleton-loader",{staticClass:"tab-loading",attrs:{type:"card-heading"}}),s("v-skeleton-loader",{staticClass:"tab-loading",attrs:{type:"card-heading"}}),s("v-skeleton-loader",{staticClass:"tab-loading",attrs:{type:"card-heading"}})],1),s("v-col",{attrs:{cols:"9"}},[s("v-row",t._l(12,(function(t){return s("v-col",{key:t,attrs:{cols:"12",sm:"6",md:"4"}},[s("v-skeleton-loader",{attrs:{type:"card"}})],1)})),1)],1)],1)],1):s("div",[s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("v-list",t._l(t.serieses,(function(e){return s("v-list-item",{key:e.name,attrs:{ripple:"",dense:""},on:{click:function(s){return t.changeSeries(e)}}},[s("v-list-item-icon",[s("v-icon",{attrs:{right:""}},[t._v(t._s(e.icon))])],1),s("v-list-item-content",{staticClass:"text-right"},[s("v-list-item-title",[t._v(t._s(e.label))])],1)],1)})),1)],1),s("v-col",{attrs:{cols:"9"}},[s("v-row",t._l(t.videos,(function(t){return s("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4"}},[s("VideoCard",{attrs:{video:t}})],1)})),1),s("v-btn",{staticClass:"mt-2",attrs:{color:"primary",disabled:!t.nextPageKey||t.loadingMore,loading:t.loadingMore},on:{click:t.loadMore}},[t._v(" טען עוד ")])],1)],1)],1)])},D=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("router-link",{attrs:{to:"/video/"+t.video.contentDetails.videoId}},[s("v-img",{attrs:{src:t.video.snippet.thumbnails.high.url,"aspect-ratio":"1.7778"}})],1),s("v-card-title",{staticStyle:{height:"4em",overflow:"hidden","word-break":"break-word"}},[t._v(" "+t._s(t.video.snippet.title)+" ")]),s("v-card-subtitle",{staticClass:"mt-3"},[t._v(" "+t._s(t._f("date")(t.video.contentDetails.videoPublishedAt))+" ")]),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-icon",{attrs:{right:""}},[t._v("fa-thumbs-up")]),t._v(" "+t._s(t._f("number")(t.video.stats.likeCount))+" ")],1),s("v-col",{attrs:{cols:"6"}},[s("v-icon",{attrs:{right:""}},[t._v("fa-eye")]),t._v(" "+t._s(t._f("number")(t.video.stats.viewCount))+" ")],1)],1)],1),s("v-card-actions",[s("v-btn",{attrs:{color:"red",icon:"",href:"https://youtu.be/"+t.video.contentDetails.videoId,target:"_blank"}},[s("v-icon",[t._v("fab fa-youtube")])],1)],1)],1)},N=[],L={name:"YoutubeVideo",props:["video"]},R=L,U=s("b0af"),q=s("99d9"),K=s("62ad"),H=s("adda"),J=s("0fd9"),W=Object(f["a"])(R,M,N,!1,null,null,null),X=W.exports;v()(W,{VBtn:j["a"],VCard:U["a"],VCardActions:q["a"],VCardSubtitle:q["b"],VCardText:q["c"],VCardTitle:q["d"],VCol:K["a"],VIcon:m["a"],VImg:H["a"],VRow:J["a"]});const Y="UUJgU3RNlNqqRj7WBwSbizAw";var G={name:"Videos",components:{VideoCard:X},data(){return{loading:!0,loadingMore:!1,videos:[],nextPageKey:"",selectedPlaylist:Y,serieses:[{name:"All",label:"כל הסרטונים",playlist:Y,icon:"fa-video"},{name:"Survival",label:"הישרדות",playlist:"PLyRyRac1kDHiErRrw_IK0W0Os5T4pgroy",icon:"fa-heart"},{name:"Nightfall",label:"נייטפול",playlist:Y,icon:"fa-moon"}]}},created(){this.loadVideos().then(()=>{this.loading=!1})},methods:{loadVideos(t){return new Promise((e,s)=>{this.$gapi._libraryInit("client").then(a=>{a.youtube.playlistItems.list({part:["snippet","contentDetails","status"],playlistId:this.selectedPlaylist,pageToken:t,maxResults:24}).then(({result:t})=>{this.nextPageKey=t.nextPageToken;let s=[...t.items];a.youtube.videos.list({part:["statistics"],id:s.map(t=>t.contentDetails.videoId).join(",")}).then(({result:t})=>{s.forEach((e,s)=>{e.stats=t.items[s].statistics}),this.videos.push(...s),e()})}).catch(s)}).catch(s)})},loadMore(){this.loadingMore=!0,this.loadVideos(this.nextPageKey).then(()=>{this.loadingMore=!1})},changeSeries(t){this.selectedPlaylist=t.playlist,this.videos=[],this.loading=!0,this.loadVideos().then(()=>{this.loading=!1})}}},Q=G,Z=(s("435b"),s("a523")),tt=s("8860"),et=s("da13"),st=s("5d23"),at=s("34c3"),ot=s("3129"),nt=Object(f["a"])(Q,B,D,!1,null,null,null),rt=nt.exports;v()(nt,{VBtn:j["a"],VCol:K["a"],VContainer:Z["a"],VIcon:m["a"],VList:tt["a"],VListItem:et["a"],VListItemContent:st["a"],VListItemIcon:at["a"],VListItemTitle:st["b"],VRow:J["a"],VSkeletonLoader:ot["a"]});var it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-btn",{attrs:{right:"",absolute:"",to:"/videos",color:"secondary"}},[s("v-icon",{attrs:{left:""}},[t._v("fa-share")]),t._v(" חזרה לכל הסרטונים")],1),t.video?s("v-container",[s("iframe",{staticClass:"video-player",attrs:{src:"https://www.youtube.com/embed/"+t.video.id,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),s("v-row",t._l(t.links,(function(e,a){return s("v-col",{key:a,attrs:{cols:"auto"}},[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,r=o.attrs;return[s("v-btn",t._g(t._b({attrs:{color:t.linkColors[a],href:e.url}},"v-btn",r,!1),n),["download"==e.type?s("v-icon",{attrs:{left:""}},[t._v("fa-download")]):t._e(),"discord"==e.type?s("v-icon",{attrs:{left:""}},[t._v("fab fa-discord")]):t._e(),t._v(" "+t._s(e.label)+" ")],1)]}}],null,!0)},[s("span",[t._v(t._s(t._f("linkTooltip")(e)))])])],1)})),1),s("v-row",[s("v-col",{attrs:{cols:"auto"}},[s("h2",{staticClass:"text-right"},[t._v(t._s(t.video.snippet.title))])]),s("v-spacer"),s("v-col",{attrs:{cols:"2"}},[s("v-icon",{attrs:{right:""}},[t._v("fa-thumbs-up")]),t._v(" "+t._s(t._f("number")(t.video.statistics.likeCount))+" ")],1),s("v-col",{attrs:{cols:"2"}},[s("v-icon",{attrs:{right:""}},[t._v("fa-eye")]),t._v(" "+t._s(t._f("number")(t.video.statistics.viewCount))+" ")],1)],1),s("pre",{staticClass:"text-body-2 mt-1 text-right"},[t._v(t._s(t.video.snippet.description))])],1):t._e()],1)},ct=[],lt=s("260b"),dt=s("e71f");const ut=Object(lt["a"])({projectId:"theshinywebsite-340522"}),ft=Object(dt["e"])(ut,{});var bt={data(){return{video:void 0,links:[],linkColors:["primary","success","secondary","danger"]}},created(){this.$gapi._libraryInit("client").then(t=>{t.youtube.videos.list({part:["snippet","contentDetails","statistics","player"],id:this.$route.params.id,maxHeight:this.$vuetify.breakpoint.height-224}).then(({result:t})=>{this.video=t.items[0]})}),Object(dt["d"])(Object(dt["c"])(ft,"video-data",this.$route.params.id)).then(t=>{this.links=t.get("links")})},filters:{linkTooltip(t){switch(t.type){case"download":return t.size;case"discord":return t.members+" משתמשים"}}}},vt=bt,pt=(s("52c0"),s("3a2f")),ht=Object(f["a"])(vt,it,ct,!1,null,null,null),jt=ht.exports;v()(ht,{VBtn:j["a"],VCol:K["a"],VContainer:Z["a"],VIcon:m["a"],VRow:J["a"],VSpacer:g["a"],VTooltip:pt["a"]});var mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],yt={},_t=Object(f["a"])(yt,mt,gt,!1,null,null,null),kt=_t.exports,wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[0==Object.keys(t.posts).length?s("v-progress-circular",{attrs:{indeterminate:""}}):s("div",{staticClass:"d-flex flex-column align-center"},[t.loggedIn?s("create-post",{staticClass:"mb-2"}):t._e(),t._l(t.posts,(function(e){return s("v-card",{key:e.id,staticClass:"mb-2",attrs:{width:"400"}},[s("v-card-title",[t._v(t._s(e.title))]),s("v-card-text",[s("p",{staticClass:"text-right"},[t._v(t._s(e.description))]),s("p",{staticClass:"text-left"},[t._v(t._s(t._f("date")(t._f("firestoreTime")(e.createdAt))))])])],1)}))],2)],1)},Vt=[],xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.active?s("v-card",{attrs:{"min-width":"400"}},[s("v-card-title",[s("v-text-field",{attrs:{flat:"",label:"כותרת"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),s("v-card-subtitle",[s("v-textarea",{attrs:{flat:"",label:"תוכן ההודעה"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),s("v-card-actions",[s("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v(" פרסום ")])],1)],1):s("v-btn",{attrs:{fab:"",color:"blue"},on:{click:function(e){t.active=!0}}},[s("v-icon",[t._v("fa-plus")])],1)],1)},Ct=[],Ot={data(){return{active:!1,title:"",desc:""}},methods:{submit(){Object(dt["a"])(Object(dt["b"])(ft,"posts"),{title:this.title,description:this.desc,createdAt:new Date}).then(t=>{this.active=!1,this.title="",this.desc=""})}}},It=Ot,zt=s("8654"),Tt=s("a844"),St=Object(f["a"])(It,xt,Ct,!1,null,null,null),Pt=St.exports;v()(St,{VBtn:j["a"],VCard:U["a"],VCardActions:q["a"],VCardSubtitle:q["b"],VCardTitle:q["d"],VIcon:m["a"],VTextField:zt["a"],VTextarea:Tt["a"]});var $t={components:{CreatePost:Pt},data(){return{posts:[],isOwner:!1}},computed:{...Object(c["e"])(l,["loggedIn"])},mounted(){const t=Object(dt["h"])(Object(dt["b"])(ft,"posts"),Object(dt["g"])("createdAt","desc"));Object(dt["f"])(t,t=>{this.posts=t.docs.map(t=>({id:t.id,...t.data()}))})}},At=$t,Et=s("490a"),Ft=Object(f["a"])(At,wt,Vt,!1,null,null,null),Bt=Ft.exports;v()(Ft,{VCard:U["a"],VCardText:q["c"],VCardTitle:q["d"],VContainer:Z["a"],VProgressCircular:Et["a"]}),a["default"].use(T["a"]);const Dt=[{path:"/",name:"Home",component:F},{path:"/videos",name:"Videos",component:rt},{path:"/about",name:"About",component:kt},{path:"/video/:id",name:"Video Page",component:jt},{path:"/posts",name:"Posts",component:Bt}],Mt=new T["a"]({mode:"history",base:"/",routes:Dt});var Nt=Mt,Lt=(s("15f5"),s("6755"),s("c074")),Rt=s("ecee"),Ut=s("f309"),qt=s("83b0"),Kt=s("ad3d");a["default"].use(Ut["a"]),a["default"].component("font-awesome-icon",Kt["a"]),Rt["c"].add(Lt["a"]);var Ht=new Ut["a"]({theme:{themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{he:qt["a"]},current:"he"},icons:{iconfont:"fa"},rtl:!0}),Jt=s("485e"),Wt=s("c1df"),Xt=s.n(Wt);a["default"].config.productionTip=!1;const Yt={apiKey:"AIzaSyBXrdwk1SQEZCOYlW5FX9GWRUJmywDNLkI",clientId:"909978123171-pjsms4hckoogbimpd8d5k685iq5d51h4.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/youtube",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]};a["default"].use(Jt["a"],Yt),a["default"].use(c["a"]);const Gt=Object(c["b"])();a["default"].filter("number",t=>t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),a["default"].filter("firestoreTime",t=>t.toDate()),a["default"].filter("date",t=>Xt()(t).locale("he").calendar()),new a["default"]({router:Nt,vuetify:Ht,pinia:Gt,render:function(t){return t(I)}}).$mount("#app")},"670a":function(t,e,s){},"85ec":function(t,e,s){},"8ea9":function(t,e,s){t.exports=s.p+"img/channel_banner.990142be.jpg"},c708:function(t,e,s){"use strict";s("1b40")}});
//# sourceMappingURL=app.cb2dc1c7.js.map