(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{34451:function(t,e,i){"use strict";i.d(e,{i:function(){return a}});var n=i(90581),o=i(27805),r=!i(79593).s&&i(36023),a=function(){function t(){(0,n.Z)(this,t)}var e=t.prototype;return e.decrypt=function(t){var e=t.encryptedString,i=t.key;if(r){var n=JSON.parse(r.enc.Utf8.stringify(r.enc.Base64.parse(e))),o=r.enc.Hex.parse(n.iv),a=n.ciphertext,u=parseInt(n.iterations);u<=0&&(u=999);var l=this.encryptMethodLength/4,s=r.PBKDF2(i,"$2dioN4m4kxYzA0NDBlZDQ2NmMwODA5NTRlYWQ",{hasher:r.algo.SHA512,keySize:l/8,iterations:u});return r.AES.decrypt(a,s,{mode:r.mode.CBC,iv:o}).toString(r.enc.Utf8)}},e.encrypt=function(t){var e=t.string,i=t.key;if(r){var n=r.lib.WordArray.random(16),o=r.lib.WordArray.random(256),a=this.encryptMethodLength/4,u=r.PBKDF2(i,o,{hasher:r.algo.SHA512,keySize:a/8,iterations:999}),l=r.AES.encrypt(e,u,{mode:r.mode.CBC,iv:n}),s={ciphertext:r.enc.Base64.stringify(l.ciphertext),iv:r.enc.Hex.stringify(n),salt:r.enc.Hex.stringify(o),iterations:999};return r.enc.Base64.stringify(r.enc.Utf8.parse(JSON.stringify(s)))}},(0,o.Z)(t,[{key:"encryptMethodLength",get:function(){return parseInt(this.encryptMethod.match(/\d+/)[0])}},{key:"encryptKeySize",get:function(){return parseInt((this.encryptMethodLength/8).toString())}},{key:"encryptMethod",get:function(){return"AES-256-CBC"}}]),t}()},36041:function(t,e,i){"use strict";i.d(e,{L:function(){return r}});var n=i(79968),o=i(50020);function r(t){var e=t.data;if((0,o.k)(e))return{};var i=e.discount_percent,r=e.timer,a=e.url,u=e.title,l=e.description;return{shippingFeePromotionUrl:(0,n.f)({data:a}),shippingFeePromotionTimer:r,shippingFeePromotionDiscountPercent:i,shippingFeePromotionTitle:u,shippingFeePromotionDescription:l}}},98663:function(t,e,i){"use strict";i.d(e,{e:function(){return R}});var n=i(70865),o=i(96670),r=i(60036),a=i(98884),u=i(90917),l=i(1249),s=i(45507),d=i(70582),c=i(73587),p=i(35825),v=i(9642),m=i(79968),g=i(88002),f=i(12694),_=i(64248),h=i(29890),y=i(34451),S="item-center align-center flex".split(" ").map(function(t){return t.split("-").length}).join(""),w=i(36041),b=i(91390),k=i(29954);function R(t){var e,i,R,A,x,P,q,T,D,C,B,I,z,N,j,L,O,M,F,U,V,W,Z,H,Q,E,G,Y,K,J,$=t.data||{},X=$.product,tt=$.flat_shipping_badge,te=$.recommendations,ti=$.seo,tn=$.promotion_banner,to=$.dynamic_touch_points,tr=$.bigdata_tracker_data,ta=$.shipping_fee_discount,tu=X||{},tl=tu.digify_touchpoint,ts=tu.images,td=tu.videos,tc=tu.suggestion,tp=tu.size_guide,tv=tu.default_variant,tm=tu.variants,tg=tu.questions_count,tf=tu.comments_count,t_=tu.comments_overview,th=tu.last_questions,ty=tu.specifications,tS=tu.meta,tw=tu.tags,tb=tu.size,tk=tu.breadcrumb,tR=tu.category,tA=tu.brand,tx=tu.last_comments,tP=tu.review,tq=tu.expert_reviews,tT=tu.is_inactive,tD=tu.st_cmp_tacker,tC=tu.has_size_guide,tB=function(t){var e=t.data;if((null==e?void 0:e.neo.length)===Number(S))try{var i=new y.i,n="".concat(e.zero).concat(e.dx).concat(e.cx).concat(e["data-fx"]),o=i.decrypt({encryptedString:n,key:"text-neutral-700 text-body2-strong ml-8"}).split("-"),r=o[2],a=o[3],u=a[o[1]];a=a.slice(0,+o[1])+a.slice(+o[1]+1),u+=a[o[5]],a=a.slice(0,+o[5])+a.slice(+o[5]+1),u+=a[o[6]],a=a.slice(0,+o[6])+a.slice(+o[6]+1),u+=a[o[0]],a=a.slice(0,+o[0])+a.slice(+o[0]+1),u+=a[o[4]],a=a.slice(0,+o[4])+a.slice(+o[4]+1);var l=i.decrypt({encryptedString:a,key:u.split("").reverse().join("")});return{imageIndex:Number(r),image:{url:"".concat(l,"?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"),web_url:"".concat(l,"?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90")}}}catch(s){console.log(s)}}({data:tD}),tI=null==ts?void 0:null===(e=ts.list)||void 0===e?void 0:e.map(function(t,e){return(null==tB?void 0:tB.imageIndex)===e?(0,d.W)({data:tB.image}):(0,d.W)({data:t})}),tz=(0,_.Y)({product:(0,f.s)((0,o.Z)((0,n.Z)({},(0,c.r)({skipDefaultVariant:!0,data:X})),{productDigifyTouchpoint:tl,productFlatShippingBadge:tt,productImagesList:tI,productBreadcrumb:(null==tk?void 0:null===(i=tk.map)||void 0===i?void 0:i.call(tk,function(t){return(0,a.W)({data:t})}))||[],productVideos:null===(R=Object.values(td||{}))||void 0===R?void 0:R.map(function(t){return{videoUrl:null==t?void 0:t.url,videoCover:null==t?void 0:t.cover,videoTitle:null==t?void 0:t.title}}),productSizes:tb||[],productSizeGuidImage:null==tp?void 0:tp.image,productSizeGuidTable:null==tp?void 0:tp.table,productSizeGuidTitle:null==tp?void 0:tp.title,productDefaultVariant:(0,n.Z)({},(0,g.o)({prefix:"product",data:tv}),(0,g.o)({data:tv}),(0,b.j)({data:null==tv?void 0:tv.seller,prefix:"productVariant"})),productVariants:(null==tm?void 0:tm.map(function(t){return(0,n.Z)({},(0,g.o)({prefix:"product",data:t}),(0,g.o)({data:t}),(0,b.j)({data:null==t?void 0:t.seller,prefix:"productVariant"}))}))||[],productCategory:(0,u.n)({data:tR}),productHasSizeGuide:tC,productBrand:(0,r.Q)({data:tA})||{},productQuestionsCount:tg||null,productCommentsCount:tf||null,productSuggestionCount:(null==tc?void 0:tc.count)||null,productSuggestionPercentage:(null==tc?void 0:tc.percentage)||null,productCommentsSummery:(O=(L=t_||{}).overview,M=L.advantages,F=L.disadvantages,{commentSummaryOverviewId:L.id,commentSummaryOverview:O,commentSummaryAdvantages:M,commentSummaryDisadvantages:F}),productIsInactive:tT||null,productShortReview:(V=(U=tq||{}).technical_properties,W=U.short_review,Z=U.description,H=U.admin_rates,E=(Q=V||{}).advantages,G=Q.disadvantages,{technicalPropertiesAdvantages:Object.values(E||{}),technicalPropertiesDisAdvantages:Object.values(G||{}),productDescription:W||Z,adminRates:H}),productReviewSections:null==(K=(tq||{}).review_sections)?void 0:null===(Y=K.map)||void 0===Y?void 0:Y.call(K,function(t){var e=t||{},i=e.title,n=e.sections;return{reviewSectionTitle:i,reviewSections:null==n?void 0:n.map(function(t){var e,i,n,o;return i=(e=t||{}).template,n=e.image,o=e.text,{reviewSectionTemplate:i,reviewSectionImage:(0,d.W)({data:n}),reviewSectionText:o}})}}),productReview:null==tP?void 0:null===(A=tP.attributes)||void 0===A?void 0:A.map(function(t){return{productReviewAttrTitle:null==t?void 0:t.title,productReviewAttrValues:null==t?void 0:t.values}}),productSpecifications:null==ty?void 0:null===(J=ty.map)||void 0===J?void 0:J.call(ty,function(t){var e,i=t||{},n=i.title,o=i.attributes;return{specificationTitle:n,specificationAttributes:null==o?void 0:null===(e=o.map)||void 0===e?void 0:e.call(o,function(t){var e;return{specificationAttributeTitle:(e=t||{}).title,specificationAttributeValues:e.values}})}}),productBrandCategoryUrl:(0,m.f)({data:null==tS?void 0:tS.brand_category_url}),productLastComments:null==tx?void 0:null===(x=tx.map)||void 0===x?void 0:x.call(tx,function(t){return(0,l.T)({data:t})}),productLastQuestions:null==th?void 0:null===(P=th.map)||void 0===P?void 0:P.call(th,function(t){return(0,s.v)({data:t})}),productTags:tw?null==tw?void 0:null===(q=tw.map)||void 0===q?void 0:q.call(tw,function(t){return(0,k.p)({data:t})}):{}})),recommendationsData:(0,h.k)(te)&&(null===(T=te||[])||void 0===T?void 0:T.map(function(t){return(0,p.v)({data:t})}))||[],relatedProducts:(0,p.v)({data:null==te?void 0:te.related_products}),alsoBoughtProducts:(0,p.v)({data:null==te?void 0:te.also_bought_products}),seoData:(0,v.m)({data:ti}),touchPoints:to?null==to?void 0:null===(D=to.map)||void 0===D?void 0:D.call(to,function(t){var e,i,n,o,r;return i=(e=t||{}).touch_point_id,n=e.link,o=e.desktop,r=e.mobile,{touchPointBannerId:e.id,touchPointId:i,touchPointLink:n,touchPointImageDesktop:(0,d.W)({data:o}),touchPointImageMobile:(0,d.W)({data:r})}}):null,shippingFeePromotion:(0,w.L)({data:ta}),pdpPromotionBanner:{productPromotion:{background:null==tn?void 0:null===(C=tn.product_promotion)||void 0===C?void 0:C.background,url:null==tn?void 0:null===(B=tn.product_promotion)||void 0===B?void 0:B.url,aspectRation:null==tn?void 0:null===(I=tn.product_promotion)||void 0===I?void 0:I.aspect_ratio},dkjetPromotion:{bannerUrl:null==tn?void 0:null===(z=tn.dkjet_promotion)||void 0===z?void 0:z.url,bannerDesktop:null==tn?void 0:null===(N=tn.dkjet_promotion)||void 0===N?void 0:N.desktop_banner,bannerMobile:null==tn?void 0:null===(j=tn.dkjet_promotion)||void 0===j?void 0:j.mobile_banner}}});return tz.bigDataTrackerData=tr,tz}},91390:function(t,e,i){"use strict";i.d(e,{j:function(){return s}});var n=i(70865),o=i(96670),r=i(60036),a=i(73587),u=i(82382),l=i(64248);function s(t){var e,i,s=t.prefix,d=t.data,c=d||{},p=c.description,v=c.properties,m=c.rating,g=c.registration_date,f=c.stars,_=c.products,h=c.statistics,y=c.logo,S=m||{},w=S.commitment,b=S.no_return,k=S.on_time_shipping,R=S.total_count,A=S.total_rate,x=S.neutral,P=S.dissatisfied,q=S.satisfied,T=S.totally_dissatisfied,D=S.totally_satisfied,C=h||{},B=C.cancellation,I=C.return,z=C.ship_on_time;return(0,l.Y)((0,o.Z)((0,n.Z)({},(0,u.N)({data:d})),{sellerDescription:p,sellerPropertiesIsNew:null==v?void 0:v.is_new,sellerPropertiesOfficialBrands:null===(e=Object.values((null==v?void 0:v.official_brands)||{}))||void 0===e?void 0:null===(i=e.map)||void 0===i?void 0:i.call(e,function(t){return(0,r.Q)({data:t})}),sellerRatingCommitment:w,sellerRatingNoReturn:b,sellerRatingOnTimeShipping:k,sellerRatingTotalCount:R,sellerRatingTotalRate:A,sellerRatingTotallySatisfiedRatingRate:(null==D?void 0:D.rate)||0,sellerRatingSatisfiedRatingRate:(null==q?void 0:q.rate)||0,sellerRatingNeutralRatingRate:(null==x?void 0:x.rate)||0,sellerRatingDissatisfiedRatingRate:(null==P?void 0:P.rate)||0,sellerRatingTotallyDissatisfiedRatingRate:(null==T?void 0:T.rate)||0,sellerRegistrationDate:g,sellerStars:f,sellerProducts:null==_?void 0:_.map(function(t){return(0,a.r)({data:t})}),sellerStatisticsCancellation:B||w,sellerStatisticsReturn:I||b,sellerStatisticsShipOnTime:z||k,sellerLogo:y}),{prefix:s})}},29954:function(t,e,i){"use strict";i.d(e,{p:function(){return o}});var n=i(79968);function o(t){var e=t.data||{},i=e.name,o=e.url;return{tagName:i,tagUrl:(0,n.f)({data:o})||""}}},45507:function(t,e,i){"use strict";i.d(e,{v:function(){return r}});var n=i(95976),o=i(73587);function r(t){var e=t.data||{},i=e.id,r=e.text,a=e.answer_count,u=e.sender,l=e.created_at,s=e.answers,d=e.status,c=e.product;return{questionId:i,questionText:r,questionAnswerCount:a,questionSender:u,questionCreatedAt:l,questionStatus:d,questionProduct:(0,o.r)({data:c}),questionAnswers:null==s?void 0:s.map(function(t){var e,i,o,r,a,u,l,s,d,c,p,v,m,g;return o=(i=t||{}).id,r=i.has_qa_badge,a=i.text,u=i.reactions,l=i.created_at,s=i.sender,d=i.type,c=i.user_reaction,p=i.files,m=(v=u||{}).likes,g=v.dislikes,{questionAnswerId:o,questionAnswerHasQABadge:!!r,questionAnswerText:a,questionAnswerReactions:{likes:(e=u||{}).likes,dislikes:e.dislikes},questionAnswerCreatedAt:l,questionAnswerSender:s,questionAnswerType:d,questionAnswerUserReaction:c,questionAnswerMedias:(void 0===p?[]:p).map(function(t){return(0,n.w)({data:t})}),questionAnswerReactionsLikes:m,questionAnswerReactionsDisLikes:g}})}}},35825:function(t,e,i){"use strict";i.d(e,{v:function(){return o}});var n=i(73587);function o(t){var e=t.data||{},i=e.title,o=e.products;return{recommendationTitle:i,recommendationProducts:(null==o?void 0:o.map(function(t){return(0,n.r)({data:t})}))||[]}}},99239:function(t,e,i){"use strict";i.d(e,{V:function(){return r}});var n=i(27529),o=i(58449);function r(t){if(!(0,o.k)(t))return(0,n.H)("".concat(t).replace("dkp-",""))}},50633:function(){}}]);