const a3_0x26869f=a3_0x3a91;(function(_0x4eb62b,_0x3e38a8){const _0x517de0=a3_0x3a91,_0x405a80=_0x4eb62b();while(!![]){try{const _0x56e47f=-parseInt(_0x517de0(0x143))/0x1*(-parseInt(_0x517de0(0x132))/0x2)+-parseInt(_0x517de0(0x134))/0x3+parseInt(_0x517de0(0x13c))/0x4+parseInt(_0x517de0(0x106))/0x5+-parseInt(_0x517de0(0x10a))/0x6+-parseInt(_0x517de0(0x123))/0x7+parseInt(_0x517de0(0x135))/0x8;if(_0x56e47f===_0x3e38a8)break;else _0x405a80['push'](_0x405a80['shift']());}catch(_0x22ea93){_0x405a80['push'](_0x405a80['shift']());}}}(a3_0xe81f,0xe4302));import a3_0x9b6ed1 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';function a3_0xe81f(){const _0x486ce1=['indexOf','disconnect','notpixel','getTelegramQuery','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','serverAddress','12849844ZsQYzP','resetAccounts','saveQueryFile','sessionCreation','\x0a\x20\x0aPlease\x20Select\x20Query\x20Account\x20for\x20modification:','Session\x20','includes','url','query','You\x20don\x27t\x20have\x20any\x20Accounts,\x20please\x20create\x20first','TELEGRAM_APP_HASH','info','createDir','warn','query-','2245236TTxbSC','delay','2421105YlIble','4044432jEpcyI','Please\x20Enter\x20Telegram\x20Query\x20:\x20','\x0a\x20\x0aPlease\x20Enter\x20New\x20Query\x20','\x0a\x20\x0aYou\x20already\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','You\x20dont\x20have\x20any\x20Query\x20Account.','Invalid\x20Input','\x0a\x20\x0a1.\x20Create\x20Account\x20\x0a2.\x20Reset\x20Account\x20\x0a3.\x20Start\x20Bot\x0a4.\x20Query\x20modification\x0a\x20\x0aInput\x20your\x20choice\x20:','6237120ZRjJSa','accountType','accountName','text','Welcome\x20to\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x20\x0aYour\x20Session\x20List:\x0a','<empty>\x0a','\x20-\x20Created','1rdgCbO','proxy','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','RequestWebView','save','storeSession','session','getSession','\x0a\x20\x0aAvailable\x20Account\x20Type:\x20\x0a1.\x20Session\x20\x0a2.\x20Query\x0a\x20\x0aPlease\x20Entery\x20Your\x20Choice\x20:\x20','resolvePeer','\x20-\x20Webview\x20Connected','log','accounts','bot','peer','Old\x20Query\x20:\x20','Invalid\x20input,\x20Please\x20try\x20again','agent','length','3855185SPNnRM','Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first','Enter\x20your\x20Telegram\x20Password?','queryModificaiton','2286624wVUQRj','TELEGRAM_APP_ID','error','exit','\x20|\x20Sleep\x20','client','filter','init','\x20-\x20Resolving\x20Peer','queryCreation','/query.txt','onBoarding','Your\x20Account\x20List\x20:\x0a\x20\x0a','\x0a\x20\x0aYou\x20already\x20have\x20Account,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Account\x20:','accounts/','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','Query\x20','\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again','android'];a3_0xe81f=function(){return _0x486ce1;};return a3_0xe81f();}import{StoreSession}from'telegram/sessions/StoreSession.js';import a3_0x2fe309 from'../utils/logger.js';function a3_0x3a91(_0x50a2e4,_0x589334){const _0xe81fd4=a3_0xe81f();return a3_0x3a91=function(_0x3a910b,_0x528348){_0x3a910b=_0x3a910b-0xf5;let _0x4e92e7=_0xe81fd4[_0x3a910b];return _0x4e92e7;},a3_0x3a91(_0x50a2e4,_0x589334);}import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{[a3_0x26869f(0xf8)];constructor(){const _0x5a854c=a3_0x26869f;this[_0x5a854c(0x13e)]=_0x5a854c(0xff),this[_0x5a854c(0x12a)]='https://image.notpx.app/',this[_0x5a854c(0x100)]=_0x5a854c(0x11f);}async[a3_0x26869f(0x111)](){const _0x598d7f=a3_0x26869f;try{await this[_0x598d7f(0x115)]();}catch(_0x405e6e){console['log'](_0x405e6e),a3_0x2fe309[_0x598d7f(0x10c)](''+JSON['stringify'](_0x405e6e));throw _0x405e6e;}}async[a3_0x26869f(0x115)](){const _0x5217fa=a3_0x26869f;try{let _0x2cc96b=_0x5217fa(0x140);const _0x27b760=Helper[_0x5217fa(0xfa)](_0x5217fa(0xff));if(_0x27b760[_0x5217fa(0x105)]==0x0)_0x2cc96b+='<empty>';else for(const _0x3ff0db of _0x27b760){_0x2cc96b+='-\x20'+_0x3ff0db+'\x0a';}_0x2cc96b+='\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a',_0x2cc96b+=_0x5217fa(0x13b);const _0x1271a0=await a3_0x9b6ed1[_0x5217fa(0x13f)](_0x2cc96b);if(_0x1271a0==0x1)await this[_0x5217fa(0x13d)]();else{if(_0x1271a0==0x2)Helper[_0x5217fa(0x124)](),await Helper['delay'](0xbb8),await this['onBoarding']();else{if(_0x1271a0==0x3)Helper[_0x5217fa(0xfa)](this[_0x5217fa(0x13e)])?.['length']==0x0&&(console[_0x5217fa(0x12e)](_0x5217fa(0x12c)),await this[_0x5217fa(0x115)]());else _0x1271a0==0x4?await this[_0x5217fa(0x109)]():(console[_0x5217fa(0x10c)](_0x5217fa(0x103)),await this['onBoarding']());}}}catch(_0xdb5f1e){throw _0xdb5f1e;}}async[a3_0x26869f(0x109)](){const _0x188f0f=a3_0x26869f;try{const _0x46c9c3=Helper[_0x188f0f(0xfa)](_0x188f0f(0xff)),_0x3ab0fa=_0x46c9c3[_0x188f0f(0x110)](_0x2d6348=>_0x2d6348[_0x188f0f(0x129)](_0x188f0f(0x12b)));let _0x4cb844='Your\x20Query\x20Account\x20List\x20:\x0a\x20\x0a';for(const _0x865f37 of _0x3ab0fa){_0x4cb844+=_0x46c9c3[_0x188f0f(0x11d)](_0x865f37)+0x1+'.\x20'+_0x865f37+'\x0a';}_0x3ab0fa[_0x188f0f(0x105)]==0x0?(console[_0x188f0f(0xfe)](_0x188f0f(0x139)),await this[_0x188f0f(0x115)]()):_0x4cb844+=_0x188f0f(0x127);const _0x5577a5=await a3_0x9b6ed1[_0x188f0f(0x13f)](_0x4cb844);if(_0x3ab0fa[_0x5577a5-0x1]!=undefined){const _0x5288a0=_0x3ab0fa[_0x5577a5-0x1];this['accountName']=_0x188f0f(0x118)+_0x5288a0;const _0x131764=_0x188f0f(0x102)+Helper['readQueryFile'](this[_0x188f0f(0x13e)]+_0x188f0f(0x114))+_0x188f0f(0x137),_0x25d2f7=await a3_0x9b6ed1[_0x188f0f(0x13f)](_0x131764);await Helper[_0x188f0f(0x125)](this[_0x188f0f(0x13e)],_0x25d2f7),await Helper[_0x188f0f(0x133)](0xbb8),await this['onBoarding']();}else console[_0x188f0f(0x10c)](_0x188f0f(0x103)),await this[_0x188f0f(0x109)]();}catch(_0x312dea){throw _0x312dea;}}async[a3_0x26869f(0x126)](){const _0xa36107=a3_0x26869f;try{if(Config['TELEGRAM_APP_ID']==undefined||Config[_0xa36107(0x12d)]==undefined)throw new Error(_0xa36107(0x107));const _0x449eba=Helper[_0xa36107(0xfa)](_0xa36107(0xff));let _0x36f21d=_0xa36107(0x116);for(const _0x2317dc of _0x449eba){_0x36f21d+=_0x449eba[_0xa36107(0x11d)](_0x2317dc)+0x1+'.\x20'+_0x2317dc+'\x0a';}_0x449eba[_0xa36107(0x105)]==0x0?_0x36f21d+=_0xa36107(0x119):_0x36f21d+=_0xa36107(0x138);const _0x4a598c=await a3_0x9b6ed1[_0xa36107(0x13f)](_0x36f21d);this[_0xa36107(0x13e)]=Helper['createDir']('sessions-'+_0x4a598c),await this['useSession'](this[_0xa36107(0x13e)]),await this[_0xa36107(0x11e)](),a3_0x2fe309[_0xa36107(0x12e)](_0xa36107(0x128)+this['accountName']+_0xa36107(0x142)),console[_0xa36107(0xfe)](_0xa36107(0x128)+_0x4a598c+_0xa36107(0x11b)),this[_0xa36107(0xf8)][_0xa36107(0xf7)](),await Helper[_0xa36107(0x133)](0xbb8),process[_0xa36107(0x10d)]();}catch(_0x4ad597){throw _0x4ad597;}}async[a3_0x26869f(0x113)](){const _0x5418a3=a3_0x26869f;try{const _0x5eab7f=Helper[_0x5418a3(0xfa)](_0x5418a3(0xff));let _0x5d7fba=_0x5418a3(0x116);for(const _0x450438 of _0x5eab7f){_0x5d7fba+=_0x5eab7f[_0x5418a3(0x11d)](_0x450438)+0x1+'.\x20'+_0x450438+'\x0a';}_0x5eab7f[_0x5418a3(0x105)]==0x0?_0x5d7fba+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Account\x20Name\x20:':_0x5d7fba+=_0x5418a3(0x117);const _0x42eb37=await a3_0x9b6ed1[_0x5418a3(0x13f)](_0x5d7fba);this[_0x5418a3(0x13e)]=Helper[_0x5418a3(0x12f)](_0x5418a3(0x131)+_0x42eb37);let _0x3950fb=_0x5418a3(0x136);const _0x14319a=await a3_0x9b6ed1[_0x5418a3(0x13f)](_0x3950fb);await Helper[_0x5418a3(0x125)](this[_0x5418a3(0x13e)],_0x14319a),a3_0x2fe309[_0x5418a3(0x12e)](_0x5418a3(0x11a)+this[_0x5418a3(0x13e)]+'\x20-\x20Created'),console[_0x5418a3(0xfe)]('Query\x20'+_0x42eb37+_0x5418a3(0x11b)),await Helper[_0x5418a3(0x133)](0xbb8),process['exit']();}catch(_0x11ebb6){throw _0x11ebb6;}}async[a3_0x26869f(0x13d)](){const _0x2b2d14=a3_0x26869f;try{const _0x190f0a=Helper[_0x2b2d14(0xfa)](_0x2b2d14(0xff));let _0x506d61=_0x2b2d14(0x116);if(_0x190f0a[_0x2b2d14(0x105)]>0x0)for(const _0x2e80b1 of _0x190f0a){_0x506d61+=_0x190f0a['indexOf'](_0x2e80b1)+0x1+'.\x20'+_0x2e80b1+'\x0a';}else _0x506d61+=_0x2b2d14(0x141);_0x506d61+=_0x2b2d14(0xfb);const _0x5f0b86=await a3_0x9b6ed1[_0x2b2d14(0x13f)](_0x506d61);if(_0x5f0b86==0x1)await this[_0x2b2d14(0x126)]();else _0x5f0b86==0x2?await this[_0x2b2d14(0x113)]():(console[_0x2b2d14(0xfe)](_0x2b2d14(0x13a)),await this['accountType']());}catch(_0x28003b){throw _0x28003b;}}async['useSession'](_0x2af1a8,_0x5d4c47){const _0x34e417=a3_0x26869f;try{this[_0x34e417(0x144)]=_0x5d4c47;const _0xf97c4={'connectionRetries':0x5};this[_0x34e417(0x144)]&&(_0xf97c4[_0x34e417(0x104)]=new HttpsProxyAgent(this[_0x34e417(0x144)])),this[_0x34e417(0xf8)]=new StoreSession(_0x2af1a8),this[_0x34e417(0x10f)]=new TelegramClient(this['storeSession'],Config[_0x34e417(0x10b)],Config[_0x34e417(0x12d)],_0xf97c4),this[_0x34e417(0xf8)]['save'](),await this[_0x34e417(0x10f)]['start']({'phoneNumber':async()=>await a3_0x9b6ed1['text'](_0x34e417(0xf5)),'password':async()=>await a3_0x9b6ed1[_0x34e417(0x13f)](_0x34e417(0x108)),'phoneCode':async()=>await a3_0x9b6ed1[_0x34e417(0x13f)](_0x34e417(0x121)),'onError':_0x48d1a4=>{const _0x1e1857=_0x34e417;console[_0x1e1857(0xfe)](_0x48d1a4['message']);}});}catch(_0x827893){throw _0x827893;}}async[a3_0x26869f(0xfc)](){const _0x8139d=a3_0x26869f;try{a3_0x2fe309[_0x8139d(0x12e)]('Session\x20'+this[_0x8139d(0xf9)]+_0x8139d(0x112));while(this[_0x8139d(0x101)]==undefined){try{this[_0x8139d(0x101)]=await this[_0x8139d(0x10f)]['getEntity'](this[_0x8139d(0x100)]);break;}catch(_0x41711c){if(_0x41711c instanceof FloodWaitError){const _0x5de385=_0x41711c['seconds'];a3_0x2fe309[_0x8139d(0x130)](this[_0x8139d(0x10f)][_0x8139d(0xf9)][_0x8139d(0x122)]+'\x20|\x20FloodWait\x20'+_0x41711c),a3_0x2fe309[_0x8139d(0x12e)](this[_0x8139d(0x10f)]['session'][_0x8139d(0x122)]+_0x8139d(0x10e)+_0x5de385+'s'),await Helper[_0x8139d(0x133)]((_0x5de385+0x3)*0x3e8);}else throw _0x41711c;}}}catch(_0x366ffa){throw _0x366ffa;}}async['disconnect'](){const _0x4a82fb=a3_0x26869f;await this['client'][_0x4a82fb(0x11e)](),await this[_0x4a82fb(0x10f)]['destroy'](),this[_0x4a82fb(0x101)]=undefined,this['accountName']=undefined;}async['initWebView'](){const _0x5af8dd=a3_0x26869f;try{const _0x5ea62a=await this[_0x5af8dd(0x10f)]['invoke'](new Api['messages'][(_0x5af8dd(0xf6))]({'peer':this[_0x5af8dd(0x101)],'bot':this[_0x5af8dd(0x101)],'fromBotMenu':!![],'url':this[_0x5af8dd(0x12a)],'platform':_0x5af8dd(0x11c)}));a3_0x2fe309['info'](_0x5af8dd(0x128)+this['session']+_0x5af8dd(0xfd));const _0x2c2154=_0x5ea62a[_0x5af8dd(0x12a)];return Helper[_0x5af8dd(0x120)](_0x2c2154,0x3);}catch(_0x142d78){throw _0x142d78;}}}