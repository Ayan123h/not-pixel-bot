const a2_0x3f3eb1=a2_0x3b04;(function(_0x3ee487,_0x2040a0){const _0x1b9ca2=a2_0x3b04,_0x45a581=_0x3ee487();while(!![]){try{const _0xb43e9=-parseInt(_0x1b9ca2(0x10f))/0x1*(parseInt(_0x1b9ca2(0xfb))/0x2)+-parseInt(_0x1b9ca2(0xda))/0x3+parseInt(_0x1b9ca2(0xe7))/0x4+-parseInt(_0x1b9ca2(0x101))/0x5*(parseInt(_0x1b9ca2(0xd6))/0x6)+parseInt(_0x1b9ca2(0x103))/0x7+parseInt(_0x1b9ca2(0xf0))/0x8*(parseInt(_0x1b9ca2(0xef))/0x9)+-parseInt(_0x1b9ca2(0xe8))/0xa*(-parseInt(_0x1b9ca2(0xd5))/0xb);if(_0xb43e9===_0x2040a0)break;else _0x45a581['push'](_0x45a581['shift']());}catch(_0x32bdea){_0x45a581['push'](_0x45a581['shift']());}}}(a2_0x8716,0x9fbea));function a2_0x3b04(_0x436f2d,_0x4e7efb){const _0x871647=a2_0x8716();return a2_0x3b04=function(_0x3b04ff,_0x4b9ee8){_0x3b04ff=_0x3b04ff-0xcf;let _0x249297=_0x871647[_0x3b04ff];return _0x249297;},a2_0x3b04(_0x436f2d,_0x4e7efb);}import{API}from'../api/api.js';import{Helper}from'../utils/helper.js';export class Core extends API{constructor(_0xae9546,_0x10f0f9,_0x378769,_0x1b1fa8){const _0x19edbb=a2_0x3b04;super(_0x10f0f9,_0x1b1fa8,_0x19edbb(0xf8),'notpx.app',_0x19edbb(0x106),_0x19edbb(0xd1)),this[_0x19edbb(0xed)]=_0xae9546,this[_0x19edbb(0x10a)]=_0x10f0f9,this[_0x19edbb(0xde)]=_0x378769,this['colorList']=[_0x19edbb(0xd7),_0x19edbb(0xfc),_0x19edbb(0x10e),_0x19edbb(0x10d),_0x19edbb(0xeb),_0x19edbb(0xdb),_0x19edbb(0xe2),_0x19edbb(0x10c),'#FF99AA'],this[_0x19edbb(0xf6)]=0x0,this[_0x19edbb(0xfe)]={'reChargeSpeed':!![],'energyLimit':!![],'paintReward':!![]};}async[a2_0x3f3eb1(0xf5)](_0x2f637f=![]){const _0x282542=a2_0x3f3eb1;try{if(_0x2f637f)await Helper[_0x282542(0xf7)](0x3e8,this[_0x282542(0xed)],'Getting\x20Mining\x20Status...',this);const _0x1d69f2=await this[_0x282542(0xee)](_0x282542(0xd3),'GET');if(_0x1d69f2[_0x282542(0xf2)]==0xc8){this['mining']=_0x1d69f2;if(_0x2f637f)await Helper[_0x282542(0xf7)](0x7d0,this[_0x282542(0xed)],_0x282542(0xe6),this);}else throw Error('Failed\x20To\x20Get\x20Mining\x20Status');}catch(_0x2795bb){throw _0x2795bb;}}async[a2_0x3f3eb1(0xdf)](){const _0x59c2ee=a2_0x3f3eb1,_0x1ac67c=0x754d7,_0x34fdd9=0x7d211,_0x21fa21=0x3e8,_0x79d3a6=[],_0x47e4de=_0x1ac67c%_0x21fa21,_0x231d3=Math[_0x59c2ee(0x110)](_0x1ac67c/_0x21fa21),_0x9e131b=_0x34fdd9%_0x21fa21,_0x1db077=Math['floor'](_0x34fdd9/_0x21fa21);for(let _0x26716c=_0x231d3;_0x26716c<=_0x1db077;_0x26716c++){for(let _0x6ae26b=_0x26716c===_0x231d3?_0x47e4de:0x0;_0x6ae26b<=(_0x26716c===_0x1db077?_0x9e131b:_0x21fa21-0x1);_0x6ae26b++){const _0x2b15f9=_0x26716c*_0x21fa21+_0x6ae26b;_0x79d3a6['push'](_0x2b15f9);}}const _0x197e83=Math[_0x59c2ee(0x110)](Math[_0x59c2ee(0xd4)]()*_0x79d3a6[_0x59c2ee(0xd8)]);return _0x79d3a6[_0x197e83];}async[a2_0x3f3eb1(0x108)](){const _0x27f679=a2_0x3f3eb1,_0x4ec338=await this[_0x27f679(0xdf)](),_0x41910a=Helper[_0x27f679(0x100)](this[_0x27f679(0xff)]);try{await Helper[_0x27f679(0xf7)](0x3e8,this[_0x27f679(0xed)],'Start\x20Painting\x20On\x20Block\x20No\x20'+_0x4ec338+_0x27f679(0xf4),this);const _0x12397d={'pixelId':_0x4ec338,'newColor':_0x27f679(0xd0)},_0x56fb56=await this[_0x27f679(0xee)](_0x27f679(0xd9),_0x27f679(0x10b),undefined,_0x12397d);_0x56fb56['status']==0xc8?(this[_0x27f679(0xd2)][_0x27f679(0xe3)]=_0x56fb56[_0x27f679(0x104)],await Helper[_0x27f679(0xf7)](0x7d0,this[_0x27f679(0xed)],'Successfully\x20Painting\x20On\x20Block\x20'+_0x4ec338+',\x20with\x20color\x20'+_0x41910a,this),await this[_0x27f679(0xf5)]()):await Helper[_0x27f679(0xf7)](0x7d0,this[_0x27f679(0xed)],_0x27f679(0xdc)+_0x4ec338,this);}catch(_0xa55156){if(_0xa55156['message'][_0x27f679(0xe5)](_0x27f679(0xcf)))await Helper['delay'](0x7d0,this[_0x27f679(0xed)],_0x27f679(0xdc)+_0x4ec338+'\x20-\x20'+_0xa55156['message'],this);else throw _0xa55156;}}async['claimMining'](){const _0x14666e=a2_0x3f3eb1;try{await Helper['delay'](0x3e8,this[_0x14666e(0xed)],_0x14666e(0x105),this);const _0x244b98=await this['fetch'](_0x14666e(0x111),_0x14666e(0xec));_0x244b98[_0x14666e(0xf2)]==0xc8?(await Helper[_0x14666e(0xf7)](0x7d0,this[_0x14666e(0xed)],_0x14666e(0xf3),this),await this[_0x14666e(0xf5)]()):await Helper['delay'](0x1388,this[_0x14666e(0xed)],_0x14666e(0xfa),this);}catch(_0x281b8c){await Helper[_0x14666e(0xf7)](0x7d0,this[_0x14666e(0xed)],_0x14666e(0xdd),this);}}async[a2_0x3f3eb1(0xf1)](_0x34d7d4){const _0x5b4800=a2_0x3f3eb1;try{await Helper[_0x5b4800(0xf7)](0x1f4,this['account'],_0x5b4800(0xe0)+_0x34d7d4+_0x5b4800(0xf4),this);const _0x15a655=await this[_0x5b4800(0xee)](_0x5b4800(0x112)+_0x34d7d4,_0x5b4800(0xec));_0x15a655['status']==0xc8?(await Helper[_0x5b4800(0xf7)](0x3e8,this[_0x5b4800(0xed)],_0x5b4800(0x109)+_0x34d7d4,this),await this[_0x5b4800(0xf5)]()):await Helper['delay'](0x3e8,this[_0x5b4800(0xed)],_0x5b4800(0xe4)+_0x34d7d4+_0x5b4800(0xf9),this);}catch(_0x2ff3ee){await Helper[_0x5b4800(0xf7)](0x7d0,this['account'],_0x5b4800(0xe4)+_0x34d7d4+_0x5b4800(0xf9),this);}}async[a2_0x3f3eb1(0xea)](_0x2a403e){const _0x3c19d1=a2_0x3f3eb1;try{await Helper[_0x3c19d1(0xf7)](0x1f4,this[_0x3c19d1(0xed)],'Try\x20To\x20Upgrading\x20'+_0x2a403e+'...',this);const _0xf7b59c=await this['fetch'](_0x3c19d1(0xfd)+_0x2a403e,_0x3c19d1(0xec));if(_0xf7b59c[_0x3c19d1(0xf2)]==0xc8)await Helper[_0x3c19d1(0xf7)](0x3e8,this[_0x3c19d1(0xed)],_0x3c19d1(0x107)+_0x2a403e,this),await this[_0x3c19d1(0xf5)]();else throw Error(_0x3c19d1(0xe1)+_0x2a403e);}catch(_0x4769f7){this[_0x3c19d1(0xfe)][_0x2a403e]=![],await Helper[_0x3c19d1(0xf7)](0x7d0,this[_0x3c19d1(0xed)],_0x3c19d1(0xe9)+_0x2a403e+_0x3c19d1(0x102),this);}}}function a2_0x8716(){const _0x49b42c=['Successfully\x20Upgrade\x20','startPainting','Successfully\x20Complete\x20Task\x20X\x20','query','POST','#FF99AA','#00CCC0','#7EED56','5027ZVdVOR','floor','/api/v1/mining/claim','/api/v1/mining/task/check/x?name=','fetch\x20failed','#000000','https://image.notpx.app/','mining','/api/v1/mining/status','random','11Amaelu','6ZJEnwL','#e46e6e','length','/api/v1/repaint/start','113487GeVKyK','#94B3FF','Failed\x20to\x20Painting\x20on\x20Block\x20','Failed\x20To\x20Claim\x20Mining\x20Reward,\x20Skipping\x20...','queryObj','getRandomPixelFromCoverage','Try\x20To\x20Completing\x20Missions\x20X\x20','Failed\x20To\x20Upgrade\x20','#E4ABFF','userBalance','Failed\x20to\x20Complete\x20Task\x20X\x20','includes','Successfully\x20Get\x20Mining\x20Status','2020376TkSYYA','6773230pNRDIt','Failed\x20Upgrade\x20','upgrade','#51E9F4','GET','account','fetch','18vrWMxT','1570104ZCESQI','completeMissionsX','status','Successfully\x20Claim\x20Mining\x20Reward','...','getMiningStatus','completeGameErrorCount','delay','https://notpx.app',',\x20Skipping...','Failed\x20To\x20Claim\x20Mining\x20Reward,\x20Skipping...','248fbJUuT','#FFD635','/api/v1/mining/boost/check/','upgradable','colorList','randomArr','3744490hOXaaT','\x20-\x20Insufficient\x20balance','3426122iyOZSQ','balance','Start\x20Claiming\x20Mining\x20Balance...','https://image.notpx.app'];a2_0x8716=function(){return _0x49b42c;};return a2_0x8716();}