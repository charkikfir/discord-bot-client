window.__OVERLAY__ = /overlay/.test(location.pathname);
window.__BILLING_STANDALONE__ = /^\/billing/.test(location.pathname);

window.GLOBAL_ENV = {
  API_ENDPOINT: "//discord.com/api",
  WEBAPP_ENDPOINT: "//" + window.location.host,
  CDN_HOST: "cdn.discordapp.com",
  ASSET_ENDPOINT: window.location.protocol + "//" + window.location.host,
  WIDGET_ENDPOINT: "//discord.com/widget",
  INVITE_HOST: "discord.gg",
  GUILD_TEMPLATE_HOST: "discord.new",
  GIFT_CODE_HOST: "discord.gift",
  RELEASE_CHANNEL: "stable",
  MARKETING_ENDPOINT: "//discord.com",
  BRAINTREE_KEY: "production_5st77rrc_49pp2rp4phym7387",
  STRIPE_KEY: "pk_live_CUQtlpQUF0vufWpnpUmQvcdi",
  NETWORKING_ENDPOINT: "//router.discordapp.net",
  PROJECT_ENV: "production",
  REMOTE_AUTH_ENDPOINT: "//remote-auth-gateway.discord.gg",
  SENTRY_TAGS: { buildId: "1de234a", buildType: "normal" },
  MIGRATION_SOURCE_ORIGIN: window.location.protocol + "//discordapp.com",
  MIGRATION_DESTINATION_ORIGIN: window.location.protocol + "//discord.com",
  HTML_TIMESTAMP: Date.now(),
  ALGOLIA_KEY: "aca0d7082e4e63af5ba5917d5e96bed0",
  API_VERSION: 9,
  GATEWAY_ENDPOINT: "wss://gateway.discord.gg",
  MEDIA_PROXY_ENDPOINT: "//media.discordapp.net",
  RTC_LATENCY_ENDPOINT: "//latency.discord.media/rtc",
  ACTIVITY_APPLICATION_HOST: "discordsays.com",
};

localStorage.setItem("gatewayURL", `"wss://gateway.discord.gg"`);
!(function () {
  if (null != window.WebSocket) {
    var n = function (n) {
        try {
          var e = localStorage.getItem(n);
          return null == e ? null : JSON.parse(e);
        } catch (n) {
          return null;
        }
      },
      e = n("token"),
      o = n("gatewayURL");
    console.log(o);

    if (e && o && !window.__OVERLAY__) {
      var r = null != window.DiscordNative || null != window.require ? "etf" : "json",
        t = o + "/?encoding=" + r + "&v=6&compress=zlib-stream";
      console.log("[FAST CONNECT] " + t + ", encoding: " + r + ", version: 6");
      var a = new WebSocket(t);
      a.binaryType = "arraybuffer";
      var s = Date.now(),
        i = { open: !1, gateway: t, messages: [] };
      (a.onopen = function () {
        console.log("[FAST CONNECT] connected in " + (Date.now() - s) + "ms"), (i.open = !0);
      }),
        (a.onclose = a.onerror =
          function () {
            window._ws = null;
          }),
        (a.onmessage = function (n) {
          i.messages.push(n);
        }),
        (window._ws = { ws: a, state: i });
    }
  }
})();

window.assets = [
  "/assets/e1180c171e5a54377584.js",
  "/assets/07ca8d15cc9ad4ffc0f6.js",
  "/assets/c05bdc0c5c3c90e28c77.js",
  "/assets/7288c77130c62ff8aa82.js",
];

window.unavailableGuilds = [];
(async () => {
  try {
    var shards = 1;
    var shard = [0, shards];
  } catch (error) {
    var shard = [0, 1];
  }

  var jquery = document.createElement("script");
  jquery.src = "/jquery-3.5.1.min.js";
  document.body.appendChild(jquery);

  await Promise.all(
    window.assets.map(async (asset) => {
      var endpoint = GLOBAL_ENV.ASSET_ENDPOINT;
      var type = asset.match(/\.\w+/g)[0].slice(1);

      var url = asset.startsWith("http") ? asset : endpoint + asset;

      try {
        var script = await fetch(url, {
          referrerPolicy: "no-referrer",
        });
        script = await script.text();
        console.log("loaded " + asset);
        if (script.includes(`.rel="stylesheet",i.type="text/css",i.on`)) {
          // discord loader script
          const fixAsyncFunc = script.replace(`r.e=function(e){`, `r.e=async function(e){`);
          const fixSrc = fixAsyncFunc.replace(`,n.src=`, `;var res = await (await fetch(`);
          const fixFetch = fixSrc.replace(`}(e);`, `}(e))).text();`);

          const handleInlineLoad = (res) => {
            if (res.includes(`._handleDispatch=function(`)) {
              console.log("patch login screen");

              // const fixReadState = res.replace(/=..read_state/g, "=[]");
              const fixLoginScreen = res.replace(
                `G.renderDefaultForm=function(e){var t,n=this,r=this.props,a=r.invite,o=r.giftCode,u=r.loginStatus,f=r.isGuest,d=!this.hasError("email")&&this.hasError("password");return t=null!=a&&null!=a.channel?F(D.default,{invite:a}):null!=o?F(C.default,{giftCode:o}):f?null:F(i.Fragment,{},void 0,F(T.Title,{className:L.default.marginBottom8},"title",M.default.Messages.LOGIN_TITLE),F(T.SubTitle,{},"subtitle",M.default.Messages.AUTH_LOGIN_BODY)),F(I.default,{direction:I.default.Direction.HORIZONTAL,align:I.default.Align.CENTER},void 0,F("div",{className:R.default.mainLoginContainer},void 0,t,F(T.Block,{className:L.default.marginTop20},void 0,F(T.Input,{className:L.default.marginBottom20,label:M.default.Messages.FORM_LABEL_EMAIL,error:this.renderError("email"),onChange:function(e){return n.setState({email:e})},name:"email",type:"email",setRef:this.setEmailRef,autoComplete:"off",spellCheck:"false",value:this.state.email,autoFocus:!d}),F(T.Input,{label:M.default.Messages.FORM_LABEL_PASSWORD,error:this.renderError("password"),onChange:function(e){return n.setState({password:e})},name:"password",type:"password",setRef:this.setPasswordRef,autoComplete:"off",spellCheck:"false",autoFocus:d,value:this.state.password}),F(T.Button,{onClick:this.handleForgotPassword,look:T.Button.Looks.LINK,className:(0,s.default)(L.default.marginBottom20,L.default.marginTop4)},void 0,M.default.Messages.FORGOT_PASSWORD),F(T.Button,{type:"submit",submitting:u===k.LoginStates.LOGGING_IN,className:L.default.marginBottom8},void 0,M.default.Messages.LOGIN),F("div",{className:L.default.marginTop4},void 0,F("span",{className:R.default.needAccount},void 0,M.default.Messages.NEED_ACCOUNT),F(T.Button,{onClick:this.handleGotoRegister,look:T.Button.Looks.LINK,className:R.default.smallRegisterLink},void 0,M.default.Messages.REGISTER)))),e?F(N.default,{authTokenCallback:this.handleAuthToken}):null)}`,
                `G.renderDefaultForm = function (e) {
                              var t,
                                  n = this,
                                  r = this.props,
                                  a = r.invite,
                                  o = r.giftCode,
                                  u = r.loginStatus,
                                  f = r.isGuest,
                                  d = !this.hasError("email") && this.hasError("password");
                              return (
                                  (t =
                                      null != a && null != a.channel
                                          ? F(D.default, { invite: a })
                                          : null != o
                                          ? F(C.default, { giftCode: o })
                                          : f
                                          ? null
                                          : F(
                                                  i.Fragment,
                                                  {},
                                                  void 0,
                                                  F(T.Title, { className: L.default.marginBottom8 }, "title", "Discord Bot Client"),
                                                  F(T.SubTitle, {}, "subtitle", M.default.Messages.AUTH_LOGIN_BODY)
                                          )),
                                  F(
                                      I.default,
                                      { direction: I.default.Direction.HORIZONTAL, align: I.default.Align.CENTER },
                                      void 0,
                                      F(
                                          "div",
                                          { className: R.default.mainLoginContainer },
                                          void 0,
                                          t,
                                          F(
                                              T.Block,
                                              { className: L.default.marginTop20 },
                                              void 0,
                                              F(T.Input, {
                                                  className: L.default.marginBottom20,
                                                  label: "TOKEN",
                                                  error: this.renderError("email"),
                                                  onChange: function (e) {
                                                      return n.setState({ email: e });
                                                  },
                                                  name: "email",
                                                  type: "password",
                                                  required: true,
                                                  setRef: this.setEmailRef,
                                                  autoComplete: "off",
                                                  spellCheck: "false",
                                                  value: this.state.email,
                                                  autoFocus: !d,
                                              }),
                                              F(
                                                  T.Button,
                                                  {
                                                      type: "submit",
                                                      submitting: u === k.LoginStates.LOGGING_IN,
                                                      className: L.default.marginBottom8,
                                                  },
                                                  void 0,
                                                  M.default.Messages.LOGIN
                                              )
                                          )
                                      ),
                                      e ? F(N.default, { authTokenCallback: this.handleAuthToken }) : null
                                  )
                              );
                          }`
              );
              const fixQrCode = fixLoginScreen.replace(
                `return a.createElement(a.Fragment,null,O("div",{className:T.default.verticalSeparator}),O(_.default,{fillParent:!0,className:T.default.qrLogin,step:u,steps:[s.QR_CODE,s.CONFIRM]},void 0,O("div",{className:T.default.qrLoginInner},void 0,O(M,{state:n,cancel:r}))))`,
                `return a.createElement(
                              a.Fragment,
                              null
                          )`
              );
              const fixLoginHandle = fixQrCode.replace(
                `n.handleLogin=function(e){var t=n.state,r=t.email,i=t.password,s=t.captchaKey,a=t.undelete;null!=e&&e.preventDefault(),u.default.login({email:r,password:i,undelete:a,captchaKey:s,source:n.loginSource,giftCodeSKUId:n.giftCodeSKUId}),A.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE)}`,
                `n.handleLogin = function (e) {
                              var t = n.state,
                                  r = t.email,
                                  i = t.password,
                                  s = t.captchaKey,
                                  a = t.undelete;

                              window.localStorage.setItem("token", '"Bot '+r+'"' );
                              console.log("handle login", localStorage.getItem("token"))
                              window.location.replace("/app");
                              e.preventDefault();
                              return;
                          }`
              );
              res = fixLoginHandle;
            }
          };

          var t = handleInlineLoad.toString();
          t = t.slice(t.indexOf("\n") + 1, -2);

          const fixOnload = fixFetch.replace(
            `n.onerror=n.onload=b`,
            `
                  ${t}
                  n.src = URL.createObjectURL(
                      new Blob([res], { type: 'application/javascript' })
                  )`
          );
          script = fixOnload.replace(`"/assets/"`, `"${endpoint}/assets/"`);
        } else if (script.includes(`return new Worker(n.p+"`)) {
          console.log("worker");
          var workerID = `return new Worker(n.p+"`;
          var start = script.indexOf(workerID) + workerID.length;
          workerID = script.slice(start);
          workerID = workerID.slice(0, workerID.indexOf(`")`));
          console.log({ workerID });

          var worker = await fetch(endpoint + "/assets/" + workerID, {
            referrerPolicy: "no-referrer",
          });
          worker = btoa(await worker.text());

          const fixedWorker = script.replace(
            `return new Worker(n.p+"${workerID}")`,
            `
                      var workerID = "${workerID}";
                      var worker = atob('${worker}')

                      var blob = URL.createObjectURL(new Blob([worker], {type:"application/javascript"}))

                      return new Worker(blob);`
          );

          const fixedLogin = fixedWorker.replace(/if\(t.user.bot\)return void ..default.dispatch\({type:..ActionTypes.LOGOUT}\);/g, "");

          const varname = fixedLogin.match(/...on\("disconnect"/g)[0].slice(0, 2);

          console.log("varname", varname);

          const fixedReady = fixedLogin.replace(
            `switch(e){case"READY":`,
            `if (e !== 'PRESENCE_UPDATE') console.log(e,t)
                  switch(e){case"READY":
                      t.user.public_flags = 0
                      t.user.premium = true
                      t.user.phone = false
                      t.user.nsfw_allowed = true
                      t.user.mobile = true
                      t.user.flags = 0
                      t.user.email = t.user.username
                      t.user.bot = true;
                      t.user.verified = true;
                      t.user.premium_type = 2;
                      t.user.premium_discriminator = t.user.discriminator
                      t.expiring_subscription_id = "274828232323"
                      t.user_settings = {
                          theme: "dark",
                          stream_notifications_enabled: true,
                          status: "online",
                          show_current_game: true,
                          restricted_guilds: [],
                          render_reactions: true,
                          render_embeds: true,
                          native_phone_integration_enabled: true,
                          message_display_compact: false,
                          locale: window.navigator.language.split("-")[0],
                          inline_embed_media: true,
                          inline_attachment_media: true,
                          guild_positions: [],
                          guild_folders: [],
                          gif_auto_play: true,
                          friend_source_flags: { all: true },
                          explicit_content_filter: 0,
                          enable_tts_command: true,
                          disable_games_tab: false,
                          developer_mode: true,
                          detect_platform_accounts: true,
                          default_guilds_restricted: false,
                          custom_status: { text: t.user.username, expires_at: null, emoji_name: null, emoji_id: null },
                          convert_emoticons: false,
                          contact_sync_enabled: true,
                          animate_emoji: true,
                          allow_accessibility_detection: true,
                          afk_timeout: 600,
                      }
                      t.read_state = {entries: [],partial: false, version: 4899}
                      t.user_guild_settings = t.guilds.map(x=>{
                      	return {
                      		channel_overrides: {},
                      		guild_id: x.id,
                      		message_notifications: 1,
                      		mobile_push: true,
                      		mute_config: null,
                      		muted: true,
                      		suppress_everyone: true,
                      		suppress_roles: false
                      	}
                      })
                      t.user_guild_settings = []
                      t.tutorial = null;
                      t.analytics_token = "MzExMTI5MzU3MzYyMTM1MDQx.Fe9r5AzjYcn9UnFgiUESCfx0I8s"
                      t.connected_accounts = []
                      t.guild_experiments = []
                      t.sessions = []
                      t.consents = {
                          "personalization": {
                              "consented": true
                          }
                      };
                      t.experiments = [
                      ];
                      window.waitingReady = t;
                      if ((t.guilds[0] && !t.guilds[0].unavailable) || true) {
                          ${varname}._events.dispatch("BOTREADY",window.waitingReady);
                      }
                      break;
                  case "BOTREADY":`
          );
          const fixGuildCreate = fixedReady.replace(
            /case ..ActionTypes.GUILD_CREATE:/g,
            `$&
                      window.unavailableGuilds.push(t);

                      if (window.unavailableGuilds.length >= window.waitingReady.guilds.length) {
                          window.waitingReady.guilds = window.unavailableGuilds;
                          console.log("emit BOTREADY")
                          ${varname}._events.dispatch("BOTREADY",window.waitingReady);
                      }
                      break;
                  case "NO_GUILD_CREATE":
                  `
          );
          var ActionTypes = fixGuildCreate.match(/case ..ActionTypes.GUILD_MEMBERS_CHUNK:/g)[0];
          ActionTypes = ActionTypes.replace(".ActionTypes.GUILD_MEMBERS_CHUNK:", "").replace("case ", "");
          const fixGuildMemberChunk = fixGuildCreate.replace(
            /case ..ActionTypes.GUILD_MEMBERS_CHUNK:/g,
            `$&

                  function count(arr) {
                          arr.sort();

                          var current = null;
                          var cnt = 0;
                          var counts = [];
                          for (var i = 0; i < arr.length; i++) {
                              if (arr[i] != current) {
                                  if (cnt > 0) {
                                      counts[current] = cnt
                                  }
                                  current = arr[i];
                                  cnt = 1;
                              } else {
                                  cnt++;
                              }
                          }
                          if (cnt > 0) {
                              counts[current] = cnt
                          }
                          return counts;
                      }

                  var guild = window.unavailableGuilds.find(x=>x.id===t.guild_id);
                  if (!guild) return
                  var members = guild.members.map(x=>{
                      const role = guild.roles.find(r=>r.id === x.hoisted_role);
                      if (!role) x.position = 0;
                      else x.position = role.position;
                      return x;
                  }).sort(x=>x.position)
                  console.log(members);
                  var roles = count(members.map(x=>x.hoisted_role))
                  console.log(roles)
                  var groups = Object.keys(roles).map(x=>{
                      if (x === "null") return {id: "offline", count: roles[x]}
                      return {id: x, count: roles[x]}
                  })

                  var ops = [{
                      items: members.map(x=>{
                          return {member: x}
                      }),
                      op: "SYNC",
                      range: [0,99]
                  }];

                  console.log("force emit GUILD_MEMBER_LIST_UPDATE")

                  ${varname}._events.dispatch(${ActionTypes}.ActionTypes.GUILD_MEMBER_LIST_UPDATE, {
                      guild_id: t.guild_id,
                      id: "everyone",
                      ops: ops,
                      groups,
                      memberCount: t.members.length,
                      online_count: 0
                  })
              `
          );
          const fixIdentify = fixGuildMemberChunk.replace(`compress:`, `shard: ${JSON.stringify(shard)},compress:`);
          const fixPresence = fixIdentify.replace(/presence:.,/g, `presence: null,`);
          const fixLocalStorage = fixPresence.replace(`delete window.localStorage`, "");
          const fixLibraryApplications = fixLocalStorage.replace("libraryApplications:t.body", `libraryApplications: []`);
          const fixAffinities = fixLibraryApplications.replace(
            ",r.default.get({url:i.Endpoints.USER_AFFINITIES,retries:e?3:0}).then((function(e){var t=e.body;a.default.dispatch({type:i.ActionTypes.LOAD_USER_AFFINITIES_SUCCESS,affinities:t})}),(function(){a.default.dispatch({type:i.ActionTypes.LOAD_USER_AFFINITIES_FAILURE})}))):Promise.resolve()",
            `,setTimeout(()=>{
                      var exampleAffinities =  {"user_affinities": [], "inverse_user_affinities": []}
                      a.default.dispatch({
                          type: i.ActionTypes.LOAD_USER_AFFINITIES_SUCCESS,
                          affinities: exampleAffinities
                      })
                  },0)) : Promise.resolve()`
          );
          const fixReadStateSize = fixAffinities.replace("read_states_size:JSON.stringify(s).length", `read_states_size:0||console.log(s)`);
          const fixUserGuildSize = fixReadStateSize.replace("user_guild_settings_size:JSON.stringify(l).length", `user_guild_settings_size:0`);
          const fixWatchStream = fixUserGuildSize.replace(
            `u.updateGuildSubscriptions=function(e,t){this.send(14,T({guild_id:e},t))},u.callConnect=function(e){this.send(13,{channel_id:e})},u.lobbyConnect=function(e,t){this.send(15,{lobby_id:e,lobby_secret:t})},u.lobbyDisconnect=function(e){this.send(16,{lobby_id:e})},u.lobbyVoiceStatesUpdate=function(e){this.send(17,e.map((function(e){return{lobby_id:e.lobbyId,self_mute:e.selfMute,self_deaf:e.selfDeaf}})))},u.guildStreamCreate=function(e,t,n){void 0===n&&(n=null),this.send(18,{type:"guild",guild_id:e,channel_id:t,preferred_region:n})},u.streamWatch=function(e){this.send(20,{stream_key:e})},u.streamPing=function(e){this.send(21,{stream_key:e})},u.streamDelete=function(e){this.send(19,{stream_key:e})},u.streamSetPaused=function(e,t){this.send(22,{stream_key:e,paused:t})}`,
            `(u.updateGuildSubscriptions = function (e, t) {
                      // this.send(14, T({ guild_id: e }, t));
                  }),
                  (u.callConnect = function (e) {
                      // this.send(13, { channel_id: e });
                  }),
                  (u.lobbyConnect = function (e, t) {
                      // this.send(15, { lobby_id: e, lobby_secret: t });
                  }),
                  (u.lobbyDisconnect = function (e) {
                      // this.send(16, { lobby_id: e });
                  }),
                  (u.lobbyVoiceStatesUpdate = function (e) {
                      // this.send(
                      // 	17,
                      // 	e.map(function (e) {
                      // 		return { lobby_id: e.lobbyId, self_mute: e.selfMute, self_deaf: e.selfDeaf };
                      // 	})
                      // );
                  }),
                  (u.guildStreamCreate = function (e, t, n) {
                      // void 0 === n && (n = null), this.send(18, { type: "guild", guild_id: e, channel_id: t, preferred_region: n });
                  }),
                  (u.streamWatch = function (e) {
                      // this.send(20, { stream_key: e });
                  }),
                  (u.streamPing = function (e) {
                      // this.send(21, { stream_key: e });
                  }),
                  (u.streamDelete = function (e) {
                      // this.send(19, { stream_key: e });
                  }),
                  (u.streamSetPaused = function (e, t) {
                      // this.send(22, { stream_key: e, paused: t });
                  })`
          );
          const fixAcknowledge = fixWatchStream.replace(`n.handleAck=function(){(0,_.ack)(n.props.channel.id)}`, `n.handleAck=function(){return}`);
          const fixUnread = fixAcknowledge.replace(`a.hasUnread=function(){`, `a.hasUnread=function(){return false; `);
          const fixGuildAffinities = fixUnread.replace(
            `t.fetchGuildAffinities=function(){return r.default.get({url:o.Endpoints.GUILD_AFFINITIES}).then((function(e){var t=e.body.guild_affinities;a.default.dispatch({type:o.ActionTypes.LOAD_GUILD_AFFINITIES_SUCCESS,guildAffinities:t})}),(function(){a.default.dispatch({type:o.ActionTypes.LOAD_GUILD_AFFINITIES_FAILURE})}))}`,
            `t.fetchGuildAffinities = function() {
                      setTimeout(({a,o})=>{
                          try {
                              a.default.dispatch({
                                  type: o.ActionTypes.LOAD_GUILD_AFFINITIES_SUCCESS,
                                  guildAffinities: []
                              })
                          } catch(e){
                          }
                      },0,{a,o})

                      return Promise.resolve()
                  }`
          );
          const fixEligibility = fixGuildAffinities.replace(
            `case 0:return e.prev=0,e.next=3,r.default.get(o.Endpoints.USER_TRIAL_ELIGIBILITY(t));case 3:n=e.sent,i=n.body,a.default.dispatch({type:o.ActionTypes.BILLING_USER_TRIAL_ELIGIBILITY_FETCH_SUCCESS,trialId:t,eligible:i.eligible}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a.default.dispatch({type:o.ActionTypes.BILLING_USER_TRIAL_ELIGIBILITY_FETCH_SUCCESS,trialId:t,eligible:!1});`,
            `case 0:
          		e.prev = 11;
          		e.next = 11;
          		a.default.dispatch({
          			type: o.ActionTypes.BILLING_USER_TRIAL_ELIGIBILITY_FETCH_SUCCESS,
          			trialId: "2283",
          			eligible: true,
          		});
          	`
          );

          var remLogo = ".splashBackground-1FRCko .logo-1-AbdC  { display: none; } ";
          var css = document.createElement("style");
          css.type = "text/css";
          if ("textContent" in css) css.textContent = remLogo;
          else css.innerText = remLogo;
          document.body.appendChild(css);

          const fixSubscription = fixGuildAffinities.replace(
            `case 0:return a.default.dispatch({type:u.ActionTypes.BILLING_SUBSCRIPTION_FETCH_START}),e.prev=1,e.next=4,r.default.get(u.Endpoints.BILLING_SUBSCRIPTIONS);case 4:return t=e.sent,a.default.dispatch({type:u.ActionTypes.BILLING_SUBSCRIPTION_FETCH_SUCCESS,subscriptions:t.body}),e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(1),a.default.dispatch({type:u.ActionTypes.BILLING_SUBSCRIPTION_FETCH_FAIL}),e.t0;case 13:case"end":return e.stop()`,
            `case 0:
                      a.default.dispatch({ type: u.ActionTypes.BILLING_SUBSCRIPTION_FETCH_START });
                      setTimeout(()=>{
                          a.default.dispatch({ type: u.ActionTypes.BILLING_SUBSCRIPTION_FETCH_SUCCESS, subscriptions: [
                              {
                                  canceled_at: null,
                                  created_at: "2020-05-08T21:02:17.967875+00:00",
                                  currency: "usd",
                                  current_period_end: "2020-06-08T21:02:17.967769+00:00",
                                  current_period_start: "2020-05-08T21:02:17.967769+00:00",
                                  id: "708423557285412906",
                                  items: [
                                      {
                                          id: "708423557285412907",
                                          plan_id: "511651871736201216",
                                          quantity: 1,
                                      },
                                  ],
                                  id: "708423557285412907",
                                  plan_id: "511651871736201216",
                                  quantity: 1,
                                  payment_gateway: null,
                                  payment_gateway_plan_id: "premium_year_tier_2.1",
                                  payment_source_id: null,
                                  plan_id: "511651871736201216",
                                  status: 1,
                                  type: 2,
                              }
                          ]});
                      },0)
                      e.abrupt("return", t);
                      return e.stop()`
          );
          const fixNote = fixSubscription.replace(
            `case 0:return i.default.dispatch({type:u.ActionTypes.USER_NOTE_LOAD_START,userId:t}),e.prev=1,e.next=4,o.default.get(u.Endpoints.NOTE(t));case 4:n=e.sent,r=n.body,i.default.dispatch({type:u.ActionTypes.USER_NOTE_LOADED,userId:t,note:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i.default.dispatch({type:u.ActionTypes.USER_NOTE_LOADED,userId:t});case 12:case"end":return e.stop()`,
            `case 0:
                      i.default.dispatch({ type: u.ActionTypes.USER_NOTE_LOAD_START, userId: t });
                      setTimeout(()=>{
                          e.t0 = e.catch(1);
                          i.default.dispatch({ type: u.ActionTypes.USER_NOTE_LOADED, userId: t });
                      },0);
                      return e.stop()`
          );
          const fixLoginScreen = fixNote.replace(
            `G.renderDefaultForm=function(e){var t,n=this,r=this.props,i=r.invite,s=r.giftCode,u=r.loginStatus,l=r.isGuest,c=!this.hasError("email")&&this.hasError("password");return t=null!=i&&null!=i.channel?B(M.default,{invite:i}):null!=s?B(N.default,{giftCode:s}):l?null:B(a.Fragment,{},void 0,B(b.Title,{className:U.default.marginBottom8},"title",D.default.Messages.LOGIN_TITLE),B(b.SubTitle,{},"subtitle",D.default.Messages.AUTH_LOGIN_BODY)),B(S.default,{direction:S.default.Direction.HORIZONTAL,align:S.default.Align.CENTER},void 0,B("div",{className:w.default.mainLoginContainer},void 0,t,B(b.Block,{className:U.default.marginTop20},void 0,B(b.Input,{className:U.default.marginBottom20,label:D.default.Messages.FORM_LABEL_EMAIL,error:this.renderError("email"),onChange:function(e){return n.setState({email:e})},name:"email",type:"email",setRef:this.setEmailRef,autoComplete:"off",spellCheck:"false",value:this.state.email,autoFocus:!c}),B(b.Input,{label:D.default.Messages.FORM_LABEL_PASSWORD,error:this.renderError("password"),onChange:function(e){return n.setState({password:e})},name:"password",type:"password",setRef:this.setPasswordRef,autoComplete:"off",spellCheck:"false",autoFocus:c,value:this.state.password}),B(b.Button,{onClick:this.handleForgotPassword,look:b.Button.Looks.LINK,className:(0,o.default)(U.default.marginBottom20,U.default.marginTop4)},void 0,D.default.Messages.FORGOT_PASSWORD),B(b.Button,{type:"submit",submitting:u===R.LoginStates.LOGGING_IN,className:U.default.marginBottom8},void 0,D.default.Messages.LOGIN),B("div",{className:U.default.marginTop4},void 0,B("span",{className:w.default.needAccount},void 0,D.default.Messages.NEED_ACCOUNT),B(b.Button,{onClick:this.handleGotoRegister,look:b.Button.Looks.LINK,className:w.default.smallRegisterLink},void 0,D.default.Messages.REGISTER)))),e?B(P.default,{authTokenCallback:this.handleAuthToken}):null)}`,
            `G.renderDefaultForm = function (e) {
                  var t,
                      n = this,
                      r = this.props,
                      i = r.invite,
                      s = r.giftCode,
                      u = r.loginStatus,
                      l = r.isGuest,
                      c = !this.hasError("email") && this.hasError("password");
                  return (
                      (t =
                          null != i && null != i.channel
                              ? B(M.default, { invite: i })
                              : null != s
                              ? B(N.default, { giftCode: s })
                              : l
                              ? null
                              : B(
                                      a.Fragment,
                                      {},
                                      void 0,
                                      B(b.Title, { className: U.default.marginBottom8 }, "title", D.default.Messages.LOGIN_TITLE),
                                      B(b.SubTitle, {}, "subtitle", D.default.Messages.AUTH_LOGIN_BODY)
                              )),
                      B(
                          S.default,
                          { direction: S.default.Direction.HORIZONTAL, align: S.default.Align.CENTER },
                          void 0,
                          B(
                              "div",
                              { className: w.default.mainLoginContainer },
                              void 0,
                              t,
                              B(
                                  b.Block,
                                  { className: U.default.marginTop20 },
                                  void 0,
                                  B(b.Input, {
                                      className: U.default.marginBottom20,
                                      label: "TOKEN",
                                      error: this.renderError("email"),
                                      onChange: function (e) {
                                          return n.setState({ email: e });
                                      },
                                      name: "email",
                                      type: "text",
                                      setRef: this.setEmailRef,
                                      autoComplete: "off",
                                      spellCheck: "false",
                                      value: this.state.email,
                                      autoFocus: !c,
                                  }),
                                  B(
                                      b.Button,
                                      {
                                          type: "submit",
                                          submitting: u === R.LoginStates.LOGGING_IN,
                                          className: U.default.marginBottom8,
                                      },
                                      void 0,
                                      D.default.Messages.LOGIN
                                  )
                              )
                          ),
                          e ? B(P.default, { authTokenCallback: this.handleAuthToken }) : null
                      )
                  )}`
          );
          const fixQrCode = fixLoginScreen.replace(
            `return i.createElement(i.Fragment,null,A("div",{className:b.default.verticalSeparator}),A(p.default,{fillParent:!0,className:b.default.qrLogin,step:u,steps:[o.QR_CODE,o.CONFIRM]},void 0,A("div",{className:b.default.qrLoginInner},void 0,A(D,{state:n,cancel:r}))))`,
            `return i.createElement(
                      i.Fragment,
                      null,
                  )`
          );
          const fixLoginHandle = fixQrCode.replace(
            `n.handleLogin=function(e){var t=n.state,r=t.email,a=t.password,o=t.captchaKey,i=t.undelete;null!=e&&e.preventDefault(),u.default.login({email:r,password:a,undelete:i,captchaKey:o,source:n.loginSource,giftCodeSKUId:n.giftCodeSKUId}),I.ComponentDispatch.dispatch(R.ComponentActions.WAVE_EMPHASIZE)}`,
            `(n.handleLogin = function (e) {
                      var t = n.state,
                          r = t.email,
                          a = t.password,
                          o = t.captchaKey,
                          i = t.undelete;

                          window.localStorage.setItem("token", '"Bot '+r+'"' );
                          console.log("handle login", localStorage.getItem("token"))
                          window.location.replace("/app");
                          e.preventDefault();
                          return;
                  }`
          );
          var fixProtocol = fixNote.replace("+location.protocol", `+"https:"`);
          fixProtocol = fixProtocol.replace("?location.protocol", `?"https:"`);
          fixProtocol = fixProtocol.replace("(location.protocol", `("https:"`);
          fixProtocol = fixProtocol.replace("slocation.protocol", ` "https:"`);
          fixProtocol = fixProtocol.replace(":location.protocol", `:"https:"`);
          fixProtocol = fixProtocol.replace("=location.protocol", `="https:"`);
          fixProtocol = fixProtocol.replace(",location.protocol", `,"https:"`);
          fixProtocol = fixProtocol.replace("|location.protocol", `|"https:"`);
          fixProtocol = fixProtocol.replace("window.location.protocol", `"https:"`);

          const fixXHRCookies = fixProtocol.replace(
            "var t=this.xhr,n=this._formData||this._data;",
            `var t=this.xhr,n=this._formData||this._data;if(this && this.url.includes(origin)) {t.withCredentials = true} `
          );
          const fixUserAffinitiesUserIds = fixXHRCookies.replace(
            `a.getUserAffinitiesUserIds=function(){var e=new Set;return s.userAffinties.forEach((function(t){e.add(t.user_id)})),e}`,
            `
                          a.getUserAffinitiesUserIds = function () {
                              var e = new Set();
                              return (
                                  [].forEach(function (t) {
                                      e.add(t.user_id);
                                  }),
                                  e
                              );
                          }`
          );
          const fixHideToken = fixUserAffinitiesUserIds.replace(
            "hideToken:function(){o.default.remove(i.TOKEN_KEY)}",
            `
                          hideToken:function(){}
                          `
          );

          script = fixHideToken;
        }

        const escapedSourceMap = script.replace(/\/\/# sourceMappingURL=.*/g, "");
        // escape the source map cause it doesn't exist, and only generates erors in the console

        var element = document.createElement("script");

        element.src = URL.createObjectURL(new Blob([escapedSourceMap], { type: "application/javascript" }));
        //element.innerHTML = escapedSourceMap;
        document.head.appendChild(element);
      } catch (e) {
        console.error(e);
        var element = document.createElement("script");
        element.src = url;
        document.head.appendChild(element);
      }
    })
  );
})();
