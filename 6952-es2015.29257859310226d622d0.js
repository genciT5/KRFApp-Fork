(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[6952],{6952:function(t,n,i){"use strict";i.r(n),i.d(n,{Tab2PageModule:function(){return S}});var o=i(8809),e=i(1116),l=i(1462),r=i(940),s=i(9185),c=i(4762),a=i(529),u=i(5614);function p(t,n){if(1&t&&(u.TgZ(0,"ion-item"),u._UZ(1,"ion-icon",2),u.TgZ(2,"div"),u.TgZ(3,"p"),u._uU(4),u.qZA(),u.qZA(),u.qZA()),2&t){const t=n.$implicit;u.xp6(1),u.s9C("color",t.color),u.xp6(3),u.Oqu(t.text)}}let d=(()=>{class t{constructor(){this.statusColors=[{color:"success",text:"Approved"},{color:"warning",text:"Pending"},{color:"danger",text:"Rejected"},{color:"secondary",text:"Update Request Pending"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-information"]],decls:5,vars:1,consts:[[1,"ion-padding"],[4,"ngFor","ngForOf"],["slot","start","name","ellipse",2,"margin","5px",3,"color"]],template:function(t,n){1&t&&(u.TgZ(0,"ion-grid",0),u.TgZ(1,"h6"),u._uU(2,"Player Statuses"),u.qZA(),u.qZA(),u.TgZ(3,"ion-list"),u.YNc(4,p,5,2,"ion-item",1),u.qZA()),2&t&&(u.xp6(4),u.Q6J("ngForOf",n.statusColors))},directives:[o.jY,o.q_,e.sg,o.Ie,o.gu],styles:[""]}),t})();var g=i(5417),Z=i(2101),f=i(7203),b=i(749);function y(t,n){1&t&&(u.TgZ(0,"ion-buttons",10),u._UZ(1,"ion-back-button",11),u.qZA())}function A(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-button",12),u.NdJ("click",function(){return u.CHM(t),u.oxw().logout()}),u._UZ(1,"ion-icon",13),u.qZA()}}function h(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-fab",14),u.TgZ(1,"ion-fab-button",2),u.NdJ("click",function(){return u.CHM(t),u.oxw().createPlayer()}),u._UZ(2,"ion-icon",15),u.qZA(),u.qZA()}}function m(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-button",12),u.NdJ("click",function(n){u.CHM(t);const i=u.oxw(2).$implicit,o=u.oxw();return n.stopPropagation(),o.deletePlayer(i.id)}),u._UZ(1,"ion-icon",23),u.qZA()}}function x(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-button",2),u.NdJ("click",function(n){u.CHM(t);const i=u.oxw(2).$implicit,o=u.oxw();return n.stopPropagation(),o.editPlayer(i)}),u._UZ(1,"ion-icon",24),u.qZA()}}function T(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-card"),u.TgZ(1,"ion-item",17),u.NdJ("click",function(){u.CHM(t);const n=u.oxw().$implicit;return u.oxw().viewPlayerDetails(n)}),u.TgZ(2,"ion-avatar",10),u._UZ(3,"ion-img",18),u.qZA(),u.TgZ(4,"div",19),u.TgZ(5,"p"),u._uU(6),u.ALo(7,"date"),u.qZA(),u.TgZ(8,"p"),u._uU(9),u.qZA(),u.TgZ(10,"p"),u._uU(11),u.qZA(),u.qZA(),u._UZ(12,"ion-icon",20),u.TgZ(13,"ion-buttons",21),u.YNc(14,m,2,0,"ion-button",4),u.YNc(15,x,2,0,"ion-button",22),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.oxw().$implicit,n=u.oxw();u.xp6(3),u.Q6J("src",t.profilePictureFullPath?t.profilePictureFullPath:n.environmenti.defaultProfilePicture),u.xp6(3),u.lnq("",null==t?null:t.firstName," ",null==t?null:t.lastName," | ",u.xi3(7,13,null==t?null:t.birthDate,"dd.MM.yyyy")," "),u.xp6(3),u.HOy("",null!=t&&t.ageGroup?"Senior":"Junior"," - ",null==t?null:t.playingPosition,", ",null==t?null:t.nationality,", ",null==t?null:t.birthTown,""),u.xp6(2),u.AsE("",null==t?null:t.id," | ",null==t?null:t.krfId,""),u.xp6(1),u.s9C("color",n.publicServices.getClassForCardStatusTyle(t.status)),u.xp6(2),u.Q6J("ngIf",t.status==n.playerStatusesENUMS.pending),u.xp6(1),u.Q6J("ngIf",!n.clubId)}}function q(t,n){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,T,16,16,"ion-card",16),u.qZA()),2&t){const t=n.$implicit,i=u.oxw();u.xp6(1),u.Q6J("ngIf",0==t.ageGroup&&t.status!=i.playerStatusesENUMS.rejected)}}function w(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-button",12),u.NdJ("click",function(n){u.CHM(t);const i=u.oxw(3).$implicit,o=u.oxw();return n.stopPropagation(),o.deletePlayer(i.id)}),u._UZ(1,"ion-icon",23),u.qZA()}}function v(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-button",2),u.NdJ("click",function(n){u.CHM(t);const i=u.oxw(3).$implicit,o=u.oxw();return n.stopPropagation(),o.editPlayer(i)}),u._UZ(1,"ion-icon",24),u.qZA()}}function P(t,n){if(1&t&&(u.TgZ(0,"ion-buttons",21),u.YNc(1,w,2,0,"ion-button",4),u.YNc(2,v,2,0,"ion-button",22),u.qZA()),2&t){const t=u.oxw(2).$implicit,n=u.oxw();u.xp6(1),u.Q6J("ngIf",t.status==n.playerStatusesENUMS.pending),u.xp6(1),u.Q6J("ngIf",!n.clubId)}}function I(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-card"),u.TgZ(1,"ion-item",17),u.NdJ("click",function(){u.CHM(t);const n=u.oxw().$implicit;return u.oxw().viewPlayerDetails(n)}),u.TgZ(2,"ion-avatar",10),u._UZ(3,"ion-img",18),u.qZA(),u.TgZ(4,"div"),u.TgZ(5,"div",19),u.TgZ(6,"p"),u._uU(7),u.ALo(8,"date"),u.qZA(),u.TgZ(9,"p"),u._uU(10),u.qZA(),u.TgZ(11,"p"),u._uU(12),u.qZA(),u.qZA(),u.qZA(),u._UZ(13,"ion-icon",20),u.YNc(14,P,3,2,"ion-buttons",25),u.qZA(),u.qZA()}if(2&t){const t=u.oxw().$implicit,n=u.oxw();u.xp6(3),u.Q6J("src",t.profilePictureFullPath?t.profilePictureFullPath:n.environmenti.defaultProfilePicture),u.xp6(4),u.lnq("",null==t?null:t.firstName," ",null==t?null:t.lastName," | ",u.xi3(8,12,null==t?null:t.birthDate,"dd.MM.yyyy")," "),u.xp6(3),u.HOy("",null!=t&&t.ageGroup?"Senior":"Junior"," - ",null==t?null:t.playingPosition,", ",null==t?null:t.nationality,", ",null==t?null:t.birthTown,""),u.xp6(2),u.AsE("",null==t?null:t.id," | ",null==t?null:t.krfId,""),u.xp6(1),u.s9C("color",n.publicServices.getClassForCardStatusTyle(t.status)),u.xp6(1),u.Q6J("ngIf",!n.clubId)}}function N(t,n){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,I,15,15,"ion-card",16),u.qZA()),2&t){const t=n.$implicit,i=u.oxw();u.xp6(1),u.Q6J("ngIf",1==t.ageGroup&&t.status!=i.playerStatusesENUMS.rejected)}}function C(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-button",2),u.NdJ("click",function(n){u.CHM(t);const i=u.oxw(2).$implicit,o=u.oxw();return n.stopPropagation(),o.editPlayer(i)}),u._UZ(1,"ion-icon",24),u.qZA()}}function U(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"ion-card"),u.TgZ(1,"ion-item",17),u.NdJ("click",function(){u.CHM(t);const n=u.oxw().$implicit;return u.oxw().viewPlayerDetails(n)}),u.TgZ(2,"ion-avatar",10),u._UZ(3,"ion-img",18),u.qZA(),u.TgZ(4,"div"),u.TgZ(5,"div",19),u.TgZ(6,"p"),u._uU(7),u.ALo(8,"date"),u.qZA(),u.TgZ(9,"p"),u._uU(10),u.qZA(),u.TgZ(11,"p"),u._uU(12),u.qZA(),u.qZA(),u.qZA(),u._UZ(13,"ion-icon",20),u.TgZ(14,"ion-buttons",21),u.TgZ(15,"ion-button",12),u.NdJ("click",function(n){u.CHM(t);const i=u.oxw().$implicit,o=u.oxw();return n.stopPropagation(),o.deletePlayer(i.id)}),u._UZ(16,"ion-icon",23),u.qZA(),u.YNc(17,C,2,0,"ion-button",22),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.oxw().$implicit,n=u.oxw();u.xp6(3),u.Q6J("src",t.profilePictureFullPath?t.profilePictureFullPath:n.environmenti.defaultProfilePicture),u.xp6(4),u.lnq("",null==t?null:t.firstName," ",null==t?null:t.lastName," | ",u.xi3(8,12,null==t?null:t.birthDate,"dd.MM.yyyy")," "),u.xp6(3),u.HOy("",null!=t&&t.ageGroup?"Senior":"Junior"," - ",null==t?null:t.playingPosition,", ",null==t?null:t.nationality,", ",null==t?null:t.birthTown,""),u.xp6(2),u.AsE("",null==t?null:t.id," | ",null==t?null:t.krfId,""),u.xp6(1),u.s9C("color",n.publicServices.getClassForCardStatusTyle(t.status)),u.xp6(4),u.Q6J("ngIf",!n.clubId)}}function J(t,n){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,U,18,15,"ion-card",16),u.qZA()),2&t){const t=n.$implicit,i=u.oxw();u.xp6(1),u.Q6J("ngIf",t.status==i.playerStatusesENUMS.rejected)}}const _=[{path:"",component:(()=>{class t{constructor(t,n,i,o,e,l,r){this.navCtrl=t,this.webService=n,this.alertController=i,this.activatedRoute=o,this.publicServices=e,this.popoverController=l,this.alerts=r,this.environmenti=a.N,this.playersList=[],this.clubId=null,this.playerStatusesENUMS=g.RQ,o.params.subscribe(t=>{console.log(t),this.clubId=t.clubId})}showInformations(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:d,translucent:!1});yield t.present()})}ionViewWillEnter(){this.getPLayersList()}deletePlayer(t){this.alerts.presentCancelOrConfirm("WARNING!","Are you sure you want to delete this player? Thre is no returning back!!!!","CANCEL","DELETE").then(n=>{n&&this.webService.calling_DELETE_from_API(`players/delete/${t}`).then(t=>{t.status?(this.alerts.presentToast("Player deleted successfully!","success"),this.getPLayersList()):this.alerts.presentToast(t.message,"danger")}).catch(t=>{console.log(t)})})}viewPlayerDetails(t){this.navCtrl.navigateForward(this.clubId?`admin/tabs/tab1-clubs/${this.clubId}/players/${t.id}`:`club/tabs/tab2/player-details/${t.id}`,{state:{player:t}})}createPlayer(){this.navCtrl.navigateForward("club/tabs/tab2/create-and-edit")}editPlayer(t){this.navCtrl.navigateForward(this.clubId?`admin/tabs/tab1-clubs/${this.clubId}/edit-player/${t.id}`:`club/tabs/tab2/create-and-edit/${t.id}`,{state:{playerDetails:t}})}getPLayersList(){this.webService.calling_GET_From_Api(this.clubId?`admin/clubs/${this.clubId}/players`:"players").then(t=>{console.log(t),t.values.length&&(this.playersList=t.values)}).catch(t=>{console.log(t)})}logout(){this.webService.logoutAlert()}}return t.\u0275fac=function(n){return new(n||t)(u.Y36(o.SH),u.Y36(Z.Q),u.Y36(o.Br),u.Y36(s.gz),u.Y36(f.O),u.Y36(o.Dh),u.Y36(b.m))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-tab2"]],decls:28,vars:6,consts:[["slot","start",4,"ngIf"],["slot","end"],[3,"click"],["name","information-circle-outline","color","primary"],["color","danger",3,"click",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],["size-lg","6"],[1,"ion-padding","ion-text-center"],[4,"ngFor","ngForOf"],["size-lg","6","offset-lg","3"],["slot","start"],["defaultHref","admin/tabs/tab1-clubs"],["color","danger",3,"click"],["slot","icon-only","name","log-out-outline"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add"],[4,"ngIf"],["lines","none","detail","true","button","true",3,"click"],[3,"src"],[1,"playerDetailsOnLists"],["slot","end","name","ellipse",1,"iconDotStyle",3,"color"],["slot","end",2,"margin","0"],[3,"click",4,"ngIf"],["slot","icon-only","name","trash"],["name","create-outline","slot","icon-only"],["style","margin: 0","slot","end",4,"ngIf"]],template:function(t,n){1&t&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.YNc(2,y,2,0,"ion-buttons",0),u.TgZ(3,"ion-title"),u._uU(4," Players List "),u.qZA(),u.TgZ(5,"ion-buttons",1),u.TgZ(6,"ion-button",2),u.NdJ("click",function(){return n.showInformations()}),u._UZ(7,"ion-icon",3),u.qZA(),u.YNc(8,A,2,0,"ion-button",4),u.qZA(),u.qZA(),u.qZA(),u.TgZ(9,"ion-content"),u.YNc(10,h,3,0,"ion-fab",5),u.TgZ(11,"ion-grid"),u.TgZ(12,"ion-row"),u.TgZ(13,"ion-col",6),u.TgZ(14,"ion-grid",7),u.TgZ(15,"h3"),u._uU(16,"Juniors"),u.qZA(),u.qZA(),u.YNc(17,q,2,1,"div",8),u.qZA(),u.TgZ(18,"ion-col",6),u.TgZ(19,"ion-grid",7),u.TgZ(20,"h3"),u._uU(21,"Seniors"),u.qZA(),u.qZA(),u.YNc(22,N,2,1,"div",8),u.qZA(),u.qZA(),u.TgZ(23,"ion-col",9),u.TgZ(24,"ion-grid",7),u.TgZ(25,"h3"),u._uU(26,"REJECTED"),u.qZA(),u.qZA(),u.YNc(27,J,2,1,"div",8),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(2),u.Q6J("ngIf",n.clubId),u.xp6(6),u.Q6J("ngIf",!n.clubId),u.xp6(2),u.Q6J("ngIf",!n.clubId),u.xp6(7),u.Q6J("ngForOf",n.playersList),u.xp6(5),u.Q6J("ngForOf",n.playersList),u.xp6(5),u.Q6J("ngForOf",n.playersList))},directives:[o.Gu,o.sr,e.O5,o.wd,o.Sm,o.YG,o.gu,o.W2,o.jY,o.Nd,o.wI,e.sg,o.oU,o.cs,o.IJ,o.W4,o.PM,o.Ie,o.BJ,o.Xz],pipes:[e.uU],styles:[""]}),t})()},{path:"player-details",loadChildren:()=>i.e(3719).then(i.bind(i,3719)).then(t=>t.PlayerDetailsPageModule)},{path:"create-and-edit",loadChildren:()=>i.e(2924).then(i.bind(i,2924)).then(t=>t.CreateAndEditPageModule)}];let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.Bz.forChild(_)],s.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[o.Pc,e.ez,l.u5,r.e,F]]}),t})()}}]);