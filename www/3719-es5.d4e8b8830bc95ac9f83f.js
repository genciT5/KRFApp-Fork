!function(){function l(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function n(l,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[3719],{3719:function(o,e,r){"use strict";r.r(e),r.d(e,{PlayerDetailsPageModule:function(){return c}});var Z,i,u=r(1116),a=r(1462),p=r(8809),t=r(9185),g=r(529),q=r(5614),A=[{path:":id",component:(Z=function(){function o(n,e){var r=this;l(this,o),this.route=n,this.router=e,this.player=null,this.environmenti=g.N,this.route.queryParams.subscribe(function(l){if(r.router.getCurrentNavigation().extras.state){var n=r.router.getCurrentNavigation().extras.state;r.player=n.player,console.log(n)}else r.router.navigateByUrl("tabs/tab2")})}var e,r,Z;return e=o,(r=[{key:"ngOnInit",value:function(){}},{key:"downloadFile",value:function(l){window.open(this.environmenti.apiBase+"Files/"+l,"_blank")}}])&&n(e.prototype,r),Z&&n(e,Z),o}(),Z.\u0275fac=function(l){return new(l||Z)(q.Y36(t.gz),q.Y36(t.F0))},Z.\u0275cmp=q.Xpm({type:Z,selectors:[["app-player-details"]],decls:173,vars:39,consts:[["slot","start"],["defaultHref","tabs/tab2"],["size-xs","12","size-lg","3"],[2,"margin","auto","zoom","3"],[3,"src"],[1,"ion-text-center"],["size-xs","12","size-lg","9"],[2,"padding","0"],["size","6",2,"padding","0"],[1,"hoverStyle",3,"click"]],template:function(l,n){1&l&&(q.TgZ(0,"ion-header"),q.TgZ(1,"ion-toolbar"),q.TgZ(2,"ion-buttons",0),q._UZ(3,"ion-back-button",1),q.qZA(),q.TgZ(4,"ion-title"),q._uU(5),q.qZA(),q.qZA(),q.qZA(),q.TgZ(6,"ion-content"),q.TgZ(7,"ion-grid"),q.TgZ(8,"ion-row"),q.TgZ(9,"ion-col",2),q.TgZ(10,"ion-card"),q.TgZ(11,"ion-card-header"),q.TgZ(12,"ion-thumbnail",3),q._UZ(13,"ion-img",4),q.qZA(),q.qZA(),q.TgZ(14,"ion-card-content"),q.TgZ(15,"ion-grid",5),q.TgZ(16,"h1"),q._uU(17),q.qZA(),q.TgZ(18,"p"),q._uU(19),q.ALo(20,"date"),q.qZA(),q.TgZ(21,"p"),q._uU(22),q.qZA(),q.TgZ(23,"p"),q._uU(24),q.qZA(),q.TgZ(25,"p"),q._uU(26),q.qZA(),q.TgZ(27,"p"),q._uU(28),q.qZA(),q.TgZ(29,"p"),q._uU(30),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(31,"ion-col",6),q.TgZ(32,"ion-card"),q.TgZ(33,"ion-card-header"),q.TgZ(34,"ion-card-title"),q._uU(35," More Information "),q.qZA(),q.qZA(),q.TgZ(36,"ion-card-content"),q.TgZ(37,"ion-grid",7),q.TgZ(38,"ion-row"),q.TgZ(39,"ion-col",8),q.TgZ(40,"p"),q._uU(41,"Age Group"),q.qZA(),q.qZA(),q.TgZ(42,"ion-col",8),q.TgZ(43,"p"),q._uU(44),q.qZA(),q.qZA(),q.qZA(),q.TgZ(45,"ion-row"),q.TgZ(46,"ion-col",8),q.TgZ(47,"p"),q._uU(48,"City"),q.qZA(),q.qZA(),q.TgZ(49,"ion-col",8),q.TgZ(50,"p"),q._uU(51),q.qZA(),q.qZA(),q.qZA(),q.TgZ(52,"ion-row"),q.TgZ(53,"ion-col",8),q.TgZ(54,"p"),q._uU(55,"Country"),q.qZA(),q.qZA(),q.TgZ(56,"ion-col",8),q.TgZ(57,"p"),q._uU(58),q.qZA(),q.qZA(),q.qZA(),q.TgZ(59,"ion-row"),q.TgZ(60,"ion-col",8),q.TgZ(61,"p"),q._uU(62,"Postal Code"),q.qZA(),q.qZA(),q.TgZ(63,"ion-col",8),q.TgZ(64,"p"),q._uU(65),q.qZA(),q.qZA(),q.qZA(),q.TgZ(66,"ion-row"),q.TgZ(67,"ion-col",8),q.TgZ(68,"p"),q._uU(69,"Street Address"),q.qZA(),q.qZA(),q.TgZ(70,"ion-col",8),q.TgZ(71,"p"),q._uU(72),q.qZA(),q.qZA(),q.qZA(),q.TgZ(73,"ion-row"),q.TgZ(74,"ion-col",8),q.TgZ(75,"p"),q._uU(76,"Address"),q.qZA(),q.qZA(),q.TgZ(77,"ion-col",8),q.TgZ(78,"p"),q._uU(79),q.qZA(),q.qZA(),q.qZA(),q.TgZ(80,"ion-row"),q.TgZ(81,"ion-col",8),q.TgZ(82,"p"),q._uU(83,"Phone Number"),q.qZA(),q.qZA(),q.TgZ(84,"ion-col",8),q.TgZ(85,"p"),q._uU(86),q.qZA(),q.qZA(),q.qZA(),q.TgZ(87,"ion-row"),q.TgZ(88,"ion-col",8),q.TgZ(89,"p"),q._uU(90,"Can Represent Kosovo"),q.qZA(),q.qZA(),q.TgZ(91,"ion-col",8),q.TgZ(92,"p"),q._uU(93),q.qZA(),q.qZA(),q.qZA(),q.TgZ(94,"ion-row"),q.TgZ(95,"ion-col",8),q.TgZ(96,"p"),q._uU(97,"Is Player coming from the Juridiction of another Union?"),q.qZA(),q.qZA(),q.TgZ(98,"ion-col",8),q.TgZ(99,"p"),q._uU(100),q.qZA(),q.qZA(),q.qZA(),q.TgZ(101,"ion-row"),q.TgZ(102,"ion-col",8),q.TgZ(103,"p"),q._uU(104,"Previous Club Name"),q.qZA(),q.qZA(),q.TgZ(105,"ion-col",8),q.TgZ(106,"p"),q._uU(107),q.qZA(),q.qZA(),q.qZA(),q.TgZ(108,"ion-row"),q.TgZ(109,"ion-col",8),q.TgZ(110,"p"),q._uU(111,"Previous Club Union"),q.qZA(),q.qZA(),q.TgZ(112,"ion-col",8),q.TgZ(113,"p"),q._uU(114),q.qZA(),q.qZA(),q.qZA(),q.TgZ(115,"ion-row"),q.TgZ(116,"ion-col",8),q.TgZ(117,"p"),q._uU(118,"Previous Club Registered"),q.qZA(),q.qZA(),q.TgZ(119,"ion-col",8),q.TgZ(120,"p"),q._uU(121),q.qZA(),q.qZA(),q.qZA(),q.TgZ(122,"ion-row"),q.TgZ(123,"ion-col",8),q.TgZ(124,"p"),q._uU(125,"Previous Club Leaving Date"),q.qZA(),q.qZA(),q.TgZ(126,"ion-col",8),q.TgZ(127,"p"),q._uU(128),q.ALo(129,"date"),q.qZA(),q.qZA(),q.qZA(),q.TgZ(130,"ion-row",9),q.NdJ("click",function(){return n.downloadFile(null==n.player?null:n.player.transferFormNotification)}),q.TgZ(131,"ion-col",8),q.TgZ(132,"p"),q._uU(133,"Transfer Form Notification"),q.qZA(),q.qZA(),q.TgZ(134,"ion-col",8),q.TgZ(135,"p"),q._uU(136),q.qZA(),q.qZA(),q.qZA(),q.TgZ(137,"ion-row",9),q.NdJ("click",function(){return n.downloadFile(null==n.player?null:n.player.worldRugbyInternationalClearenceForm)}),q.TgZ(138,"ion-col",8),q.TgZ(139,"p"),q._uU(140,"World Rugby International Clearence Form"),q.qZA(),q.qZA(),q.TgZ(141,"ion-col",8),q.TgZ(142,"p"),q._uU(143),q.qZA(),q.qZA(),q.qZA(),q.TgZ(144,"ion-row"),q.TgZ(145,"ion-col",8),q.TgZ(146,"p"),q._uU(147,"Player Declaration Signed"),q.qZA(),q.qZA(),q.TgZ(148,"ion-col",8),q.TgZ(149,"p"),q._uU(150),q.qZA(),q.qZA(),q.qZA(),q.TgZ(151,"ion-row"),q.TgZ(152,"ion-col",8),q.TgZ(153,"p"),q._uU(154,"Signed Date"),q.qZA(),q.qZA(),q.TgZ(155,"ion-col",8),q.TgZ(156,"p"),q._uU(157),q.ALo(158,"date"),q.qZA(),q.qZA(),q.qZA(),q.TgZ(159,"ion-row"),q.TgZ(160,"ion-col",8),q.TgZ(161,"p"),q._uU(162,"Allow KRF To use Personal Data"),q.qZA(),q.qZA(),q.TgZ(163,"ion-col",8),q.TgZ(164,"p"),q._uU(165),q.qZA(),q.qZA(),q.qZA(),q.TgZ(166,"ion-row"),q.TgZ(167,"ion-col",8),q.TgZ(168,"p"),q._uU(169,"Can KFR Use Data?"),q.qZA(),q.qZA(),q.TgZ(170,"ion-col",8),q.TgZ(171,"p"),q._uU(172),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA()),2&l&&(q.xp6(5),q.hij("Player ID: ",null==n.player?null:n.player.id,""),q.xp6(8),q.Q6J("src",null!=n.player&&n.player.profilePicture?n.environmenti.apiBase+"Files/"+n.player.profilePicture:n.environmenti.defailtProfilePicture),q.xp6(4),q.lnq("",null==n.player?null:n.player.firstName," ",null==n.player?null:n.player.middleName," ",null==n.player?null:n.player.lastName,""),q.xp6(2),q.Oqu(q.xi3(20,30,null==n.player?null:n.player.birthDate,"dd.MM.yyyy")),q.xp6(3),q.Oqu(null==n.player?null:n.player.personalNumber),q.xp6(2),q.Oqu(null==n.player?null:n.player.playingPosition),q.xp6(2),q.Oqu(null==n.player?null:n.player.birthTown),q.xp6(2),q.Oqu(null==n.player?null:n.player.birthCountry),q.xp6(2),q.Oqu(null==n.player?null:n.player.nationality),q.xp6(14),q.Oqu(null!=n.player&&n.player.ageGroup?"Senior":"Junior"),q.xp6(7),q.Oqu(null==n.player?null:n.player.city),q.xp6(7),q.Oqu(null==n.player?null:n.player.country),q.xp6(7),q.Oqu(null==n.player?null:n.player.postalCode),q.xp6(7),q.Oqu(null==n.player?null:n.player.streetAddress),q.xp6(7),q.Oqu(null==n.player?null:n.player.address),q.xp6(7),q.Oqu(null==n.player?null:n.player.phoneNumber),q.xp6(7),q.Oqu(null!=n.player&&n.player.canRepresanteKosovo?"Yes":"No"),q.xp6(7),q.Oqu(null!=n.player&&n.player.isPlayerCommingFromTheJuridictionOfAnOtherUnion?"Yes":"No"),q.xp6(7),q.Oqu(null==n.player?null:n.player.previousClubName),q.xp6(7),q.Oqu(null==n.player?null:n.player.previousClubUnion),q.xp6(7),q.Oqu(null==n.player?null:n.player.previousClubRegistered),q.xp6(7),q.Oqu(q.xi3(129,33,null==n.player?null:n.player.previousClubLeavingDate,"dd.MM.yyyy")),q.xp6(8),q.Oqu(null==n.player?null:n.player.transferFormNotification),q.xp6(7),q.Oqu(null==n.player?null:n.player.worldRugbyInternationalClearenceForm),q.xp6(7),q.Oqu(null!=n.player&&n.player.playerDeclarationSigned?"Yes":"No"),q.xp6(7),q.Oqu(q.xi3(158,36,null==n.player?null:n.player.playerSignedDeclaration,"dd.MM.yyyy")),q.xp6(8),q.Oqu(null!=n.player&&n.player.allowKRFToUsePersonalData?"Yes":"No"),q.xp6(7),q.Oqu(null!=n.player&&n.player.canKRFUseData?"Yes":"No"))},directives:[p.Gu,p.sr,p.Sm,p.oU,p.cs,p.wd,p.W2,p.jY,p.Nd,p.wI,p.PM,p.Zi,p.Bs,p.Xz,p.FN,p.gZ],pipes:[u.uU],styles:[".hoverStyle[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),Z)}],T=function(){var n=function n(){l(this,n)};return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=q.oAB({type:n}),n.\u0275inj=q.cJS({imports:[[t.Bz.forChild(A)],t.Bz]}),n}(),c=((i=function n(){l(this,n)}).\u0275fac=function(l){return new(l||i)},i.\u0275mod=q.oAB({type:i}),i.\u0275inj=q.cJS({imports:[[u.ez,a.u5,p.Pc,T]]}),i)}}])}();