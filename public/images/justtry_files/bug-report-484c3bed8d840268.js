(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9342],{36460:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/bug-report",function(){return r(271)}])},271:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var a=r(66383),l=r(52322),n=r(2784),o=r(97729),s=r.n(o),i=r(41701),u=r(98661),m=r(70865),c=r(96670),d=r(43997),p=r(57931),x=r(16137),f=r(97156),h=r(47072),g=r(38442),y=r(27768),v=r(11559),N=r(90247),b=r(6013),j=r(75490),_=r(9697),C=r(72677),w=r(45227),I=r(1324),T=(0,I.q)({type:w.XN.POST,url:"bug-report/submit/",inputTransformer:function(e){var t=e.title,r=e.platform,a=e.comment,l=e.steps,n=e.email,o=e.fullName,s=e.temporaryMediaIds,i=e.suggestion;return{title:t,platform:r,comment:a,steps:l,email:n,full_name:o,temporary_media_ids:s,type:e.type,suggestion:i}}}),P=(0,I.q)({type:w.XN.POST,url:"media/upload/bug-reports/",inputTransformer:function(e){return e.formData},transformer:function(e){var t=(e.data||{}).temporary_media;return{temporaryMediaTemporaryId:null==t?void 0:t.temporary_id}},options:{headers:{"Content-Type":"multipart/form-data"},timeout:18e4}}),F={SECURITY_ISSUE:"security_issue",BUG:"bug"},q=r(72251),k=r(72873),B=(0,I.q)({url:"bug-report/",transformer:function(e){var t,r=(e.data||{}).platforms;return{platforms:null===(t=Object.keys(r||{}))||void 0===t?void 0:t.map(function(e){return{platformLabel:null==r?void 0:r[e],platformValue:e}})}}});function M(e){var t,r=e.error,a=e.value,n=e.handleDropdown,o=e.label,s=e.className,i=(0,k.V)({apiMethod:B}).data;return(0,l.jsx)("div",{className:s,children:(0,l.jsx)(q.vb,{value:a,placeholder:"موضوع را انتخاب کنید",label:void 0===o?"موضوع":o,error:r,onSelect:n,required:!0,children:null==i?void 0:null===(t=i.platforms)||void 0===t?void 0:t.map(function(e){var t=e.platformLabel,r=e.platformValue;return(0,l.jsx)(q.bK,{value:r,children:t},r)})})})}var S=r(6133),U=r.n(S);function E(e){var t=e.type,r=e.title,o=(0,a.Z)((0,n.useState)([]),2),s=o[0],i=o[1],u=(0,N.c)(),w=u.ref,I=u.states,q=u.formHandlers,k=u.submit,B=u.reset,S=u.setValue,E=I.isDirty,D=(0,d.v9)(b.p.userInfo),H=(0,v.E)({apiMethod:T}),L=H.request,O=H.pending,Z=function(e){i(e)},V=function(e){S("platform",e)},z=(0,n.useMemo)(function(){return t===F.SECURITY_ISSUE?[{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("mt-4 w-full",U().BugInfoForm__formInput),inputProps:{type:"email"},label:"ایمیل شما",required:!0}),defaultValue:null==D?void 0:D.userEmail,name:"email",rules:{required:y.Qt,validate:_.D6}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("mt-4 lg:mr-4 w-full",U().BugInfoForm__formInput),inputProps:{type:"tel"},label:"تلفن"}),defaultValue:null==D?void 0:D.userPhone,name:"mobile",rules:{validate:_.uC}},{component:(0,l.jsx)(M,{label:"سامانه آسیب‌پذیر",handleDropdown:V,className:(0,C.d)("mt-4 w-full",U().BugInfoForm__formInput)}),name:"platform",rules:{required:y.PT}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("mt-4 lg:mr-4 w-full",U().BugInfoForm__formInput),label:"عنوان آسیب‌پذیری",required:!0}),name:"title",rules:{required:y.PT}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:"mt-4 w-full",label:"شرح آسیب پذیری",inputProps:{rows:4},required:!0,isTextarea:!0}),name:"comment",rules:{required:y.PT}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:"mt-4 w-full",label:"روش بازتولید",placeholder:"چگونه خطا را ایجاد کنیم",inputProps:{rows:4},required:!0,isTextarea:!0}),name:"steps",rules:{required:y.PT}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",errorClassName:"text-hint-text-error text-body-2",className:"mt-4 w-full",label:"پیشنهاد جهت رفع آسیب‌پذیری",inputProps:{rows:4},isTextarea:!0}),name:"suggestion"},{component:(0,l.jsx)(g.V,{apiMethod:P,maxFiles:5,onFinish:Z,className:"w-full mt-4",uploadDescription:"حداکثر ۵ تصویر jpeg یا PNG حداکثر یک مگابایت، یک ویدیو MP4 حداکثر ۵۰ مگابایت یا یک فایل Zip",uploadButtonText:"افزودن مستندات (POC ،Evidence)",acceptedTypes:".zip, .mp4"}),name:"secFileUploader",defaultValue:[]}]:t===F.BUG?[{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("w-full",U().BugInfoForm__formInput),label:"عنوان",required:!0}),name:"title",rules:{required:y.PT}},{component:(0,l.jsx)(M,{handleDropdown:V,className:(0,C.d)("lg:mr-4 mt-4 lg:mt-0 w-full",U().BugInfoForm__formInput)}),name:"platform",rules:{required:y.PT}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("mt-4 w-full",U().BugInfoForm__formInput),label:"توضیح",inputProps:{rows:4},required:!0,isTextarea:!0}),name:"comment",rules:{required:y.PT}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("mt-4 lg:mr-4 w-full",U().BugInfoForm__formInput),label:"مراحل ایجاد خطا",placeholder:"چگونه خطا را ایجاد کنیم",inputProps:{rows:4},required:!0,isTextarea:!0}),name:"steps",rules:{required:y.PT}},{component:(0,l.jsx)(g.V,{apiMethod:P,maxFiles:5,onFinish:Z,className:"w-full mt-4",uploadDescription:"حداکثر ۵ تصویر jpeg یا PNG حداکثر یک مگابایت، یک ویدیو MP4 حداکثر ۵۰ مگابایت یا یک فایل Zip",uploadButtonText:"افزودن مستندات (POC ،Evidence)",acceptedTypes:".mp4"}),name:"techFileUploader",defaultValue:[]},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("mt-4 w-full",U().BugInfoForm__formInput),label:"نام شما",placeholder:"نام و نام‌خانوادگی خود را بنویسید",required:!0}),defaultValue:null==D?void 0:D.userName,name:"fullName",rules:{required:y.PT}},{component:(0,l.jsx)(f.n,{labelClassName:"text-body-1",requiredClassName:"text-primary-500 mr-1",errorClassName:"text-hint-text-error text-body-2",className:(0,C.d)("mt-4 lg:mr-4 w-full",U().BugInfoForm__formInput),inputProps:{type:"email"},label:"ایمیل",required:!0}),defaultValue:null==D?void 0:D.userEmail,name:"email",rules:{required:y.Qt,validate:_.D6}}]:void 0},[t]);return(0,l.jsxs)("div",{className:(0,C.d)("mx-auto pb-5 pt-6 px-4 lg:px-0",U().BugInfoForm),children:[(0,l.jsx)(h.D,{titleClassName:"text-h5",title:r,description:"لطفا فرم زیر را تکمیل کنید"}),(0,l.jsx)(x.l,{ref:w,formHandlers:q,useFormProps:{reValidateMode:"onChange"},onSubmit:function(e){var r=(0,c.Z)((0,m.Z)({},e),{type:t});L((0,c.Z)((0,m.Z)({},r),{temporaryMediaIds:s})).then(function(){(0,j.p)({message:"پیام شما با موفقیت ثبت شد"}),B({email:null==D?void 0:D.userEmail,phone:null==D?void 0:D.userPhone,platform:"",title:"",comment:"",steps:"",suggestion:""})})},items:z}),(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row mt-9 items-center",children:[(0,l.jsx)(p.z,{size:"large",className:(0,C.d)("flex-grow w-full lg:ml-4",U().BugInfoForm__formButton),onClick:function(){k()},color:"primary",disabled:O||!E,isLoading:O,children:"تائید و ارسال"}),(0,l.jsx)("p",{className:"flex-grow text-body-1 text-neutral-400 mt-4 lg:mt-0",children:"با ارسال این گزارش اعلام می‌کنید قوانین مرتبط با گزارش خطا را که در پایین صفحه بیان شده پذیرفته‌اید."})]})]})}function D(){return(0,l.jsx)("div",{className:"pt-5 pb-6 bg-neutral-100",children:(0,l.jsxs)("div",{className:"container-md-w lg:container-xl-w mx-auto lg:px-6",children:[(0,l.jsx)("h4",{className:"text-h4 pb-4 text-neutral-700 mx-5 lg:mx-auto",children:"شرایط و قوانین"}),(0,l.jsxs)("p",{className:"text-body-1 text-neutral-600 mx-5 lg:mx-auto",children:["با توجه به اهمیت خطای گزارش شده از سوی شما، دیجی‌کالا به پاس قدردانی هدیه‌ای برای شما در نظر خواهد گرفت. توجه داشته باشید بعضی از مشکلات به دلیل کم اهمیت بودن شامل هدیه نخواهند بود.",(0,l.jsx)("br",{})," لطفا توجه داشته باشید قبل از برطرف شدن خطای گزارش شده، هیچگونه اطلاعاتی در مورد آن را عمومی نکرده یا با دیگران به اشتراک نگذارید. بدون رضایت افراد با حساب کاربری آن‌ها تعاملی نداشته باشید و از شکستن حریم شخصی افراد و ایجاد مشکل در اطلاعات دیگران اجتناب کنید. همچنین به هیچ عنوان از مشکلات امنیتی‌ای که یافته‌اید، بهره‌برداری و سوءاستفاده نکنید و به قوانین کشور پایبند باشید."]})]})})}var H=r(59437),L=r(31909),O=r(26442),Z=r(64781),V=r.n(Z);function z(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:(0,C.d)("w-full py-10 lg:py-13 px-5",V().Hero),children:(0,l.jsx)("div",{className:(0,C.d)("flex items-start flex-col container-lg-w mx-auto",V().Hero__banner),children:(0,l.jsx)(H.e,{href:(0,O.ws)(),children:(0,l.jsx)(L.E,{className:"mx-auto lg:mr-0 ",src:"/statics/img/svg/Digikala-Logo-white-fa.svg",width:160})})})}),(0,l.jsx)("div",{className:(0,C.d)("w-full text-body-1 text-neutral-000 text-center px-5 pt-2 pb-2 md:pb-3 lg:pb-2 mx-auto",V().Hero__contactUs),children:(0,l.jsxs)("div",{className:"container-lg-w text-center mx-auto",children:["لطفا مشکلات مربوط به سفارش خود را از طریق فرم\xa0",(0,l.jsx)(H.e,{href:O.Kk,className:(0,C.d)("cursor-pointer text-neutral-000",V()["Hero__contactUs--dashed"]),target:"_blank",children:"تماس با ما"}),"\xa0گزارش کنید. مشکلات سفارش‌ در در فرم زیر رسیدگی نخواهد شد."]})})]})}var R=r(98780);function A(e){var t=e.icon,r=e.title,a=e.className,n=e.onClick;return(0,l.jsxs)("div",{className:(0,C.d)("flex flex-row justify-between items-center cursor-pointer rounded-medium border-complete-200",a),onClick:n,children:[(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("div",{className:"mx-5",children:(0,l.jsx)(R.J,{icon:t,color:"primary",size:24})}),(0,l.jsx)("div",{className:"text-subtitle-strong text-neutral-700",children:r})]}),(0,l.jsx)(R.J,{icon:"chevronLeft",size:24})]})}function G(e){var t=e.handleOpenTechnicalBug,r=e.handleOpenSecurityBug;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"mx-5 my-5 lg:hidden",children:[(0,l.jsx)("h6",{className:"text-h4 text-neutral-600",children:"گزارش خطا"}),(0,l.jsx)("p",{className:"text-body-strong text-neutral-600",children:"لطفا یکی از موارد زیر را انتخاب نمایید."})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-2 lg:py-6 px-5 pb-5",children:[(0,l.jsx)(H.e,{mode:"link",href:O.Kk,children:(0,l.jsx)(A,{className:"py-4 px-3",icon:"cube-cat-all",title:"گزارش خطا در نسخه آزمایشی اپلیکیشن"})}),(0,l.jsx)(H.e,{mode:"link",href:O.Kk,children:(0,l.jsx)(A,{className:"py-4 px-3",icon:"repurchase",title:"درخواست مرجوعی"})}),(0,l.jsx)(H.e,{mode:"link",href:O.Kk,children:(0,l.jsx)(A,{className:"py-4 px-3",icon:"clubCoinOutline",title:"مشکل در امتیاز دیجی‌کلاب"})}),(0,l.jsx)(H.e,{mode:"link",href:O.Kk,children:(0,l.jsx)(A,{className:"py-4 px-3",icon:"order",title:"پیگیری سفارش و بازگشت وجه"})}),(0,l.jsx)(H.e,{mode:"link",href:O.Kk,children:(0,l.jsx)(A,{className:"py-4 px-3",icon:"feedback",title:"انتقادات و پیشنهادات"})}),(0,l.jsx)(H.e,{mode:"link",href:O.hE,children:(0,l.jsx)(A,{className:"py-4 px-3",icon:"question",title:"سوالات متداول"})}),(0,l.jsx)(A,{className:"py-4 px-3 w-full",onClick:t,icon:"tools",title:"گزارش خطای فنی"}),(0,l.jsx)(A,{className:"py-4 px-3 w-full",onClick:r,icon:"bug",title:"گزارش آسیب‌پذیری امنیتی"})]})]})}var K=(0,i.D)({component:function(){var e=(0,a.Z)((0,n.useState)(!1),2),t=e[0],r=e[1],o=(0,a.Z)((0,n.useState)(!1),2),i=o[0],m=o[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s(),{children:(0,l.jsx)("title",{children:(0,u.t)({title:"گزارش خطا"})})}),(0,l.jsx)(z,{}),(0,l.jsx)("div",{className:"container-md-w lg:container-xl-w mx-auto px-4",children:t?(0,l.jsx)(E,{title:"گزارش خطا",type:F.BUG}):i?(0,l.jsx)(E,{title:"گزارش آسیب‌پذیری‌های امنیتی",type:F.SECURITY_ISSUE}):(0,l.jsx)(G,{handleOpenTechnicalBug:function(){r(!0)},handleOpenSecurityBug:function(){m(!0)}})}),(0,l.jsx)(D,{})]})},layoutProps:{desktopHasHeader:!1,desktopHasFooter:!1,hasMobileHeader:!1,mobileHasFooter:!1,noContentPadding:!0,desktopFullWidth:!0,footerMarginTop:0,useCustomDarkFooter:!0}})},10014:function(e,t,r){"use strict";r.d(t,{b:function(){return c}});var a=r(66383),l=r(52322),n=r(2784),o=r(31909),s=r(11559),i=r(75490),u=r(52216),m=r(72677);function c(e){var t=e.inputTypeAccept,r=e.onChange,c=e.onProgress,d=e.url,p=e.apiMethod,x=e.CTAComponent,f=e.PendingComponent,h=e.returnId,g=e.filesLength,y=e.maxFiles,v=e.className,N=(0,a.Z)((0,n.useState)(0),2),b=N[0],j=N[1],_=(0,a.Z)((0,n.useState)(d),2),C=_[0],w=_[1],I=(0,s.E)({apiMethod:p,onUploadProgressCallback:function(e){j(Math.round(e.loaded/e.total*100))}}),T=I.request,P=I.pending;return(0,n.useEffect)(function(){null==c||c(b)},[b]),(0,l.jsxs)("label",{className:(0,m.d)("flex items-center justify-center flex-col rounded cursor-pointer h-full",v),children:[!P&&(0,l.jsx)("input",{type:"file",className:"hidden",accept:t,onChange:function(e){if(!P){if(g>=y)(0,i.p)({message:"حداکثر تعداد مجاز عکس‌ها ".concat((0,u.U)(y)," عدد می‌باشد.")});else{var t,a,l=new FormData;l.append("file",null==e?void 0:null===(t=e.target)||void 0===t?void 0:null===(a=t.files)||void 0===a?void 0:a[0]),T({formData:l,id:h}).then(function(t){w(null==t?void 0:t.url),null==r||r({e:e,temporaryMediaTemporaryId:t.temporaryMediaTemporaryId})})}}}}),C&&(0,l.jsx)(o.E,{src:C,rounded:8,objectFit:"cover",className:"h-full w-full",imageClassName:"h-full w-full"}),P&&b>0&&f?f:x]})}},38442:function(e,t,r){"use strict";r.d(t,{V:function(){return x}});var a=r(50930),l=r(52322),n=r(2784),o=r(72677),s=r(57931),i=r(10014),u=r(31909),m=r(98780);function c(e){var t,r=e.src,a=e.name,n=e.clearFile,s=e.temporaryMediaTemporaryId,i=e.type,c=e.className;switch(i){case"application/zip":t="/statics/img/svg/zip.svg";break;case"video/mp4":t="/statics/img/svg/video.svg";break;default:t=r}return(0,l.jsxs)("div",{className:(0,o.d)("relative mr-2",c),children:[(0,l.jsx)(u.E,{width:64,height:64,src:t,alt:a}),(0,l.jsx)("div",{className:"top-0 right-0 absolute cursor-pointer",onClick:function(e){return n(e,s)},children:(0,l.jsx)(m.J,{icon:"clear",size:20,className:"bg-neutral-000 rounded-circle"})})]})}var d=r(70652),p=r.n(d);function x(e){var t=e.maxFiles,r=e.onFinish,u=e.apiMethod,m=e.className,d=e.acceptedTypes,x=e.customCTA,f=e.uploadDescription,h=e.uploadButtonText,g=e.onChange,y=e.value,v=(0,n.useCallback)(function(e){var t=e.e,r=e.temporaryMediaTemporaryId,l=(0,a.Z)(t.target.files).map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e),temporaryMediaTemporaryId:r})});g(function(e){return(0,a.Z)(e).concat((0,a.Z)(l))})},[]),N=(0,n.useCallback)(function(e,t){g(function(e){return e.filter(function(e){return e.temporaryMediaTemporaryId!==t})})},[]);return(0,n.useEffect)(function(){return function(){var e=!0,t=!1,r=void 0;if(y)try{for(var a,l=y[Symbol.iterator]();!(e=(a=l.next()).done);e=!0){var n=a.value;URL.revokeObjectURL(null==n?void 0:n.preview)}}catch(o){t=!0,r=o}finally{try{e||null==l.return||l.return()}finally{if(t)throw r}}}},[y]),(0,n.useEffect)(function(){r(null==y?void 0:y.map(function(e){return e.temporaryMediaTemporaryId}))},[y]),(0,l.jsxs)("div",{className:(0,o.d)("py-5 px-4 rounded-medium h-full",p().StaticPageFileUploader,m),children:[(0,l.jsx)("p",{className:"text-caption text-hint-text-neutral text-center",children:void 0===f?"حداکثر ۵ تصویر jpeg یا PNG حداکثر یک مگابایت، یک ویدیو MP4 حداکثر ۵۰ مگابایت":f}),(0,l.jsx)("div",{className:"flex justify-center flex-wrap gap-4 my-4",children:null==y?void 0:y.map(function(e){return(0,l.jsx)(c,{src:e.preview,name:e.name,temporaryMediaTemporaryId:e.temporaryMediaTemporaryId,clearFile:N,type:e.type},e.preview)})}),(0,l.jsx)(i.b,{inputTypeAccept:"image/png, image/gif, image/jpeg, ".concat(void 0===d?"":d),onChange:v,onDelete:N,url:"",onFinish:r,apiMethod:u,maxFiles:void 0===t?5:t,filesLength:(null==y?void 0:y.length)||0,className:"w-full",CTAComponent:x||(0,l.jsx)(s.z,{className:"mx-auto mt-2",size:"medium",mode:"outlined",color:"primary",tag:"div",prependIcon:"fileTransferUpload",children:void 0===h?"افزودن عکس یا ویدئو":h})})]})}},41701:function(e,t,r){"use strict";function a(e){var t=e.component,r=e.getAPIMethods,a=e.layoutProps,l=e.isPrivate,n=e.noDefaultLoader,o=e.pageActivatorFeature,s=e.redirectIfLogin,i=e.afterLogin,u=e.disableSSR,m=e.dataProps;return t.getAPIMethods=r,t.layoutProps=a,t.isPrivate=l,t.noDefaultLoader=n,t.pageActivatorFeature=o,t.redirectIfLogin=s,t.afterLogin=i,t.disableSSR=u,t.dataProps=m,t}r.d(t,{D:function(){return a}})},98661:function(e,t,r){"use strict";function a(e){var t=e.title,r=void 0===t?"":t,a=e.suffix,l=void 0===a?"":a,n=e.prefix,o=void 0===n?"":n;return"".concat(o?"".concat(o," - "):"","دیجی‌کالا").concat(r?" - ".concat(r):"").concat(l?" - ".concat(l):"")}r.d(t,{t:function(){return a}})},6133:function(e){e.exports={BugInfoForm:"styles_BugInfoForm__NYrhX",BugInfoForm__formInput:"styles_BugInfoForm__formInput___rois",BugInfoForm__formButton:"styles_BugInfoForm__formButton__Xmaad"}},64781:function(e){e.exports={Hero:"styles_Hero__fS_cI",Hero__body:"styles_Hero__body__1RnHU",Hero__contactUs:"styles_Hero__contactUs__fYJBZ","Hero__contactUs--dashed":"styles_Hero__contactUs--dashed___SBlJ"}},70652:function(e){e.exports={StaticPageFileUploader:"static-page-file-uploader_StaticPageFileUploader__wG3M0"}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=36460)}),_N_E=e.O()}]);