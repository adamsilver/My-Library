var API,global=this;if(API&&API.attachDocumentReadyListener){API.attachDocumentReadyListener(function(){var K=API,B=K.isOwnProperty;var S,Q={"stop":"audio/beverly_computers.wav",caution:"audio/thunder.wav",info:"audio/bird1.wav",startup:"audio/rooster.wav",shutdown:"audio/crickets.wav",toast:"audio/toast.wav"};var M=K.playAudio,I=K.preloadAudio,R=K.callInContext;if(M&&R){K.playEventSound=function(T,U,W,V){if(Q[T]){M(Q[T],10000,W,V,100)}};K.addEventSound=function(U,T){Q[U]=T};K.removeEventSound=function(U,T){delete Q[U]};K.getAudioEvents=function(){var T=[];for(var U in Q){if(B(Q,U)){T[T.length]=U}}return T};if(K.preloadAudio){K.preloadAudioScheme=function(){for(var T in Q){if(B(Q,T)){I(Q[T])}}}}var N=[],L,H,G,P,E,O,C;var D,A,J;K.loadPlaylist=function(){N=[];N.length=arguments.length;for(var T=arguments.length;T--;){N[T]=arguments[T]}H=0};K.clearPlaylist=function(){if(P){API.stopPlaylist()}N=[]};var F=function(T){global.clearTimeout(L);G=0;H=T;M(N[T].source,N[T].duration,null,null,100);if(J){R(J,S||API,T)}L=global.setTimeout(function(){if(!G){var U=T+1;if(U<N.length){F(U)}else{if(C){if(D){R(D,S||API,T)}F(0)}else{if(A){R(A,S||API)}P=false}}}},N[T].duration);O=new Date().getTime();P=true};K.playPlaylist=function(T){if(!T){T={}}if(N.length){if(T){C=T.autoRepeat;J=T.onstart;A=T.onstop;D=T.onrepeat;S=T.callbackContext;if(T.restart){H=0}}F(H);E=new Date().getTime();return true}return false};K.stopPlaylist=function(T){global.clearTimeout(L);if(T){G=1}else{API.stopAudio();P=false;G=0;if(A){R(A,S||API)}}};K.isPlaylistStoppingAfterCurrent=function(){return !!G};K.getPlaylist=function(){return N.slice(0)};K.getPlaylistIndex=function(){return H};K.getPlaylistDuration=function(){var T,U=0;for(T=N.length;T--;){U+=N[T].duration}return U};K.getPlaylistProgress=function(){};K.getPlaylistTrackDuration=function(){return N[H].duration};K.getPlaylistTrackProgress=function(){if(N.length&&P){var U=N[H].duration;var T=(new Date().getTime()-(O||0))/U;return Math.min(T,100)}return 0};K.gotoPlaylistTrackNext=function(){if(N.length&&H<N.length-1){H++;if(P){F(H)}return true}return false};K.gotoPlaylistTrackPrevious=function(){if(N.length&&H){H--;if(P){F(H)}return true}return false};K.gotoPlaylistTrackFirst=function(){if(N.length&&H){H=0;if(P){F(H)}return true}return false};K.gotoPlaylistTrackLast=function(){if(N.length&&H!=N.length-1){H=N.length-1;if(P){F(H)}return true}return false};K.gotoPlaylistTrack=function(T){if(N.length&&T>0&&T<=N.length){H=T;if(P){F(H)}return true}return false}}K=null})}