!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[7780],{7780:function(t,i,r){"use strict";r.r(i),r.d(i,{NewPlayersPageModule:function(){return y}});var o=r(1116),a=r(1462),l=r(8809),s=r(9185),c=r(529),u=r(5614),f=r(2101);function p(e,n){if(1&e){var t=u.EpF();u.TgZ(0,"ion-card",2),u.NdJ("click",function(){var e=u.CHM(t).$implicit;return u.oxw().selectPlayer(e)}),u.TgZ(1,"ion-item",3),u.TgZ(2,"ion-avatar",4),u._UZ(3,"ion-img",5),u.qZA(),u.TgZ(4,"div",6),u.TgZ(5,"p"),u.TgZ(6,"strong"),u._uU(7),u.qZA(),u.qZA(),u.TgZ(8,"p"),u._uU(9),u.qZA(),u.TgZ(10,"p"),u._uU(11),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&e){var i=n.$implicit,r=u.oxw();u.xp6(3),u.Q6J("src",i.profilePicture?r.environmenti.apiBase+"Files/"+i.profilePicture:r.environmenti.defaultProfilePicture),u.xp6(4),u.AsE("",i.firstName," ",i.lastName,""),u.xp6(2),u.Oqu(i.club.officialName),u.xp6(2),u.Oqu(i.club.email)}}var g,d,Z=[{path:"",component:(g=function(){function t(n,i){e(this,t),this.webService=n,this.navCtrl=i,this.environmenti=c.N,this.playersList=[]}var i,r,o;return i=t,(r=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.getClubs()}},{key:"getClubs",value:function(){var e=this;this.webService.calling_GET_From_Api("admin/pendingPlayers").then(function(n){console.log(n),e.playersList=n.values}).catch(function(e){console.log(e)})}},{key:"selectPlayer",value:function(e){this.navCtrl.navigateForward("admin/tabs/new-players/player-details/".concat(e.id),{state:{player:e,isNewPlayer:!0}})}}])&&n(i.prototype,r),o&&n(i,o),t}(),g.\u0275fac=function(e){return new(e||g)(u.Y36(f.Q),u.Y36(l.SH))},g.\u0275cmp=u.Xpm({type:g,selectors:[["app-new-players"]],decls:9,vars:1,consts:[["size-xs","12","size-lg","8","offset-lg","2"],["button","true",3,"click",4,"ngFor","ngForOf"],["button","true",3,"click"],["lines","none","detail","true"],["slot","start"],[3,"src"],[1,"playerDetailsOnLists"]],template:function(e,n){1&e&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-title"),u._uU(3,"New Player Requests from Clubs"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(4,"ion-content"),u.TgZ(5,"ion-grid"),u.TgZ(6,"ion-row"),u.TgZ(7,"ion-col",0),u.YNc(8,p,12,5,"ion-card",1),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(8),u.Q6J("ngForOf",n.playersList))},directives:[l.Gu,l.sr,l.wd,l.W2,l.jY,l.Nd,l.wI,o.sg,l.PM,l.Ie,l.BJ,l.Xz],styles:["p[_ngcontent-%COMP%]{margin:5px}"]}),g)},{path:"player-details",loadChildren:function(){return Promise.all([r.e(3719),r.e(8592)]).then(r.bind(r,3719)).then(function(e){return e.PlayerDetailsPageModule})}}],v=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),n}(),y=((d=function n(){e(this,n)}).\u0275fac=function(e){return new(e||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({imports:[[o.ez,a.u5,l.Pc,v]]}),d)}}])}();