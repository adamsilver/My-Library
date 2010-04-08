var API,global=this;if(API&&typeof API=="object"&&API.areFeatures&&API.areFeatures("attachListener","createElement","setElementText","setControlState")){API.attachDocumentReadyListener(function(){var U=API;var AM=U.isHostMethod;var AR=U.canAdjustStyle;var AK=U.cancelDefault;var t=U.createElement;var AB=U.showElement;var Ad=U.attachListener;var E=U.attachDocumentListener;var p=U.getEventTarget;var AV=U.getKeyboardKey;var S=U.attachDrag;var AO=U.detachDrag;var H=U.centerElement;var o=U.coverDocument;var AE=U.constrainPositionToViewport;var AN=U.maximizeElement;var AT=U.restoreElement;var Aa=U.setElementText;var Ah=U.setElementHtml;var R=U.setElementNodes;var v=U.positionElement;var Aj=U.sizeElement;var Ab=U.fixElement;var Y=U.getChildren;var Ac=U.addClass;var Ai=U.removeClass;var Ap=U.hasClass;var AX=U.getElementPositionStyle;var AY=U.getElementSizeStyle;var N=U.getElementParentElement;var Ao,n,Q,G;var Ak,C=t("div");var Al=t("div");var Af=t("input");var c=t("fieldset");var k,Aq,AL,AJ,AZ,AI,u,AH,AU;var T=U.getBodyElement();var y,Z,V,z;var r={};var B,Ag,j,AC,AW,AQ;var M,q,I,AS,h,m,F,J,x,AG,d,AF,AA,X,a,Ae,i,g,w;var A=U.setControlRole,An=U.setWaiProperty,D=U.removeWaiProperty;var s=U.disableControl,b=U.isControlDisabled,Am=U.checkControl,f=U.isControlChecked;var W=function(As,Ar){return As+(Ar?" [Ctrl+"+Ar+"]":"")};var L=function(At,Ar){var As=t("div");if(As){As.title=W(At,Ar);As.className=At.toLowerCase()+" captionbutton";if(A){A(As,"button")}C.appendChild(As)}return As};var O=function(Ar){var As=t("input");if(As){As.className="commandbutton";As.type="button";As.value=Ar;c.appendChild(As)}return As};if(S){AG=function(Ar){((Ar)?AO:S)(C,Ao)}}var K=function(Ar){if(Ar){Ak.style.display="block";o(Ak);Ak.style.visibility="visible";if(Ac){Ac(Ak,"drawn")}AB(Ak)}else{if(Ai){Ai(Ak,"drawn")}AB(Ak,false,{removeOnHide:true})}};J=function(Ar){if(Ao){Ao.title="Double-click to "+(Ar?"restore":"maximize")}};x=function(Ar){if(Ac){if(Ar){Ai(AL,"maximizebutton");Ac(AL,"restorebutton")}else{Ai(AL,"restorebutton");Ac(AL,"maximizebutton")}}AL.title=W(!Ar?"Maximize":"Restore",".")};F=function(Ar){if(AJ){s(AJ,Ar)}if(AL){if(Ar){x(!y);if(a&&Ao){J(!y)}}else{x(y);if(a&&Ao){J(y)}}}};h=function(As,Ar){As.style.visibility=(Ar)?"hidden":""};m=function(Ar){if(n){h(n,Ar)}if(Q){h(Q,Ar)}if(G){h(G,Ar)}};d=function(Ar){if(a){m(Ar)}if(Ao){if(a){J(Ar)}AG(Ar)}if(AL){x(Ar)}if(k){s(k,Ar)}};if(AN){if(Ap){I=function(Ar){return Ap(Ar,"captionbutton")}}else{I=function(Ar){return Ar==AJ||Ar==AL||Ar==AZ||Ar==k}}AS=function(Ar){var At,Au,As=Y(C);At=As.length;while(At--){Au=As[At];if(!I(Au)&&Au!=Ao&&Au!=Aq){Au.style.display=(Ar||(Au==c&&!w))?"none":""}}};AF=function(Ar,As){if(Ar){r.pos=AX(C);r.dim=AY(C);if(Ac){Ai(C,"maximized");Ac(C,"minimized")}AG(false)}else{if(!y){if(k&&f(k)&&C.style.position!="fixed"){AE(r.pos)}v(C,r.pos[0],r.pos[1],V);Aj(C,r.dim[0],r.dim[1],V)}if(Ai){Ai(C,"minimized")}AG(y)}AS(Ar);if(!Ar&&y){AT(C);AA(true)}if(Ar){C.style.height=C.style.width=""}F(Ar)};AA=function(Ar){(Ar?AN:AT)(C,V,function(){(Ar?Ac:Ai)(C,"maximized")});d(Ar);y=Ar};X=function(){if(AJ&&i&&b(AJ)){AF(false)}else{AA(!y)}}}function e(){return !Ag||!Ag()}function l(){return !j||!j()}function AD(){return !AC||!AC()}function AP(Ar){switch(g){case"confirm":case"yesno":case"dialog":return(Ar?e:l)();case"yesnocancel":if(typeof Ar=="undefined"){return AD(M)}return(Ar?e:l)()}}function P(Ar){if(Ak){K(false)}if(z){if(Ar){if(AW&&AW()){return false}}if(!AQ||!AQ(C,Z)){AB(C,false,Z);z=false;return true}}return false}U.dismissAlert=P;U.getAlertElement=function(){return C};U.isAlertOpen=function(){return z};U.focusAlert=q=function(){if(C.style.visibility=="visible"&&c.style.display!="none"){Af.focus()}};U.setAlertDirty=function(Ar,As){if(g=="dialog"){if(typeof As=="boolean"){Af.value=Ar?"Close":"OK";if(u){u.disabled=Ar}}if(AU){AU.disabled=!Ar}M=Ar}};if(AB&&H&&Aj&&U.getScrollPosition&&C&&Af&&c&&Al&&T&&AM(global,"setTimeout")){if(o){Ak=t("div");Ak.className="curtain";Ak.style.display="none";Ak.style.visibility="hidden"}if(An){Al.id="mylibalertcontent"}if(AG){Ao=t("div");if(Ao){Ao.className="movehandle";C.appendChild(Ao);if(!U.absoluteElement){C.style.position="absolute"}AG(false);if(AA){AL=L("Maximize",".");if(AL){Ad(AL,"click",function(Ar){if(!b(this)){X()}})}Ad(Ao,"dblclick",function(Ar){if(Ae){X();return AK(Ar)}})}Aq=t("div");if(Aq){Aq.className="icon";if(A){A(Aq,"button")}Ad(Aq,"dblclick",function(){if(!AZ||!b(AZ)){P(false)}});C.appendChild(Aq)}AZ=L("Close");if(AZ){Ad(AZ,"click",function(){if(!b(this)){P(false)}})}if(Y&&AR&&AR("display")&&AF){AJ=L("Minimize",",");if(AJ){Ad(AJ,"click",function(){if(!b(this)){AF(true)}})}}if(Ab){k=L("Fix");if(k){Ad(k,"click",function(Ar){if(!b(this)){if(!f(this)){Am(this);if(Ac){Ac(C,"fixed")}this.title="Detach";Ab(C,true,V)}else{Am(this,false);if(Ai){Ai(C,"fixed")}this.title="Fix";Ab(C,false,V)}}})}}if(Aj){Q=t("div");if(Q){Q.className="sizehandleh";C.appendChild(Q);S(C,Q,{mode:"size",axes:"horizontal"})}G=t("div");if(G){G.className="sizehandlev";C.appendChild(G);S(C,G,{mode:"size",axes:"vertical"})}n=t("div");if(n){n.className="sizehandle";C.appendChild(n);S(C,n,{mode:"size"})}}}}Al.className="content";C.appendChild(Al);Af.type="button";Af.value="Close";Af.className="commandbutton";c.appendChild(Af);AH=O("No");u=O("Cancel");AU=O("Apply");AI=O("Help");C.appendChild(c);C.style.position="absolute";AB(C,false);v(C,0,0);Ad(Af,"click",function(){if(!g||AP(true)){P(M)}});if(Ak){T.appendChild(Ak);Ad(Ak,"click",function(){q()})}T.appendChild(C);if(E&&AV){E("keyup",function(At){var As,Ar;if(z&&!At.shiftKey&&!At.metaKey){Ar=AV(At);switch(Ar){case 27:if(!At.ctrlKey){if(!AZ||!b(AZ)||AP()){P(false);return AK(At)}}break;case 13:if(!At.ctrlKey){As=p(At);while(As&&As!=c){As=N(As)}if(As&&!(/^textarea$/i).test(As.tagName)&&!(/^commandbutton$/).test(As.className)&&(!g||AP(true))){P(M);return AK(At)}}break;default:if(AA&&a&&At.ctrlKey){switch(Ar){case 190:if(i&&AJ&&b(AJ)){X()}else{AA(!y)}break;case 188:if(i&&AJ&&!b(AJ)){AF(true)}}}}}})}if(AI){Ad(AI,"click",function(){if(B){B()}})}if(u){Ad(u,"click",function(){if(AP()){P(false)}})}if(AH){Ad(AH,"click",function(){if(AP(false)){P(false)}})}if(AU){Ad(AU,"click",function(){if(!AW||!AW()){M=false;this.disabled=true;if(Af.value=="Close"){Af.value="OK";if(u){u.disabled=false}}}})}U.alert=function(Ar,A0,Az,Au){var As,Ax,Av,Aw,Ay;A0=A0||{};Z=A0;V={duration:A0.duration,ease:A0.ease};g=A0.decision;w=A0.buttons!==false;Ax=A0.captionButtons!==false;Av=A0.icon!==false;if(A){A(C,g=="dialog"?"dialog":"alertdialog");if(g=="dialog"){D(C,"described-by")}else{An(C,"described-by","mylibalertcontent")}}if(AI){B=A0.onhelp;AI.style.display=(B)?"":"none"}if(u){u.style.display=(g&&g!="yesno")?"":"none"}if(AH){AH.style.display=(g=="yesno"||g=="yesnocancel")?"":"none"}if(AZ){s(AZ,!!g&&g!="dialog")}if(Aq){Aq.title=g?"":"Double-click to close";if(A){A(Aq,g?"":"button")}Aq.style.visibility=(!Ax||!Av||!Ac)?"hidden":""}Ag=A0.onpositive;AC=A0.onindeterminate;j=A0.onnegative;M=false;Af.value="OK";if(u){u.disabled=false}if(AU){AU.disabled=true;AW=A0.onsave;AU.style.display=(A0.onsave&&g=="dialog")?"":"none"}Af.value=g?((g.indexOf("yes")!=-1)?"Yes":"OK"):"Close";if(Ao){Aw=A0.title;Ay=typeof Aw=="string";if(Ay){Ao.style.display="";Aa(Ao,Aw)}else{Ao.style.display="none"}}if(c){c.style.display=w?"":"none"}AQ=Au||A0.onclose;if(!Az){Az=A0.onopen}AB(C,false);if(!y&&A0.shrinkWrap!==false){C.style.height="";C.style.width=""}if(Ah&&A0.html){Ah(Al,A0.html)}else{if(R&&A0.nodes){R(Al,A0.nodes)}else{Aa(Al,Ar||"")}}C.className=(A0.className||"alert")+" popup window";a=A0.sizable!==false;if(a){Ae=A0.maximizable!==false}if(Ac){if(AA){if(!a){Ai(C,"maxminbuttons")}else{Ac(C,"maxminbuttons")}}if(Ax){(Av?Ac:Ai)(C,"iconic");Ai(C,"nocaptionbuttons")}else{Ac(C,"nocaptionbuttons")}if(Ab){Ac(C,"fixable")}}C.style.display="block";if(AS&&i&&b(AJ)){AS(false);if(y){AT(C);if(Ae){AN(C,null,function(){if(Ac){Ac(C,"maximized")}})}else{y=false}d(y)}F(false)}if(a&&AA&&Ae){s(AL,false);J(y)}else{s(AL);if(Ao){Ao.title=""}if(y){AT(C);y=false;d(false)}}if(a){i=A0.minimizable!==false}if(AJ){if(a&&AF&&i){s(AJ,false)}else{s(AJ)}}if(m){m(!a||y)}if(AL){AL.style.visibility=(a&&Ay&&Ax)?"":"hidden"}if(AJ){AJ.style.visibility=(a&&Ay&&Ax)?"":"hidden"}if(AZ){AZ.style.visibility=(Ay&&Ax)?"":"hidden"}if(Aj){if(A0.shrinkWrap!==false){if(!y){C.style.height="1px";As=C.offsetHeight;C.style.height=""}As=C.clientLeft}var At=AY(C);if(At){Aj(C,At[0],At[1])}}if(z||!Az||!Az(C,A0,y)){if(Ak){K(A0.modal)}if(z){if(!k||!f(k)){global.setTimeout(function(){H(C,{duration:A0.duration,ease:A0.ease,fps:A0.fps})},10)}AB(C)}else{if(!y){H(C)}else{AN(C,null,function(){if(Ac){Ac(C,"maximized")}})}AB(C,true,A0)}}if(!z&&Af&&AM(Af,"focus")){global.setTimeout(q,A0.duration||0)}z=true}}T=U=null})}