const a3_0x25762d=a3_0x8b57;(function(_0x3f0ca4,_0x3afeb0){const _0x449357=a3_0x8b57,_0x110d23=_0x3f0ca4();while(!![]){try{const _0x2b23d2=-parseInt(_0x449357(0x1bd))/0x1+parseInt(_0x449357(0x1fe))/0x2+parseInt(_0x449357(0x1d2))/0x3*(parseInt(_0x449357(0x1bc))/0x4)+-parseInt(_0x449357(0x1f4))/0x5*(-parseInt(_0x449357(0x1cf))/0x6)+parseInt(_0x449357(0x1c9))/0x7*(-parseInt(_0x449357(0x1e8))/0x8)+-parseInt(_0x449357(0x1e1))/0x9*(-parseInt(_0x449357(0x211))/0xa)+parseInt(_0x449357(0x1f2))/0xb*(-parseInt(_0x449357(0x209))/0xc);if(_0x2b23d2===_0x3afeb0)break;else _0x110d23['push'](_0x110d23['shift']());}catch(_0x198a37){_0x110d23['push'](_0x110d23['shift']());}}}(a3_0x1b19,0x3a009));import a3_0x4b8c17 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a3_0x237133 from'../utils/logger.js';function a3_0x1b19(){const _0x173c66=['Query\x20','sessionCreation','android','Invalid\x20Input','seconds','url','12GljkrX','info','storeSession','save','TELEGRAM_APP_ID','You\x20don\x27t\x20have\x20any\x20Accounts,\x20please\x20create\x20first','\x0a\x20\x0aYou\x20already\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','20ZXJZWq','\x0a\x20\x0aYou\x20already\x20have\x20Account,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Account\x20:','init','onBoarding','Enter\x20your\x20Telegram\x20Password?','start','query-','\x20-\x20Resolving\x20Peer','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','419344ftlTJP','115011UTtrhW','accountType','useSession','stringify','Invalid\x20input,\x20Please\x20try\x20again','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again','\x0a\x20\x0aPlease\x20Enter\x20New\x20Query\x20','accounts/','serverAddress','\x20|\x20Sleep\x20','TELEGRAM_APP_HASH','1220009DWagkl','accounts','\x20-\x20Created','sessions-','Session\x20','disconnect','783318gzpWsK','message','log','6kDCWtx','resolvePeer','resetAccounts','peer','Old\x20Query\x20:\x20','queryModificaiton','text','includes','Your\x20Account\x20List\x20:\x0a\x20\x0a','Your\x20Query\x20Account\x20List\x20:\x0a\x20\x0a','notpx_bot','saveQueryFile','session','initWebView','delay','1597959fYOHrE','indexOf','getSession','readQueryFile','Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first','getEntity','\x0a\x20\x0aAvailable\x20Account\x20Type:\x20\x0a1.\x20Session\x20\x0a2.\x20Query\x0a\x20\x0aPlease\x20Entery\x20Your\x20Choice\x20:\x20','8SfOeeL','queryCreation','invoke','createDir','query','filter','getTelegramQuery','exit','destroy','<empty>','6177083qmXgqc','proxy','5JnIJdp','You\x20dont\x20have\x20any\x20Query\x20Account.','length','error','\x0a\x20\x0aPlease\x20Select\x20Query\x20Account\x20for\x20modification:','ERROR','https://image.notpx.app/','client','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','accountName','786202JWWbXx','\x20|\x20FloodWait\x20','messages','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Account\x20Name\x20:','bot'];a3_0x1b19=function(){return _0x173c66;};return a3_0x1b19();}import{FloodWaitError}from'telegram/errors/RPCErrorList.js';function a3_0x8b57(_0x359917,_0x42fc92){const _0x1b198a=a3_0x1b19();return a3_0x8b57=function(_0x8b574b,_0x5a830b){_0x8b574b=_0x8b574b-0x1b6;let _0x4da626=_0x1b198a[_0x8b574b];return _0x4da626;},a3_0x8b57(_0x359917,_0x42fc92);}import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';import{LogLevel}from'telegram/extensions/Logger.js';export class Telegram{[a3_0x25762d(0x20b)];constructor(){const _0x5c8231=a3_0x25762d;this[_0x5c8231(0x1fd)]=_0x5c8231(0x1ca),this[_0x5c8231(0x208)]=_0x5c8231(0x1fa),this['bot']=_0x5c8231(0x1dc);}async[a3_0x25762d(0x213)](){const _0x2dd6a7=a3_0x25762d;try{await this[_0x2dd6a7(0x1b6)]();}catch(_0x4d5342){console[_0x2dd6a7(0x1d1)](_0x4d5342),a3_0x237133[_0x2dd6a7(0x1f7)](''+JSON[_0x2dd6a7(0x1c0)](_0x4d5342));throw _0x4d5342;}}async['onBoarding'](){const _0x480556=a3_0x25762d;try{let _0x5cb015='Welcome\x20to\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x20\x0aYour\x20Session\x20List:\x0a';const _0xa6f3b=Helper[_0x480556(0x1e3)](_0x480556(0x1ca));if(_0xa6f3b['length']==0x0)_0x5cb015+=_0x480556(0x1f1);else for(const _0x4b8ed2 of _0xa6f3b){_0x5cb015+='-\x20'+_0x4b8ed2+'\x0a';}_0x5cb015+=_0x480556(0x1bb),_0x5cb015+='\x0a\x20\x0a1.\x20Create\x20Account\x20\x0a2.\x20Reset\x20Account\x20\x0a3.\x20Start\x20Bot\x0a4.\x20Query\x20modification\x0a\x20\x0aInput\x20your\x20choice\x20:';const _0x18c96d=await a3_0x4b8c17[_0x480556(0x1d8)](_0x5cb015);if(_0x18c96d==0x1)await this[_0x480556(0x1be)]();else{if(_0x18c96d==0x2)Helper[_0x480556(0x1d4)](),await Helper[_0x480556(0x1e0)](0xbb8),await this['onBoarding']();else{if(_0x18c96d==0x3)Helper['getSession'](this['accountName'])?.['length']==0x0&&(console[_0x480556(0x20a)](_0x480556(0x20e)),await this[_0x480556(0x1b6)]());else _0x18c96d==0x4?await this['queryModificaiton']():(console[_0x480556(0x1f7)](_0x480556(0x1c1)),await this[_0x480556(0x1b6)]());}}}catch(_0x406719){throw _0x406719;}}async[a3_0x25762d(0x1d7)](){const _0x1650b3=a3_0x25762d;try{const _0x4b82d9=Helper[_0x1650b3(0x1e3)](_0x1650b3(0x1ca)),_0x23698e=_0x4b82d9[_0x1650b3(0x1ed)](_0x2f2470=>_0x2f2470[_0x1650b3(0x1d9)](_0x1650b3(0x1ec)));let _0x1f40a6=_0x1650b3(0x1db);for(const _0x4db92e of _0x23698e){_0x1f40a6+=_0x4b82d9[_0x1650b3(0x1e2)](_0x4db92e)+0x1+'.\x20'+_0x4db92e+'\x0a';}_0x23698e['length']==0x0?(console['log'](_0x1650b3(0x1f5)),await this[_0x1650b3(0x1b6)]()):_0x1f40a6+=_0x1650b3(0x1f8);const _0x3d2c18=await a3_0x4b8c17[_0x1650b3(0x1d8)](_0x1f40a6);if(_0x23698e[_0x3d2c18-0x1]!=undefined){const _0x5797da=_0x23698e[_0x3d2c18-0x1];this[_0x1650b3(0x1fd)]=_0x1650b3(0x1c5)+_0x5797da;const _0xedb672=_0x1650b3(0x1d6)+Helper[_0x1650b3(0x1e4)](this[_0x1650b3(0x1fd)]+'/query.txt')+_0x1650b3(0x1c4),_0x394bac=await a3_0x4b8c17[_0x1650b3(0x1d8)](_0xedb672);await Helper[_0x1650b3(0x1dd)](this[_0x1650b3(0x1fd)],_0x394bac),await Helper['delay'](0xbb8),await this['onBoarding']();}else console[_0x1650b3(0x1f7)](_0x1650b3(0x1c1)),await this[_0x1650b3(0x1d7)]();}catch(_0x3cdb3a){throw _0x3cdb3a;}}async[a3_0x25762d(0x204)](){const _0x19371f=a3_0x25762d;try{if(Config[_0x19371f(0x20d)]==undefined||Config[_0x19371f(0x1c8)]==undefined)throw new Error(_0x19371f(0x1e5));const _0x3d1638=Helper[_0x19371f(0x1e3)]('accounts');let _0x31fd08=_0x19371f(0x1da);for(const _0x58de43 of _0x3d1638){_0x31fd08+=_0x3d1638[_0x19371f(0x1e2)](_0x58de43)+0x1+'.\x20'+_0x58de43+'\x0a';}_0x3d1638[_0x19371f(0x1f6)]==0x0?_0x31fd08+=_0x19371f(0x1c2):_0x31fd08+=_0x19371f(0x20f);const _0x4bcd9f=await a3_0x4b8c17[_0x19371f(0x1d8)](_0x31fd08);this['accountName']=Helper[_0x19371f(0x1eb)](_0x19371f(0x1cc)+_0x4bcd9f),await this[_0x19371f(0x1bf)](this['accountName']),await this[_0x19371f(0x1ce)](),a3_0x237133[_0x19371f(0x20a)](_0x19371f(0x1cd)+this['accountName']+_0x19371f(0x1cb)),console[_0x19371f(0x1d1)](_0x19371f(0x1cd)+_0x4bcd9f+_0x19371f(0x1c3)),this[_0x19371f(0x20b)][_0x19371f(0x20c)](),await Helper['delay'](0xbb8),process[_0x19371f(0x1ef)]();}catch(_0x55d600){throw _0x55d600;}}async[a3_0x25762d(0x1e9)](){const _0x334be1=a3_0x25762d;try{const _0x978300=Helper[_0x334be1(0x1e3)]('accounts');let _0xacc630=_0x334be1(0x1da);for(const _0x1d4a5e of _0x978300){_0xacc630+=_0x978300['indexOf'](_0x1d4a5e)+0x1+'.\x20'+_0x1d4a5e+'\x0a';}_0x978300[_0x334be1(0x1f6)]==0x0?_0xacc630+=_0x334be1(0x201):_0xacc630+=_0x334be1(0x212);const _0x36eb01=await a3_0x4b8c17[_0x334be1(0x1d8)](_0xacc630);this[_0x334be1(0x1fd)]=Helper['createDir'](_0x334be1(0x1b9)+_0x36eb01);let _0x294388='Please\x20Enter\x20Telegram\x20Query\x20:\x20';const _0x532031=await a3_0x4b8c17[_0x334be1(0x1d8)](_0x294388);await Helper[_0x334be1(0x1dd)](this[_0x334be1(0x1fd)],_0x532031),a3_0x237133['info']('Query\x20'+this['accountName']+_0x334be1(0x1cb)),console[_0x334be1(0x1d1)](_0x334be1(0x203)+_0x36eb01+_0x334be1(0x1c3)),await Helper['delay'](0xbb8),process[_0x334be1(0x1ef)]();}catch(_0x401725){throw _0x401725;}}async[a3_0x25762d(0x1be)](){const _0x58a750=a3_0x25762d;try{const _0x1acdd4=Helper['getSession'](_0x58a750(0x1ca));let _0x1efdac=_0x58a750(0x1da);if(_0x1acdd4[_0x58a750(0x1f6)]>0x0)for(const _0x57129d of _0x1acdd4){_0x1efdac+=_0x1acdd4[_0x58a750(0x1e2)](_0x57129d)+0x1+'.\x20'+_0x57129d+'\x0a';}else _0x1efdac+='<empty>\x0a';_0x1efdac+=_0x58a750(0x1e7);const _0x390d8f=await a3_0x4b8c17[_0x58a750(0x1d8)](_0x1efdac);if(_0x390d8f==0x1)await this['sessionCreation']();else _0x390d8f==0x2?await this[_0x58a750(0x1e9)]():(console[_0x58a750(0x1d1)](_0x58a750(0x206)),await this[_0x58a750(0x1be)]());}catch(_0x354752){throw _0x354752;}}async[a3_0x25762d(0x1bf)](_0x47c033,_0x52beb1){const _0xa004f1=a3_0x25762d;try{this[_0xa004f1(0x1f3)]=_0x52beb1;const _0x3ab2ba={'connectionRetries':0x5};this[_0xa004f1(0x1f3)]&&(_0x3ab2ba['agent']=new HttpsProxyAgent(this[_0xa004f1(0x1f3)])),this[_0xa004f1(0x20b)]=new StoreSession(_0x47c033),this['client']=new TelegramClient(this[_0xa004f1(0x20b)],Config['TELEGRAM_APP_ID'],Config[_0xa004f1(0x1c8)],_0x3ab2ba),this[_0xa004f1(0x1fb)]['setLogLevel'](LogLevel[_0xa004f1(0x1f9)]),this[_0xa004f1(0x20b)][_0xa004f1(0x20c)](),await this[_0xa004f1(0x1fb)][_0xa004f1(0x1b8)]({'phoneNumber':async()=>await a3_0x4b8c17[_0xa004f1(0x1d8)](_0xa004f1(0x210)),'password':async()=>await a3_0x4b8c17[_0xa004f1(0x1d8)](_0xa004f1(0x1b7)),'phoneCode':async()=>await a3_0x4b8c17[_0xa004f1(0x1d8)](_0xa004f1(0x1fc)),'onError':_0xe6e8c2=>{const _0xb86039=_0xa004f1;console[_0xb86039(0x1d1)](_0xe6e8c2[_0xb86039(0x1d0)]);}});}catch(_0x5dccf6){throw _0x5dccf6;}}async[a3_0x25762d(0x1d3)](_0x48d32c){const _0xcce7f8=a3_0x25762d;try{a3_0x237133[_0xcce7f8(0x20a)](_0xcce7f8(0x1cd)+this[_0xcce7f8(0x1de)]+_0xcce7f8(0x1ba));while(this[_0xcce7f8(0x1d5)]==undefined){try{this[_0xcce7f8(0x1d5)]=await this[_0xcce7f8(0x1fb)][_0xcce7f8(0x1e6)](this[_0xcce7f8(0x202)]);break;}catch(_0xebcc9f){if(_0xebcc9f instanceof FloodWaitError){const _0x4f9b47=_0xebcc9f[_0xcce7f8(0x207)];a3_0x237133['warn'](this[_0xcce7f8(0x1fb)]['session'][_0xcce7f8(0x1c6)]+'\x20|\x20FloodWait\x20'+_0xebcc9f),a3_0x237133[_0xcce7f8(0x20a)](this[_0xcce7f8(0x1fb)][_0xcce7f8(0x1de)][_0xcce7f8(0x1c6)]+_0xcce7f8(0x1c7)+_0x4f9b47+'s'),await Helper[_0xcce7f8(0x1e0)](_0x4f9b47*0x3e8,_0x48d32c,this[_0xcce7f8(0x1fb)][_0xcce7f8(0x1de)]['serverAddress']+_0xcce7f8(0x1ff)+_0xebcc9f);}else throw _0xebcc9f;}}}catch(_0x122c34){throw _0x122c34;}}async['disconnect'](){const _0x590ff8=a3_0x25762d;await this['client'][_0x590ff8(0x1ce)](),await this[_0x590ff8(0x1fb)][_0x590ff8(0x1f0)](),this['peer']=undefined,this[_0x590ff8(0x1fd)]=undefined;}async[a3_0x25762d(0x1df)](){const _0x28ed1f=a3_0x25762d;try{const _0x5d8895=await this[_0x28ed1f(0x1fb)][_0x28ed1f(0x1ea)](new Api[(_0x28ed1f(0x200))]['RequestWebView']({'peer':this[_0x28ed1f(0x1d5)],'bot':this[_0x28ed1f(0x1d5)],'fromBotMenu':!![],'url':this[_0x28ed1f(0x208)],'platform':_0x28ed1f(0x205)}));a3_0x237133[_0x28ed1f(0x20a)](_0x28ed1f(0x1cd)+this[_0x28ed1f(0x1de)]+'\x20-\x20Webview\x20Connected');const _0x94d888=_0x5d8895[_0x28ed1f(0x208)];return Helper[_0x28ed1f(0x1ee)](_0x94d888,0x3);}catch(_0x1136cd){throw _0x1136cd;}}}