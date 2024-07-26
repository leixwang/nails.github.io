import{L as O,c as et,s as oe,g as ce,E as le,F as ue,b as de,a as fe,G as he,m as me,l as vt,h as mt,M as ke,N as ye,O as ge,i as ve,P as pe,Q as Te,S as be,T as Vt,U as zt,V as Bt,W as Nt,X as Rt,Y as Ht,Z as Gt,$ as xe,j as we,B as _e,a0 as De,a1 as Ce,a2 as Se,a3 as Ee,a4 as Me,a5 as Ae,a6 as Ye}from"./theme.CVw5BjL_.js";import"./framework.CWFr0Pkc.js";var xt="day",Ie="week",Le="year",Fe="YYYY-MM-DDTHH:mm:ssZ",We="isoweek";const Oe=function(t,e,s){var i=function(b,w){var v=(w?s.utc:s)().year(b).startOf(Le),S=4-v.isoWeekday();return v.isoWeekday()>4&&(S+=7),v.add(S,xt)},r=function(b){return b.add(4-b.isoWeekday(),xt)},o=e.prototype;o.isoWeekYear=function(){var y=r(this);return y.year()},o.isoWeek=function(y){if(!this.$utils().u(y))return this.add((y-this.isoWeek())*7,xt);var b=r(this),w=i(this.isoWeekYear(),this.$u);return b.diff(w,Ie)+1},o.isoWeekday=function(y){return this.$utils().u(y)?this.day()||7:this.day(this.day()%7?y:y-7)};var u=o.startOf;o.startOf=function(y,b){var w=this.$utils(),v=w.u(b)?!0:b,S=w.p(y);return S===We?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(y,b)}};var Pe=function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(s,i,r){return i||r.slice(1)})},Ve={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ze=function(e,s){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(i,r,o){var u=o&&o.toUpperCase();return r||s[o]||Ve[o]||Pe(s[u])})},Be=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,Ne=/\d/,kt=/\d\d/,Re=/\d{3}/,He=/\d{4}/,R=/\d\d?/,Ge=/[+-]?\d+/,Ue=/[+-]\d\d:?(\d\d)?|Z/,ot=/\d*[^-_:/,()\s\d]+/,J={},jt=function(e){return e=+e,e+(e>68?1900:2e3)};function Xe(t){if(!t||t==="Z")return 0;var e=t.match(/([+-]|\d\d)/g),s=+(e[1]*60)+(+e[2]||0);return s===0?0:e[0]==="+"?-s:s}var z=function(e){return function(s){this[e]=+s}},Ut=[Ue,function(t){var e=this.zone||(this.zone={});e.offset=Xe(t)}],wt=function(e){var s=J[e];return s&&(s.indexOf?s:s.s.concat(s.f))},Xt=function(e,s){var i,r=J,o=r.meridiem;if(!o)i=e===(s?"pm":"PM");else for(var u=1;u<=24;u+=1)if(e.indexOf(o(u,0,s))>-1){i=u>12;break}return i},Ze={A:[ot,function(t){this.afternoon=Xt(t,!1)}],a:[ot,function(t){this.afternoon=Xt(t,!0)}],S:[Ne,function(t){this.milliseconds=+t*100}],SS:[kt,function(t){this.milliseconds=+t*10}],SSS:[Re,function(t){this.milliseconds=+t}],s:[R,z("seconds")],ss:[R,z("seconds")],m:[R,z("minutes")],mm:[R,z("minutes")],H:[R,z("hours")],h:[R,z("hours")],HH:[R,z("hours")],hh:[R,z("hours")],D:[R,z("day")],DD:[kt,z("day")],Do:[ot,function(t){var e=J,s=e.ordinal,i=t.match(/\d+/);if(this.day=i[0],!!s)for(var r=1;r<=31;r+=1)s(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[R,z("month")],MM:[kt,z("month")],MMM:[ot,function(t){var e=wt("months"),s=wt("monthsShort"),i=(s||e.map(function(r){return r.slice(0,3)})).indexOf(t)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[ot,function(t){var e=wt("months"),s=e.indexOf(t)+1;if(s<1)throw new Error;this.month=s%12||s}],Y:[Ge,z("year")],YY:[kt,function(t){this.year=jt(t)}],YYYY:[He,z("year")],Z:Ut,ZZ:Ut};function qe(t){var e=t.afternoon;if(e!==void 0){var s=t.hours;e?s<12&&(t.hours+=12):s===12&&(t.hours=0),delete t.afternoon}}function je(t){t=ze(t,J&&J.formats);for(var e=t.match(Be),s=e.length,i=0;i<s;i+=1){var r=e[i],o=Ze[r],u=o&&o[0],y=o&&o[1];y?e[i]={regex:u,parser:y}:e[i]=r.replace(/^\[|\]$/g,"")}return function(b){for(var w={},v=0,S=0;v<s;v+=1){var F=e[v];if(typeof F=="string")S+=F.length;else{var A=F.regex,I=F.parser,T=b.slice(S),P=A.exec(T),B=P[0];I.call(w,B),b=b.replace(B,"")}}return qe(w),w}}var Qe=function(e,s,i){try{if(["x","X"].indexOf(s)>-1)return new Date((s==="X"?1e3:1)*e);var r=je(s),o=r(e),u=o.year,y=o.month,b=o.day,w=o.hours,v=o.minutes,S=o.seconds,F=o.milliseconds,A=o.zone,I=new Date,T=b||(!u&&!y?I.getDate():1),P=u||I.getFullYear(),B=0;u&&!y||(B=y>0?y-1:I.getMonth());var Z=w||0,q=v||0,j=S||0,Q=F||0;return A?new Date(Date.UTC(P,B,T,Z,q,j,Q+A.offset*60*1e3)):i?new Date(Date.UTC(P,B,T,Z,q,j,Q)):new Date(P,B,T,Z,q,j,Q)}catch{return new Date("")}};const Je=function(t,e,s){s.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(jt=t.parseTwoDigitYear);var i=e.prototype,r=i.parse;i.parse=function(o){var u=o.date,y=o.utc,b=o.args;this.$u=y;var w=b[1];if(typeof w=="string"){var v=b[2]===!0,S=b[3]===!0,F=v||S,A=b[2];S&&(A=b[2]),J=this.$locale(),!v&&A&&(J=s.Ls[A]),this.$d=Qe(u,w,y),this.init(),A&&A!==!0&&(this.$L=this.locale(A).$L),F&&u!=this.format(w)&&(this.$d=new Date("")),J={}}else if(w instanceof Array)for(var I=w.length,T=1;T<=I;T+=1){b[1]=w[T-1];var P=s.apply(this,b);if(P.isValid()){this.$d=P.$d,this.$L=P.$L,this.init();break}T===I&&(this.$d=new Date(""))}else r.call(this,o)}},Ke=function(t,e){var s=e.prototype,i=s.format;s.format=function(r){var o=this,u=this.$locale();if(!this.isValid())return i.bind(this)(r);var y=this.$utils(),b=r||Fe,w=b.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(v){switch(v){case"Q":return Math.ceil((o.$M+1)/3);case"Do":return u.ordinal(o.$D);case"gggg":return o.weekYear();case"GGGG":return o.isoWeekYear();case"wo":return u.ordinal(o.week(),"W");case"w":case"ww":return y.s(o.week(),v==="w"?1:2,"0");case"W":case"WW":return y.s(o.isoWeek(),v==="W"?1:2,"0");case"k":case"kk":return y.s(String(o.$H===0?24:o.$H),v==="k"?1:2,"0");case"X":return Math.floor(o.$d.getTime()/1e3);case"x":return o.$d.getTime();case"z":return"["+o.offsetName()+"]";case"zzz":return"["+o.offsetName("long")+"]";default:return v}});return i.bind(this)(w)}};var _t=function(){var t=function(p,a,f,h){for(f=f||{},h=p.length;h--;f[p[h]]=a);return f},e=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],s=[1,25],i=[1,26],r=[1,27],o=[1,28],u=[1,29],y=[1,30],b=[1,31],w=[1,9],v=[1,10],S=[1,11],F=[1,12],A=[1,13],I=[1,14],T=[1,15],P=[1,16],B=[1,18],Z=[1,19],q=[1,20],j=[1,21],Q=[1,22],rt=[1,24],dt=[1,32],m={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(a,f,h,c,k,n,W){var d=n.length-1;switch(k){case 1:return n[d-1];case 2:this.$=[];break;case 3:n[d-1].push(n[d]),this.$=n[d-1];break;case 4:case 5:this.$=n[d];break;case 6:case 7:this.$=[];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setDateFormat(n[d].substr(11)),this.$=n[d].substr(11);break;case 16:c.enableInclusiveEndDates(),this.$=n[d].substr(18);break;case 17:c.TopAxis(),this.$=n[d].substr(8);break;case 18:c.setAxisFormat(n[d].substr(11)),this.$=n[d].substr(11);break;case 19:c.setTickInterval(n[d].substr(13)),this.$=n[d].substr(13);break;case 20:c.setExcludes(n[d].substr(9)),this.$=n[d].substr(9);break;case 21:c.setIncludes(n[d].substr(9)),this.$=n[d].substr(9);break;case 22:c.setTodayMarker(n[d].substr(12)),this.$=n[d].substr(12);break;case 24:c.setDiagramTitle(n[d].substr(6)),this.$=n[d].substr(6);break;case 25:this.$=n[d].trim(),c.setAccTitle(this.$);break;case 26:case 27:this.$=n[d].trim(),c.setAccDescription(this.$);break;case 28:c.addSection(n[d].substr(8)),this.$=n[d].substr(8);break;case 30:c.addTask(n[d-1],n[d]),this.$="task";break;case 31:this.$=n[d-1],c.setClickEvent(n[d-1],n[d],null);break;case 32:this.$=n[d-2],c.setClickEvent(n[d-2],n[d-1],n[d]);break;case 33:this.$=n[d-2],c.setClickEvent(n[d-2],n[d-1],null),c.setLink(n[d-2],n[d]);break;case 34:this.$=n[d-3],c.setClickEvent(n[d-3],n[d-2],n[d-1]),c.setLink(n[d-3],n[d]);break;case 35:this.$=n[d-2],c.setClickEvent(n[d-2],n[d],null),c.setLink(n[d-2],n[d-1]);break;case 36:this.$=n[d-3],c.setClickEvent(n[d-3],n[d-1],n[d]),c.setLink(n[d-3],n[d-2]);break;case 37:this.$=n[d-1],c.setLink(n[d-1],n[d]);break;case 38:case 44:this.$=n[d-1]+" "+n[d];break;case 39:case 40:case 42:this.$=n[d-2]+" "+n[d-1]+" "+n[d];break;case 41:case 43:this.$=n[d-3]+" "+n[d-2]+" "+n[d-1]+" "+n[d];break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:s,13:i,14:r,15:o,16:u,17:y,18:b,19:w,20:v,21:S,22:F,23:A,24:I,25:T,26:P,27:B,28:Z,30:q,32:j,33:Q,34:23,35:rt,37:dt},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:33,11:17,12:s,13:i,14:r,15:o,16:u,17:y,18:b,19:w,20:v,21:S,22:F,23:A,24:I,25:T,26:P,27:B,28:Z,30:q,32:j,33:Q,34:23,35:rt,37:dt},t(e,[2,5]),t(e,[2,6]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),{29:[1,34]},{31:[1,35]},t(e,[2,27]),t(e,[2,28]),t(e,[2,29]),{36:[1,36]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),{38:[1,37],40:[1,38]},t(e,[2,4]),t(e,[2,25]),t(e,[2,26]),t(e,[2,30]),t(e,[2,31],{39:[1,39],40:[1,40]}),t(e,[2,37],{38:[1,41]}),t(e,[2,32],{40:[1,42]}),t(e,[2,33]),t(e,[2,35],{39:[1,43]}),t(e,[2,34]),t(e,[2,36])],defaultActions:{},parseError:function(a,f){if(f.recoverable)this.trace(a);else{var h=new Error(a);throw h.hash=f,h}},parse:function(a){var f=this,h=[0],c=[],k=[null],n=[],W=this.table,d="",l=0,g=0,Y=2,C=1,E=n.slice.call(arguments,1),D=Object.create(this.lexer),M={yy:{}};for(var nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,nt)&&(M.yy[nt]=this.yy[nt]);D.setInput(a,M.yy),M.yy.lexer=D,M.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var at=D.yylloc;n.push(at);var ne=D.options&&D.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ae(){var U;return U=c.pop()||D.lex()||C,typeof U!="number"&&(U instanceof Array&&(c=U,U=c.pop()),U=f.symbols_[U]||U),U}for(var V,K,N,Tt,tt={},ft,G,Pt,ht;;){if(K=h[h.length-1],this.defaultActions[K]?N=this.defaultActions[K]:((V===null||typeof V>"u")&&(V=ae()),N=W[K]&&W[K][V]),typeof N>"u"||!N.length||!N[0]){var bt="";ht=[];for(ft in W[K])this.terminals_[ft]&&ft>Y&&ht.push("'"+this.terminals_[ft]+"'");D.showPosition?bt="Parse error on line "+(l+1)+`:
`+D.showPosition()+`
Expecting `+ht.join(", ")+", got '"+(this.terminals_[V]||V)+"'":bt="Parse error on line "+(l+1)+": Unexpected "+(V==C?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(bt,{text:D.match,token:this.terminals_[V]||V,line:D.yylineno,loc:at,expected:ht})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+K+", token: "+V);switch(N[0]){case 1:h.push(V),k.push(D.yytext),n.push(D.yylloc),h.push(N[1]),V=null,g=D.yyleng,d=D.yytext,l=D.yylineno,at=D.yylloc;break;case 2:if(G=this.productions_[N[1]][1],tt.$=k[k.length-G],tt._$={first_line:n[n.length-(G||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(G||1)].first_column,last_column:n[n.length-1].last_column},ne&&(tt._$.range=[n[n.length-(G||1)].range[0],n[n.length-1].range[1]]),Tt=this.performAction.apply(tt,[d,g,l,M.yy,N[1],k,n].concat(E)),typeof Tt<"u")return Tt;G&&(h=h.slice(0,-1*G*2),k=k.slice(0,-1*G),n=n.slice(0,-1*G)),h.push(this.productions_[N[1]][0]),k.push(tt.$),n.push(tt._$),Pt=W[h[h.length-2]][h[h.length-1]],h.push(Pt);break;case 3:return!0}}return!0}},_=function(){var p={EOF:1,parseError:function(f,h){if(this.yy.parser)this.yy.parser.parseError(f,h);else throw new Error(f)},setInput:function(a,f){return this.yy=f||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var f=a.match(/(?:\r\n?|\n).*/g);return f?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var f=a.length,h=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-f),this.offset-=f;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var k=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===c.length?this.yylloc.first_column:0)+c[c.length-h.length].length-h[0].length:this.yylloc.first_column-f},this.options.ranges&&(this.yylloc.range=[k[0],k[0]+this.yyleng-f]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),f=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+f+"^"},test_match:function(a,f){var h,c,k;if(this.options.backtrack_lexer&&(k={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(k.yylloc.range=this.yylloc.range.slice(0))),c=a[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],h=this.performAction.call(this,this.yy,this,f,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var n in k)this[n]=k[n];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,f,h,c;this._more||(this.yytext="",this.match="");for(var k=this._currentRules(),n=0;n<k.length;n++)if(h=this._input.match(this.rules[k[n]]),h&&(!f||h[0].length>f[0].length)){if(f=h,c=n,this.options.backtrack_lexer){if(a=this.test_match(h,k[n]),a!==!1)return a;if(this._backtrack){f=!1;continue}else return!1}else if(!this.options.flex)break}return f?(a=this.test_match(f,k[c]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var f=this.next();return f||this.lex()},begin:function(f){this.conditionStack.push(f)},popState:function(){var f=this.conditionStack.length-1;return f>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(f){return f=this.conditionStack.length-1-Math.abs(f||0),f>=0?this.conditionStack[f]:"INITIAL"},pushState:function(f){this.begin(f)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(f,h,c,k){switch(c){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 40;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};return p}();m.lexer=_;function x(){this.yy={}}return x.prototype=m,m.Parser=x,new x}();_t.parser=_t;const $e=_t;O.extend(Oe);O.extend(Je);O.extend(Ke);let H="",Et="",Mt,At="",ct=[],lt=[],Yt={},It=[],pt=[],it="",Lt="";const Qt=["active","done","crit","milestone"];let Ft=[],ut=!1,Wt=!1,Ot="sunday",Dt=0;const ts=function(){It=[],pt=[],it="",Ft=[],yt=0,St=void 0,gt=void 0,L=[],H="",Et="",Lt="",Mt=void 0,At="",ct=[],lt=[],ut=!1,Wt=!1,Dt=0,Yt={},he(),Ot="sunday"},es=function(t){Et=t},ss=function(){return Et},is=function(t){Mt=t},rs=function(){return Mt},ns=function(t){At=t},as=function(){return At},os=function(t){H=t},cs=function(){ut=!0},ls=function(){return ut},us=function(){Wt=!0},ds=function(){return Wt},fs=function(t){Lt=t},hs=function(){return Lt},ms=function(){return H},ks=function(t){ct=t.toLowerCase().split(/[\s,]+/)},ys=function(){return ct},gs=function(t){lt=t.toLowerCase().split(/[\s,]+/)},vs=function(){return lt},ps=function(){return Yt},Ts=function(t){it=t,It.push(t)},bs=function(){return It},xs=function(){let t=Zt();const e=10;let s=0;for(;!t&&s<e;)t=Zt(),s++;return pt=L,pt},Jt=function(t,e,s,i){return i.includes(t.format(e.trim()))?!1:t.isoWeekday()>=6&&s.includes("weekends")||s.includes(t.format("dddd").toLowerCase())?!0:s.includes(t.format(e.trim()))},ws=function(t){Ot=t},_s=function(){return Ot},Kt=function(t,e,s,i){if(!s.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=O(t.startTime):r=O(t.startTime,e,!0),r=r.add(1,"d");let o;t.endTime instanceof Date?o=O(t.endTime):o=O(t.endTime,e,!0);const[u,y]=Ds(r,o,e,s,i);t.endTime=u.toDate(),t.renderEndTime=y},Ds=function(t,e,s,i,r){let o=!1,u=null;for(;t<=e;)o||(u=e.toDate()),o=Jt(t,s,i,r),o&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,u]},Ct=function(t,e,s){s=s.trim();const r=/^after\s+(?<ids>[\d\w- ]+)/.exec(s);if(r!==null){let u=null;for(const b of r.groups.ids.split(" ")){let w=$(b);w!==void 0&&(!u||w.endTime>u.endTime)&&(u=w)}if(u)return u.endTime;const y=new Date;return y.setHours(0,0,0,0),y}let o=O(s,e.trim(),!0);if(o.isValid())return o.toDate();{vt.debug("Invalid date:"+s),vt.debug("With date format:"+e.trim());const u=new Date(s);if(u===void 0||isNaN(u.getTime())||u.getFullYear()<-1e4||u.getFullYear()>1e4)throw new Error("Invalid date:"+s);return u}},$t=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},te=function(t,e,s,i=!1){s=s.trim();const o=/^until\s+(?<ids>[\d\w- ]+)/.exec(s);if(o!==null){let v=null;for(const F of o.groups.ids.split(" ")){let A=$(F);A!==void 0&&(!v||A.startTime<v.startTime)&&(v=A)}if(v)return v.startTime;const S=new Date;return S.setHours(0,0,0,0),S}let u=O(s,e.trim(),!0);if(u.isValid())return i&&(u=u.add(1,"d")),u.toDate();let y=O(t);const[b,w]=$t(s);if(!Number.isNaN(b)){const v=y.add(b,w);v.isValid()&&(y=v)}return y.toDate()};let yt=0;const st=function(t){return t===void 0?(yt=yt+1,"task"+yt):t},Cs=function(t,e){let s;e.substr(0,1)===":"?s=e.substr(1,e.length):s=e;const i=s.split(","),r={};re(i,r,Qt);for(let u=0;u<i.length;u++)i[u]=i[u].trim();let o="";switch(i.length){case 1:r.id=st(),r.startTime=t.endTime,o=i[0];break;case 2:r.id=st(),r.startTime=Ct(void 0,H,i[0]),o=i[1];break;case 3:r.id=st(i[0]),r.startTime=Ct(void 0,H,i[1]),o=i[2];break}return o&&(r.endTime=te(r.startTime,H,o,ut),r.manualEndTime=O(o,"YYYY-MM-DD",!0).isValid(),Kt(r,H,lt,ct)),r},Ss=function(t,e){let s;e.substr(0,1)===":"?s=e.substr(1,e.length):s=e;const i=s.split(","),r={};re(i,r,Qt);for(let o=0;o<i.length;o++)i[o]=i[o].trim();switch(i.length){case 1:r.id=st(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=st(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=st(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]};break}return r};let St,gt,L=[];const ee={},Es=function(t,e){const s={section:it,type:it,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=Ss(gt,e);s.raw.startTime=i.startTime,s.raw.endTime=i.endTime,s.id=i.id,s.prevTaskId=gt,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,s.order=Dt,Dt++;const r=L.push(s);gt=s.id,ee[s.id]=r-1},$=function(t){const e=ee[t];return L[e]},Ms=function(t,e){const s={section:it,type:it,description:t,task:t,classes:[]},i=Cs(St,e);s.startTime=i.startTime,s.endTime=i.endTime,s.id=i.id,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,St=s,pt.push(s)},Zt=function(){const t=function(s){const i=L[s];let r="";switch(L[s].raw.startTime.type){case"prevTaskEnd":{const o=$(i.prevTaskId);i.startTime=o.endTime;break}case"getStartDate":r=Ct(void 0,H,L[s].raw.startTime.startData),r&&(L[s].startTime=r);break}return L[s].startTime&&(L[s].endTime=te(L[s].startTime,H,L[s].raw.endTime.data,ut),L[s].endTime&&(L[s].processed=!0,L[s].manualEndTime=O(L[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Kt(L[s],H,lt,ct))),L[s].processed};let e=!0;for(const[s,i]of L.entries())t(s),e=e&&i.processed;return e},As=function(t,e){let s=e;et().securityLevel!=="loose"&&(s=me.sanitizeUrl(e)),t.split(",").forEach(function(i){$(i)!==void 0&&(ie(i,()=>{window.open(s,"_self")}),Yt[i]=s)}),se(t,"clickable")},se=function(t,e){t.split(",").forEach(function(s){let i=$(s);i!==void 0&&i.classes.push(e)})},Ys=function(t,e,s){if(et().securityLevel!=="loose"||e===void 0)return;let i=[];if(typeof s=="string"){i=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let o=0;o<i.length;o++){let u=i[o].trim();u.charAt(0)==='"'&&u.charAt(u.length-1)==='"'&&(u=u.substr(1,u.length-2)),i[o]=u}}i.length===0&&i.push(t),$(t)!==void 0&&ie(t,()=>{_e.runFunc(e,...i)})},ie=function(t,e){Ft.push(function(){const s=document.querySelector(`[id="${t}"]`);s!==null&&s.addEventListener("click",function(){e()})},function(){const s=document.querySelector(`[id="${t}-text"]`);s!==null&&s.addEventListener("click",function(){e()})})},Is=function(t,e,s){t.split(",").forEach(function(i){Ys(i,e,s)}),se(t,"clickable")},Ls=function(t){Ft.forEach(function(e){e(t)})},Fs={getConfig:()=>et().gantt,clear:ts,setDateFormat:os,getDateFormat:ms,enableInclusiveEndDates:cs,endDatesAreInclusive:ls,enableTopAxis:us,topAxisEnabled:ds,setAxisFormat:es,getAxisFormat:ss,setTickInterval:is,getTickInterval:rs,setTodayMarker:ns,getTodayMarker:as,setAccTitle:oe,getAccTitle:ce,setDiagramTitle:le,getDiagramTitle:ue,setDisplayMode:fs,getDisplayMode:hs,setAccDescription:de,getAccDescription:fe,addSection:Ts,getSections:bs,getTasks:xs,addTask:Es,findTaskById:$,addTaskOrg:Ms,setIncludes:ks,getIncludes:ys,setExcludes:gs,getExcludes:vs,setClickEvent:Is,setLink:As,getLinks:ps,bindFunctions:Ls,parseDuration:$t,isInvalidDate:Jt,setWeekday:ws,getWeekday:_s};function re(t,e,s){let i=!0;for(;i;)i=!1,s.forEach(function(r){const o="^\\s*"+r+"\\s*$",u=new RegExp(o);t[0].match(u)&&(e[r]=!0,t.shift(1),i=!0)})}const Ws=function(){vt.debug("Something is calling, setConf, remove the call")},qt={monday:De,tuesday:Ce,wednesday:Se,thursday:Ee,friday:Me,saturday:Ae,sunday:Ye},Os=(t,e)=>{let s=[...t].map(()=>-1/0),i=[...t].sort((o,u)=>o.startTime-u.startTime||o.order-u.order),r=0;for(const o of i)for(let u=0;u<s.length;u++)if(o.startTime>=s[u]){s[u]=o.endTime,o.order=u+e,u>r&&(r=u);break}return r};let X;const Ps=function(t,e,s,i){const r=et().gantt,o=et().securityLevel;let u;o==="sandbox"&&(u=mt("#i"+e));const y=o==="sandbox"?mt(u.nodes()[0].contentDocument.body):mt("body"),b=o==="sandbox"?u.nodes()[0].contentDocument:document,w=b.getElementById(e);X=w.parentElement.offsetWidth,X===void 0&&(X=1200),r.useWidth!==void 0&&(X=r.useWidth);const v=i.db.getTasks();let S=[];for(const m of v)S.push(m.type);S=dt(S);const F={};let A=2*r.topPadding;if(i.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const m={};for(const x of v)m[x.section]===void 0?m[x.section]=[x]:m[x.section].push(x);let _=0;for(const x of Object.keys(m)){const p=Os(m[x],_)+1;_+=p,A+=p*(r.barHeight+r.barGap),F[x]=p}}else{A+=v.length*(r.barHeight+r.barGap);for(const m of S)F[m]=v.filter(_=>_.type===m).length}w.setAttribute("viewBox","0 0 "+X+" "+A);const I=y.select(`[id="${e}"]`),T=ke().domain([ye(v,function(m){return m.startTime}),ge(v,function(m){return m.endTime})]).rangeRound([0,X-r.leftPadding-r.rightPadding]);function P(m,_){const x=m.startTime,p=_.startTime;let a=0;return x>p?a=1:x<p&&(a=-1),a}v.sort(P),B(v,X,A),ve(I,A,X,r.useMaxWidth),I.append("text").text(i.db.getDiagramTitle()).attr("x",X/2).attr("y",r.titleTopMargin).attr("class","titleText");function B(m,_,x){const p=r.barHeight,a=p+r.barGap,f=r.topPadding,h=r.leftPadding,c=pe().domain([0,S.length]).range(["#00B9FA","#F95002"]).interpolate(Te);q(a,f,h,_,x,m,i.db.getExcludes(),i.db.getIncludes()),j(h,f,_,x),Z(m,a,f,h,p,c,_),Q(a,f),rt(h,f,_,x)}function Z(m,_,x,p,a,f,h){const k=[...new Set(m.map(l=>l.order))].map(l=>m.find(g=>g.order===l));I.append("g").selectAll("rect").data(k).enter().append("rect").attr("x",0).attr("y",function(l,g){return g=l.order,g*_+x-2}).attr("width",function(){return h-r.rightPadding/2}).attr("height",_).attr("class",function(l){for(const[g,Y]of S.entries())if(l.type===Y)return"section section"+g%r.numberSectionStyles;return"section section0"});const n=I.append("g").selectAll("rect").data(m).enter(),W=i.db.getLinks();if(n.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?T(l.startTime)+p+.5*(T(l.endTime)-T(l.startTime))-.5*a:T(l.startTime)+p}).attr("y",function(l,g){return g=l.order,g*_+x}).attr("width",function(l){return l.milestone?a:T(l.renderEndTime||l.endTime)-T(l.startTime)}).attr("height",a).attr("transform-origin",function(l,g){return g=l.order,(T(l.startTime)+p+.5*(T(l.endTime)-T(l.startTime))).toString()+"px "+(g*_+x+.5*a).toString()+"px"}).attr("class",function(l){const g="task";let Y="";l.classes.length>0&&(Y=l.classes.join(" "));let C=0;for(const[D,M]of S.entries())l.type===M&&(C=D%r.numberSectionStyles);let E="";return l.active?l.crit?E+=" activeCrit":E=" active":l.done?l.crit?E=" doneCrit":E=" done":l.crit&&(E+=" crit"),E.length===0&&(E=" task"),l.milestone&&(E=" milestone "+E),E+=C,E+=" "+Y,g+E}),n.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",r.fontSize).attr("x",function(l){let g=T(l.startTime),Y=T(l.renderEndTime||l.endTime);l.milestone&&(g+=.5*(T(l.endTime)-T(l.startTime))-.5*a),l.milestone&&(Y=g+a);const C=this.getBBox().width;return C>Y-g?Y+C+1.5*r.leftPadding>h?g+p-5:Y+p+5:(Y-g)/2+g+p}).attr("y",function(l,g){return g=l.order,g*_+r.barHeight/2+(r.fontSize/2-2)+x}).attr("text-height",a).attr("class",function(l){const g=T(l.startTime);let Y=T(l.endTime);l.milestone&&(Y=g+a);const C=this.getBBox().width;let E="";l.classes.length>0&&(E=l.classes.join(" "));let D=0;for(const[nt,at]of S.entries())l.type===at&&(D=nt%r.numberSectionStyles);let M="";return l.active&&(l.crit?M="activeCritText"+D:M="activeText"+D),l.done?l.crit?M=M+" doneCritText"+D:M=M+" doneText"+D:l.crit&&(M=M+" critText"+D),l.milestone&&(M+=" milestoneText"),C>Y-g?Y+C+1.5*r.leftPadding>h?E+" taskTextOutsideLeft taskTextOutside"+D+" "+M:E+" taskTextOutsideRight taskTextOutside"+D+" "+M+" width-"+C:E+" taskText taskText"+D+" "+M+" width-"+C}),et().securityLevel==="sandbox"){let l;l=mt("#i"+e);const g=l.nodes()[0].contentDocument;n.filter(function(Y){return W[Y.id]!==void 0}).each(function(Y){var C=g.querySelector("#"+Y.id),E=g.querySelector("#"+Y.id+"-text");const D=C.parentNode;var M=g.createElement("a");M.setAttribute("xlink:href",W[Y.id]),M.setAttribute("target","_top"),D.appendChild(M),M.appendChild(C),M.appendChild(E)})}}function q(m,_,x,p,a,f,h,c){if(h.length===0&&c.length===0)return;let k,n;for(const{startTime:C,endTime:E}of f)(k===void 0||C<k)&&(k=C),(n===void 0||E>n)&&(n=E);if(!k||!n)return;if(O(n).diff(O(k),"year")>5){vt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const W=i.db.getDateFormat(),d=[];let l=null,g=O(k);for(;g.valueOf()<=n;)i.db.isInvalidDate(g,W,h,c)?l?l.end=g:l={start:g,end:g}:l&&(d.push(l),l=null),g=g.add(1,"d");I.append("g").selectAll("rect").data(d).enter().append("rect").attr("id",function(C){return"exclude-"+C.start.format("YYYY-MM-DD")}).attr("x",function(C){return T(C.start)+x}).attr("y",r.gridLineStartPadding).attr("width",function(C){const E=C.end.add(1,"day");return T(E)-T(C.start)}).attr("height",a-_-r.gridLineStartPadding).attr("transform-origin",function(C,E){return(T(C.start)+x+.5*(T(C.end)-T(C.start))).toString()+"px "+(E*m+.5*a).toString()+"px"}).attr("class","exclude-range")}function j(m,_,x,p){let a=be(T).tickSize(-p+_+r.gridLineStartPadding).tickFormat(Vt(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const h=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(h!==null){const c=h[1],k=h[2],n=i.db.getWeekday()||r.weekday;switch(k){case"millisecond":a.ticks(Gt.every(c));break;case"second":a.ticks(Ht.every(c));break;case"minute":a.ticks(Rt.every(c));break;case"hour":a.ticks(Nt.every(c));break;case"day":a.ticks(Bt.every(c));break;case"week":a.ticks(qt[n].every(c));break;case"month":a.ticks(zt.every(c));break}}if(I.append("g").attr("class","grid").attr("transform","translate("+m+", "+(p-50)+")").call(a).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let c=xe(T).tickSize(-p+_+r.gridLineStartPadding).tickFormat(Vt(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(h!==null){const k=h[1],n=h[2],W=i.db.getWeekday()||r.weekday;switch(n){case"millisecond":c.ticks(Gt.every(k));break;case"second":c.ticks(Ht.every(k));break;case"minute":c.ticks(Rt.every(k));break;case"hour":c.ticks(Nt.every(k));break;case"day":c.ticks(Bt.every(k));break;case"week":c.ticks(qt[W].every(k));break;case"month":c.ticks(zt.every(k));break}}I.append("g").attr("class","grid").attr("transform","translate("+m+", "+_+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function Q(m,_){let x=0;const p=Object.keys(F).map(a=>[a,F[a]]);I.append("g").selectAll("text").data(p).enter().append(function(a){const f=a[0].split(we.lineBreakRegex),h=-(f.length-1)/2,c=b.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("dy",h+"em");for(const[k,n]of f.entries()){const W=b.createElementNS("http://www.w3.org/2000/svg","tspan");W.setAttribute("alignment-baseline","central"),W.setAttribute("x","10"),k>0&&W.setAttribute("dy","1em"),W.textContent=n,c.appendChild(W)}return c}).attr("x",10).attr("y",function(a,f){if(f>0)for(let h=0;h<f;h++)return x+=p[f-1][1],a[1]*m/2+x*m+_;else return a[1]*m/2+_}).attr("font-size",r.sectionFontSize).attr("class",function(a){for(const[f,h]of S.entries())if(a[0]===h)return"sectionTitle sectionTitle"+f%r.numberSectionStyles;return"sectionTitle"})}function rt(m,_,x,p){const a=i.db.getTodayMarker();if(a==="off")return;const f=I.append("g").attr("class","today"),h=new Date,c=f.append("line");c.attr("x1",T(h)+m).attr("x2",T(h)+m).attr("y1",r.titleTopMargin).attr("y2",p-r.titleTopMargin).attr("class","today"),a!==""&&c.attr("style",a.replace(/,/g,";"))}function dt(m){const _={},x=[];for(let p=0,a=m.length;p<a;++p)Object.prototype.hasOwnProperty.call(_,m[p])||(_[m[p]]=!0,x.push(m[p]));return x}},Vs={setConf:Ws,draw:Ps},zs=t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,Bs=zs,Hs={parser:$e,db:Fs,renderer:Vs,styles:Bs};export{Hs as diagram};
