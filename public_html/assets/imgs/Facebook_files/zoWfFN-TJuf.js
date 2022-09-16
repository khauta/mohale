if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("VideoBlurBackgroundContainer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoBlurBackgroundContainer_video",selections:[{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometBlurryImagePreview.react",["getComputedStyle","mergeRefs","react","useCometAriaID","useCometUniqueID","useLayoutEffect_SAFE_FOR_SSR","useSetAttributeRef"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useRef,k=b.useState;function a(a){var b=a.alt,d=a.blur,e=a.height,f=a.previewData,g=a.width,l=babelHelpers.objectWithoutPropertiesLoose(a,["alt","blur","height","previewData","width"]);a=(a=a.style)!=null?a:{};var m=a.height,n=a.width;d=(a=d)!=null?a:1.2;a=c("useCometUniqueID")();var o=c("useSetAttributeRef")("id",a),p="url(#"+a+")",q=c("useSetAttributeRef")("filter",p),r=c("useCometAriaID")("aria-labelledby"),s=r[0],t=s[0];s=s[1];r=r[1];var u=r[0],v=r[1],w=j(null);r=i(function(){return b!=null?c("mergeRefs")(v,w):w},[b,v,w]);var x=k(e!==void 0||m!==void 0||g!==void 0||n!==void 0),y=x[0],z=x[1];c("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=w.current;if(!(a instanceof SVGSVGElement))return;if(e!==void 0||m!==void 0||g!==void 0||n!==void 0){z(!0);return}var b=a.style.display,d=c("getComputedStyle")(a);a.style.display="none";z(d!=null&&(d.height!==f.height+"px"||d.width!==f.width+"px"));a.style.display=b},[e,f.height,f.width,m,n,g]);return h.jsxs("svg",babelHelpers["extends"]({},l,b!=null?u:null,{height:(x=e)!=null?x:y?void 0:f.height,preserveAspectRatio:"none",ref:r,role:"img",viewBox:"0 0 "+f.width+" "+f.height,width:(l=g)!=null?l:y?void 0:f.width,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[b!=null&&h.jsx("title",babelHelpers["extends"]({},t,{ref:s,children:b})),h.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",id:a,ref:o,suppressHydrationWarning:!0,children:[h.jsx("feGaussianBlur",{edgeMode:"duplicate",stdDeviation:d}),h.jsx("feComponentTransfer",{children:h.jsx("feFuncA",{tableValues:"1 1",type:"discrete"})})]}),h.jsx("image",{filter:p,height:f.height,ref:q,suppressHydrationWarning:!0,width:f.width,x:"0",xlinkHref:f.dataURI,y:"0"})]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useThrottledComet",["CometThrottle","react","useLayoutEffect_SAFE_FOR_SSR","useStable"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(a,b){b===void 0&&(b=100);var d=i(a);c("useLayoutEffect_SAFE_FOR_SSR")(function(){d.current=a},[a]);var e=c("useStable")(function(){return c("CometThrottle")(function(){var a=arguments;return d.current==null?void 0:d.current.apply(d,a)},b)});h(function(){return function(){e.cancel()}},[]);return e}g["default"]=a}),98);
__d("StoriesCreateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=!1;c=a.createContext(b);g["default"]=c}),98);
__d("StoriesCreateConstants",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a={DEFAULT:{BODY:h._("__JHASH__2dP-S2NXGWo__JHASH__"),CANCEL:h._("__JHASH__iNbID4Of76-__JHASH__"),CONFIRM:h._("__JHASH__2bGTq0Hn_zL__JHASH__"),TITLE:h._("__JHASH__fy6v2Hc0_3x__JHASH__")}};b={SELECTION_TILE_HEIGHT:330,SELECTION_TILE_WIDTH:220,SPACE_BETWEEN_SELECTOR:20};c={FOOTER_HEIGHT:52,HEADER_HEIGHT:16};d={COMET_PUSH_VIEW_HEIGHT:28,CONTAINER_HORIZONTAL_PADDING:24*2,CONTAINER_MAX_WIDTH:940,CONTAINER_VERTICAL_PADDING:32*2,CONTENT_HEADER_HEIGHT:36,CONTENT_HORIZONTAL_PADDING:16*2,CONTENT_VERTICAL_PADDING:16*2,MAX_OVERLAY_WIDTH:472.5,SIDE_PANE_WIDTH:360};e=h._("__JHASH__b-5wJWOv0zU__JHASH__");f={FOOTER_HEIGHT:12,HEADER_HEIGHT:12};h={EDITING:"editing",NONE:"none"};var i={EMOJI:"emoji",LOCATION:"location",POLL:"poll",TAG:"tag"},j={EDITING:"editing",NONE:"none"},k={HORIZONTAL:"horizontal",NONE:"none"},l=26,m=3,n=4,o={FOOTER_HEIGHT:92},p=Object.freeze({BLACK:"rgb(0, 0, 0)",BLUE:"rgb(41, 134, 174)",BROWN:"rgb(112, 41, 41)",CORAL:"rgb(247, 114, 74)",CYAN:"rgb(94, 213, 255)",GOLD:"rgb(241, 196, 58)",GRAY:"rgb(142, 147, 156)",GREEN:"rgb(136, 191, 75)",LIGHT_BLUE:"rgb(202, 237, 248)",LIGHT_GRAY:"rgb(206, 208, 212)",LIGHT_PURPLE:"rgb(220, 211, 239)",MAGENTA:"rgb(251, 62, 160)",MINT:"rgb(185, 252, 203)",NAVY:"rgb(43, 69, 124)",ORANGE:"rgb(244, 146, 58)",PINK:"rgb(249, 203, 209)",PURPLE:"rgb(148, 31, 177)",RED:"rgb(248, 61, 61)",VIOLET:"rgb(88, 59, 154)",WHITE:"rgb(255, 255, 255)",YELLOW:"rgb(248, 226, 76)"}),q={x:.5,y:.5};g.LEAVE_TEXT=a;g.NULL_STATE_DIMENSIONS=b;g.PHOTO_PREVIEW_DIMENSIONS=c;g.PREVIEW_DIMENSIONS=d;g.SATP_PLACEHOLDER=e;g.SATP_PREVIEW_DIMENSIONS=f;g.STICKER_EDITING_MODE=h;g.STICKER_TYPE=i;g.TEXT_OVERLAY_MODE=j;g.OVERLAY_ALIGNMENT_TYPE=k;g.VIDEO_MAX_DURATION=l;g.VIDEO_MIN_DURATION=m;g.VIDEO_MIN_DURATION_FOR_TRIM=n;g.VIDEO_PREVIEW_DIMENSIONS=o;g.COLOR_NAME_TO_RGB=p;g.ORIGIN=q}),98);
__d("StoriesUniqueID",[],(function(a,b,c,d,e,f){"use strict";var g="js_",h=36,i=0;function a(){return g+(i++).toString(h)}f["default"]=a}),66);
__d("getPreviewDataFromImagePreviewPayload",["FBLogger","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h="data:image/jpeg;base64,",i=160,j=162,k=42;function l(a,b){b===void 0&&(b=0);a=atob(a);if(a.length<=3)throw c("unrecoverableViolation")("The preview payload was "+a.length+" byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.","comet_infra");var d=new Uint8Array(a.length+b);for(var e=0;e<a.length;e++)d[b+e]=a.charCodeAt(e);return d}var m;function n(){m==null&&(m=l("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA=="));return m}function a(a){var b=n();try{a=l(a,b.length-3);var d=a[b.length-1],e=a[b.length-3],f=a[b.length-2];if(d>k)throw c("unrecoverableViolation")("Tried to decode a payload whose height was "+d+". The maximum "+("is "+k+"."),"comet_infra");if(f>k)throw c("unrecoverableViolation")("Tried to decode a payload whose width was "+f+". The maximum "+("is "+k+"."),"comet_infra");a.set(b,0);a[i]=d;a[j]=f;b=btoa(String.fromCharCode.apply(null,a));return{dataURI:""+h+b,height:d,width:f,version:e}}catch(b){a=c("FBLogger")("images_infra");b instanceof Error&&a.catching(b);a.warn("Failed to decode a preview image payload. Falling back with a blank image.");return null}}g["default"]=a}),98);
__d("VideoBlurBackgroundContainer.react",["CometBlurryImagePreview.react","CometImage.react","CometRelay","VideoBlurBackgroundContainer_video.graphql","getPreviewDataFromImagePreviewPayload","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={blurryImage:{filter:"fdtxe45q",transform:"rmqzuqhm"},image:{bottom:"z6erz7xo",boxSizing:"bdao358l",end:"on4d8346",height:"pytsy3co",opacity:"gve6y6jg",position:"s8sjc6am",start:"myo4itp8",top:"ekq1a7f9",width:"mfclru0v",zIndex:"g4tp4svg"},lightBackgroundInLightMode:{backgroundColor:"oab4agdp"},root:{backgroundColor:"sfdena2r",height:"pytsy3co",overflowX:"lq84ybu9",overflowY:"hf30pyar",position:"om3e55n1",width:"mfclru0v"}};function a(a,e){var f,g=a.children,k=a.lightBackgroundInLightMode,l=a.video;a=a.xstyle;l=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoBlurBackgroundContainer_video.graphql"),l);f=(f=l.preferred_thumbnail)==null?void 0:f.image_preview_payload;var m;if(f!=null){f=c("getPreviewDataFromImagePreviewPayload")(f);f!=null&&(m=i.jsx(c("CometBlurryImagePreview.react"),{className:c("stylex")(j.image),previewData:f}))}f=(f=l.preferred_thumbnail)==null?void 0:(l=f.image)==null?void 0:l.uri;m==null&&f!=null&&(m=i.jsx(c("CometImage.react"),{src:f,xstyle:[j.blurryImage,j.image]}));return i.jsxs("div",{className:c("stylex")(j.root,a,k===!0&&j.lightBackgroundInLightMode),ref:e,children:[m,g]})}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("useThrottledImpl",["cr:1708227"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1708227")}),98);
__d("useThrottled",["useThrottledImpl"],(function(a,b,c,d,e,f,g){"use strict";f.exports=c("useThrottledImpl")}),34);
__d("ProfileCometFeaturedHighlightsEditCollectionDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4889373341182259"}),null);