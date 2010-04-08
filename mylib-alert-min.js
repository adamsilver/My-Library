var API,global=this;if(API&&typeof API=="object"&&API.areFeatures&&API.areFeatures("attachListener","createElement","setElementText","setControlState")){API.attachDocumentReadyListener(function(){var U=API;var AN=U.isHostMethod;var AS=U.canAdjustStyle;var AL=U.cancelDefault;var u=U.createElement;var AC=U.showElement;var Ae=U.attachListener;var E=U.attachDocumentListener;var q=U.getEventTarget;var AW=U.getKeyboardKey;var S=U.attachDrag;var AP=U.detachDrag;var H=U.centerElement;var o=U.coverDocument;var AF=U.constrainPositionToViewport;var AO=U.maximizeElement;var AU=U.restoreElement;var Ab=U.setElementText;var Ai=U.setElementHtml;var R=U.setElementNodes;var w=U.positionElement;var Ak=U.sizeElement;var Ac=U.fixElement;var Y=U.getChildren;var Ad=U.addClass;var Aj=U.removeClass;var Aq=U.hasClass;var AY=U.getElementPositionStyle;var AZ=U.getElementSizeStyle;var N=U.getElementParentElement;var Ap,n,Q,G;var Al,C=u("div");var Am=u("div");var Ag=u("input");var c=u("fieldset");var k,Ar,AM,AK,Aa,AJ,v,AI,AV;var T=U.getBodyElement();var z,Z,V,AA;var s={};var B,Ah,j,AD,AX,AR;var M,r,I,AT,h,m,F,J,y,AH,d,AG,AB,X,a,Af,i,g,x;var A=U.setControlRole,Ao=U.setWaiProperty,D=U.removeWaiProperty;var t=U.disableControl,b=U.isControlDisabled,An=U.checkControl,f=U.isControlChecked;var W=function(At,As){return At+(As?" [Ctrl+"+As+"]":"")};var p=function(At,As){t(At,As);if(typeof At.title=="string"&&At.title){At.title=At.title.replace(/\s+\(disabled\)/,"");if(As){At.title+=" (disabled)"}}};var L=function(Au,As){var At=u("div");if(At){At.title=W(Au,As);At.className=Au.toLowerCase()+" captionbutton";if(A){A(At,"button")}C.appendChild(At)}return At};var O=function(As){var At=u("input");if(At){At.className="commandbutton";At.type="button";At.value=As;c.appendChild(At)}return At};if(S){AH=function(As){((As)?AP:S)(C,Ap)}}var K=function(As){if(As){Al.style.display="block";o(Al);Al.style.visibility="visible";if(Ad){Ad(Al,"drawn")}AC(Al)}else{if(Aj){Aj(Al,"drawn")}AC(Al,false,{removeOnHide:true})}};J=function(As){if(Ap){if(Af){Ap.title="Double-click to "+(As?"restore":"maximize")}else{if(AK){Ap.title=As?"Double-click to restore":""}}}};y=function(As){if(Ad){if(As){Aj(AM,"maximizebutton");Ad(AM,"restorebutton")}else{Aj(AM,"restorebutton");Ad(AM,"maximizebutton")}}AM.title=W(!As?"Maximize":"Restore",".");if(b(AM)){AM.title+=" (disabled)"}};F=function(As){if(AK){p(AK,As)}if(AM){p(AM,!As&&!Af)}if(AM){if(As){y(!z);if(a&&Ap){J(!z)}}else{y(z);if(a&&Ap){J(z)}}}};h=function(At,As){At.style.visibility=(As)?"hidden":""};m=function(As){if(n){h(n,As)}if(Q){h(Q,As)}if(G){h(G,As)}};d=function(As){if(a){m(As)}if(Ap){if(a){J(As)}AH(As)}if(AM){y(As)}if(k){p(k,As)}};if(AO){if(Aq){I=function(As){return Aq(As,"captionbutton")}}else{I=function(As){return As==AK||As==AM||As==Aa||As==k}}AT=function(As){var Au,Av,At=Y(C);Au=At.length;while(Au--){Av=At[Au];if(!I(Av)&&Av!=Ap&&Av!=Ar){Av.style.display=(As||(Av==c&&!x))?"none":""}}};AG=function(As,At){if(As){s.pos=AY(C);s.dim=AZ(C);if(Ad){Aj(C,"maximized");Ad(C,"minimized")}AH(false)}else{if(!z){if(k&&f(k)&&C.style.position!="fixed"){AF(s.pos)}w(C,s.pos[0],s.pos[1],V);Ak(C,s.dim[0],s.dim[1],V)}if(Aj){Aj(C,"minimized")}AH(z)}AT(As);if(!As&&z){AU(C);AB(true)}if(As){C.style.height=C.style.width=""}F(As)};AB=function(As){(As?AO:AU)(C,V,function(){(As?Ad:Aj)(C,"maximized")});d(As);z=As};X=function(){if(AK&&i&&b(AK)){AG(false)}else{AB(!z)}}}function e(){return !Ah||!Ah()}function l(){return !j||!j()}function AE(){return !AD||!AD()}function AQ(As){switch(g){case"confirm":case"yesno":case"dialog":return(As?e:l)();case"yesnocancel":if(typeof As=="undefined"){return AE(M)}return(As?e:l)()}}function P(As){if(Al){K(false)}if(AA){if(As){if(AX&&AX()){return false}}if(!AR||!AR(C,Z)){AC(C,false,Z)}AA=false;return true}return false}U.dismissAlert=P;U.getAlertElement=function(){return C};U.isAlertOpen=function(){return AA};U.focusAlert=r=function(){if(C.style.visibility=="visible"&&c.style.display!="none"){Ag.focus()}};U.setAlertDirty=function(As,At){if(g=="dialog"){if(typeof At=="boolean"){Ag.value=As?"Close":"OK";if(v){v.disabled=As}}if(AV){AV.disabled=!As}M=As}};if(AC&&H&&Ak&&U.getScrollPosition&&C&&Ag&&c&&Am&&T&&AN(global,"setTimeout")){if(o){Al=u("div");Al.className="curtain";Al.style.display="none";Al.style.visibility="hidden"}if(Ao){Am.id="mylibalertcontent"}if(AH){Ap=u("div");if(Ap){Ap.className="movehandle";C.appendChild(Ap);if(!U.absoluteElement){C.style.position="absolute"}AH(false);if(AB){AM=L("Maximize",".");if(AM){Ae(AM,"click",function(As){if(!b(this)){X()}})}Ae(Ap,"dblclick",function(As){if(Af||!b(AM)){X();return AL(As)}})}Ar=u("div");if(Ar){Ar.className="icon";if(A){A(Ar,"button")}Ae(Ar,"dblclick",function(){if(!Aa||!b(Aa)){P(false)}});C.appendChild(Ar)}Aa=L("Close");if(Aa){Ae(Aa,"click",function(){if(!b(this)){P(false)}})}if(Y&&AS&&AS("display")&&AG){AK=L("Minimize",",");if(AK){Ae(AK,"click",function(){if(!b(this)){AG(true)}})}}if(Ac){k=L("Fix");An(k,false);if(k){Ae(k,"click",function(As){if(!b(this)){if(!f(this)){An(this);if(Ad){Ad(C,"fixed")}this.title="Detach";Ac(C,true,V)}else{An(this,false);if(Aj){Aj(C,"fixed")}this.title="Fix";Ac(C,false,V)}}})}}if(Ak){Q=u("div");if(Q){Q.className="sizehandleh";C.appendChild(Q);S(C,Q,{mode:"size",axes:"horizontal"})}G=u("div");if(G){G.className="sizehandlev";C.appendChild(G);S(C,G,{mode:"size",axes:"vertical"})}n=u("div");if(n){n.className="sizehandle";C.appendChild(n);S(C,n,{mode:"size"})}}}}Am.className="content";C.appendChild(Am);Ag.type="button";Ag.value="Close";Ag.className="commandbutton";c.appendChild(Ag);AI=O("No");v=O("Cancel");AV=O("Apply");AJ=O("Help");C.appendChild(c);C.style.position="absolute";AC(C,false);w(C,0,0);Ae(Ag,"click",function(){if(!g||AQ(true)){P(M)}});if(Al){T.appendChild(Al);Ae(Al,"click",function(){r()})}T.appendChild(C);if(E&&AW){E("keyup",function(Au){var At,As;if(AA&&!Au.shiftKey&&!Au.metaKey){As=AW(Au);switch(As){case 27:if(!Au.ctrlKey){if(!Aa||!b(Aa)||AQ()){P(false);return AL(Au)}}break;case 13:if(!Au.ctrlKey){At=q(Au);while(At&&At!=c){At=N(At)}if(At&&!(/^textarea$/i).test(At.tagName)&&!(/^commandbutton$/).test(At.className)&&(!g||AQ(true))){P(M);return AL(Au)}}break;default:if(AB&&a&&Au.ctrlKey){switch(As){case 190:if(i&&AK&&b(AK)){X()}else{if(Af){AB(!z)}}break;case 188:if(i&&AK&&!b(AK)){AG(true)}}}}}})}if(AJ){Ae(AJ,"click",function(){if(B){B()}})}if(v){Ae(v,"click",function(){if(AQ()){P(false)}})}if(AI){Ae(AI,"click",function(){if(AQ(false)){P(false)}})}if(AV){Ae(AV,"click",function(){if(!AX||!AX()){M=false;this.disabled=true;if(Ag.value=="Close"){Ag.value="OK";if(v){v.disabled=false}}}})}U.alert=function(As,A3,A2,Ax){var Au,A0,Ay,Az,A1,At,Av;A3=A3||{};Z=A3;V={duration:A3.duration,ease:A3.ease};g=A3.decision;x=A3.buttons!==false;A0=A3.captionButtons!==false;Ay=A3.icon!==false;if(A){A(C,g=="dialog"?"dialog":"alertdialog");if(g=="dialog"){D(C,"described-by")}else{Ao(C,"described-by","mylibalertcontent")}}if(AJ){B=A3.onhelp;AJ.style.display=(B)?"":"none"}if(v){v.style.display=(g&&g!="yesno")?"":"none"}if(AI){AI.style.display=(g=="yesno"||g=="yesnocancel")?"":"none"}if(Aa){p(Aa,!!g&&g!="dialog")}if(Ar){Ar.title=g?"":"Double-click to close";if(A){A(Ar,g?"":"button")}Ar.style.visibility=(!A0||!Ay||!Ad)?"hidden":""}Ah=A3.onpositive;AD=A3.onindeterminate;j=A3.onnegative;M=false;Ag.value="OK";if(v){v.disabled=false}if(AV){AV.disabled=true;AX=A3.onsave;AV.style.display=(A3.onsave&&g=="dialog")?"":"none"}Ag.value=g?((g.indexOf("yes")!=-1)?"Yes":"OK"):"Close";if(Ap){Az=A3.title;A1=typeof Az=="string";if(A1){Ap.style.display="";Ab(Ap,Az)}else{Ap.style.display="none"}}if(c){c.style.display=x?"":"none"}AR=Ax||A3.onclose;if(!A2){A2=A3.onopen}AC(C,false);if(!z&&A3.shrinkWrap!==false){C.style.height="";C.style.width=""}if(Al){K(A3.modal)}C.className=(A3.className||"alert")+" popup window";if(!AA){At=C.style.left;Av=C.style.top;C.style.left=C.style.top="0"}if(Ai&&A3.html){Ai(Am,A3.html)}else{if(R&&A3.nodes){R(Am,A3.nodes)}else{Ab(Am,As||"")}}a=A3.sizable!==false;Af=a&&A3.maximizable!==false;if(Ad){if(AB){Aj(C,"nomaxminbuttons");(a?Ad:Aj)(C,"maxminbuttons")}else{Ad(C,"nomaxminbuttons")}if(A0){(Ay?Ad:Aj)(C,"iconic");Aj(C,"nocaptionbuttons")}else{Ad(C,"nocaptionbuttons")}if(Ac){Ad(C,"fixable")}}C.style.display="block";if(AT&&i&&AK&&b(AK)){AT(false);if(z){AU(C);if(Af){AO(C,null,function(){if(Ad){Ad(C,"maximized")}})}else{z=false}d(!!z)}F(false)}if(AM){if(a&&AB&&Af){p(AM,false)}else{p(AM);if(z){AU(C);z=false}}d(!!z)}if(a){i=A3.minimizable!==false}if(AK){if(a&&AG&&i){p(AK,false)}else{p(AK)}}if(m){m(!a||z)}if(AM){AM.style.visibility=(a&&A1&&A0)?"":"hidden"}if(AK){AK.style.visibility=(a&&A1&&A0)?"":"hidden"}if(Aa){Aa.style.visibility=(A1&&A0)?"":"hidden"}if(Ak){if(A3.shrinkWrap!==false){if(!z){C.style.height="1px";Au=C.offsetHeight;C.style.height=""}Au=C.clientLeft}var Aw=AZ(C);if(Aw){Ak(C,Aw[0],Aw[1])}}if(!AA){C.style.left=At;C.style.top=Av}if(AA||!A2||!A2(C,A3,z)){if(AA){if(!k||!f(k)){global.setTimeout(function(){H(C,{duration:A3.duration,ease:A3.ease,fps:A3.fps})},10)}AC(C)}else{if(!z){H(C)}else{AU(C);AO(C,null,function(){if(Ad){Ad(C,"maximized")}})}AC(C,true,A3)}}if(!AA&&Ag&&AN(Ag,"focus")){global.setTimeout(r,A3.duration||0)}AA=true}}T=U=null})}