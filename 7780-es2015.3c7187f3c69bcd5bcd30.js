(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[7780],{7780:function(e,t,i){"use strict";i.r(t),i.d(t,{NewPlayersPageModule:function(){return Z}});var n=i(1116),r=i(1462),s=i(8809),o=i(9185),l=i(529),a=i(5614),c=i(2101);function u(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"ion-card",2),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw().selectPlayer(t)}),a.TgZ(1,"ion-item",3),a.TgZ(2,"ion-avatar",4),a._UZ(3,"ion-img",5),a.qZA(),a.TgZ(4,"div",6),a.TgZ(5,"p"),a.TgZ(6,"strong"),a._uU(7),a.qZA(),a.qZA(),a.TgZ(8,"p"),a._uU(9),a.qZA(),a.TgZ(10,"p"),a._uU(11),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=t.$implicit,i=a.oxw();a.xp6(3),a.Q6J("src",e.profilePicture?i.environmenti.apiBase+"Files/"+e.profilePicture:i.environmenti.defaultProfilePicture),a.xp6(4),a.AsE("",e.firstName," ",e.lastName,""),a.xp6(2),a.Oqu(e.club.officialName),a.xp6(2),a.Oqu(e.club.email)}}const p=[{path:"",component:(()=>{class e{constructor(e,t){this.webService=e,this.navCtrl=t,this.environmenti=l.N,this.playersList=[]}ngOnInit(){}ionViewWillEnter(){this.getClubs()}getClubs(){this.webService.calling_GET_From_Api("admin/pendingPlayers").then(e=>{console.log(e),this.playersList=e.values}).catch(e=>{console.log(e)})}selectPlayer(e){this.navCtrl.navigateForward(`admin/tabs/new-players/player-details/${e.id}`,{state:{player:e,isNewPlayer:!0}})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(c.Q),a.Y36(s.SH))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-new-players"]],decls:9,vars:1,consts:[["size-xs","12","size-lg","8","offset-lg","2"],["button","true",3,"click",4,"ngFor","ngForOf"],["button","true",3,"click"],["lines","none","detail","true"],["slot","start"],[3,"src"],[1,"playerDetailsOnLists"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-title"),a._uU(3,"New Player Requests from Clubs"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"ion-content"),a.TgZ(5,"ion-grid"),a.TgZ(6,"ion-row"),a.TgZ(7,"ion-col",0),a.YNc(8,u,12,5,"ion-card",1),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(8),a.Q6J("ngForOf",t.playersList))},directives:[s.Gu,s.sr,s.wd,s.W2,s.jY,s.Nd,s.wI,n.sg,s.PM,s.Ie,s.BJ,s.Xz],styles:["p[_ngcontent-%COMP%]{margin:5px}"]}),e})()},{path:"player-details",loadChildren:()=>Promise.all([i.e(3719),i.e(8592)]).then(i.bind(i,3719)).then(e=>e.PlayerDetailsPageModule)}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.Bz.forChild(p)],o.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.ez,r.u5,s.Pc,g]]}),e})()}}]);