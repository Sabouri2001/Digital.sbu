(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8406],{42433:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/digiclub/missions",function(){return s(12408)}])},12408:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return eg}});var n=s(2784),t=s(52322),a=s(73739),l=s(47072),r=s(2607),d=s(64665),o=s(24870),c=s(72873),m=s(42306),u=s(41701),x=s(41435),p=s(5582),g=s(20804),f=s(77328),_=s(25388),h=s(70582),v=s(79968),b=s(1324);function j(e){var i=e.data||{},s=i.description,n=i.reward,t=i.title,a=i.url,l=i.url_label,r=i.deep_link,d=i.image,o=i.type;return{missionDescription:s,missionImage:(0,h.W)({data:d}),missionReward:n,missionTitle:t,missionUrl:(0,v.f)({data:a}),missionUrlLabel:l,missionDeepLink:(0,v.f)({data:r}),missionType:o}}var w=(0,b.q)({url:"digiclub/missions/",transformer:function(e){var i=e.data||{},s=i.banners,n=i.pending_points,t=i.missions||{},a=t.complete,l=t.incomplete;return{banners:(null==s?void 0:s.map(function(e){return(0,_.C)({data:e})}))||[],pendingPoints:null==n?void 0:n.map(function(e){var i;return{pendingPointId:(i=e||{}).id,pendingPointTitle:i.title,pendingPointPoints:i.points,pendingPointCreatedAt:i.created_at}}),missionsCompleted:null==a?void 0:a.map(function(e){return j({data:e})}),missionsUncompleted:null==l?void 0:l.map(function(e){return j({data:e})})}}}),N=s(47842),y=s(25237),C=s.n(y),M=s(61538),I=s(59437),P=s(57931),T=s(98780),E=s(31909),D=s(88413),R=s(45756),L=s(27314),S=s(87049),U=s(8155),k=s(83178),A=s(52216),G=s(72677),O=s(33398),z=s(52133),B=s.n(z),F=C()(function(){return s.e(2791).then(s.bind(s,12791)).then(function(e){return e.DigiplusSubscriptionModal})},{loadableGenerated:{webpack:function(){return[12791]}},ssr:!1});function J(e){var i,s,n,a=e.completed,l=void 0!==a&&a,r=e.className,o=e.mission||{},c=o.missionUrl,u=o.missionImage,x=o.missionTitle,p=o.missionReward,g=o.missionUrlLabel,f=o.missionDescription,_=o.missionType,h=o.missionDeepLink,v=(0,M.d)(),b=v.isOpen,j=v.onOpen,w=v.onClose,y=(0,L.e)().redirect,C=(0,S.v)(k.n.isWebView),z={main:(0,G.d)("relative lg:flex rounded-large border-complete border-complete-200 mb-5 overflow-hidden",B().MissionCard,r),dscription:(0,G.d)("w-full text-neutral-700 text-body-2",B().MissionCard__Description),imageContainer:(0,G.d)("flex items-center justify-center bg-neutral-000 w-full overflow-hidden",B().MissionCard__ImageContainer),image:(0,G.d)("w-full h-full",(0,N.Z)({},B().MissionCard__ImageCompleted,l)),icon:(0,G.d)("absolute bg-neutral-000 rounded-circle",B().MissionCard__Icon)};return(0,t.jsxs)("div",{className:z.main,children:[(0,t.jsx)("div",{className:z.imageContainer,children:(0,t.jsx)(E.E,{objectFit:"cover",alt:"missions card",image:u,imageClassName:z.image,className:"w-full h-full"})}),l&&(0,t.jsx)(T.J,{size:40,icon:"active",color:"success",className:z.icon}),(0,t.jsxs)("div",{className:"w-full flex flex-col p-4 justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"w-full text-body1-strong",children:(0,A.U)(x)}),!!f&&(0,t.jsx)("div",{className:z.dscription,children:(0,A.U)(f)})]}),(0,t.jsxs)("div",{className:"w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mt-2 user-select-none",children:[p>0&&(0,t.jsxs)("div",{className:"flex items-center mb-2 lg:mb-0 text-hint-text-caution",children:[(0,t.jsx)(E.E,{width:24,height:24,alt:"دیجی‌کلاب",className:"object-contain ml-2",src:"/statics/img/svg/club-point.svg"}),(0,t.jsx)("div",{className:"text-h4-extra ml-1",children:(0,A.U)(p)}),(0,t.jsx)("span",{className:"text-caption-extra",children:"امتیاز"})]}),!l&&c&&g&&("plus"===_?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F,{onCloseModal:w,isOpenModal:b}),(0,t.jsx)(P.z,{mode:"text",removePadding:!0,onClick:function(){(0,U.d0)({clickedItemName:"open subscription modal button",widgetName:D.Gm}),j()},CROId:R.h.PLUS_CLUB_MISSIONS,children:(0,t.jsxs)("span",{className:"w-full flex items-center justify-end text-secondary-500 text-body-1",children:[g,(0,t.jsx)(T.J,{icon:"chevronLeft",color:"secondary",size:21})]})})]}):(0,t.jsx)(I.e,{onClick:(s=(i={url:c,deepLink:h}).url,n=i.deepLink,function(){C&&n&&(0,m.d)(d.X.REDIRECT_DEEP_LINK)&&(0,O.q)({url:n}),y({url:s})}),className:"mr-auto cursor-pointer",children:(0,t.jsxs)("span",{className:"w-full flex items-center justify-end text-secondary-500 text-body-1",children:[g,(0,t.jsx)(T.J,{icon:"chevronLeft",color:"secondary",size:21})]})}))]})]})]})}var V=s(57394),W=s(81964),q=(0,b.q)({url:"digiclub/dynamic-daily-mission/",transformer:function(e){var i=e.data||{},s=i.mission_id,n=i.icon,t=i.reward_type,a=i.rewards,l=i.title,r=i.description,d=i.has_participated,o=i.total_reward_value;return{dailyMissionId:s,dailyMissionIcon:(0,h.W)({data:n}),dailyMissionRewardType:t,dailyMissionRewards:(null==a?void 0:a.map(function(e){var i,s,n,t,a,l;return s=(i=e||{}).is_active,n=i.icon,t=i.reward_value,a=i.status,l=i.title,{isRewardActive:!!s,rewardIcon:(0,h.W)({data:n}),rewardValue:t,rewardStatus:a,rewardTitle:l}}))||[],dailyMissionTitle:l,dailyMissionDescription:r,isTodayDailyMissionRewardClaimed:!!d,dailyMissionTotalReward:o}}}),X=s(64177),Z=s(99838),K=s.n(Z),H={ACTIVE:"active",CLAIMED:"claimed",UNCLAIMED:"unclaimed"};function Q(e){var i,s=e.reward||{},n=s.rewardIcon,a=s.rewardTitle,l=s.rewardStatus,r=s.rewardValue,d=(0,X.C)().isDesktop,o=(i={},(0,N.Z)(i,H.ACTIVE,{TITLE:(0,G.d)({"text-h3-extra":d,"text-h5-extra":!d}),CONTAINER:(0,G.d)("border-2",K().dailyMissionRewardItem__activeReward)}),(0,N.Z)(i,H.CLAIMED,{TITLE:(0,G.d)("text-neutral-400",{"text-h3":d,"text-h5":!d}),CONTAINER:(0,G.d)("bg-neutral-100")}),(0,N.Z)(i,H.UNCLAIMED,{TITLE:(0,G.d)({"text-h3":d,"text-h5":!d}),CONTAINER:(0,G.d)("bg-neutral-000 border-complete-200")}),i);return(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsxs)("div",{className:(0,G.d)(d&&K().dailyMissionRewardItem__item,o[l].CONTAINER,"flex flex-col justify-around items-center rounded-medium mb-2",{"p-1":!d}),children:[(0,t.jsxs)("div",{className:o[l].TITLE,children:[(0,A.U)(r),"+"]}),(0,t.jsx)(E.E,{width:d?32:20,height:d?32:20,image:n})]}),(0,t.jsx)("p",{className:"text-body-1",children:a})]})}var Y=s(99693),$=s.n(Y);function ee(e){var i=e.className,s=function(e){d({dailyMissionId:e})},n=(0,c.V)({apiMethod:q}),a=n.data,l=n.reload,r=(0,V.J)({action:W.Am,successCallback:function(){l()}}),d=r.request,o=r.pending,m=a||{},u=m.dailyMissionRewards,p=m.isTodayDailyMissionRewardClaimed,g=m.dailyMissionId,f=m.dailyMissionTotalReward,_=m.dailyMissionTitle,h=m.dailyMissionIcon,v=m.dailyMissionDescription;return g?(0,t.jsxs)("div",{className:(0,G.d)(i,$().dailyMission__dailyMissionWrapper,"user-select-none relative flex flex-col p-5 justify-around"),children:[(0,t.jsxs)("div",{className:"flex ml-auto mb-10 items-center",children:[(0,t.jsx)(E.E,{image:h,height:50,width:50}),(0,t.jsx)("div",{className:"text-h5 mr-3",children:_})]}),!(0,x.x)(v)&&(0,t.jsxs)("div",{className:"flex flex-row items-center lg:px-20 px-1 mb-4",children:[(0,t.jsx)(T.J,{icon:"infoFill",color:"warning",size:"15"}),(0,t.jsx)("p",{className:"mr-1 text-body-1 text-hint-object-caution",children:v})]}),(0,t.jsx)("div",{className:"flex flex-row justify-between items-center lg:px-20 px-1 flex-wrap mb-10",children:null==u?void 0:u.map(function(e){return(0,t.jsx)(Q,{reward:e})})}),p?(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)("div",{className:"text-button-1 text-secondary-700",children:"برای دریافت امتیاز بیشتر، ۷ روز متوالی سر بزنید."}),(0,t.jsxs)("div",{className:"p-2 rounded-medium-plus text-hint-text-caution bg-neutral-000 flex items-center",children:[(0,t.jsx)("span",{className:"ml-1",children:"تاحالا"}),(0,A.U)(f),(0,t.jsx)(T.J,{className:"mx-1",size:20,icon:"/statics/img/svg/club/digiclub-icon.svg"}),(0,t.jsx)("span",{children:"امتیاز گرفته اید!"})]})]}):(0,t.jsx)(P.z,{color:"secondary",className:"w-3/lg:12 w-6/12 mx-auto",disabled:o,label:"دریافت امتیاز امروز",onClick:function(){s(g)}})]}):null}var ei=s(48397),es=s.n(ei);function en(e){var i=e.className,s=e.game||{},n=s.url,a=s.imageSrc,l=s.title,r=s.isActive,d=s.description,o={main:(0,G.d)("w-full rounded bg-neutral-000 border-complete border-complete-200 lg:p-4 user-select-none overflow-hidden",es().missionGameCard,i),description:(0,G.d)("w-full text-body-1 mb-2 text-justify",es().missionGameCard__Description),deactiveEnterBtn:(0,G.d)("text-body2-strong text-neutral-500 rounded-large px-3",es()["missionGameCard__deactive-btn"])};return(0,t.jsxs)("div",{className:o.main,children:[(0,t.jsx)(E.E,{objectFit:"cover",src:a,height:188,alt:"Missions Game Card",className:"lg:rounded-medium lg:mb-4 min-w-full overflow-hidden",imageClassName:"w-full"}),(0,t.jsxs)("div",{className:"w-full flex flex-col text-neutral-900 p-4 lg:p-0",children:[(0,t.jsx)("div",{className:"w-full font-bold text-h3 mb-2",children:l}),(0,t.jsx)("div",{className:o.description,children:(0,A.U)(d)}),(0,t.jsx)("div",{className:"w-full flex items-center justify-end",children:r?(0,t.jsx)(I.e,{href:n,mode:"anchor",className:"flex items-center text-button-1 text-secondary-500",children:"ورود به بازی"}):(0,t.jsx)("div",{className:o.deactiveEnterBtn,children:"به زودی"})})]})]})}var et=s(66383),ea=s(43997),el=s(72610),er=s(11559),ed=s(98634),eo=s(45227),ec=(0,b.q)({type:eo.XN.POST,transformer:function(e){var i=e.data;return{digiclubPoints:null==i?void 0:i.digiclub_points}},url:function(e){var i=e.id;return"digiclub/pending-points/".concat(i,"/claim/")}}),em=s(48631),eu=s.n(em);function ex(e){var i=e.className,s=e.onGetPoint,a=void 0===s?ed.ZT:s,l=e.pendingPoint,r=l.pendingPointId,d=l.pendingPointTitle,o=l.pendingPointPoints,c=l.pendingPointCreatedAt,m=(0,et.Z)((0,n.useState)(!1),2),u=m[0],x=m[1],p=(0,er.E)({apiMethod:ec}),g=p.request,f=p.pending,_=(0,ea.I0)(),h=(0,G.d)("user-select-none flex items-start lg:items-center justify-between flex-col lg:flex-row p-3 lg:p-4 rounded-large mb-5",{hidden:u},eu().PendingPointCard,i);return(0,t.jsxs)("div",{className:h,children:[(0,t.jsxs)("div",{className:"flex items-center flex-col lg:flex-row",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(T.J,{icon:"active",size:32,color:"success"}),(0,t.jsx)("div",{className:"text-body1-strong mr-2 lg:mr-3 text-neutral-800",children:(0,A.U)(d)})]}),(0,t.jsxs)("div",{className:"text-neutral-500 lg:mr-6 text-caption",children:["انجام شده در ",(0,A.U)(c)]})]}),u?(0,t.jsx)("div",{className:(0,G.d)("w-full lg:w-unset mt-4 lg:mt-0 justify-center flex items-center text-body2-strong text-neutral-400 rounded py-2",eu().PendingPointCard__button),children:"دریافت شده"}):(0,t.jsx)("button",{className:(0,G.d)("w-full lg:w-unset mt-4 lg:mt-0 justify-center flex items-center text-body2-strong bg-secondary-700 text-neutral-000 rounded py-2",eu().PendingPointCard__button),onClick:function(){g({id:r}).then(function(e){_((0,W.Sz)(e)),x(!0),a()})},children:f?(0,t.jsx)(el.g,{color:"white",width:30}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E.E,{width:24,height:24,alt:"دیجی‌کلاب",className:"ml-2",src:"/statics/img/svg/club-point.svg"}),"دریافت ",(0,A.U)(o)," امتیاز"]})})]})}var ep=[{imageSrc:"/statics/img/png/digiclub/missonsBanner/digipoly.jpg",isActive:!0,title:"بازی دیجی‌پلی",url:"/digiclub/game-center/digipoly/",description:"توی این بازی هرچی بیشتر تاس بندازی جایزه‌های بیشتری می‌بری و شانست هم برای رسیدن به گاوصندوق و جایزه‌ی بزرگ زیادتر میشه"},{imageSrc:"/statics/img/png/digiclub/missonsBanner/wheel-spinner.png",isActive:!0,title:"چرخ و بخت",url:"https://games.digikala.com/digiclub/wheel-spinner",description:"چرخ و بخت هر ماه یک عالمه برنده و جوایز ویژه داره. فقط کافیه هر روز شانست رو امتحان کنی و گردونه رو بچرخونی."},{imageSrc:"/statics/img/png/digiclub/missonsBanner/seedling-hope.png",isActive:!0,title:"به خاطر بلوط‌ها",url:"/digiclub/game-center/seedling-hope/",description:"به‌خاطر بلوط‌ها فرصتیه که از زمین نگهبانی کنی، در جلوگیری از نابودی هزاران درخت بلوط سهیم بشی و طبیعت رو در امان نگه داری."}],eg=(0,u.D)({component:function(){var e,i=(0,c.V)({apiMethod:w}),s=i.data,n=i.reload,u=s||{},_=u.banners,h=u.missionsCompleted,v=u.missionsUncompleted,b=u.pendingPoints;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{isDesktopFixed:!0,isStatic:!0,children:(0,t.jsx)(g.h,{activeKey:o.H.MISSIONS})}),(0,m.d)(d.X.EXPIRING_CLUB_POINTS)&&(0,t.jsx)(p.a,{}),(0,t.jsxs)("div",{className:"px-4 2xl:px-0",children:[!(0,x.x)(b)&&(0,t.jsxs)("div",{className:"mb-5",children:[(0,t.jsx)(l.D,{withLine:!0,color:"blue",className:"mb-5 mt-10",title:"جایزه های شما",titleClassName:"text-h3"}),(0,t.jsx)(a.k,{color:"yellow",mode:"normal",className:"mb-5 select-none",icon:"infoOutline",children:"اعتبار جایزه هر ماموریت تنها ۷ روز پس از انجام آن می‌باشد پس زودتر جایزه ها را دریافت کنید."}),null==b?void 0:b.map(function(i,s){return(0,t.jsx)(ex,{pendingPoint:i,onGetPoint:n},"".concat(null!==(e=i.pendingPointId)&&void 0!==e?e:s))})]}),(0,t.jsx)(f.Y,{items:_,autoplay:{delay:5e3},className:"mb-5",isWideSlide:!0}),(0,t.jsx)(ee,{}),(0,t.jsx)(l.D,{withLine:!0,color:"blue",className:"mb-5",title:"ماموریت‌ها",titleClassName:"text-h3"}),null==v?void 0:v.map(function(e,i){return(0,t.jsx)(J,{mission:e},i)}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.D,{withLine:!0,color:"blue",className:"mb-5",titleClassName:"text-h3",title:"ماموریت‌های کامل شده"}),null==h?void 0:h.map(function(e,i){return(0,t.jsx)(J,{completed:!0,mission:e},i)})]}),!(0,m.d)(d.X.DIGICLUB_GAME_NET_TEST_PRODUCTION)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.D,{withLine:!0,color:"blue",className:"mb-5",title:"دنیای بازی",titleClassName:"text-h3"}),(0,t.jsx)("div",{id:"GAMES",className:"lg:grid grid-cols-3 lg:gap-6",children:ep.map(function(e,i){return(0,t.jsx)(en,{game:e,className:"mb-4"},i)})})]})]})]})},layoutProps:{desktopContentWidth:"lg",chatKey:"digiclub"}})},33398:function(e,i,s){"use strict";s.d(i,{q:function(){return a}});var n=s(79593),t=s(79934);function a(e){var i=e.url;if(!n.s){if("/"===i){window.location.href=(0,t.S)();return}window.location.href="".concat((0,t.S)()).concat(i)}}},52133:function(e){e.exports={MissionCard__ImageContainer:"styles_MissionCard__ImageContainer__QH9t7",MissionCard__ImageCompleted:"styles_MissionCard__ImageCompleted__tbbzv",MissionCard__Icon:"styles_MissionCard__Icon__OQM2V",MissionCard__Description:"styles_MissionCard__Description__x58la"}},99838:function(e){e.exports={dailyMissionRewardItem__item:"styles_dailyMissionRewardItem__item__52fIS",dailyMissionRewardItem__activeReward:"styles_dailyMissionRewardItem__activeReward__1BqVm"}},99693:function(e){e.exports={dailyMission__dailyMissionWrapper:"styles_dailyMission__dailyMissionWrapper__Up7ta"}},48397:function(e){e.exports={missionGameCard:"styles_missionGameCard__DtINJ","missionGameCard__deactive-btn":"styles_missionGameCard__deactive-btn__3cC6a",missionGameCard__Description:"styles_missionGameCard__Description__zjvv2"}},48631:function(e){e.exports={PendingPointCard:"styles_PendingPointCard__r54JM",PendingPointCard__button:"styles_PendingPointCard__button__c3Mf6"}}},function(e){e.O(0,[3225,9774,2888,179],function(){return e(e.s=42433)}),_N_E=e.O()}]);