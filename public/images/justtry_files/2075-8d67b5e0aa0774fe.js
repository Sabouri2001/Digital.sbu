"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2075],{5032:function(i,o,n){n.d(o,{v:function(){return d}});var e=n(43202),l=n(79593),t=n(41435),r=n(3336),u=n(23004);function d(i){var o=i.data,n="";if((0,t.x)(o))return null;if((0,r.H)(o))return o;var d=o||{},a=d.base,v=d.uri;if(a&&(n+=a),n+=v,!l.s){var c,s,p,_,m,f,g,y,b,I=(0,u.p)(e.AZ);I&&(s=(c={url:n,key:e.AZ,value:I}).url,p=c.key,_=c.value,m="",f=s.indexOf("#"),-1!==(g=s.indexOf("?"))&&(m=s.substring(g+1,-1!==f?f:void 0)),y=-1!==g?s.substring(0,g):s,b=[],""!==m&&(b=m.split("&")),b.push("".concat(p,"=").concat(_)),n=y+(b.length>0?"?".concat(b.join("&")):"")+(-1!==f?s.substring(f):""))}return n}},81940:function(i,o,n){n.d(o,{m:function(){return l}});var e=n(70582);function l(i){var o=i.data||{},n=o.stream,l=o.video,t=o.cover;return{stream:n,video:l,cover:(0,e.W)({data:(null==t?void 0:t.webp_url)||(null==t?void 0:t.webp)||(null==t?void 0:t.url)})}}},19107:function(i,o,n){n.d(o,{w:function(){return l}});var e=n(5032);function l(i){var o=i.data||{},n=o.code,l=o.description,t=o.expire_date,r=o.url,u=o.title,d=o.id;return{voucherCode:n,voucherExpireDate:t,voucherPlpLink:(0,e.v)({data:r}),voucherDescription:l,voucherTitle:u,voucherId:d}}},21100:function(i,o,n){n.d(o,{B:function(){return l}});var e=n(14421);function l(i){var o=i.data;return{article:(0,e.Z)({data:o})}}},82075:function(i,o,n){n.d(o,{r:function(){return B}});var e,l=n(47842),t=n(70865),r=n(96670),u=n(70582),d=n(73587),a=function(i){var o=i.data||{},n=o.name,e=o.number,l=o.picture,t=o.products;return{categoryImage:(0,u.W)({data:l}),dotName:n,position:e,products:null==t?void 0:t.map(function(i){return(0,d.r)({data:i})})}},v=n(76814),c=n(96992),s=n(72381),p=n(4547),_=n(25388),m=n(60036),f=n(93787),g=n(90917),y=n(14421),b=n(92552),I=n(75743),T=n(9642),h=n(79968),S=n(29890),O=n(21100),k=n(64491),C=n(80202),E=n(49741);function A(i){var o,n,e=i.data;return(null==e?void 0:e.type)==="slider"?{heroIsSlider:!0,heroIsHomePageSlider:null==e?void 0:e.home_page_slider,heroDesktopSlides:null==e?void 0:null===(o=e.desktop_slides)||void 0===o?void 0:o.map(function(i){return{heroSlidesSlideImage:(0,u.W)({data:i.image}),heroSlidesSlideUrl:(0,h.f)({data:i.url})}}),heroMobileSlides:null==e?void 0:null===(n=e.mobile_slides)||void 0===n?void 0:n.map(function(i){return{heroSlidesSlideImage:(0,u.W)({data:i.image}),heroSlidesSlideUrl:(0,h.f)({data:i.url})}})}:(null==e?void 0:e.type)==="simple"||(null==e?void 0:e.type)==="centered"?{heroIsCustom:!0,heroTitle:null==e?void 0:e.title,heroSubTitle:null==e?void 0:e.s_title,heroActionUrl:null==e?void 0:e.action_link,heroActionText:null==e?void 0:e.action_text,heroDescription:null==e?void 0:e.description,heroIsCentered:(null==e?void 0:e.type)==="centered",heroImageDesktop:(0,u.W)({data:null==e?void 0:e.image}),heroImageMobile:(0,u.W)({data:null==e?void 0:e.image_mobile}),heroArtworkImageMobile:(0,u.W)({data:null==e?void 0:e.artwork_image_mobile}),heroSecondaryActionUrl:null==e?void 0:e.secondary_action_link,heroSecondaryActionText:null==e?void 0:e.secondary_action_text,heroArtworkImageDesktop:(0,u.W)({data:null==e?void 0:e.artwork_image_desktop}),heroTypoImageMobile:(0,u.W)({data:null==e?void 0:e.typo_image_mobile}),heroTypoImageDesktop:(0,u.W)({data:null==e?void 0:e.typo_image_desktop}),heroBackgroundColorCode:(null==e?void 0:e.bg_color_mobile)||(null==e?void 0:e.color)}:{heroImageDesktop:(0,u.W)({data:null==e?void 0:e.image}),heroImageMobile:(0,u.W)({data:null==e?void 0:e.image_mobile})}}function L(i){var o,n,e,l=i.data;return(null==l?void 0:l.type)?{isBannerGrid:!0,bannerType:null==l?void 0:l.type,banners:null==l?void 0:null===(n=l.desktop)||void 0===n?void 0:n.map(function(i){return(0,_.C)({data:i})}),mobileBanners:null==l?void 0:null===(e=l.mobile)||void 0===e?void 0:e.map(function(i){return(0,_.C)({data:i})})}:{banners:null==l?void 0:null===(o=l.map)||void 0===o?void 0:o.call(l,function(i){return(0,_.C)({data:i})})}}function D(i){var o,n,e,l,a=i.data||{},v=a.data,c=a.carousel,s=a.type,p=a.icon,_=a.title,m=a.description,f=a.news,g=a.see_more_url,b=a.background,I=a.voucher_data,T=a.image,S=a.action_link,O=a.action_text,k=(null==c?void 0:c.see_more_url)||(null==v?void 0:v.see_more_url),C=(null==c?void 0:c.products)||(null==v?void 0:v.products)||[];return{type:s,carouselIcon:p,carouselTitle:_,description:m,productsSeeMoreUrl:(0,h.f)({data:k}),carouselProducts:(null===(o=C.map)||void 0===o?void 0:o.call(C,function(i){return(0,d.r)({data:i})||{}}))||[],article:(0,r.Z)((0,t.Z)({},(0,y.Z)({data:{news:f,see_more_url:g}})),{title:_}),colorSet:b,carouselSeeMoreUrl:(0,h.f)({data:k}),voucher:(e=(n=I||{}).voucher_description,l=n.expire_date,{voucherTitle:n.voucher_title,voucherDescription:e,VoucherExpireDate:l,voucherCode:n.voucher_code}),carouselDescriptionImage:(0,u.W)({data:T}),actionLink:S,actionText:O}}function R(i){var o,n=i.data;return{title:null==n?void 0:n.title,seeMoreUrl:(0,h.f)({data:null==n?void 0:n.see_more_url}),productsCount:null==n?void 0:n.products_count,productsDiscountPercent:null==n?void 0:n.discount_percent,products:null==n?void 0:null===(o=n.products)||void 0===o?void 0:o.map(function(i){return(0,d.r)({data:i})})}}var w=(e={},(0,l.Z)(e,s.X.HERO,A),(0,l.Z)(e,s.X.VOUCHERS,function(i){var o,n=i.data;return{isLoggedIn:null==n?void 0:n.is_logged_in,data:null==n?void 0:null===(o=n.vouchers)||void 0===o?void 0:o.map(function(i){var o;return{voucherId:null==i?void 0:i.voucher_id,voucherExpireDate:null==i?void 0:i.expire_date,voucherTitle:null==i?void 0:i.title,voucherDescription:null==i?void 0:i.description,voucherShowLoginButton:null==i?void 0:i.show_login_button,voucherCode:null==i?void 0:i.code,voucherLink:null==i?void 0:null===(o=i.url)||void 0===o?void 0:o.uri}})}}),(0,l.Z)(e,s.X.GAMIFICATION_QA,E.n),(0,l.Z)(e,s.X.BANNERS,L),(0,l.Z)(e,s.X.BANNER,L),(0,l.Z)(e,s.X.TABS,function(i){var o,n,e=i.data;return{tabs:{tabType:null==e?void 0:e.type,tabActiveIndex:null==e?void 0:e.active_index,tabTitle:null==e?void 0:e.title,tabOptions:null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){var o;return{tabOptionType:null==i?void 0:i.type,tabOptionCode:null==i?void 0:i.code,tabOptionToken:null==i?void 0:i.token,tabOptionTitle:null==i?void 0:i.title,tabOptionDescription:null==i?void 0:i.description,tabOptionImage:null===(o=(0,u.W)({data:null==i?void 0:i.image}))||void 0===o?void 0:o.imageSrc}})}}}),(0,l.Z)(e,s.X.TAB_SECTION,function(i){var o,n,e,l,a=i.data;return(null==a?void 0:a.tab_type)?{tabsType:null==a?void 0:a.tab_type,tabs:null===(e=Object.values((null==a?void 0:a.tabs)||{}))||void 0===e?void 0:null===(l=e.map)||void 0===l?void 0:l.call(e,function(i){var o,n,e,l,a;return{tabOptionTitle:null==i?void 0:i.title,tabOptionImage:(0,u.W)({data:null==i?void 0:i.image}),tabOptionType:null==i?void 0:i.type,tabOptionCode:null==i?void 0:i.code,tabOptionToken:null==i?void 0:i.token,tabOptionDescription:null==i?void 0:i.description,tabContentType:null==i?void 0:i.content_type,tabContentPlp:(null==i?void 0:i.plp)&&(0,r.Z)((0,t.Z)({},(0,b.k)({data:null==i?void 0:null===(o=i.plp)||void 0===o?void 0:o[0]})),{seeMoreUrl:(0,h.f)({data:null==i?void 0:null===(n=i.plp)||void 0===n?void 0:null===(e=n[0])||void 0===e?void 0:e.see_more_url})}),tabContentCarousels:null===(l=Object.values((null==i?void 0:i.carousel)||{}))||void 0===l?void 0:null===(a=l.map)||void 0===a?void 0:a.call(l,function(i){var o,n;return{carouselTitle:null==i?void 0:i.title,carouselIcon:null==i?void 0:i.icon,type:null==i?void 0:i.type,description:null==i?void 0:i.description,productsSeeMoreUrl:(0,h.f)({data:null==i?void 0:i.see_more_url}),carouselProducts:(null==i?void 0:null===(o=i.products)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){return(0,d.r)({data:i})||{}}))||[]}})}})}:{tabs:{tabType:null==a?void 0:a.type,tabActiveIndex:null==a?void 0:a.active_index,tabTitle:null==a?void 0:a.title,tabOptions:null==a?void 0:null===(o=a.data)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){return{tabOptionType:null==i?void 0:i.type,tabOptionCode:null==i?void 0:i.code,tabOptionToken:null==i?void 0:i.token,tabOptionTitle:null==i?void 0:i.title,tabOptionImage:null==i?void 0:i.image,tabOptionDescription:null==i?void 0:i.description}})}}}),(0,l.Z)(e,s.X.SEO,function(i){var o=i.data;return{seoTitle:null==o?void 0:o.title,seoDescription:null==o?void 0:o.description}}),(0,l.Z)(e,s.X.LOTTERIES,k.l),(0,l.Z)(e,s.X.COUNTER,function(i){return{counterTime:i.data}}),(0,l.Z)(e,s.X.CAROUSELS,function(i){var o,n,e=i.data;return{carouselsTitle:null==e?void 0:e.title,carousels:null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){var o,n;return{carouselTitle:null==i?void 0:i.title,carouselIcon:null==i?void 0:i.icon,carouselProducts:(null==i?void 0:null===(o=i.products)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){return(0,d.r)({data:i})}))||[],carouselSeeMoreUrl:(0,h.f)({data:null==i?void 0:i.see_more_url})}})}}),(0,l.Z)(e,s.X.CAROUSEL,D),(0,l.Z)(e,s.X.SPECIAL_CAROUSEL,D),(0,l.Z)(e,s.X.SLIDER,A),(0,l.Z)(e,s.X.LEAF_CATEGORY,function(i){var o,n=i.data;return{leafCategories:null==n?void 0:null===(o=n.map)||void 0===o?void 0:o.call(n,function(i){return(0,g.n)({data:i})})}}),(0,l.Z)(e,s.X.POPULAR_BRANDS,function(i){var o,n,e=i.data;return{popularBrands:null==e?void 0:null===(o=e.brands)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){return(0,m.Q)({data:i})})}}),(0,l.Z)(e,s.X.ARTICLE,O.B),(0,l.Z)(e,s.X.SURVEY,C.Y),(0,l.Z)(e,s.X.FAQ,function(i){var o,n,e,l,t,r,u=i.data;return(null==u?void 0:u.faq)?{faqs:null==u?void 0:null===(n=u.faq)||void 0===n?void 0:null===(e=n.questions)||void 0===e?void 0:null===(l=e.map)||void 0===l?void 0:l.call(e,function(i){return(0,I.Q)({data:i})}),faqTitle:null==u?void 0:null===(t=u.faq)||void 0===t?void 0:t.title,faqDescription:null==u?void 0:null===(r=u.faq)||void 0===r?void 0:r.description}:{faqs:null==u?void 0:null===(o=u.map)||void 0===o?void 0:o.call(u,function(i){return(0,I.Q)({data:i})})}}),(0,l.Z)(e,s.X.PLP,function(i){var o,n,e,l=i.data;return(0,r.Z)((0,t.Z)({},(0,b.k)({data:null==l?void 0:l.plp})),{plpSeeMoreUrl:(0,h.f)({data:null==l?void 0:null===(o=l.plp)||void 0===o?void 0:o.see_more_url}),plpTitle:null==l?void 0:null===(n=l.plp)||void 0===n?void 0:n.title,plpSubTitle:null==l?void 0:null===(e=l.plp)||void 0===e?void 0:e.subtitle,shouldShowSeeMore:null==l?void 0:l.endless_scroll})}),(0,l.Z)(e,s.X.VIDEO_HOLDER,function(i){var o=i.data;return{videos:null==o?void 0:o.map(function(i){return{videoLink:null==i?void 0:i.video_link,cover:null==i?void 0:i.cover,isFullScreen:null==i?void 0:i.full}})}}),(0,l.Z)(e,s.X.HEADLINE,function(i){var o=i.data||{},n=o.title,e=o.image,l=o.video,t=o.description,r=o.primary_action_link,d=o.primary_action_text,a=o.values;return{bannerTitle:n,bannerImage:(0,u.W)({data:e}),bannerDescription:t,bannerBulletPoints:a,bannerUrl:r,bannerCTAText:d,bannerVideo:l}}),(0,l.Z)(e,s.X.CAROUSELS_TAB,function(i){var o,n=i.data;return{widgetData:(null==n?void 0:null===(o=n.map)||void 0===o?void 0:o.call(n,function(i){var o,n;return{tabName:null==i?void 0:i.tab_name,tabIcon:null==i?void 0:i.tab_icon,carousels:(0,S.k)(null==i?void 0:i.carousels)&&(null==i?void 0:null===(o=i.carousels)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){return(0,f.$)({data:i})}))||[]}}))||[]}}),(0,l.Z)(e,s.X.DESCRIPTION,function(i){var o=i.data;return{title:null==o?void 0:o.title,subTitle:null==o?void 0:o.s_title,description:null==o?void 0:o.description,moreButtonText:null==o?void 0:o.more_button_text,moreButtonURL:(0,h.f)({data:null==o?void 0:o.link}),image:(0,u.W)({data:null==o?void 0:o.image_src}),descPosition:null==o?void 0:o.position,customColor:null==o?void 0:o.custom_color}}),(0,l.Z)(e,s.X.BEST_SELLING,R),(0,l.Z)(e,s.X.INCREDIBLE_OFFER,R),(0,l.Z)(e,s.X.MAG_POSTS,function(i){var o=i.data;return{posts:null==o?void 0:o.map(function(i){return{postType:i.post_type,url:(0,h.f)({data:i.url}),video:i.video,title:i.title,description:i.description,image:(0,u.W)({data:null==i?void 0:i.image})}})}}),(0,l.Z)(e,s.X.IMAGES_ROW,function(i){var o,n=i.data;return{title:null==n?void 0:n.title,items:null==n?void 0:null===(o=n.images)||void 0===o?void 0:o.map(function(i){return{categoryTitleFa:i.title,categoryLogoImage:(0,u.W)({data:null==i?void 0:i.image}),categoryUrl:(0,h.f)({data:i.url})}})}}),(0,l.Z)(e,s.X.SELLING_AND_SALES,function(i){var o,n,e=i.data;return{carouselIcon:null==e?void 0:e.icon,productsTitle:null==e?void 0:e.title,description:null==e?void 0:e.description,carouselProducts:(null==e?void 0:null===(o=e.products)||void 0===o?void 0:null===(n=o.map)||void 0===n?void 0:n.call(o,function(i){return(0,d.r)({data:i})||{}}))||[],colorSet:null==e?void 0:e.background,leftLinkUrl:(0,h.f)({data:null==e?void 0:e.see_more_url})}}),(0,l.Z)(e,s.X.YOGA_BAR,function(i){var o=i.data;return{items:null==o?void 0:o.map(function(i){var o;return{title:i.title,description:i.description,icon:i.icon,seeMoreUrl:(0,h.f)({data:i.show_more_url}),products:null===(o=i.products)||void 0===o?void 0:o.map(function(i){return(0,d.r)({data:i})})}})}}),(0,l.Z)(e,s.X.CHIPS_ICONIC,function(i){var o,n=i.data;return{title:null==n?void 0:n.title,items:null==n?void 0:null===(o=n.chips)||void 0===o?void 0:o.map(function(i){return{chipsWord:i.word,chipsLink:(0,h.f)({data:i.url}),chipsIcon:i.icon}})}}),(0,l.Z)(e,s.X.FORM_BUILDER,function(i){var o=i.data||{};return{formDescription:o.form_description,formInputBoxes:o.form_input_boxes,formTitle:o.form_title,formId:o.form_hash_id,addNewFormIcon:{imageSrc:"/statics/img/png/success-form.png"}}}),(0,l.Z)(e,s.X.SINGLE_PRODUCT,function(i){var o,n,e=i.data||{},l=e.description,t=e.media_data,r=e.media_type,u=e.price,d=e.rating,a=e.show_add_to_cart,s=e.title,p=e.voucher,_=e.product_data,m=t||{},f=m.alt,g=m.title,y=m.url,b=m.cover,I=m.stream,T=p||{},h=T.description,S=T.expire_date,O=T.is_logged_in,k=T.title,C=T.url,E=T.voucher_id;return{singleProductDescription:l,singleProductMediaData:{mediaAlt:f,mediaTitle:g,mediaUrl:y,stream:I,cover:b},singleProductMediaType:r,singleProductPrice:(0,v.z)({data:u}),singleProductRating:(0,c.l)({data:d}),singleProductShowAddToCart:a,singleProductTitle:s,singleProductVoucher:{expireDate:S,isLoggedIn:O,voucherDescription:h,voucherId:E,voucherTitle:k,voucherUrl:C},singleProductVariantId:null==_?void 0:null===(o=_.default_variant)||void 0===o?void 0:o.id,singleProductCanAddToCard:(null==_?void 0:null===(n=_.default_variant)||void 0===n?void 0:n.status)==="marketable"}}),(0,l.Z)(e,s.X.VISUAL_BUNDLE,function(i){var o=i.data||{},n=o.bundle_image,e=o.description,l=o.products,t=o.title,r=o.voucher_id,d=o.total_discount_percent,a=o.total_rrp_price,c=o.total_selling_price,s=o.in_user_cart_variant_ids;return{visualBundlingImage:(0,u.W)({data:n}),visualBundlingDescription:e,visualBundlingTitle:t,visualBundlingVoucherId:r,visualBundlingProducts:l.map(function(i){var o,n;return{image:(0,u.W)({data:null==i?void 0:i.image}),productId:null==i?void 0:i.product_info.id,productDescription:null==i?void 0:i.product_description,productPrice:(0,v.z)({data:null==i?void 0:null===(o=i.product_info)||void 0===o?void 0:o.price}),visualBundlingCanAddToCart:(null==i?void 0:null===(n=i.product_info)||void 0===n?void 0:n.status)==="marketable",productUrl:null==i?void 0:i.product_url}}),visualBundlingTotalPrice:{visualBundlingRrpPrice:a,visualBundlingSellingPrice:c,visualBundlingDiscount:d},visualBundlingUserCartItems:s}}),(0,l.Z)(e,s.X.GRID_PICTURE,function(i){var o=i.data||{},n=o.overall_picture,e=o.grids;return{overallPicture:(0,u.W)({data:n}),dots:e.map(function(i){return a({data:i})})}}),(0,l.Z)(e,s.X.DAILY_POINT,function(i){var o=i.data||{},n=o.description_after_click,e=o.description_before_click,l=o.description_logged_out,t=o.widget_id,r=o.call_to_action_desc_after_click,u=o.call_to_action_desc_before_click;return{canUserGetPoint:o.can_user_click,widgetId:t,description:{afterClick:n,beforeClick:e,notLoggedIn:l},buttonText:{beforeClick:u,afterClick:r}}}),e);function B(i){var o=i.data,n=i.isDynamicCategory;if((null==o?void 0:null===(e=o.widgets)||void 0===e?void 0:e[0])&&(0,S.k)(null==o?void 0:o.widgets[0]))return{data:{widgetData:((0,S.k)(o)?o:null==o?void 0:o.widgets).map(function(i){return null==i?void 0:i.map(function(i){var o;return{widgetStyle:null==i?void 0:i.style,widgetType:null==i?void 0:i.widget_type,data:null===(o=w[null==i?void 0:i.widget_type])||void 0===o?void 0:o.call(w,i)}})}),isDynamicCategory:n}};var e,l,t=(0,S.k)(o)?o:null==o?void 0:o.widgets;return{isDynamicCategory:n,data:(null===(l=t.map)||void 0===l?void 0:l.call(t,function(i){var o,n=null==i?void 0:i.widget_type,e=(null==i?void 0:i.style)||{};try{return{widgetType:n,widgetStyle:e,data:null===(o=w[n])||void 0===o?void 0:o.call(w,i)}}catch(l){(0,p.g)("Error in dynamic landing transformer widget(Arr): ".concat(n),{widgetType:n,e:l})}}))||[],seoData:(0,T.m)({data:null==o?void 0:o.seo})}}},64491:function(i,o,n){n.d(o,{l:function(){return t}});var e=n(70865),l=n(96670);function t(i){var o=i.data;return(0,e.Z)({},null==o?void 0:o.reduce(function(i,o){var n,t,r,u;return(null==o?void 0:o.type)==="spinner"?(0,l.Z)((0,e.Z)({},i),{spinnerLotteryType:null==o?void 0:o.type,spinnerLotteryChance:null==o?void 0:null===(n=o.lottery)||void 0===n?void 0:n.chance,spinnerLotteryRewards:null==o?void 0:null===(t=o.spinner)||void 0===t?void 0:null===(r=t.map)||void 0===r?void 0:r.call(t,function(i){return{rewardId:null==i?void 0:i.id,rewardInstruction:null==i?void 0:i.instruction,rewardTitle:null==i?void 0:i.title,rewardType:null==i?void 0:i.type}})}):(null==o?void 0:o.type)==="lottery"?(0,l.Z)((0,e.Z)({},i),{lotteryChance:null==o?void 0:null===(u=o.lottery)||void 0===u?void 0:u.chance}):i},{}))}},80202:function(i,o,n){n.d(o,{Y:function(){return l}});var e=n(49741);function l(i){var o=i.data;return(null==o?void 0:o.survey)?(0,e.n)({data:o}):(0,e.n)({data:{survey:o}})}},49741:function(i,o,n){n.d(o,{n:function(){return v}});var e=n(79968),l=n(64248),t=n(50020),r=n(70582),u=n(5032),d=n(81940),a=n(19107);function v(i){var o,n,v,c,s,p,_,m,f,g,y,b,I,T,h,S,O,k,C,E,A,L,D,R,w,B,U,P,Z,N,X,M,W=i.data;return{surveyId:null==W?void 0:null===(y=W.survey)||void 0===y?void 0:y.id,surveyQuestionListId:null==W?void 0:null===(b=W.survey)||void 0===b?void 0:b.question_list_id,surveyQuestionNumber:null==W?void 0:null===(I=W.survey)||void 0===I?void 0:I.number,surveyQuestionTitle:null==W?void 0:null===(T=W.survey)||void 0===T?void 0:T.title,surveyQuestionHasBackButton:null==W?void 0:null===(h=W.survey)||void 0===h?void 0:h.has_back_button,surveyQuestionHeader:null==W?void 0:null===(S=W.survey)||void 0===S?void 0:S.question_header,surveyQuestionIcon:null==W?void 0:null===(O=W.survey)||void 0===O?void 0:O.icon,surveyQuestionTotalCount:null==W?void 0:null===(k=W.survey)||void 0===k?void 0:k.total_questions_count,surveyQuestionOptions:null===(C=Object.keys((null==W?void 0:null===(E=W.survey)||void 0===E?void 0:E.options)||{}))||void 0===C?void 0:null===(A=C.map)||void 0===A?void 0:A.call(C,function(i){var o,n,t,r=null==W?void 0:null===(o=W.survey)||void 0===o?void 0:null===(n=o.options)||void 0===n?void 0:n[i];return(0,l.Y)({surveyOptionId:null==r?void 0:r.id,surveyOptionImageUrl:null==r?void 0:r.image_url,surveyOptionIconUrl:null==r?void 0:r.icon_url,surveyOptionType:null==r?void 0:r.type,surveyOptionLink:null==r?void 0:r.redirect_url,surveyOptionLinkText:null==r?void 0:r.url_text,surveyOptionDescription:null==r?void 0:r.description,surveyOptionTitle:null==r?void 0:r.title,surveyOptionSearchData:(0,e.f)({data:null==r?void 0:null===(t=r.search_data)||void 0===t?void 0:t.url}),surveyOptionKey:i})}),surveyIsLoggedIn:!!(0,t.k)(null==W?void 0:null===(L=W.survey)||void 0===L?void 0:L.isLoggedIn)||(null==W?void 0:null===(D=W.survey)||void 0===D?void 0:D.isLoggedIn),surveyIsFinish:null==W?void 0:null===(R=W.survey)||void 0===R?void 0:R.is_finish,surveyPreviousOptionAnswer:null==W?void 0:null===(w=W.survey)||void 0===w?void 0:null===(B=w.previous_question_correct_answers)||void 0===B?void 0:B[0],surveyNumberOfCorrectAnswer:null==W?void 0:null===(U=W.survey)||void 0===U?void 0:U.num_of_correct_answer,surveyQuestionBanner:{surveyQuestionBannerDesktop:null==W?void 0:null===(P=W.survey)||void 0===P?void 0:P.desktop_image_url,surveyQuestionBannerMobile:null==W?void 0:null===(Z=W.survey)||void 0===Z?void 0:Z.mobile_image_url,surveyQuestionBannerUrl:null==W?void 0:null===(N=W.survey)||void 0===N?void 0:N.banner_url},surveyQuestionType:null==W?void 0:null===(X=W.survey)||void 0===X?void 0:X.type,surveyFinalAction:(null==W?void 0:null===(M=W.survey)||void 0===M?void 0:M.final_action)&&(n=(o=({data:W.survey.final_action}).data||{}).show_type,v=o.voucher,c=o.title,s=o.description,p=o.link,_=o.action_button_link,m=o.video,f=o.desktop_image,g=o.mobile_image,{showType:n,voucher:v&&(0,a.w)({data:v}),title:c,description:s,link:p&&(0,u.v)({data:p}),video:m&&(0,d.m)({data:m}),banner:(g||f)&&{mobile:(0,r.W)({data:g}),desktop:(0,r.W)({data:f})},buttonLink:_&&(0,u.v)({data:_})})}}},72381:function(i,o,n){n.d(o,{X:function(){return e}});var e={HERO:"hero",VOUCHERS:"vouchers",GAMIFICATION_QA:"gamification_qa",BANNERS:"banners",BANNER:"banner",SLIDER:"slider",TABS:"tabs",TAB_SECTION:"tab_section",SEO:"seo",COUNTER:"counter",LOTTERIES:"lotteries",CAROUSELS:"carousels",CAROUSEL:"carousel",SPECIAL_CAROUSEL:"special_carousel",POPULAR_BRANDS:"popularBrands",ARTICLE:"article",SURVEY:"survey",LEAF_CATEGORY:"leafCategory",CAROUSELS_TAB:"carouselsTab",FAQ:"faq",VIDEO_HOLDER:"video_holder",HEADLINE:"headline",PLP:"plp",DESCRIPTION:"description",BEST_SELLING:"best_selling",INCREDIBLE_OFFER:"incredible_offer",MAG_POSTS:"mag_posts",IMAGES_ROW:"images_row",SELLING_AND_SALES:"selling_and_sales",YOGA_BAR:"yoga_bar",CHIPS_ICONIC:"chips_iconic",FORM_BUILDER:"form",BLANK_WIDGET:"blank",SINGLE_PRODUCT:"single_product",VISUAL_BUNDLE:"visual_bundle",GRID_PICTURE:"grid_image",DAILY_POINT:"daily_point"}},93787:function(i,o,n){n.d(o,{$:function(){return r}});var e=n(70582),l=n(73587),t=n(79968);function r(i){var o=i.data||{},n=o.discount_percent,r=o.products,u=o.products_count,d=o.see_more_url,a=o.url,v=o.title,c=o.description,s=o.background,p=o.icon,_=o.early_access_url,m=o.timer;return{productsDiscountPercent:n,productsBackgroundImage:(0,e.W)({data:s}),productsIconImage:(0,e.W)({data:p}),products:Object.values(r||{}).map(function(i){return(0,l.r)({data:i})}),productsCount:u,productsSeeMoreUrl:(0,t.f)({data:d||a}),productsTitle:v,productsDescription:c,productsBackground:s,productsIcon:p,plusEarlyAccessUrl:(0,t.f)({data:_}),bigDataTrackerData:{},timer:m}}},14421:function(i,o,n){n.d(o,{J:function(){return t},Z:function(){return r}});var e=n(70582),l=n(79968);function t(i){var o=i.data||{},n=o.url,t=o.title,r=o.image;return{digikalaMagazineNewsTitle:t,digikalaMagazineNewsCreatedAt:o.created_at,digikalaMagazineNewsDescription:o.description,digikalaMagazineNewsCategoryTitle:o.category_title,digikalaMagazineNewsUrl:(0,l.f)({data:n}),digikalaMagazineNewsImage:(0,e.W)({data:r})}}function r(i){var o,n=i.data||{},e=n.news,r=n.see_more_url;return{digikalaMagazineNews:(null==e?void 0:null===(o=e.map)||void 0===o?void 0:o.call(e,function(i){return t({data:i})}))||[],digikalaMagazineSeeMoreUrl:(0,l.f)({data:r})}}}}]);