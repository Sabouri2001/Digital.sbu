(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1334],{47792:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var i=n(45227),o=n(8398),a=(0,n(1324).q)({url:function(e){var t=e.postId;return"/magnet/posts/".concat(t,"/like/")},inputTransformer:o.d,transformer:function(e){var t=e.data||{};return{isLiked:t.liked,likesCount:t.likes_count}},type:i.XN.POST})},51383:function(e,t,n){"use strict";n.d(t,{P:function(){return c}});var i=n(52322),o=n(26442),a=n(66781),r=n(82650),s=n(27314),l=n(87049),u=n(6013),d=n(72677);function c(e){var t=e.children,n=(0,r.z)().emit,c=(0,s.e)().redirect,m=(0,l.v)(u.p.socialData).isSocialActivated,_=(0,l.v)(u.p.isLoggedIn);return(0,i.jsx)("div",{onClick:function(){if(!_){c({url:o.SW,withBackUrl:!0});return}m||n(a.bl)},children:(0,i.jsx)("div",{className:(0,d.d)({"pointer-events-none":!m}),children:t})})}},23248:function(e,t,n){"use strict";n.d(t,{D:function(){return z}});var i=n(70865),o=n(96670),a=n(66383),r=n(50930),s=n(52322),l=n(2784),u=n(5632),d=n(57033),c=n(72610),m=n(94133),_=n(64177),p=n(41435),f=n(72677),v=n(46932),g=n(1324),h=n(39368),S=(0,g.q)({url:function(e){var t=e.postId;return"magnet/posts/".concat(t,"/comments/")},transformer:function(e){var t,n=e.data||{},i=n.comments,o=n.pager;return{comments:(null==i?void 0:null===(t=i.map)||void 0===t?void 0:t.call(i,function(e){return(0,h.T)({data:e})}))||[],pager:(0,v.d)({data:o})}}}),x=n(47842),b=n(98780),y=n(31909),B=n(90877),C=n(26442),N=n(11559),k=n(27314),L=n(52216),I=n(71390),j=n(51383),P=n(45227),w=(0,g.q)({url:function(e){var t=e.commentId;return"magnet/comments/".concat(t,"/like/")},transformer:function(e){var t=e.data||{};return{isLiked:t.liked,likesCount:t.likes_count}},type:P.XN.POST}),T=n(9511),Z=n.n(T);function E(e){var t=e.comment,n=e.isSecondLevel,i=void 0!==n&&n,o=e.className,r=t||{},u=r.commentId,d=r.commentBody,c=r.commentAuthor,m=r.commentCreatedAt,_=r.commentLikesCount,p=r.commentUserReaction,v=c||{},g=v.authorPhoto,h=v.authorUsername,S=null==p?void 0:p.isLiked,P=(0,k.e)().redirect,T=(0,a.Z)((0,l.useState)(S),2),E=T[0],A=T[1];(0,l.useEffect)(function(){A(S)},[S]);var R=(0,a.Z)((0,l.useState)(_||0),2),M=R[0],O=R[1];(0,l.useEffect)(function(){O(_)},[_]);var z=(0,N.E)({apiMethod:w}).request,U=function(){P({url:(0,C.kK)(h)})},D=(0,f.d)((0,x.Z)({"border-complete-r mr-3 pr-4":i},Z().secondLevelComment,i),"p-2",o);return(0,s.jsxs)("div",{className:D,children:[(0,s.jsx)("div",{className:(0,f.d)("text-body-2",Z().magnetCommentBody),children:d}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(y.E,{image:g,height:20,width:20,rounded:32,onClick:U,className:"cursor-pointer",src:I.C}),(0,s.jsx)("span",{className:"text-caption text-neutral-400 mr-2 cursor-pointer",onClick:U,children:h}),(0,s.jsx)(B.g,{className:"mx-2",size:"medium"}),(0,s.jsx)("span",{className:"text-caption mr-1 text-neutral-400",children:(0,L.U)(m)})]}),(0,s.jsx)("div",{children:(0,s.jsx)(j.P,{children:(0,s.jsxs)("span",{className:"cursor-pointer p-2 flex items-center text-button-1 text-neutral-400 user-select-none",onClick:function(){O(function(e){return e+(+!E||-1)}),A(function(e){return!e}),z({commentId:u}).catch(function(){A(function(e){return!e})})},children:[(0,L.U)(M),(0,s.jsx)(b.J,{className:"mr-1",color:E?"primary":"low-emphasis",size:15,icon:E?"favoriteOn":"favoriteOff"})]})})})]})]})}var A=n(59437),R=n(8398),M=(0,g.q)({url:function(e){var t=e.commentId;return"magnet/comments/".concat(t,"/replies/")},inputTransformer:R.d,transformer:function(e){var t=e.data||{},n=t.comments,i=t.pager;return{replies:n.map(function(e){return(0,h.T)({data:e})}),pager:(0,v.d)({data:i})}}});function O(e){var t=e.replies,n=e.repliesCount,u=e.commentId,d=(0,a.Z)((0,l.useState)(!1),2),c=d[0],_=d[1],f=(0,m.a)({apiMethod:M,apiData:{commentId:u},disabled:!u||!c}),v=f.items,g=f.fetchNextPage,h=f.hasNextPage,S=(0,l.useMemo)(function(){return Object.entries(v||{}).filter(function(e){var t=(0,a.Z)(e,2)[1];return!(0,p.x)(t)}).flatMap(function(e){var t=(0,a.Z)(e,2);return(t[0],t[1]).replies}).map(function(e,t){return(0,o.Z)((0,i.Z)({},e),{itemIndex:t})})},[v]);return(0,s.jsxs)("div",{children:[(0,r.Z)(t).concat((0,r.Z)(S)).map(function(e){return(0,s.jsx)(E,{comment:e,isSecondLevel:!0})}),n>(null==S?void 0:S.length)||h&&(0,s.jsx)(A.e,{mode:"anchor",label:"مشاهده بیشتر",onClick:function(){c||_(!0),g()}})]})}function z(e){var t=e.postId,n=e.disabled,v=e.shouldDisplayLoading,g=e.loadingClassName,h=e.emptyStateElement,x=e.userSentComments,b=void 0===x?[]:x,y=(0,m.a)({apiMethod:S,apiData:{postId:t},disabled:!t||void 0!==n&&n}),B=y.data,C=y.items,N=y.fetchPage,k=y.pending,L=y.resetPage,I=(0,_.C)().isDesktop,j=(B||{}).pager,P=(0,u.useRouter)();(0,l.useEffect)(function(){L(1)},[P.asPath]);var w=(0,l.useMemo)(function(){return(0,r.Z)(b).concat((0,r.Z)(Object.entries(C||{}).filter(function(e){var t=(0,a.Z)(e,2)[1];return!(0,p.x)(t)}).flatMap(function(e){var t=(0,a.Z)(e,2);return(t[0],t[1]).comments}).map(function(e,t){return(0,o.Z)((0,i.Z)({},e),{itemIndex:t})})))},[C,b]),T=(0,f.d)({"border-complete-b pb-4":!I}),Z=(0,l.useCallback)(function(e){var t=e||{},n=t.commentTopReplies,i=t.commentRepliesCount,o=t.commentId;return(0,p.x)(n)?(0,s.jsx)(E,{comment:e,className:T}):(0,s.jsxs)("div",{className:T,children:[(0,s.jsx)(E,{comment:e}),(0,s.jsx)(O,{replies:n,repliesCount:i,commentId:o})]})},[]);return v&&(0,p.x)(w)&&k?(0,s.jsx)(c.g,{className:g}):(0,p.x)(w)?void 0===h?null:h:(0,s.jsx)("div",{className:"flex-1 pb-1",children:(0,s.jsx)(d.S,{itemComponent:Z,pager:j,hidePagination:!0,items:w,itemsPerRow:1,itemHasBorder:!1,fetchPage:N})})}},5046:function(e,t,n){"use strict";n.d(t,{l:function(){return m}});var i=n(66383),o=n(52322),a=n(2784),r=n(61538),s=n(59437),l=n(32614),u=n(72677),d=n(12054),c=n.n(d);function m(e){var t=e.post,n=e.titleColor,d=e.captionColor,m=void 0===d?"text-neutral-700":d,_=e.shouldDisplayShowMore,p=void 0===_||_,f=e.className,v=(0,r.d)(),g=v.isOpen,h=v.onToggle,S=t||{},x=S.postTitle,b=S.postCaption,y=(0,a.useRef)(null),B=(0,l.o)({textRef:y,updateDependencies:[b]}).lineCount,C=(0,i.Z)((0,a.useState)(!1),2),N=C[0],k=C[1];return(0,a.useEffect)(function(){k(B>2)},[B]),(0,o.jsxs)("div",{className:(0,u.d)(f,"relative"),children:[(0,o.jsx)("h5",{className:(0,u.d)("text-h5",n),children:x}),(0,o.jsx)("div",{className:(0,u.d)("text-body-1 mb-1",m,{"ellipsis-2":!g}),onClick:function(){p||h()},children:b}),(0,o.jsx)("p",{ref:y,className:(0,u.d)("text-body-1 mb-1 absolute w-full",m,c().shadowPostCaption),children:b}),p&&N&&(0,o.jsxs)(s.e,{mode:"anchor",className:"text-button-2",onClick:h,children:["مشاهده ",g?"کمتر":"بیشتر"]})]})}},96879:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var i=n(52322),o=n(52216);function a(e){var t=e.value,n=e.valueClassName,a=e.unitClassName,r=t>1e3,s=r?(t/1e3).toFixed(1):t;return(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:void 0===n?"text-body1-strong":n,children:(0,o.U)(s)}),r&&(0,i.jsx)("span",{className:void 0===a?"text-body-1 mx-1":a,children:"هزار"})]})}},84714:function(e,t,n){"use strict";n.d(t,{g:function(){return s}});var i=n(66383),o=n(2784),a=n(11559),r=n(47792);function s(e,t){var n,s=Boolean(null==e?void 0:null===(n=e.postUserReaction)||void 0===n?void 0:n.isLiked),l=(0,i.Z)((0,o.useState)(s),2),u=l[0],d=l[1];(0,o.useEffect)(function(){d(s)},[s]);var c=(0,i.Z)((0,o.useState)((null==e?void 0:e.postLikesCount)||0),2),m=c[0],_=c[1];(0,o.useEffect)(function(){_((null==e?void 0:e.postLikesCount)||0)},[null==e?void 0:e.postLikesCount]);var p=(0,a.E)({apiMethod:r.m,onSuccess:function(e){var n=e.isLiked;return null==t?void 0:t(n)},onError:function(){return d(function(e){return!e})}}).request;return{likesCount:m,isLiked:u,handleLikePost:function(){_(function(e){return e+(+!u||-1)}),d(function(e){return!e}),p({postId:(e||{}).postId})}}}},98876:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var i=n(70582);function o(e){var t=e.data||{},n=t.id,o=t.username,a=t.photo,r=t.is_following,s=t.marketplace_seller_id;return{authorId:n,authorUsername:o,authorPhoto:(0,i.W)({data:a}),authorIsFollowing:r,authorMarketplaceSellerId:s}}},39368:function(e,t,n){"use strict";n.d(t,{T:function(){return function e(t){var n=t.data||{},a=n.id,r=n.comment,s=n.author,l=n.likes_count,u=n.created_at,d=n.replies_count,c=n.is_user_own_comment,m=n.user_reaction,_=n.post,p=n.top_replies;return{commentId:a,commentBody:r,commentAuthor:(0,i.U)({data:s}),commentLikesCount:l,commentCreatedAt:u,commentRepliesCount:d,commentIsUserOwnComment:c,commentUserReaction:{isLiked:!!(m||{}).liked},commentPost:(0,o.E)({data:_}),commentTopReplies:null==p?void 0:p.map(function(t){return e({data:t})})}}}});var i=n(98876),o=n(63934)},63934:function(e,t,n){"use strict";n.d(t,{E:function(){return _}});var i=n(70865),o=n(96670),a=n(70582),r=n(76814),s=n(73587),l=n(62114),u=n(98876),d=n(79968),c=n(5525),m=n(96207);function _(e){var t,n,_,p=e.data||{},f=p.id,v=p.title,g=p.caption,h=p.author,S=p.media,x=p.products,b=p.share_urls,y=p.likes_count,B=p.comments_count,C=p.created_at,N=p.tags,k=p.is_user_own_post,L=p.user_reaction,I=p.likes,j=p.circle_cover;return{postId:f,postTitle:v,postCaption:g,postAuthor:(0,u.U)({data:h}),postProducts:null==x?void 0:x.map(function(e){var t;return t=(0,s.r)({data:e}),(0,o.Z)((0,i.Z)({},t),{productPrice:(0,r.z)({data:e.price})})}),postShareUrls:(0,l.r)({data:b}),postLikesCount:y,postMedia:null==S?void 0:S.map(function(e){var t,n,i,o,r,s,l;return n=(t=e||{}).id,i=t.type,o=t.url,r=t.ratio,s=t.cover_small,l=t.cover_big,{postMediaId:n,postMediaType:i,postMediaUrl:(0,d.f)({data:o}),postMediaRatio:r,postMediaSmallCover:(0,a.W)({data:s}),postMediaBigCover:(0,a.W)({data:l})}}),postCommentsCount:B,postCreatedAt:C,postTags:null==N?void 0:N.map(function(e){return(0,c.p)({data:e})}),postIsUserOwnPost:k,postUserReaction:(n=(t=L||{}).liked,_=t.saved,{isLiked:Boolean(n),isSaved:Boolean(_)}),postLikes:null==I?void 0:I.map(function(e){return(0,m.s)({data:e})}),postCircleCover:(0,a.W)({data:j})}}},57033:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var i=n(70865),o=n(96670),a=n(26297),r=n(52322),s=n(98017),l=n(93008);function u(e){var t=e.lazyLoadOffsetPage,n=void 0===t?l.yo:t,u=(0,a.Z)(e,["lazyLoadOffsetPage"]);return(0,r.jsx)(s.S,(0,o.Z)((0,i.Z)({},u),{lazyLoadOffsetPage:n}))}},90877:function(e,t,n){"use strict";n.d(t,{g:function(){return i.gx}});var i=n(45954)},86671:function(e,t,n){"use strict";n.d(t,{i:function(){return y}});var i,o=n(47842),a=n(70865),r=n(26297),s=n(66383),l=n(52322),u=n(2784),d=n(45954),c=n(5830),m=n(72677),_=n(50020),p=n(18687),f=n(63896),v=n.n(f);function g(e){var t=e.total,n=e.current,i=e.className,a=(0,p.D9)(n),r=(0,s.Z)((0,u.useState)(0),2),d=r[0],c=r[1],_=(0,m.d)("flex items-center justify-center",i);if((0,u.useEffect)(function(){if(n>a)(n===t-1||3!==d)&&c(function(e){return e+1});else if(n<a){if(0!==n&&1===d)return;c(function(e){return e-1})}},[n]),t<5)return(0,l.jsx)("div",{className:_,children:Array.from({length:t}).map(function(e,t){var i;return(0,l.jsx)("span",{className:(0,m.d)("bg-neutral-400 ml-2",(i={},(0,o.Z)(i,"rounded-large ".concat(v()["SliderPagination__dot--current"]),t===n),(0,o.Z)(i,"rounded-circle ".concat(v()["SliderPagination__dot--medium"]),t!==n),i))},"carousel-indicator-".concat(t))})});var f=function(e){var t;return t={},(0,o.Z)(t,(0,m.d)("rounded-large",v()["SliderPagination__dot--current"]),e===d),(0,o.Z)(t,(0,m.d)("rounded-circle",v()["SliderPagination__dot--medium"]),e!==d&&[1,2,3].includes(e)),(0,o.Z)(t,(0,m.d)("rounded-circle",v()["SliderPagination__dot--small"]),e!==d&&[0,4].includes(e)),t};return(0,l.jsx)("div",{className:_,children:Array.from({length:5}).map(function(e,t){return(0,l.jsx)("span",{className:(0,m.d)("bg-neutral-400 ml-2",f(t))},"carousel-indicator-".concat(t))})})}var h=n(21209),S=n.n(h),x="absolute hidden lg:flex items-center justify-center rounded-circle cursor-pointer z-5 shadow-fab-button",b=(i={},(0,o.Z)(i,c._.BANNER,{hasNavigation:!0,disableNavigationOnDesktop:!1,navigationButtonClassName:{prev:(0,m.d)("hidden lg:flex justify-center items-center bg-neutral-000 rounded-circle absolute cursor-pointer z-5",S().Slider__bannerButton,S()["Slider__bannerButton--prev"]),next:(0,m.d)("hidden lg:flex justify-center items-center bg-neutral-000 rounded-circle absolute cursor-pointer z-5",S().Slider__bannerButton,S()["Slider__bannerButton--next"]),disabled:"hidden"},navigationIconSize:20,hasThumbnail:!1}),(0,o.Z)(i,c._.CAROUSEL,{hasNavigation:!0,disableNavigationOnDesktop:!1,navigationButtonClassName:{prev:(0,m.d)("hidden lg:flex justify-center items-center bg-neutral-000 absolute right-0 cursor-pointer z-5 shadow-fab-button",S().Slider__carouselButton,S()["Slider__carouselButton--prev"]),next:(0,m.d)("hidden lg:flex justify-center items-center bg-neutral-000 absolute left-0 cursor-pointer z-5 shadow-fab-button",S().Slider__carouselButton,S()["Slider__carouselButton--next"]),disabled:"lg:hidden"},navigationIconSize:40,hasThumbnail:!1}),(0,o.Z)(i,c._.GALLERY,{hasNavigation:!0,disableNavigationOnDesktop:!1,navigationButtonClassName:{prev:(0,m.d)(x,S().Slider__galleryButton,S()["Slider__galleryButton--prev"]),next:(0,m.d)(x,S().Slider__galleryButton,S()["Slider__galleryButton--next"]),disabled:"lg:hidden"},navigationIconSize:28,hasThumbnail:!1}),(0,o.Z)(i,c._.MAIN_CATEGORIES,{hasNavigation:!0,disableNavigationOnDesktop:!1,navigationButtonClassName:{prev:(0,m.d)("absolute hidden lg:flex items-center justify-center rounded-circle cursor-pointer z-5 border-complete bg-white fill-high-emphasis h-[40px] w-[40px] top-1/2",S().Slider__mainCategoriesButton,S()["Slider__mainCategoriesButton--prev"]),next:(0,m.d)("absolute hidden lg:flex items-center justify-center rounded-circle cursor-pointer z-5 border-complete bg-white fill-high-emphasis h-[40px] w-[40px] top-1/2",S().Slider__mainCategoriesButton,S()["Slider__mainCategoriesButton--next"]),disabled:"lg:hidden"},navigationIconSize:28,hasThumbnail:!1}),(0,o.Z)(i,c._.GALLERY_FULL_SIZE,{hasNavigation:!0,disableNavigationOnDesktop:!1,navigationButtonClassName:{prev:(0,m.d)("absolute hidden lg:flex items-center justify-center rounded-circle cursor-pointer z-5 shadow-fab-button",S().Slider__galleryButtonFullScreen,S()["Slider__galleryButtonFullScreen--prev"]),next:(0,m.d)("absolute hidden lg:flex items-center justify-center rounded-circle cursor-pointer z-5 shadow-fab-button",S().Slider__galleryButtonFullScreen,S()["Slider__galleryButtonFullScreen--next"]),disabled:"lg:hidden"},navigationIconSize:28,hasThumbnail:!1}),(0,o.Z)(i,c._.GALLERY_WITH_THUMBNAIL,{hasNavigation:!0,disableNavigationOnDesktop:!1,navigationButtonClassName:{prev:(0,m.d)("rounded-circle absolute flex items-center justify-center cursor-pointer z-5 shadow-fab-button",S().Slider__galleryWithThumbnailButton,S()["Slider__galleryWithThumbnailButton--prev"]),next:(0,m.d)("rounded-circle absolute flex items-center justify-center cursor-pointer z-5 shadow-fab-button",S().Slider__galleryWithThumbnailButton,S()["Slider__galleryWithThumbnailButton--next"]),disabled:"hidden"},navigationIconSize:28,hasThumbnail:!0}),i),y=(0,u.forwardRef)(function(e,t){var n=e.mode,i=void 0===n?c._.CAROUSEL:n,o=e.slides,p=e.slideClassName,f=e.onSlideChange,v=e.autoplay,h=e.loop,x=e.centeredSlides,y=e.freeMode,B=e.disableFreeModeOnDesktop,C=e.mousewheel,N=e.hasNavigation,k=e.disableNavigationOnDesktop,L=e.navigationButtonClassName,I=e.slideStyle,j=e.swiperStyle,P=e.height,w=e.width,T=e.autoHeight,Z=e.breakpoints,E=e.slidesPerView,A=e.spaceBetween,R=e.slidesOffsetAfter,M=e.slidesOffsetBefore,O=e.paginationPosition,z=e.navigationButtonSize,U=e.navigationButtonSpace,D=e.navigationIconColor,F=e.navigationIconSize,W=e.direction,G=e.allowTouchMove,H=e.sliderContainerClassName,Y=e.className,q=e.hasPagination,V=e.paginationClassName,K=(0,r.Z)(e,["mode","slides","slideClassName","onSlideChange","autoplay","loop","centeredSlides","freeMode","disableFreeModeOnDesktop","mousewheel","hasNavigation","disableNavigationOnDesktop","navigationButtonClassName","slideStyle","swiperStyle","height","width","autoHeight","breakpoints","slidesPerView","spaceBetween","slidesOffsetAfter","slidesOffsetBefore","paginationPosition","navigationButtonSize","navigationButtonSpace","navigationIconColor","navigationIconSize","direction","allowTouchMove","sliderContainerClassName","className","hasPagination","paginationClassName"]),X=(0,s.Z)((0,u.useState)(0),2),J=X[0],Q=X[1],$=(0,u.useMemo)(function(){return q||i===c._.BANNER?(0,l.jsx)("div",{className:(0,m.d)("absolute z-2",S().Slider__bannerPagination,V),children:(0,l.jsx)(g,{current:J,total:null==o?void 0:o.length})}):null},[o,J,q,i]);return(0,l.jsxs)("div",{className:(0,m.d)("relative",Y),children:[(0,l.jsx)(d.iR,(0,a.Z)({ref:t,slides:o,slideClassName:p,className:H,onSlideChange:function(e){Q(null==e?void 0:e.activeIndex),null==f||f(e)},autoplay:v,loop:h,centeredSlides:x,freeMode:y,disableFreeModeOnDesktop:B,mousewheel:C,hasNavigation:(0,_.k)(N)?b[i].hasNavigation:N,disableNavigationOnDesktop:k||b[i].disableNavigationOnDesktop,navigationButtonClassName:L||b[i].navigationButtonClassName,hasThumbnails:b[i].hasThumbnail,slideStyle:I,swiperStyle:j,height:P,width:w,autoHeight:T,slidesPerView:void 0===E?1:E,spaceBetween:void 0===A?0:A,slidesOffsetAfter:void 0===R?0:R,slidesOffsetBefore:void 0===M?0:M,paginationPosition:void 0===O?"bottom":O,navigationButtonSize:z,navigationButtonSpace:U,navigationIconColor:void 0===D?"high-emphasis":D,navigationIconSize:F||b[i].navigationIconSize,direction:void 0===W?"horizontal":W,allowTouchMove:void 0===G||G,breakpoints:Z},K)),$]})})},5830:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});var i={BANNER:"BANNER",MAIN_CATEGORIES:"MAIN_CATEGORIES",CAROUSEL:"CAROUSEL",GALLERY:"GALLERY",GALLERY_WITH_THUMBNAIL:"GALLERY_WITH_THUMBNAIL",GALLERY_FULL_SIZE:"GALLERY_FULL_SIZE"}},32614:function(e,t,n){"use strict";n.d(t,{o:function(){return r}});var i=n(66383),o=n(50930),a=n(2784);function r(e){var t=e.textRef,n=e.updateDependencies,r=(0,i.Z)((0,a.useState)(0),2),s=r[0],l=r[1];return(0,a.useLayoutEffect)(function(){if(t.current){var e=t.current;l(Math.round(e.offsetHeight/parseFloat(getComputedStyle(e).lineHeight)))}},(0,o.Z)(n)),{lineCount:s}}},41701:function(e,t,n){"use strict";function i(e){var t=e.component,n=e.getAPIMethods,i=e.layoutProps,o=e.isPrivate,a=e.noDefaultLoader,r=e.pageActivatorFeature,s=e.redirectIfLogin,l=e.afterLogin,u=e.disableSSR,d=e.dataProps;return t.getAPIMethods=n,t.layoutProps=i,t.isPrivate=o,t.noDefaultLoader=a,t.pageActivatorFeature=r,t.redirectIfLogin=s,t.afterLogin=l,t.disableSSR=u,t.dataProps=d,t}n.d(t,{D:function(){return i}})},9511:function(e){e.exports={magnetCommentBody:"styles_magnetCommentBody__201eS",secondLevelComment:"styles_secondLevelComment__7WAXT"}},12054:function(e){e.exports={shadowPostCaption:"styles_shadowPostCaption__S8Xv_"}},63896:function(e){e.exports={"SliderPagination__dot--small":"styles_SliderPagination__dot--small__MrVr6","SliderPagination__dot--medium":"styles_SliderPagination__dot--medium__MBCjV","SliderPagination__dot--current":"styles_SliderPagination__dot--current__kJ25_"}},21209:function(e){e.exports={Slider__carouselButton:"styles_Slider__carouselButton__F2ifj","Slider__carouselButton--prev":"styles_Slider__carouselButton--prev__xquUG","Slider__carouselButton--next":"styles_Slider__carouselButton--next__RQQfO",Slider__galleryButton:"styles_Slider__galleryButton__hYvzz","Slider__galleryButton--prev":"styles_Slider__galleryButton--prev__nLGBK","Slider__galleryButton--next":"styles_Slider__galleryButton--next__jx62C",Slider__mainCategoriesButton:"styles_Slider__mainCategoriesButton__rGkxt","Slider__mainCategoriesButton--prev":"styles_Slider__mainCategoriesButton--prev__C6gZp","Slider__mainCategoriesButton--next":"styles_Slider__mainCategoriesButton--next__ZFF1M",Slider__galleryButtonFullScreen:"styles_Slider__galleryButtonFullScreen__8Kfqi","Slider__galleryButtonFullScreen--prev":"styles_Slider__galleryButtonFullScreen--prev__TYiSh","Slider__galleryButtonFullScreen--next":"styles_Slider__galleryButtonFullScreen--next__lhPKp",Slider__galleryWithThumbnailButton:"styles_Slider__galleryWithThumbnailButton__aWpdi","Slider__galleryWithThumbnailButton--prev":"styles_Slider__galleryWithThumbnailButton--prev__Vt_GB","Slider__galleryWithThumbnailButton--next":"styles_Slider__galleryWithThumbnailButton--next__Ul0pR",Slider__bannerButton:"styles_Slider__bannerButton__aBz_b","Slider__bannerButton--prev":"styles_Slider__bannerButton--prev__EUcgg","Slider__bannerButton--next":"styles_Slider__bannerButton--next__uwu3I",Slider__bannerPagination:"styles_Slider__bannerPagination__S7UR2"}}}]);