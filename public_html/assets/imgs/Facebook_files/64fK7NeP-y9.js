if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometFocusGroupFirstLetterNavigation",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");var h=a.useEffect,i=a.useState,j=function(a){return a.slice(0,1).toLowerCase()};b=function(a){var b=i(void 0),c=b[0],d=b[1];h(function(){var b;b=a==null?void 0:(b=a.current)==null?void 0:b.innerText;b!=null&&b!==""&&d(j(b))},[a]);return c};c=function(a){if(a.type==="PRINT_CHAR"){a.event.stopPropagation();var b=a.event.key.toLowerCase();b=a.getItemByTag(b);b!=null&&a.focusItem(b)}};g.getFirstLetterNavigationTag=j;g.useFirstLetterNavigationTag=b;g.handleFirstLetterNavigation=c}),98);
__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);var j=b[0];e=b[1];function a(a){var b=[{command:{key:c("CometKeys").UP},description:h._("__JHASH__1VqMgLPpraa__JHASH__"),handler:function(){}},{command:{key:c("CometKeys").DOWN},description:h._("__JHASH__7zajSsSIBFZ__JHASH__"),handler:function(){}}];return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:b,children:i.jsx(j,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";d={FocusGroup:a,FocusItem:e};g["default"]=d}),98);
__d("CometMenuItemBaseRoleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometSeparatorMenuItem.react",["CometMenuItemBaseRoleContext","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={separator:{borderTop:"aiyajaxl",marginTop:"i0rxk2l3",marginEnd:"rj0o91l8",marginBottom:"laatuukc",marginStart:"p9ctufpz"}};function a(a,b){a=a.xstyle;var d=i(c("CometMenuItemBaseRoleContext"));return h.jsx("div",{className:c("stylex")([j.separator,a]),ref:b,role:d==="menuitem"?"separator":"presentation"})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometMenuBase.react",["fbt","ix","BaseScrollableArea.react","CometErrorBoundary.react","CometFocusGroupFirstLetterNavigation","CometListCellStrict.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometSeparatorMenuItem.react","FocusRegion.react","TetraTextPairing.react","fbicon","focusScopeQueries","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=145,l={listItem:{borderTopStartRadius:"dl2p71xr",borderTopEndRadius:"h0c7ht3v",borderBottomEndRadius:"j8nb7h05",borderBottomStartRadius:"gffp4m6x",display:"alzwoclg",flexDirection:"jl2a5g8c",marginTop:"m8h3af8h",marginEnd:"h07fizzr",marginBottom:"kjdc1dyq",marginStart:"jbg88c62",paddingTop:"s1m0hq7j",paddingEnd:"b0eko5f3",paddingBottom:"rj2hsocd",paddingStart:"fwlpnqze"},root:{alignItems:"o9w3sbdw",boxSizing:"bdao358l",display:"alzwoclg",flexDirection:"cqf1kptm",paddingEnd:"oxkhqvkx",paddingStart:"nch0832m",paddingTop:"pkvztr2i",paddingBottom:"nksnnlf1"},sizeFull:{marginEnd:"p3vumtvy",width:"mfclru0v"},sizeNormal:{width:"d0exdbj5"},sizeSmall:{width:"h74fxh6b"}},m="menu",n={listbox:"option",menu:"menuitem"};function a(a){var b=a.children,e=a.footer,f=a.header,g=a.maxHeight,o=a.role;o=o===void 0?m:o;a=a.size;a=a===void 0?"normal":a;var p=0,q=j.Children.toArray(b).map(function(a){if(a==null)return null;var b=p++;return a.type===c("CometSeparatorMenuItem.react")?a:j.jsx(c("CometErrorBoundary.react"),{children:a},b)});o=n[o];return j.Children.count(b)>0?j.jsx(c("BaseScrollableArea.react"),{horizontal:!1,style:g!=null?{maxHeight:Math.max(g,k)}:void 0,vertical:!0,xstyle:[l.root,a==="full"&&l.sizeFull,a==="normal"&&l.sizeNormal,a==="small"&&l.sizeSmall],children:j.jsxs(c("CometMenuItemBaseRoleContext").Provider,{value:o,children:[f!=null?j.jsxs(j.Fragment,{children:[f.onPressBack!=null?j.jsx(c("CometListCellStrict.react"),{addOnStart:{"aria-label":h._("__JHASH__v6nfNn2Wv-y__JHASH__"),icon:d("fbicon")._(i("512665"),24),onPress:f.onPressBack,type:"icon"},addOnStartVerticalAlign:"center",emphasized:!1,headline:f.title,level:3,meta:f.meta,paddingHorizontal:8}):j.jsx("div",{className:c("stylex")([l.listItem]),children:j.jsx(c("TetraTextPairing.react"),{body:f.body,headline:f.title,level:3,meta:f.meta,reduceEmphasis:!0})}),j.jsx(c("CometSeparatorMenuItem.react"),{})]}):null,j.jsx(d("FocusRegion.react").FocusRegion,{autoFocusQuery:(f==null?void 0:f.onPressBack)?d("focusScopeQueries").tabbableScopeQuery:null,children:j.jsx(c("CometMenuFocusGroup").FocusGroup,{onNavigate:d("CometFocusGroupFirstLetterNavigation").handleFirstLetterNavigation,orientation:"vertical",preventScrollOnFocus:!1,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:q})}),e!=null?j.jsxs(j.Fragment,{children:[j.jsx(c("CometSeparatorMenuItem.react"),{}),j.jsx("div",{className:c("stylex")(l.listItem),children:j.jsx(c("TetraTextPairing.react"),{level:3,meta:e.text})})]}):null]})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMenuBaseWithPopover.react",["BaseContextualLayerAvailableHeightContext","BaseMultiPageView.react","CometMenuBase.react","CometPopover.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=15,k="menu";function a(a,b){var d=a.children,e=a.id,f=a.label,g=a.role;g=g===void 0?k:g;var l=a.arrowAlignment,m=a.withArrow;m=m===void 0?!1:m;var n=a.testid;n=n===void 0?"comet-menu":n;n=a.truncate;n=n===void 0?!1:n;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","id","label","role","arrowAlignment","withArrow","testid","truncate"]);var o=i(c("BaseContextualLayerAvailableHeightContext"));m&&o!=null&&(o-=j);return h.Children.count(d)>0?h.jsx(c("CometPopover.react"),{arrowAlignment:l,id:e,label:f,ref:b,role:g,testid:void 0,withArrow:m,children:h.jsx(c("BaseMultiPageView.react"),{disableAutoFocus:!0,disableFocusContainment:!0,children:h.jsx(c("CometMenuBase.react"),babelHelpers["extends"]({},a,{children:d,maxHeight:n?(l=o)!=null?l:0:void 0,role:g}))})}):null}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(h.forwardRef(a));g["default"]=b}),98);
__d("CometMenu.react",["CometMenuBaseWithPopover.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){return h.jsx(c("CometMenuBaseWithPopover.react"),babelHelpers["extends"]({},a,{ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometMenuItemHighlightContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("CometMenuItemBase.react",["BaseFocusRing.react","CometFocusGroupFirstLetterNavigation","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometMenuItemHighlightContext","CometNonBreakingSpace.react","CometPressable.react","CometPressableOverlay.react","CometTextWithIcon.react","TetraText.react","TetraTextPairing.react","gkx","mergeRefs","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useEffect,l=b.useMemo,m=b.useRef,n={aux:{marginStart:"j0k7ypqs"},content:{alignItems:"i85zmo3j",display:"alzwoclg",flexDirection:"jl2a5g8c",flexGrow:"cgu29s5g",justifyContent:"sl27f92c",minWidth:"aeinzg81"},disabled:{cursor:"t45fpzwc"},extraHorizontalPadding:{paddingEnd:"b0eko5f3",paddingStart:"fwlpnqze"},listItem:{alignItems:"i85zmo3j",appearance:"qgrdou9d",boxSizing:"bdao358l",cursor:"fsf7x5fv",display:"alzwoclg",flexDirection:"jl2a5g8c",flexShrink:"jez8cy9q",marginEnd:"sb3qexpo",marginStart:"l7miuv0d",marginTop:"m8h3af8h",marginBottom:"kjdc1dyq",paddingTop:"s1m0hq7j",paddingEnd:"b0eko5f3",paddingBottom:"rj2hsocd",paddingStart:"fwlpnqze",position:"om3e55n1",textAlign:"cr00lzj9",zIndex:"g4tp4svg"},listItemAlignedCenter:{alignItems:"i85zmo3j"},listItemWithIcon:{paddingTop:"q46jt4gp",paddingEnd:"b0eko5f3",paddingBottom:"r5g9zsuq",paddingStart:"fwlpnqze"}},o=c("gkx")("1721477")||c("gkx")("1459");function a(a,b){var e=a.alignCenter;e=e===void 0?!1:e;var f=a.aux,g=a.badge,p=a.bodyColor,q=a.bodyText,r=a.disabled,s=r===void 0?!1:r;r=a.download;var t=a.href,u=a.iconNode,v=a.id,w=a.isIconAnImage,x=a.onClick,y=a.onFocusIn,z=a.onFocusOut,A=a.onHoverIn,B=a.onHoverOut,C=a.onPressIn,D=a.overlayRadius,E=D===void 0?4:D;D=a.passthroughProps;var F=a.prefetchQueriesOnHover,G=a.preventClosingMenuOnSelect;G=G===void 0?!1:G;var H=a.preventLocalNavigation,I=a.primaryColor,J=a.primaryText,K=a.role,L=a.routeTarget,M=a.secondaryColor,N=a.secondaryText,O=a.target,P=a.testid;P=a.traceParams;var Q=a.visuallyFocused,R=Q===void 0?!1:Q;Q=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","aux","badge","bodyColor","bodyText","disabled","download","href","iconNode","id","isIconAnImage","onClick","onFocusIn","onFocusOut","onHoverIn","onHoverOut","onPressIn","overlayRadius","passthroughProps","prefetchQueriesOnHover","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","traceParams","visuallyFocused"]);var S=m(null);a=j(c("CometMenuContext"));var T=G!==!0&&a?a.onClose:null;G=t!=null||L!=null||O!=null?{download:r,passthroughProps:D,prefetchQueriesOnHover:F,preventLocalNavigation:H,routeTarget:L,target:O,traceParams:P,url:t}:void 0;a=i(function(a){T!=null&&T(),x&&x(a)},[x,T]);r=j(c("CometMenuItemBaseRoleContext"));H=(F=(D=K)!=null?D:r)!=null?F:void 0;var U=m(R);k(function(){var a=S.current;!U.current&&R&&a!=null&&a.scrollIntoView({block:"nearest"})},[R]);var V=m(null);L=d("CometFocusGroupFirstLetterNavigation").useFirstLetterNavigationTag(V);O=l(function(){return c("mergeRefs")(b,S)},[b]);var W=g!=null?typeof g==="number"?h.jsxs(h.Fragment,{children:[J,h.jsx(c("CometNonBreakingSpace.react"),{size:.5}),h.jsx(c("TetraText.react"),{color:s?"disabled":I,type:"body4",children:g})]}):h.jsx(c("CometTextWithIcon.react"),{iconAfter:g,children:J}):J;return h.jsx(c("CometMenuFocusGroup").FocusItem,{disabled:s,tag:L,children:h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},Q,{disabled:s,display:"inline",id:v,linkProps:G,onFocusIn:y,onFocusOut:z,onHoverIn:A,onHoverOut:B,onPress:a,onPressIn:C,overlayDisabled:!0,ref:O,role:H,suppressFocusRing:!0,testid:void 0,xstyle:[n.listItem,e&&n.listItemAlignedCenter,u!=null&&n.listItemWithIcon,s&&n.disabled,!o&&R&&c("BaseFocusRing.react").focusRingXStyle],children:function(a){var b=a.focused,d=a.focusVisible,e=a.hovered;a=a.pressed;return h.jsxs(c("CometMenuItemHighlightContext").Provider,{value:b&&d||e,children:[u,h.jsxs("div",{className:c("stylex")(n.content,((b=w)!=null?b:!1)&&n.extraHorizontalPadding),children:[h.jsx(c("TetraTextPairing.react"),{body:q,bodyColor:s?"disabled":p,headline:W,headlineColor:s?"disabled":I,headlineRef:V,level:4,meta:N,metaColor:s?"disabled":M,reduceEmphasis:!0}),f!=null&&h.jsx("div",{className:c("stylex")(n.aux),children:f})]}),h.jsx(c("CometPressableOverlay.react"),{focusVisible:d||R,hovered:e,pressed:a,radius:E,showFocusRing:!0})]})}}))})}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometMenuItemIcon.react",["CometEmoji.react","CometIcon.react","CometImage.react","IconSource","ImageIconSource","SVGIcon","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo,j={circle:{borderTopStartRadius:"qmqpeqxj",borderTopEndRadius:"e7u6y3za",borderBottomEndRadius:"qwcclf47",borderBottomStartRadius:"nmlomj2f"},contained:{backgroundColor:"a5wdgl2o",borderTopStartRadius:"qmqpeqxj",borderTopEndRadius:"e7u6y3za",borderBottomEndRadius:"qwcclf47",borderBottomStartRadius:"nmlomj2f",height:"b4mgl9s0",minWidth:"b04vgfxt"},iconRelativeContainer:{position:"om3e55n1"},inset:{boxShadow:"bzl67j14",position:"s8sjc6am",start:"myo4itp8",top:"ekq1a7f9"},root:{alignItems:"i85zmo3j",alignSelf:"lpqsk9lh",display:"alzwoclg",justifyContent:"jcxyg2ei",marginEnd:"tpvapw4o"},roundedRect:{borderTopStartRadius:"h8391g91",borderTopEndRadius:"m0cukt09",borderBottomEndRadius:"kpwa50dg",borderBottomStartRadius:"ta68dy8c"}};function a(a){var b=a.disabled,e=a.emojiSize,f=e===void 0?20:e,g=a.icon,k=a.iconColor;e=a.iconCssSelectorId;a=a.use;var l=a===void 0?"normal":a;a=i(function(){if(g instanceof c("IconSource")){var a;return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"primary",disabled:b,icon:g})}if(g instanceof c("ImageIconSource"))return h.jsx(c("CometIcon.react"),{disabled:b,icon:g});if(g instanceof d("SVGIcon").SVGIcon){return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"primary",disabled:b,icon:g,size:20})}if(g instanceof d("SVGIcon").LegacySVGIcon){return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"primary",disabled:b,icon:g,size:20})}if(g instanceof d("SVGIcon").EmojiIcon)return h.jsx(c("CometEmoji.react"),{emoji:g.codepoints,size:f});if(typeof g==="object"&&typeof g!=="function"&&!g._isSVG&&g.src!==null){a=l==="contained"?36:20;return h.jsxs("div",{className:c("stylex")(j.iconRelativeContainer),children:[h.jsx(c("CometImage.react"),{height:a,src:g.src,width:a,xstyle:[g.style==="circle"&&j.circle,g.style==="roundedRect"&&j.circle]}),g.style!=="square"?h.jsx("div",{className:c("stylex")(g.style==="circle"&&j.circle,j.inset,g.style==="roundedRect"&&j.roundedRect),style:{height:a,width:a}}):null]})}return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"secondary",disabled:b,icon:g})},[b,f,g,k,l]);return h.jsx("div",{className:c("stylex")([j.root,(l==="contained"||l==="contained_small_icon")&&j.contained]),id:e,children:a})}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("CometMenuItem.react",["CometBadge.react","CometIcon.react","CometMenuItemBase.react","CometMenuItemIcon.react","CometProfilePhoto.react","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.auxItem,e=a.emojiSize,f=a.icon,g=a.iconColor,i=a.iconCssSelectorId,j=a.iconStyle;j=j===void 0?"normal":j;var k=a.image,l=a.overlayRadius;l=l===void 0?4:l;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","emojiSize","icon","iconColor","iconCssSelectorId","iconStyle","image","overlayRadius"]);var m=null;if(d!=null)switch(d.type){case"text":m=h.jsx(c("TetraTextPairing.react"),{level:3,meta:d.auxText});break;case"badge":m=h.jsx(c("CometBadge.react"),{color:d.color});break;case"icon":m=h.jsx(c("CometIcon.react"),{color:d.color,icon:d.icon});break}return h.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:m,iconNode:f!=null?h.jsx(c("CometMenuItemIcon.react"),{disabled:a.disabled,emojiSize:e,icon:f,iconColor:g,iconCssSelectorId:i,use:j}):k!=null?h.jsx(c("CometProfilePhoto.react"),{addOn:k.addOn,size:k.size,source:k.source}):null,isIconAnImage:f==null&&k!=null,overlayRadius:l,ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);