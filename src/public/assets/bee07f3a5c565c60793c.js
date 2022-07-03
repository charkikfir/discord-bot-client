"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[53145],{770549:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=s(n(636602)),a=s(n(594506)),u=s(n(563621)),l=n(771425),o=n(770348),i=n(840433);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,u=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){u.push(r.value);if(t&&u.length===t)break}}catch(e){o=!0;a=e}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e)
;if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c={open:function(e){r.default.dispatch({type:o.ActionTypes.NOTIFICATION_SETTINGS_MODAL_OPEN,guildId:e})},close:function(){r.default.dispatch({type:o.ActionTypes.NOTIFICATION_SETTINGS_MODAL_CLOSE})},updateGuildNotificationSettings:function(e,t,n){a.default.saveUserGuildSettings(e,t);r.default.dispatch({type:o.ActionTypes.USER_GUILD_SETTINGS_GUILD_UPDATE,guildId:e,settings:t});(0,l.trackGuildNotificationSettingsUpdate)(e,t,n)},updateGuildNotificationSettingsBulk:function(e,t){a.default.saveUserGuildSettingsBulk(e);Object.entries(e).forEach((function(e){var n=d(e,2),a=n[0],u=n[1];r.default.dispatch({
type:o.ActionTypes.USER_GUILD_SETTINGS_GUILD_UPDATE,guildId:a,settings:u});(0,l.trackGuildNotificationSettingsUpdate)(a,u,t)}))},updateChannelOverrideSettings:function(e,t,n,u){var i,s={channel_overrides:(i={},i[t]=n,i)};a.default.saveUserGuildSettings(e,s);r.default.dispatch({type:o.ActionTypes.USER_GUILD_SETTINGS_CHANNEL_UPDATE,guildId:e,channelId:t,settings:n});(0,l.trackChannelNotificationSettingsUpdate)(e,t,n,u)},setForumThreadsCreated:function(e,t){var n=t?i.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON:i.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,r=t?i.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF:i.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,a=u.default.getChannelFlags(e)&~r|n;this.updateChannelOverrideSettings(e.guild_id,e.id,{flags:a})}};t.default=c},441224:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.SearchBarIcon=t.RichTagTypes=void 0;var r,a=function(e,t){if(!t&&e&&e.__esModule)return e
;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}(n(667294)),u=y(n(294184)),l=y(n(213192)),o=y(n(314234)),i=y(n(151097)),s=y(n(16941)),d=y(n(259530)),f=y(n(348763)),c=y(n(628551)),p=y(n(582945)),h=n(518802),g=n(770348),v=y(n(247001)),m=y(n(544064));function y(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}function T(){T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return T.apply(this,arguments)}
function E(e,t){E=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return E(e,t)}function S(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var o=new Array(l),i=0;i<l;i++)o[i]=arguments[i+3];t.children=o}if(t&&u)for(var s in u)void 0===t[s]&&(t[s]=u[s]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var b=Object.freeze({SMALL:m.default.small,MEDIUM:m.default.medium,LARGE:m.default.large}),A=(0,l.default)({MEMBER:null,ROLE:null,CHANNEL:null});t.RichTagTypes=A;var C=function(e){var t,n,r,a=e.hasContent,l=e.onClear,o=e.className,i=e.themeOverride,c=e.size,p=void 0===c?b.SMALL:c;return S(s.default,{className:(0,u.default)(o,m.default.iconLayout,p,(0,h.getThemeClass)(i),(t={},t[m.default.clear]=a,t)),onClick:function(e){e.stopPropagation();null!=l&&l(e)},
onMouseDown:function(e){e.preventDefault();e.stopPropagation()},tabIndex:a?0:-1,"aria-hidden":!a,"aria-label":v.default.Messages.SEARCH_CLEAR,focusProps:{offset:4}},void 0,S("div",{className:m.default.iconContainer},void 0,S(f.default,{className:(0,u.default)((n={},n[m.default.icon]=!0,n[m.default.visible]=!a,n))}),S(d.default,{className:(0,u.default)((r={},r[m.default.icon]=!0,r[m.default.visible]=a,r))})))};t.SearchBarIcon=C;C.displayName="SearchBarIcon";var O=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;E(e,t)}(t,e);function t(){for(var t,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];(t=e.call.apply(e,[this].concat(r))||this).defaultInputProps={role:"combobox","aria-haspopup":"listbox","aria-autocomplete":"list"};t.ref=a.createRef();t.containerRef=a.createRef();t.handleKeyDown=function(e){var n=t.props,r=n.onActivate,a=n.onKeyDown,u=n.onQueryChange,l=n.useKeyboardNavigation;null!=a&&a(e);var o=t.ref.current
;if(null!=o&&null==r)if(e.keyCode===g.KeyboardKeys.ESCAPE&&null!=o.value&&""!==o.value&&o.value.length>0){o.value="";null!=u&&u("")}else l&&(t.props.gridResults?t.handleKeyDownGrid(e):t.handleKeyDownList(e));else e.keyCode!==g.KeyboardKeys.TAB&&null!=r&&r(e)};t.handleChange=function(e){var n=t.props.onQueryChange;null!=n&&n(e.currentTarget.value)};t.handleFocus=function(e){var n=t.props.onFocus;null!=n&&n(e)};t.handleClear=function(){var e=t.props.onClear,n=t.ref.current;null!=e&&e();null!=n&&n.focus()};t.handleRemoveTag=function(e){var n=t.props.onRemoveTag;null==n||n(e)};t.focus=function(){var e=t.ref.current;null!=e&&e.focus()};return t}var n=t.prototype;n.componentDidUpdate=function(e){var t=this.props,n=t.focusAfterReady,r=t.isReady;n&&!e.isReady&&r&&this.focus()};n.handleKeyDownGrid=function(e){var t=this.props,n=t.selectedRow,r=t.selectedColumn,a=t.sections,u=t.query,l=t.tags,o=t.onSelectionChange,i=t.onSelect,s=t.onRemoveTag,d=t.preventEscapePropagation;if(0!==a.length){
switch(e.keyCode){case g.KeyboardKeys.BACKSPACE:if((null==u||0===u.length)&&null!=l&&l.length>0){e.preventDefault();e.stopPropagation();null==s||s(l.length-1)}break;case g.KeyboardKeys.ARROW_DOWN:e.preventDefault();e.stopPropagation();if(-1===n){n=0;r=0}else{(n+=1)>=a.length&&(n=a.length-1);r>=a[n]&&(r=a[n]-1)}break;case g.KeyboardKeys.ARROW_UP:e.preventDefault();e.stopPropagation();if((n-=1)<0){n=0;r=0}else r>=a[n]&&(r=a[n]-1);break;case g.KeyboardKeys.ARROW_LEFT:e.preventDefault();e.stopPropagation();-1===n&&(n=0);if((r-=1)<0)if((n-=1)>=0)r=a[n]-1;else if(n<0){n=0;r=0}break;case g.KeyboardKeys.ARROW_RIGHT:e.preventDefault();e.stopPropagation();-1===n&&(n=0);if((r+=1)>=a[n]){r=0;(n+=1)>=a.length&&(r=a[n=a.length-1]-1)}break;case g.KeyboardKeys.ENTER:e.preventDefault();e.stopPropagation();-1===n&&(n=0);-1===r&&(r=0);if(n>=a.length||r>=a[n])return;null!=i&&i(n,r,e);return;case g.KeyboardKeys.ESCAPE:e.preventDefault();d&&e.stopPropagation();null!=i&&i(null,null,e);return;default:return}
null!=o&&o(n,r)}};n.handleKeyDownList=function(e){var t=this.props,n=t.sections,r=t.selectedSection,a=t.selectedRow,u=t.onSelect,l=t.onSelectionChange,o=t.query,i=t.tags,s=t.preventEscapePropagation,d=this.ref.current;if(null!=d)switch(e.keyCode){case g.KeyboardKeys.BACKSPACE:if((null==o||0===o.length)&&null!=i&&i.length>0){var f,c;e.preventDefault();e.stopPropagation();null===(f=(c=this.props).onRemoveTag)||void 0===f||f.call(c,i.length-1)}break;case g.KeyboardKeys.ARROW_DOWN:e.preventDefault();e.stopPropagation();if(n.length>r&&++a>=n[r]){++r>=n.length&&(r=0);a=0}null==l||l(r,a);break;case g.KeyboardKeys.ARROW_UP:e.preventDefault();e.stopPropagation();if(--a<0){--r<0&&(r=n.length-1);a=n[r]-1}null==l||l(r,a);break;case g.KeyboardKeys.ENTER:e.preventDefault();e.stopPropagation();n.length>r&&n[r]>a&&(null==u||u(r,a,e));break;case g.KeyboardKeys.ESCAPE:e.preventDefault();s&&e.stopPropagation();null==u||u(null,null,e);d.blur()}};n.render=function(){
var e,t,n=this,r=this.props,l=r.autoFocus,s=r.query,f=r.placeholder,g=void 0===f?v.default.Messages.DM_SEARCH_PLACEHOLDER:f,y=r.themeOverride,_=r.disabled,E=r.onClear,b=r.size,O=r.maxHeight,I=r.tags,M=r.onActivate,N=r.className,R=r.inputProps,P=r.focusAfterReady,w=null!=s&&s.length>0,U=!1,D=[];if(null!=I&&I.length>0)if("string"==typeof I[0]){I.forEach((function(e,t){return D.push(S(i.default,{focusProps:{offset:4},className:m.default.tag,onClick:n.handleRemoveTag.bind(n,t)},t,e,S(d.default,{className:m.default.close,"aria-label":v.default.Messages.REMOVE})))}))}else{U=!0;I.forEach((function(e,t){return D.push(S(i.default,{className:(0,u.default)(m.default.tag,m.default.richTag),onClick:n.handleRemoveTag.bind(n,t)},t,e.type===A.MEMBER&&e.avatar&&S(c.default,{src:e.avatar,"aria-hidden":!0,size:c.default.Sizes.SIZE_16}),e.type===A.ROLE&&e.color&&S("span",{className:m.default.tagRoleColor,style:{backgroundColor:e.color}}),S("span",{className:m.default.tagLabel
},void 0,e.label),S(d.default,{className:m.default.close,"aria-label":v.default.Messages.REMOVE})))}))}return S(o.default,{focusTarget:this.ref,ringTarget:this.containerRef},void 0,a.createElement("div",{ref:this.containerRef,className:(0,u.default)(N,m.default.container,b,(0,h.getThemeClass)(y),(e={},e[m.default.disabled]=_,e))},S(p.default,{className:m.default.inner,style:{maxHeight:O}},void 0,D,a.createElement("input",T({className:(0,u.default)(m.default.input,(t={},t[m.default.richTagInput]=U,t)),type:"text",ref:this.ref,spellCheck:"false",placeholder:g,value:s,onChange:this.handleChange,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,disabled:_,"aria-disabled":_,autoFocus:!P&&l,onMouseDown:M},this.defaultInputProps,R)),null!=E?S(C,{size:b,themeOverride:y,hasContent:w,onClear:this.handleClear}):null)))};return t}(a.Component);O.displayName="SearchBar";O.Sizes=b;O.defaultProps={size:b.SMALL,query:"",sections:[],selectedSection:0,selectedRow:-1,selectedColumn:-1,gridResults:!1,
disabled:!1,autoFocus:!1,preventEscapePropagation:!0,useKeyboardNavigation:!0};var I=O;t.default=I},973523:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.GuildForumExperiment=void 0;t.getEnableForumPermissions=function(e){return F.getCurrentConfig({guildId:e}).enabled};t.useAppliedTags=function(e){var t=j(e);return null==e||null==t?[]:e.appliedTags.map((function(e){return null==t?void 0:t[e]})).filter((function(e){return null!=e}))};t.useAvailableTags=j;t.useCanCreateForumChannel=function(e){return L(e)};t.useCanManageChannel=function(e){return(0,l.useStateFromStores)([T.default],(function(){return T.default.can(N.Permissions.MANAGE_CHANNELS,e)}))};t.useChannelTemplate=function(e){return r.useMemo((function(){return null==e||null==e.template?"":e.template.trim()}),[e])};t.useDefaultReactionEmoji=function(e){var t,n=null==e?void 0:e.defaultReactionEmoji,r=(0,l.useStateFromStores)([y.default],(function(){
return null!=(null==n?void 0:n.emojiId)?y.default.getUsableCustomEmojiById(n.emojiId):null}));if(null==n)return null;null!=n.emojiId&&null!=r?t={id:n.emojiId,name:r.name,animated:r.animated}:null!=n.emojiName&&(t={id:n.emojiId,name:n.emojiName,animated:!1});return t};t.useExistingPin=function(e){var t=(0,l.useStateFromStoresObject)([p.default],(function(){return p.default.getThreadsForParent(e.guild_id,e.parent_id)}),[e.guild_id]);return(0,a.default)(t).values().map((function(e){var t=e.id;return m.default.getChannel(t)})).filter(C.isNotNullish).find((function(e){return e.hasFlag(R.ChannelFlags.PINNED)}))};t.useFacepileUsers=function(e,t){var n=(0,l.useStateFromStoresArray)([A.default],(function(){return t.map((function(e){return A.default.getUser(e)}))}));r.useEffect((function(){t.filter((function(e,t){return null==n[t]})).forEach((function(t){_.default.requestMember(e.guild_id,t)}))}),[]);return n};t.useFirstAppliedTag=function(e){var t=j(e);return r.useMemo((function(){
var n=e.appliedTags.map((function(e){return null==t?void 0:t[e]})).filter(C.isNotNullish);return[n[0],n.length-1]}),[t,e.appliedTags])};t.useForumPostCreator=function(e){var t=(0,l.useStateFromStores)([A.default],(function(){return A.default.getUser(e.ownerId)})),n=(0,d.useNullableUserAuthor)(t,e);r.useEffect((function(){null!=e.ownerId&&_.default.requestMember(e.guild_id,e.ownerId)}),[e.guild_id,e.ownerId]);return{user:t,author:n}};t.useForumPostMarkup=function(e){var t=r.useMemo((function(){return null!=(null==e?void 0:e.content)&&""!==e.content?(0,s.default)(e,{formatInline:!0,noStyleAndInteraction:!0,allowHeading:!0,allowList:!0}):{hasSpoilerEmbeds:!1,content:null}}),[e]),n=t.hasSpoilerEmbeds,a=t.content,u=(0,I.useFindFirstMediaProperties)(e,n);return{hasSpoilerEmbeds:n,content:a,firstMedia:u}};t.useForumPostReadStates=function(e,t){return(0,l.useStateFromStoresObject)([E.default],(function(){return{isNew:!e.isArchivedThread()&&E.default.isNewForumThread(e.id,e.parent_id,t),
hasUnreads:!e.isArchivedThread()&&E.default.isForumPostUnread(e.id,t)}}))};t.useForumThreadsForChannelList=function(e){var t=(0,l.useStateFromStoresObject)([c.default],(function(){return{activeJoinedThreads:c.default.getActiveJoinedThreadsForGuild(e),activeUnjoinedThreads:c.default.getActiveUnjoinedThreadsForGuild(e),newThreadCounts:c.default.getNewThreadCountsForGuild(e)}})),n=t.activeJoinedThreads,r=t.activeUnjoinedThreads,a=t.newThreadCounts;return{activeJoinedThreads:n,activeUnjoinedThreads:r,newThreadCounts:a}};t.useIsForumExperimentEnabled=L;t.useLastActiveTimestamp=function(e,t){var n=u.default.extractTimestamp((0,l.useStateFromStores)([E.default],(function(){return E.default.lastMessageId(e.id)}))),r=u.default.extractTimestamp(e.id);return t===P.SortOrder.Creation?(0,v.getTimestampString)(r):(0,v.getTimestampString)(n)};t.useLoadForumUnreadCounts=function(e,t){var n=(0,l.useStateFromStores)([p.default],(function(){return p.default.hasLoaded(e.guild_id)}))
;r.useEffect((function(){if(n){var r=O.default.getThreadIds(e.id,t),a=M.default.getThreadIdsMissingCounts(e.guild_id,r.map((function(e){return e.channelId}))).filter((function(e){return null!=E.default.getTrackedAckMessageId(e)})).map((function(e){return{threadId:e,ackMessageId:E.default.getTrackedAckMessageId(e)}}));a.length>0&&o.default.dirtyDispatch({type:N.ActionTypes.REQUEST_FORUM_UNREADS,guildId:e.guild_id,channelId:e.id,threads:a})}}),[e.id,e.guild_id,n,t])};t.useMessageCount=function(e){var t=(0,l.useStateFromStores)([g.default],(function(){var t;return null!==(t=g.default.getCount(e.id))&&void 0!==t?t:0})),n=f.default.useExperiment({}).enabled,r=(0,h.renderMessageCount)(t,e.id,n),a=(0,l.useStateFromStores)([E.default],(function(){return E.default.hasTrackedUnread(e.id)})),u=(0,l.useStateFromStores)([E.default],(function(){return E.default.hasOpenedThread(e.id)})),o=(0,l.useStateFromStores)([M.default],(function(){if(!u||!a)return null;var t=M.default.getCount(e.id)
;return null!=t&&t>0?t>=P.MAX_THREAD_UNREAD_MESSAGE_COUNT?P.MAX_THREAD_UNREAD_MESSAGE_COUNT+"+":t:"1+"}));return{messageCount:r,unreadCount:o}};t.useMostUsedReaction=function(e){var t,n,r,u=a.default.sortBy(null!==(t=null==e?void 0:e.reactions)&&void 0!==t?t:[],"count").reverse()[0],l=null!==(n=null==u?void 0:u.emoji)&&void 0!==n?n:G,o=null!==(r=null==u?void 0:u.count)&&void 0!==r?r:0;return{emoji:l,count:o,reaction:u}};t.useTypingUserIds=function(e){return(0,l.useStateFromStoresArray)([b.default,A.default,S.default],(function(){var t=A.default.getCurrentUser();return(0,a.default)(b.default.getTypingUsers(e.id)).keys().filter((function(e){return e!==(null==t?void 0:t.id)})).reject(S.default.isBlocked).map((function(e){return A.default.getUser(e)})).filter(C.isNotNullish).map((function(e){return e.id})).value()}))};t.useVisibleForumTags=function(e){var t=(0,l.useStateFromStores)([T.default],(function(){return T.default.can(N.Permissions.MANAGE_THREADS,e)}));return r.useMemo((function(){
return t?e.availableTags:e.availableTags.filter((function(e){return!e.moderated}))}),[t,e.availableTags])};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=U(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}(n(667294)),a=w(n(496486)),u=w(n(795715)),l=n(536211),o=w(n(636602)),i=w(n(822350)),s=w(n(116518)),d=n(907932),f=w(n(862879)),c=w(n(19566)),p=w(n(782270)),h=n(93655),g=w(n(979674)),v=n(566142),m=w(n(644263)),y=w(n(433385)),_=w(n(737483)),T=w(n(689389)),E=w(n(191391)),S=w(n(290629)),b=w(n(946447)),A=w(n(728429)),C=n(71246),O=w(n(408643)),I=n(140092),M=w(n(962935)),N=n(770348),R=n(173652),P=n(64072);function w(e){return e&&e.__esModule?e:{
default:e}}function U(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(U=function(e){return e?n:t})(e)}function D(){D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return D.apply(this,arguments)}var F=(0,i.default)({id:"2021-07_threads_only_channel",label:"Threads only channel",kind:"guild",defaultConfig:{enabled:!1},treatments:[{id:1,label:"On",config:{enabled:!0}}]});t.GuildForumExperiment=F;function L(e){return F.useExperiment({guildId:e}).enabled}function j(e){var t=null==e?void 0:e.parent_id,n=(0,l.useStateFromStores)([m.default],(function(){return m.default.getChannel(t)}),[t]);return r.useMemo((function(){var e;return null==n||null===(e=n.availableTags)||void 0===e?void 0:e.reduce((function(e,t){var n;return D({},e,((n={})[t.id]=t,n))}),{})}),[null==n?void 0:n.availableTags])}var G={id:null,name:"👍"}},140092:(e,t,n)=>{
Object.defineProperty(t,"__esModule",{value:!0});t.isValidImageAttachment=f;t.isValidVideoAttachment=c;t.shouldShowAddMediaToOriginalPostModal=function(e,t){var n,a=u.default.getChannel(t);if(null==a)return!1;var i=l.default.getMessage(a.id,a.id);return null!=i&&(e.length>0&&null!=e.find((function(e){return e.isImage||e.isVideo}))&&a.isForumPost()&&a.ownerId===(null===(n=o.default.getCurrentUser())||void 0===n?void 0:n.id)&&0===r.default.getCount(a.id)&&(0===i.attachments.length||null==i.attachments.find((function(e){return f(e)||c(e)}))))};t.useFindFirstMediaProperties=function(e,t){var n,r=a.InlineAttachmentMedia.useSetting(),u=a.InlineEmbedMedia.useSetting(),l=a.RenderEmbeds.useSetting();if(null==e)return null;var o=r?null===(n=e.attachments)||void 0===n?void 0:n.find((function(e){return f(e)||c(e)})):null;if(null!=o){var s=o.proxy_url,p=o.url,h=o.description,g=o.spoiler,v=o.width,m=o.height,y=o.filename;return null==v||null==m?null:{
src:i.VIDEO_RE.test(y)?s+"?format=jpeg":null!=s?s:p,width:v,height:m,spoiler:null!=g&&g,alt:h}}if(!u||!l)return null;if(null==e.embeds)return null;for(var _,T=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e.embeds);!(_=T()).done;){var E,S=_.value,b=null!==(E=S.image)&&void 0!==E?E:S.thumbnail
;null==b&&null!=S.images&&(b=S.images[0]);if(null!=b&&null!=b.url){var A=b,C=A.height,O=A.proxyURL,I=A.url,M=A.width;return{src:null!=O&&""!==O?O:I,height:C,width:M,spoiler:t}}}return null};var r=s(n(979674)),a=n(894826),u=s(n(644263)),l=s(n(201292)),o=s(n(728429)),i=n(100678);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){if(null==e)return!1;var t=e.filename,n=e.height,r=e.width;return i.IMAGE_RE.test(t)&&null!=n&&n>0&&null!=r&&r>0}function c(e){return null!=e&&(null!=e&&i.VIDEO_RE.test(e.filename)&&null!=e.proxy_url)}},962935:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,a=f(n(441143)),u=f(n(536211)),l=f(n(636602)),o=f(n(782270)),i=f(n(644263)),s=f(n(191391)),d=n(770348);function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t){c=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return c(e,t)}
var p={},h=new Set;var g=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;c(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.initialize=function(){this.waitFor(o.default,i.default,s.default)};n.getCount=function(e){return p[e]};n.getThreadIdsMissingCounts=function(e,t){(0,a.default)(o.default.hasLoaded(e),"must wait for THREAD_LIST_SYNC before calling this");return t.filter((function(e){return!(e in p)&&!h.has(e)}))};n.__getLocalVars=function(){return{counts:p,loadingThreadIds:h}};return t}(u.default.Store);g.displayName="ForumPostUnreadCountStore";var v=new g(l.default,((r={})[d.ActionTypes.CONNECTION_OPEN]=function(){p={};h=new Set},r[d.ActionTypes.THREAD_CREATE]=function(e){var t=e.channel;if(!e.isNewlyCreated)return!1;if(!o.default.hasLoaded(t.guild_id))return!1;p[t.id]=0},r[d.ActionTypes.MESSAGE_CREATE]=function(e){var t=e.channelId,n=e.optimistic,r=e.isPushNotification;if(n||r)return!1
;if(!(t in p))return!1;p[t]++},r[d.ActionTypes.FORUM_UNREADS]=function(e){e.threads.forEach((function(e){null!=e.count&&(p[e.threadId]=e.count)}))},r[d.ActionTypes.MESSAGE_ACK]=function(e){var t=e.channelId;if(!(t in p)){var n=i.default.getChannel(t),r=i.default.getChannel(null==n?void 0:n.parent_id);if(!(null==r?void 0:r.isForumChannel()))return!1}p[t]=s.default.getUnreadCount(t)},r[d.ActionTypes.REQUEST_FORUM_UNREADS]=function(e){e.threads.forEach((function(e){var t=e.threadId;return h.add(t)}))},r));t.default=v},93655:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.shouldUseOldMaxMessageCount=t.renderMessageCount=t.formatMobileMessageCountLabel=t.formatMessageCountLabel=void 0;var r=l(n(71636)),a=n(64072),u=l(n(247001));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){return r.default.compare("992549565104128000",e)>-1};t.shouldUseOldMaxMessageCount=o;var i=function(e,t,n){if(null==e||e<0)return"0";var r=!n||o(t)
;return(null==t||r)&&e>=a.MAX_THREAD_MESSAGE_COUNT_OLD?"50+":e>=a.MAX_THREAD_MESSAGE_COUNT?"100k+":""+e};t.renderMessageCount=i;var s=function(e,t,n,r){var a=i(e,n,r);return"0"===a?u.default.Messages.SEE_THREAD:t.format({count:a})};t.formatMobileMessageCountLabel=function(e,t){return s(e,u.default.Messages.THREAD_MESSAGE_COUNT_MOBILE,t,!1)};t.formatMessageCountLabel=function(e,t){return s(e,u.default.Messages.THREAD_MESSAGE_COUNT,t,!1)}},594506:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=d(n(496486)),a=d(n(118915)),u=d(n(636602)),l=d(n(791548)),o=d(n(881454)),i=d(n(644263)),s=n(770348);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n,r,a,u,l){try{var o=e[u](l),i=o.value}catch(e){n(e);return}o.done?t(i):Promise.resolve(i).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function l(e){f(u,r,a,l,o,"next",e)}function o(e){f(u,r,a,l,o,"throw",e)}l(void 0)}))}}
function p(){p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return p.apply(this,arguments)}var h={},g=new l.default("UserGuildSettingsManager"),v=0;function m(){h=p({},o.default.getCollapsedCategories())}function y(){if(!__OVERLAY__){clearTimeout(v);v=setTimeout((function(){return _()}),15e3)}}function _(e,t){return T.apply(this,arguments)}function T(){return(T=c(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return E(null!=n?((r={})[null!=t?t:s.ME]=n,r):{});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return S.apply(this,arguments)}function S(){return(S=c(regeneratorRuntime.mark((function e(t){var n,u,l,d,f,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:clearTimeout(v);n=0!==Object.keys(t).length
;u=o.default.getCollapsedCategories();l=b();for(d in l)if(null!=(f=i.default.getChannel(d))&&null!=f.guild_id){f.guild_id in t||(t[f.guild_id]={});null==t[f.guild_id].channel_overrides&&(t[f.guild_id].channel_overrides={});t[f.guild_id].channel_overrides[f.id]=p({},t[f.guild_id].channel_overrides[f.id],{collapsed:f.id in u});n=!0}if(n){e.next=7;break}return e.abrupt("return");case 7:h=p({},u);c=r.default.map(t,(function(e,t){return{guildId:t,updates:e,attempts:0}}));case 9:if(!(c.length>0)){e.next=29;break}if((m=c.shift()).guildId!==s.FAVORITES){e.next=13;break}return e.abrupt("continue",9);case 13:e.prev=13;e.next=16;return a.default.patch({url:s.Endpoints.USER_GUILD_SETTINGS(m.guildId),body:m.updates});case 16:e.next=18;return A(1e3);case 18:e.next=27;break;case 20:e.prev=20;e.t0=e.catch(13);g.error(e.t0);m.attempts+=1;m.attempts<3&&c.push(m);e.next=27;return A(5e3);case 27:e.next=9;break;case 29:case"end":return e.stop()}}),e,null,[[13,20]])})))).apply(this,arguments)}function b(){
var e={},t=o.default.getCollapsedCategories();for(var n in t)t[n]!==h[n]&&(e[n]=!0);for(var r in h)t[r]!==h[r]&&(e[r]=!0);return e}function A(e){return new Promise((function(t){return setTimeout(t,e+Math.ceil(e*Math.random()))}))}function C(){h=p({},o.default.getCollapsedCategories())}var O={init:function(){u.default.subscribe(s.ActionTypes.CATEGORY_COLLAPSE,y);u.default.subscribe(s.ActionTypes.CATEGORY_EXPAND,y);u.default.subscribe(s.ActionTypes.CATEGORY_COLLAPSE_ALL,y);u.default.subscribe(s.ActionTypes.CATEGORY_EXPAND_ALL,y);u.default.subscribe(s.ActionTypes.CONNECTION_OPEN,m);u.default.subscribe(s.ActionTypes.USER_GUILD_SETTINGS_FULL_UPDATE,C)},saveUserGuildSettings:_,saveUserGuildSettingsBulk:E};t.default=O},946447:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,a=d(n(536211)),u=d(n(118915)),l=d(n(636602)),o=d(n(423046)),i=n(249875),s=n(770348);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){
f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return c.apply(this,arguments)}var p,h={},g=Object.freeze({});function v(e){var t;return null!==(t=h[e])&&void 0!==t?t:g}function m(e){var t=e.channelId,n=e.userId,r=c({},v(t));clearTimeout(r[n]);r[n]=function(e,t){return setTimeout((function(){l.default.dispatch({type:s.ActionTypes.TYPING_STOP,channelId:e,userId:t})}),s.TYPING_TIMEOUT)}(t,n);h[t]=r}function y(e){var t=e.channelId,n=e.userId,r=h[t];if(null==r||null==r[n])return!1;var a=c({},r);clearTimeout(a[n]);delete a[n];h[t]=a}function _(){h={}}var T=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;f(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.getTypingUsers=function(e){return v(e)}
;n.isTyping=function(e,t){return null!=v(e)[t]};n.__getLocalVars=function(){return{typingUsersByChannel:h,localTypingDelay:p,EMPTY_TYPING:g}};return t}(a.default.Store);T.displayName="TypingStore";var E=new T(l.default,((r={})[s.ActionTypes.TYPING_START]=m,r[s.ActionTypes.TYPING_STOP]=y,r[s.ActionTypes.TYPING_START_LOCAL]=function(e){var t=e.channelId,n=o.default.getId();if(null==n)return!1;if(null!=p&&p.channelId!==t){null!=p.timeout&&clearTimeout(p.timeout);p=null}var r=Date.now(),a=.8*s.TYPING_TIMEOUT;if(null!=p&&(null!=p.timeout||p.prevSend+a>r))return!1;var d=null==p||p.prevSend>r-2*a?s.TYPING_DELAY_LOCAL:0,f=setTimeout((function(){if(null!=p&&p.channelId===t&&n===o.default.getId()&&null!=p.timeout){p.timeout=null;(function(e){var t=v(e);return t===g?0:Object.keys(t).length})(t)>s.MAX_TYPING_USERS||u.default.post({url:s.Endpoints.TYPING(t),oldFormErrors:!0}).then((function(e){if(200===e.status){
var n,r,a=null!==(n=e.body.message_send_cooldown_ms)&&void 0!==n?n:0,u=null!==(r=e.body.thread_create_cooldown_ms)&&void 0!==r?r:0;a>0&&l.default.dispatch({type:s.ActionTypes.SLOWMODE_SET_COOLDOWN,channelId:t,slowmodeType:i.SlowmodeType.SendMessage,cooldownMs:a});u>0&&l.default.dispatch({type:s.ActionTypes.SLOWMODE_SET_COOLDOWN,channelId:t,slowmodeType:i.SlowmodeType.CreateThread,cooldownMs:u})}}))}}),d);p={channelId:t,timeout:f,prevSend:r};return m({channelId:t,userId:n})},r[s.ActionTypes.TYPING_STOP_LOCAL]=function(e){var t=e.channelId,n=o.default.getId();if(null==n)return!1;if(null!=p&&p.channelId===t&&null!=p.timeout){clearTimeout(p.timeout);p=null;return y({channelId:t,userId:n})}return!1},r[s.ActionTypes.CONNECTION_OPEN]=_,r[s.ActionTypes.OVERLAY_INITIALIZE]=_,r[s.ActionTypes.MESSAGE_CREATE]=function(e){var t=e.channelId,n=e.message.author;e.optimistic&&function(e){if(null==p||p.channelId!==e)return!1;null!=p.timeout&&clearTimeout(p.timeout);p=null}(t);return y({channelId:t,
userId:n.id})},r));t.default=E}}]);
//# sourceMappingURL=bee07f3a5c565c60793c.js.map