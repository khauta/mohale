if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometSinglePageChannelTabRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5709794462404204"}),null);
__d("CometSinglePageChannelTabRootQuery$Parameters",["CometSinglePageChannelTabRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSinglePageChannelTabRootQuery_facebookRelayOperation"),metadata:{},name:"CometSinglePageChannelTabRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometTahoeRootQuery$Parameters",["CometTahoeRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometTahoeRootQuery_facebookRelayOperation"),metadata:{},name:"CometTahoeRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeNewPermalinkHeroUnitQuery$Parameters",["CometVideoHomeNewPermalinkHeroUnitQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeNewPermalinkHeroUnitQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeNewPermalinkHeroUnitQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomePlaylistRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4684786958290242",metadata:{},name:"CometVideoHomePlaylistRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeRHCRootQuery$Parameters",["CometVideoHomeRHCRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeRHCRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeRHCRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageChannelTabRoot.entrypoint",["CometSinglePageChannelTabRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometSinglePageRoute.entrypoint")(c("JSResourceForInteraction")("CometSinglePageChannelTabRoot.react").__setRef("CometSinglePageChannelTabRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{queries:{singlePageChannelTabRootQueryReference:{parameters:b("CometSinglePageChannelTabRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometSinglePageChannelTabRoot",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:72,feedLocation:"PAGE_TIMELINE",fetchSeriesFromMemcache:!1,focusCommentID:null,pageID:a,scale:d("WebPixelRatio").get()*4,showReactions:!0,useDefaultActor:!1}}}}});g["default"]=a}),98);
__d("validateChainingCaller",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("validateChannelEntryPoint",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("CometTahoeRoot.entrypoint",["CometTahoeRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","validateChainingCaller","validateChannelEntryPoint"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams.story_token,e=a.passthroughProps,f=(e==null?void 0:e.playerOrigin)!=null?String(e==null?void 0:e.playerOrigin):void 0,g=(e==null?void 0:e.playerSuborigin)!=null?String(e==null?void 0:e.playerSuborigin):void 0,h=(e==null?void 0:e.channelID)!=null?String(e==null?void 0:e.channelID):null,i=c("validateChainingCaller")(e==null?void 0:e.caller),j=c("validateChannelEntryPoint")(e==null?void 0:e.channelEntryPoint),k=null;(e==null?void 0:e.searchKeyword)!=null&&(k=JSON.stringify({searchKeyword:e==null?void 0:e.searchKeyword}));var l=(e==null?void 0:e.chainingCursor)!=null?String(e==null?void 0:e.chainingCursor):null;e=(e==null?void 0:e.chainingSeedVideoId)!=null?String(e==null?void 0:e.chainingSeedVideoId):null;e={UFI2CommentsProvider_commentsKey:"CometTahoeSidePaneQuery",caller:(i=i)!=null?i:"TAHOE",chainingCursor:l,chainingSeedVideoId:e,channelEntryPoint:(i=j)!=null?i:"TAHOE",channelID:(l=h)!=null?l:"",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:41,feedLocation:"TAHOE",focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_channel",scale:d("WebPixelRatio").get(),streamChainingSection:!1,useDefaultActor:!1,videoChainingContext:k};j=babelHelpers["extends"]({},e,{playerOrigin:f,playerSuborigin:g});i={tahoeRootQueryReference:{parameters:c("CometTahoeRootQuery$Parameters"),variables:babelHelpers["extends"]({},j,{videoID:b})}};return{extraProps:{t:a.routeProps.t},queries:i}},root:c("JSResourceForInteraction")("CometTahoeRoot.react").__setRef("CometTahoeRoot.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeFeedRootEntrypoint.entrypoint",["CometVideoHomeFeedEntryPointVariables","CometVideoHomeFeedRootQuery$Parameters","CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var d,e=a.caller==="WWW_PERMALINK";return{queries:{feedRootQueryReference:{options:{fetchPolicy:"network-only"},parameters:b("CometVideoHomeFeedRootQuery$Parameters"),variables:babelHelpers["extends"]({},c("CometVideoHomeFeedEntryPointVariables"),{aggregatedVIDs:(d=a.aggregatedVIDs)!=null?d:[],caller:a.caller,isRelatedVideosQueryDeferred:e,triggerData:{injected_video_id:a.injectedVideoID}})},surfaceHighlightsQueryReference:{parameters:b("CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRootEntrypoint.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeNewPermalinkHeroUnit.entrypoint",["CometVideoHomeNewPermalinkHeroUnitQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx","validateChainingCaller"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e,f=a.passthroughProps;f=c("validateChainingCaller")(f==null?void 0:f.caller);a={displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,entityNumber:5,focusCommentID:a.routeProps.focuscommentid,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_home",scale:d("WebPixelRatio").get(),useDefaultActor:!1,videoID:(e=a.routeProps.v)!=null?e:"",videoIDStr:String((e=a.routeProps.v)!=null?e:"")};a=babelHelpers["extends"]({},a,{UFI2CommentsProvider_commentsKey:"CometVideoHomeNewPermalinkHeroUnitQuery",caller:(e=f)!=null?e:"TAHOE",feedbackSource:41,feedLocation:"TAHOE",isLoggedOut:c("gkx")("976093")});return{queries:{injectedFeedUnitQueryReference:{parameters:b("CometVideoHomeNewPermalinkHeroUnitQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometVideoHomeNewPermalinkHeroUnit.react").__setRef("CometVideoHomeNewPermalinkHeroUnit.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeRHCRoot.entrypoint",["CometVideoHomeRHCRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e;return{queries:{rhcRootQueryReference:{parameters:b("CometVideoHomeRHCRootQuery$Parameters"),variables:{isInNPC:(e=a.isInNPC)!=null?e:!1,openInPageLiveTab:!!c("qex")._("1685"),scale:d("WebPixelRatio").get(),videoId:(e=a.videoId)!=null?e:""}}}}},root:c("JSResourceForInteraction")("CometVideoHomeRHCRoot.react").__setRef("CometVideoHomeRHCRoot.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeNewPermalinkRoot.entrypoint",["CometVideoHomeFeedRootEntrypoint.entrypoint","CometVideoHomeNewPermalinkHeroUnit.entrypoint","CometVideoHomeRHCRoot.entrypoint","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c,d=a.routeProps.injectionChainingVariables==null?2:0;return{entryPoints:{feedRootNestedEntryPoint:{entryPoint:b("CometVideoHomeFeedRootEntrypoint.entrypoint"),entryPointParams:{aggregatedVIDs:(c=a.routeProps.aggregatedVIDs)!=null?c:[],caller:"WWW_PERMALINK",injectedVideoID:a.routeProps.v}},injectedFeedUnitNestedEntryPoint:a.routeProps.v!=null?{entryPoint:b("CometVideoHomeNewPermalinkHeroUnit.entrypoint"),entryPointParams:a}:null,rhcNestedEntryPoint:{entryPoint:b("CometVideoHomeRHCRoot.entrypoint"),entryPointParams:{isInNPC:!0,videoId:String(a.routeProps.v)}}},extraProps:{externalLogID:a.routeProps.externalLogID,ft:a.routeProps.ft,hideNpcOverviewComments:a.routeProps.hideNpcOverviewComments,injectedVideoID:a.routeProps.v,isFacebookReferrer:a.routeProps.isFacebookReferrer,isFullPageLoad:a.routeProps.isFullPageLoad,nuxedPageID:a.routeProps.nuxedPageID,nuxedPageName:a.routeProps.nuxedPageName,offsetPosition:d,showHashtagPillsSidePane:a.routeProps.showHashtagPillsSidePane,showHashtagVideosRHCSection:a.routeProps.showHashtagVideosRHCSection,showMovieTrailersRHCSection:a.routeProps.showMovieTrailersRHCSection,showNpcLongerPreview:a.routeProps.showNpcLongerPreview,showNpcPlayerPills:a.routeProps.showNpcPlayerPills,showTVMoviesRHCSection:a.routeProps.showTVMoviesRHCSection,t:a.routeProps.t,upstreamPlayerSource:a.routeProps.upstreamPlayerSource,useCommentsAsDefaultPill:a.routeProps.useCommentsAsDefaultPill,viewportTrackingConfig:a.routeProps.viewportTrackingConfig}}},root:c("JSResourceForInteraction")("CometVideoHomeNewPermalinkRoot.react").__setRef("CometVideoHomeNewPermalinkRoot.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomePlaylistRoot.entrypoint",["CometVideoHomePlaylistRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomePlaylistRoot.react").__setRef("CometVideoHomePlaylistRoot.entrypoint"),function(a){a={id:a.routeProps.id};return{queries:{playlistRootQueryReference:{parameters:b("CometVideoHomePlaylistRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),trigger_data:a}}}}});g["default"]=a}),98);
__d("CometVideoHomeLanceletRoot.entrypoint",["CometSinglePageChannelTabRoot.entrypoint","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeLanceletRoot.react").__setRef("CometVideoHomeLanceletRoot.entrypoint"),function(a){return{entryPoints:{pageEntryPoint:{entryPoint:b("CometSinglePageChannelTabRoot.entrypoint"),entryPointParams:a}},extraProps:a}});g["default"]=a}),98);