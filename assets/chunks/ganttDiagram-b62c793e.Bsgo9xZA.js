import{L as P,c as it,s as ce,g as le,E as ue,F as de,b as fe,a as he,G as me,m as ke,l as vt,h as kt,M as ye,N as ge,O as ve,i as pe,P as Te,Q as be,S as xe,T as Vt,U as zt,V as Bt,W as Nt,X as Rt,Y as Ht,Z as Gt,$ as we,j as _e,B as De,a0 as Ce,a1 as Se,a2 as Ee,a3 as Me,a4 as Ae,a5 as Ye,a6 as Ie}from"./theme.B8ICp5Bw.js";import"./framework.rLUtq7Me.js";var xt="day",Le="week",Fe="year",We="YYYY-MM-DDTHH:mm:ssZ",Oe="isoweek";const Pe=function(t,e,s){var i=function(v,w){var p=(w?s.utc:s)().year(v).startOf(Fe),S=4-p.isoWeekday();return p.isoWeekday()>4&&(S+=7),p.add(S,xt)},r=function(v){return v.add(4-v.isoWeekday(),xt)},o=e.prototype;o.isoWeekYear=function(){var g=r(this);return g.year()},o.isoWeek=function(g){if(!this.$utils().u(g))return this.add((g-this.isoWeek())*7,xt);var v=r(this),w=i(this.isoWeekYear(),this.$u);return v.diff(w,Le)+1},o.isoWeekday=function(g){return this.$utils().u(g)?this.day()||7:this.day(this.day()%7?g:g-7)};var l=o.startOf;o.startOf=function(g,v){var w=this.$utils(),p=w.u(v)?!0:v,S=w.p(g);return S===Oe?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(g,v)}};var Ve=function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(s,i,r){return i||r.slice(1)})},ze={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Be=function(e,s){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(i,r,o){var l=o&&o.toUpperCase();return r||s[o]||ze[o]||Ve(s[l])})},Ne=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,Ut=/\d/,ct=/\d\d/,Re=/\d{3}/,He=/\d{4}/,R=/\d\d?/,Ge=/[+-]?\d+/,Ue=/[+-]\d\d:?(\d\d)?|Z/,lt=/\d*[^-_:/,()\s\d]+/,$={},Qt=function(e){return e=+e,e+(e>68?1900:2e3)};function Xe(t){if(!t||t==="Z")return 0;var e=t.match(/([+-]|\d\d)/g),s=+(e[1]*60)+(+e[2]||0);return s===0?0:e[0]==="+"?-s:s}var O=function(e){return function(s){this[e]=+s}},Xt=[Ue,function(t){var e=this.zone||(this.zone={});e.offset=Xe(t)}],wt=function(e){var s=$[e];return s&&(s.indexOf?s:s.s.concat(s.f))},Zt=function(e,s){var i,r=$,o=r.meridiem;if(!o)i=e===(s?"pm":"PM");else for(var l=1;l<=24;l+=1)if(e.indexOf(o(l,0,s))>-1){i=l>12;break}return i},Ze={A:[lt,function(t){this.afternoon=Zt(t,!1)}],a:[lt,function(t){this.afternoon=Zt(t,!0)}],Q:[Ut,function(t){this.month=(t-1)*3+1}],S:[Ut,function(t){this.milliseconds=+t*100}],SS:[ct,function(t){this.milliseconds=+t*10}],SSS:[Re,function(t){this.milliseconds=+t}],s:[R,O("seconds")],ss:[R,O("seconds")],m:[R,O("minutes")],mm:[R,O("minutes")],H:[R,O("hours")],h:[R,O("hours")],HH:[R,O("hours")],hh:[R,O("hours")],D:[R,O("day")],DD:[ct,O("day")],Do:[lt,function(t){var e=$,s=e.ordinal,i=t.match(/\d+/);if(this.day=i[0],!!s)for(var r=1;r<=31;r+=1)s(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],w:[R,O("week")],ww:[ct,O("week")],M:[R,O("month")],MM:[ct,O("month")],MMM:[lt,function(t){var e=wt("months"),s=wt("monthsShort"),i=(s||e.map(function(r){return r.slice(0,3)})).indexOf(t)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[lt,function(t){var e=wt("months"),s=e.indexOf(t)+1;if(s<1)throw new Error;this.month=s%12||s}],Y:[Ge,O("year")],YY:[ct,function(t){this.year=Qt(t)}],YYYY:[He,O("year")],Z:Xt,ZZ:Xt};function qe(t){var e=t.afternoon;if(e!==void 0){var s=t.hours;e?s<12&&(t.hours+=12):s===12&&(t.hours=0),delete t.afternoon}}function je(t){t=Be(t,$&&$.formats);for(var e=t.match(Ne),s=e.length,i=0;i<s;i+=1){var r=e[i],o=Ze[r],l=o&&o[0],g=o&&o[1];g?e[i]={regex:l,parser:g}:e[i]=r.replace(/^\[|\]$/g,"")}return function(v){for(var w={},p=0,S=0;p<s;p+=1){var F=e[p];if(typeof F=="string")S+=F.length;else{var A=F.regex,I=F.parser,b=v.slice(S),V=A.exec(b),N=V[0];I.call(w,N),v=v.replace(N,"")}}return qe(w),w}}var Qe=function(e,s,i,r){try{if(["x","X"].indexOf(s)>-1)return new Date((s==="X"?1e3:1)*e);var o=je(s),l=o(e),g=l.year,v=l.month,w=l.day,p=l.hours,S=l.minutes,F=l.seconds,A=l.milliseconds,I=l.zone,b=l.week,V=new Date,N=w||(!g&&!v?V.getDate():1),q=g||V.getFullYear(),G=0;g&&!v||(G=v>0?v-1:V.getMonth());var j=p||0,Q=S||0,J=F||0,K=A||0;if(I)return new Date(Date.UTC(q,G,N,j,Q,J,K+I.offset*60*1e3));if(i)return new Date(Date.UTC(q,G,N,j,Q,J,K));var m;return m=new Date(q,G,N,j,Q,J,K),b&&(m=r(m).week(b).toDate()),m}catch{return new Date("")}};const Je=function(t,e,s){s.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(Qt=t.parseTwoDigitYear);var i=e.prototype,r=i.parse;i.parse=function(o){var l=o.date,g=o.utc,v=o.args;this.$u=g;var w=v[1];if(typeof w=="string"){var p=v[2]===!0,S=v[3]===!0,F=p||S,A=v[2];S&&(A=v[2]),$=this.$locale(),!p&&A&&($=s.Ls[A]),this.$d=Qe(l,w,g,s),this.init(),A&&A!==!0&&(this.$L=this.locale(A).$L),F&&l!=this.format(w)&&(this.$d=new Date("")),$={}}else if(w instanceof Array)for(var I=w.length,b=1;b<=I;b+=1){v[1]=w[b-1];var V=s.apply(this,v);if(V.isValid()){this.$d=V.$d,this.$L=V.$L,this.init();break}b===I&&(this.$d=new Date(""))}else r.call(this,o)}},Ke=function(t,e){var s=e.prototype,i=s.format;s.format=function(r){var o=this,l=this.$locale();if(!this.isValid())return i.bind(this)(r);var g=this.$utils(),v=r||We,w=v.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(p){switch(p){case"Q":return Math.ceil((o.$M+1)/3);case"Do":return l.ordinal(o.$D);case"gggg":return o.weekYear();case"GGGG":return o.isoWeekYear();case"wo":return l.ordinal(o.week(),"W");case"w":case"ww":return g.s(o.week(),p==="w"?1:2,"0");case"W":case"WW":return g.s(o.isoWeek(),p==="W"?1:2,"0");case"k":case"kk":return g.s(String(o.$H===0?24:o.$H),p==="k"?1:2,"0");case"X":return Math.floor(o.$d.getTime()/1e3);case"x":return o.$d.getTime();case"z":return"["+o.offsetName()+"]";case"zzz":return"["+o.offsetName("long")+"]";default:return p}});return i.bind(this)(w)}};var _t=function(){var t=function(T,a,f,h){for(f=f||{},h=T.length;h--;f[T[h]]=a);return f},e=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],s=[1,25],i=[1,26],r=[1,27],o=[1,28],l=[1,29],g=[1,30],v=[1,31],w=[1,9],p=[1,10],S=[1,11],F=[1,12],A=[1,13],I=[1,14],b=[1,15],V=[1,16],N=[1,18],q=[1,19],G=[1,20],j=[1,21],Q=[1,22],J=[1,24],K=[1,32],m={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(a,f,h,c,k,n,W){var d=n.length-1;switch(k){case 1:return n[d-1];case 2:this.$=[];break;case 3:n[d-1].push(n[d]),this.$=n[d-1];break;case 4:case 5:this.$=n[d];break;case 6:case 7:this.$=[];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setDateFormat(n[d].substr(11)),this.$=n[d].substr(11);break;case 16:c.enableInclusiveEndDates(),this.$=n[d].substr(18);break;case 17:c.TopAxis(),this.$=n[d].substr(8);break;case 18:c.setAxisFormat(n[d].substr(11)),this.$=n[d].substr(11);break;case 19:c.setTickInterval(n[d].substr(13)),this.$=n[d].substr(13);break;case 20:c.setExcludes(n[d].substr(9)),this.$=n[d].substr(9);break;case 21:c.setIncludes(n[d].substr(9)),this.$=n[d].substr(9);break;case 22:c.setTodayMarker(n[d].substr(12)),this.$=n[d].substr(12);break;case 24:c.setDiagramTitle(n[d].substr(6)),this.$=n[d].substr(6);break;case 25:this.$=n[d].trim(),c.setAccTitle(this.$);break;case 26:case 27:this.$=n[d].trim(),c.setAccDescription(this.$);break;case 28:c.addSection(n[d].substr(8)),this.$=n[d].substr(8);break;case 30:c.addTask(n[d-1],n[d]),this.$="task";break;case 31:this.$=n[d-1],c.setClickEvent(n[d-1],n[d],null);break;case 32:this.$=n[d-2],c.setClickEvent(n[d-2],n[d-1],n[d]);break;case 33:this.$=n[d-2],c.setClickEvent(n[d-2],n[d-1],null),c.setLink(n[d-2],n[d]);break;case 34:this.$=n[d-3],c.setClickEvent(n[d-3],n[d-2],n[d-1]),c.setLink(n[d-3],n[d]);break;case 35:this.$=n[d-2],c.setClickEvent(n[d-2],n[d],null),c.setLink(n[d-2],n[d-1]);break;case 36:this.$=n[d-3],c.setClickEvent(n[d-3],n[d-1],n[d]),c.setLink(n[d-3],n[d-2]);break;case 37:this.$=n[d-1],c.setLink(n[d-1],n[d]);break;case 38:case 44:this.$=n[d-1]+" "+n[d];break;case 39:case 40:case 42:this.$=n[d-2]+" "+n[d-1]+" "+n[d];break;case 41:case 43:this.$=n[d-3]+" "+n[d-2]+" "+n[d-1]+" "+n[d];break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:s,13:i,14:r,15:o,16:l,17:g,18:v,19:w,20:p,21:S,22:F,23:A,24:I,25:b,26:V,27:N,28:q,30:G,32:j,33:Q,34:23,35:J,37:K},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:33,11:17,12:s,13:i,14:r,15:o,16:l,17:g,18:v,19:w,20:p,21:S,22:F,23:A,24:I,25:b,26:V,27:N,28:q,30:G,32:j,33:Q,34:23,35:J,37:K},t(e,[2,5]),t(e,[2,6]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),{29:[1,34]},{31:[1,35]},t(e,[2,27]),t(e,[2,28]),t(e,[2,29]),{36:[1,36]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),{38:[1,37],40:[1,38]},t(e,[2,4]),t(e,[2,25]),t(e,[2,26]),t(e,[2,30]),t(e,[2,31],{39:[1,39],40:[1,40]}),t(e,[2,37],{38:[1,41]}),t(e,[2,32],{40:[1,42]}),t(e,[2,33]),t(e,[2,35],{39:[1,43]}),t(e,[2,34]),t(e,[2,36])],defaultActions:{},parseError:function(a,f){if(f.recoverable)this.trace(a);else{var h=new Error(a);throw h.hash=f,h}},parse:function(a){var f=this,h=[0],c=[],k=[null],n=[],W=this.table,d="",u=0,y=0,Y=2,C=1,E=n.slice.call(arguments,1),D=Object.create(this.lexer),M={yy:{}};for(var at in this.yy)Object.prototype.hasOwnProperty.call(this.yy,at)&&(M.yy[at]=this.yy[at]);D.setInput(a,M.yy),M.yy.lexer=D,M.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var ot=D.yylloc;n.push(ot);var ae=D.options&&D.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function oe(){var X;return X=c.pop()||D.lex()||C,typeof X!="number"&&(X instanceof Array&&(c=X,X=c.pop()),X=f.symbols_[X]||X),X}for(var z,tt,B,Tt,st={},ht,U,Pt,mt;;){if(tt=h[h.length-1],this.defaultActions[tt]?B=this.defaultActions[tt]:((z===null||typeof z>"u")&&(z=oe()),B=W[tt]&&W[tt][z]),typeof B>"u"||!B.length||!B[0]){var bt="";mt=[];for(ht in W[tt])this.terminals_[ht]&&ht>Y&&mt.push("'"+this.terminals_[ht]+"'");D.showPosition?bt="Parse error on line "+(u+1)+`:
`+D.showPosition()+`
Expecting `+mt.join(", ")+", got '"+(this.terminals_[z]||z)+"'":bt="Parse error on line "+(u+1)+": Unexpected "+(z==C?"end of input":"'"+(this.terminals_[z]||z)+"'"),this.parseError(bt,{text:D.match,token:this.terminals_[z]||z,line:D.yylineno,loc:ot,expected:mt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+tt+", token: "+z);switch(B[0]){case 1:h.push(z),k.push(D.yytext),n.push(D.yylloc),h.push(B[1]),z=null,y=D.yyleng,d=D.yytext,u=D.yylineno,ot=D.yylloc;break;case 2:if(U=this.productions_[B[1]][1],st.$=k[k.length-U],st._$={first_line:n[n.length-(U||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(U||1)].first_column,last_column:n[n.length-1].last_column},ae&&(st._$.range=[n[n.length-(U||1)].range[0],n[n.length-1].range[1]]),Tt=this.performAction.apply(st,[d,y,u,M.yy,B[1],k,n].concat(E)),typeof Tt<"u")return Tt;U&&(h=h.slice(0,-1*U*2),k=k.slice(0,-1*U),n=n.slice(0,-1*U)),h.push(this.productions_[B[1]][0]),k.push(st.$),n.push(st._$),Pt=W[h[h.length-2]][h[h.length-1]],h.push(Pt);break;case 3:return!0}}return!0}},_=function(){var T={EOF:1,parseError:function(f,h){if(this.yy.parser)this.yy.parser.parseError(f,h);else throw new Error(f)},setInput:function(a,f){return this.yy=f||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var f=a.match(/(?:\r\n?|\n).*/g);return f?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var f=a.length,h=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-f),this.offset-=f;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var k=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===c.length?this.yylloc.first_column:0)+c[c.length-h.length].length-h[0].length:this.yylloc.first_column-f},this.options.ranges&&(this.yylloc.range=[k[0],k[0]+this.yyleng-f]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),f=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+f+"^"},test_match:function(a,f){var h,c,k;if(this.options.backtrack_lexer&&(k={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(k.yylloc.range=this.yylloc.range.slice(0))),c=a[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],h=this.performAction.call(this,this.yy,this,f,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var n in k)this[n]=k[n];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,f,h,c;this._more||(this.yytext="",this.match="");for(var k=this._currentRules(),n=0;n<k.length;n++)if(h=this._input.match(this.rules[k[n]]),h&&(!f||h[0].length>f[0].length)){if(f=h,c=n,this.options.backtrack_lexer){if(a=this.test_match(h,k[n]),a!==!1)return a;if(this._backtrack){f=!1;continue}else return!1}else if(!this.options.flex)break}return f?(a=this.test_match(f,k[c]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var f=this.next();return f||this.lex()},begin:function(f){this.conditionStack.push(f)},popState:function(){var f=this.conditionStack.length-1;return f>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(f){return f=this.conditionStack.length-1-Math.abs(f||0),f>=0?this.conditionStack[f]:"INITIAL"},pushState:function(f){this.begin(f)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(f,h,c,k){switch(c){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 40;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};return T}();m.lexer=_;function x(){this.yy={}}return x.prototype=m,m.Parser=x,new x}();_t.parser=_t;const $e=_t;P.extend(Pe);P.extend(Je);P.extend(Ke);let H="",Et="",Mt,At="",ut=[],dt=[],Yt={},It=[],pt=[],nt="",Lt="";const Jt=["active","done","crit","milestone"];let Ft=[],ft=!1,Wt=!1,Ot="sunday",Dt=0;const ts=function(){It=[],pt=[],nt="",Ft=[],yt=0,St=void 0,gt=void 0,L=[],H="",Et="",Lt="",Mt=void 0,At="",ut=[],dt=[],ft=!1,Wt=!1,Dt=0,Yt={},me(),Ot="sunday"},es=function(t){Et=t},ss=function(){return Et},is=function(t){Mt=t},rs=function(){return Mt},ns=function(t){At=t},as=function(){return At},os=function(t){H=t},cs=function(){ft=!0},ls=function(){return ft},us=function(){Wt=!0},ds=function(){return Wt},fs=function(t){Lt=t},hs=function(){return Lt},ms=function(){return H},ks=function(t){ut=t.toLowerCase().split(/[\s,]+/)},ys=function(){return ut},gs=function(t){dt=t.toLowerCase().split(/[\s,]+/)},vs=function(){return dt},ps=function(){return Yt},Ts=function(t){nt=t,It.push(t)},bs=function(){return It},xs=function(){let t=qt();const e=10;let s=0;for(;!t&&s<e;)t=qt(),s++;return pt=L,pt},Kt=function(t,e,s,i){return i.includes(t.format(e.trim()))?!1:t.isoWeekday()>=6&&s.includes("weekends")||s.includes(t.format("dddd").toLowerCase())?!0:s.includes(t.format(e.trim()))},ws=function(t){Ot=t},_s=function(){return Ot},$t=function(t,e,s,i){if(!s.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=P(t.startTime):r=P(t.startTime,e,!0),r=r.add(1,"d");let o;t.endTime instanceof Date?o=P(t.endTime):o=P(t.endTime,e,!0);const[l,g]=Ds(r,o,e,s,i);t.endTime=l.toDate(),t.renderEndTime=g},Ds=function(t,e,s,i,r){let o=!1,l=null;for(;t<=e;)o||(l=e.toDate()),o=Kt(t,s,i,r),o&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,l]},Ct=function(t,e,s){s=s.trim();const r=/^after\s+(?<ids>[\d\w- ]+)/.exec(s);if(r!==null){let l=null;for(const v of r.groups.ids.split(" ")){let w=et(v);w!==void 0&&(!l||w.endTime>l.endTime)&&(l=w)}if(l)return l.endTime;const g=new Date;return g.setHours(0,0,0,0),g}let o=P(s,e.trim(),!0);if(o.isValid())return o.toDate();{vt.debug("Invalid date:"+s),vt.debug("With date format:"+e.trim());const l=new Date(s);if(l===void 0||isNaN(l.getTime())||l.getFullYear()<-1e4||l.getFullYear()>1e4)throw new Error("Invalid date:"+s);return l}},te=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},ee=function(t,e,s,i=!1){s=s.trim();const o=/^until\s+(?<ids>[\d\w- ]+)/.exec(s);if(o!==null){let p=null;for(const F of o.groups.ids.split(" ")){let A=et(F);A!==void 0&&(!p||A.startTime<p.startTime)&&(p=A)}if(p)return p.startTime;const S=new Date;return S.setHours(0,0,0,0),S}let l=P(s,e.trim(),!0);if(l.isValid())return i&&(l=l.add(1,"d")),l.toDate();let g=P(t);const[v,w]=te(s);if(!Number.isNaN(v)){const p=g.add(v,w);p.isValid()&&(g=p)}return g.toDate()};let yt=0;const rt=function(t){return t===void 0?(yt=yt+1,"task"+yt):t},Cs=function(t,e){let s;e.substr(0,1)===":"?s=e.substr(1,e.length):s=e;const i=s.split(","),r={};ne(i,r,Jt);for(let l=0;l<i.length;l++)i[l]=i[l].trim();let o="";switch(i.length){case 1:r.id=rt(),r.startTime=t.endTime,o=i[0];break;case 2:r.id=rt(),r.startTime=Ct(void 0,H,i[0]),o=i[1];break;case 3:r.id=rt(i[0]),r.startTime=Ct(void 0,H,i[1]),o=i[2];break}return o&&(r.endTime=ee(r.startTime,H,o,ft),r.manualEndTime=P(o,"YYYY-MM-DD",!0).isValid(),$t(r,H,dt,ut)),r},Ss=function(t,e){let s;e.substr(0,1)===":"?s=e.substr(1,e.length):s=e;const i=s.split(","),r={};ne(i,r,Jt);for(let o=0;o<i.length;o++)i[o]=i[o].trim();switch(i.length){case 1:r.id=rt(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=rt(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=rt(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]};break}return r};let St,gt,L=[];const se={},Es=function(t,e){const s={section:nt,type:nt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=Ss(gt,e);s.raw.startTime=i.startTime,s.raw.endTime=i.endTime,s.id=i.id,s.prevTaskId=gt,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,s.order=Dt,Dt++;const r=L.push(s);gt=s.id,se[s.id]=r-1},et=function(t){const e=se[t];return L[e]},Ms=function(t,e){const s={section:nt,type:nt,description:t,task:t,classes:[]},i=Cs(St,e);s.startTime=i.startTime,s.endTime=i.endTime,s.id=i.id,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,St=s,pt.push(s)},qt=function(){const t=function(s){const i=L[s];let r="";switch(L[s].raw.startTime.type){case"prevTaskEnd":{const o=et(i.prevTaskId);i.startTime=o.endTime;break}case"getStartDate":r=Ct(void 0,H,L[s].raw.startTime.startData),r&&(L[s].startTime=r);break}return L[s].startTime&&(L[s].endTime=ee(L[s].startTime,H,L[s].raw.endTime.data,ft),L[s].endTime&&(L[s].processed=!0,L[s].manualEndTime=P(L[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),$t(L[s],H,dt,ut))),L[s].processed};let e=!0;for(const[s,i]of L.entries())t(s),e=e&&i.processed;return e},As=function(t,e){let s=e;it().securityLevel!=="loose"&&(s=ke.sanitizeUrl(e)),t.split(",").forEach(function(i){et(i)!==void 0&&(re(i,()=>{window.open(s,"_self")}),Yt[i]=s)}),ie(t,"clickable")},ie=function(t,e){t.split(",").forEach(function(s){let i=et(s);i!==void 0&&i.classes.push(e)})},Ys=function(t,e,s){if(it().securityLevel!=="loose"||e===void 0)return;let i=[];if(typeof s=="string"){i=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let o=0;o<i.length;o++){let l=i[o].trim();l.charAt(0)==='"'&&l.charAt(l.length-1)==='"'&&(l=l.substr(1,l.length-2)),i[o]=l}}i.length===0&&i.push(t),et(t)!==void 0&&re(t,()=>{De.runFunc(e,...i)})},re=function(t,e){Ft.push(function(){const s=document.querySelector(`[id="${t}"]`);s!==null&&s.addEventListener("click",function(){e()})},function(){const s=document.querySelector(`[id="${t}-text"]`);s!==null&&s.addEventListener("click",function(){e()})})},Is=function(t,e,s){t.split(",").forEach(function(i){Ys(i,e,s)}),ie(t,"clickable")},Ls=function(t){Ft.forEach(function(e){e(t)})},Fs={getConfig:()=>it().gantt,clear:ts,setDateFormat:os,getDateFormat:ms,enableInclusiveEndDates:cs,endDatesAreInclusive:ls,enableTopAxis:us,topAxisEnabled:ds,setAxisFormat:es,getAxisFormat:ss,setTickInterval:is,getTickInterval:rs,setTodayMarker:ns,getTodayMarker:as,setAccTitle:ce,getAccTitle:le,setDiagramTitle:ue,getDiagramTitle:de,setDisplayMode:fs,getDisplayMode:hs,setAccDescription:fe,getAccDescription:he,addSection:Ts,getSections:bs,getTasks:xs,addTask:Es,findTaskById:et,addTaskOrg:Ms,setIncludes:ks,getIncludes:ys,setExcludes:gs,getExcludes:vs,setClickEvent:Is,setLink:As,getLinks:ps,bindFunctions:Ls,parseDuration:te,isInvalidDate:Kt,setWeekday:ws,getWeekday:_s};function ne(t,e,s){let i=!0;for(;i;)i=!1,s.forEach(function(r){const o="^\\s*"+r+"\\s*$",l=new RegExp(o);t[0].match(l)&&(e[r]=!0,t.shift(1),i=!0)})}const Ws=function(){vt.debug("Something is calling, setConf, remove the call")},jt={monday:Ce,tuesday:Se,wednesday:Ee,thursday:Me,friday:Ae,saturday:Ye,sunday:Ie},Os=(t,e)=>{let s=[...t].map(()=>-1/0),i=[...t].sort((o,l)=>o.startTime-l.startTime||o.order-l.order),r=0;for(const o of i)for(let l=0;l<s.length;l++)if(o.startTime>=s[l]){s[l]=o.endTime,o.order=l+e,l>r&&(r=l);break}return r};let Z;const Ps=function(t,e,s,i){const r=it().gantt,o=it().securityLevel;let l;o==="sandbox"&&(l=kt("#i"+e));const g=o==="sandbox"?kt(l.nodes()[0].contentDocument.body):kt("body"),v=o==="sandbox"?l.nodes()[0].contentDocument:document,w=v.getElementById(e);Z=w.parentElement.offsetWidth,Z===void 0&&(Z=1200),r.useWidth!==void 0&&(Z=r.useWidth);const p=i.db.getTasks();let S=[];for(const m of p)S.push(m.type);S=K(S);const F={};let A=2*r.topPadding;if(i.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const m={};for(const x of p)m[x.section]===void 0?m[x.section]=[x]:m[x.section].push(x);let _=0;for(const x of Object.keys(m)){const T=Os(m[x],_)+1;_+=T,A+=T*(r.barHeight+r.barGap),F[x]=T}}else{A+=p.length*(r.barHeight+r.barGap);for(const m of S)F[m]=p.filter(_=>_.type===m).length}w.setAttribute("viewBox","0 0 "+Z+" "+A);const I=g.select(`[id="${e}"]`),b=ye().domain([ge(p,function(m){return m.startTime}),ve(p,function(m){return m.endTime})]).rangeRound([0,Z-r.leftPadding-r.rightPadding]);function V(m,_){const x=m.startTime,T=_.startTime;let a=0;return x>T?a=1:x<T&&(a=-1),a}p.sort(V),N(p,Z,A),pe(I,A,Z,r.useMaxWidth),I.append("text").text(i.db.getDiagramTitle()).attr("x",Z/2).attr("y",r.titleTopMargin).attr("class","titleText");function N(m,_,x){const T=r.barHeight,a=T+r.barGap,f=r.topPadding,h=r.leftPadding,c=Te().domain([0,S.length]).range(["#00B9FA","#F95002"]).interpolate(be);G(a,f,h,_,x,m,i.db.getExcludes(),i.db.getIncludes()),j(h,f,_,x),q(m,a,f,h,T,c,_),Q(a,f),J(h,f,_,x)}function q(m,_,x,T,a,f,h){const k=[...new Set(m.map(u=>u.order))].map(u=>m.find(y=>y.order===u));I.append("g").selectAll("rect").data(k).enter().append("rect").attr("x",0).attr("y",function(u,y){return y=u.order,y*_+x-2}).attr("width",function(){return h-r.rightPadding/2}).attr("height",_).attr("class",function(u){for(const[y,Y]of S.entries())if(u.type===Y)return"section section"+y%r.numberSectionStyles;return"section section0"});const n=I.append("g").selectAll("rect").data(m).enter(),W=i.db.getLinks();if(n.append("rect").attr("id",function(u){return u.id}).attr("rx",3).attr("ry",3).attr("x",function(u){return u.milestone?b(u.startTime)+T+.5*(b(u.endTime)-b(u.startTime))-.5*a:b(u.startTime)+T}).attr("y",function(u,y){return y=u.order,y*_+x}).attr("width",function(u){return u.milestone?a:b(u.renderEndTime||u.endTime)-b(u.startTime)}).attr("height",a).attr("transform-origin",function(u,y){return y=u.order,(b(u.startTime)+T+.5*(b(u.endTime)-b(u.startTime))).toString()+"px "+(y*_+x+.5*a).toString()+"px"}).attr("class",function(u){const y="task";let Y="";u.classes.length>0&&(Y=u.classes.join(" "));let C=0;for(const[D,M]of S.entries())u.type===M&&(C=D%r.numberSectionStyles);let E="";return u.active?u.crit?E+=" activeCrit":E=" active":u.done?u.crit?E=" doneCrit":E=" done":u.crit&&(E+=" crit"),E.length===0&&(E=" task"),u.milestone&&(E=" milestone "+E),E+=C,E+=" "+Y,y+E}),n.append("text").attr("id",function(u){return u.id+"-text"}).text(function(u){return u.task}).attr("font-size",r.fontSize).attr("x",function(u){let y=b(u.startTime),Y=b(u.renderEndTime||u.endTime);u.milestone&&(y+=.5*(b(u.endTime)-b(u.startTime))-.5*a),u.milestone&&(Y=y+a);const C=this.getBBox().width;return C>Y-y?Y+C+1.5*r.leftPadding>h?y+T-5:Y+T+5:(Y-y)/2+y+T}).attr("y",function(u,y){return y=u.order,y*_+r.barHeight/2+(r.fontSize/2-2)+x}).attr("text-height",a).attr("class",function(u){const y=b(u.startTime);let Y=b(u.endTime);u.milestone&&(Y=y+a);const C=this.getBBox().width;let E="";u.classes.length>0&&(E=u.classes.join(" "));let D=0;for(const[at,ot]of S.entries())u.type===ot&&(D=at%r.numberSectionStyles);let M="";return u.active&&(u.crit?M="activeCritText"+D:M="activeText"+D),u.done?u.crit?M=M+" doneCritText"+D:M=M+" doneText"+D:u.crit&&(M=M+" critText"+D),u.milestone&&(M+=" milestoneText"),C>Y-y?Y+C+1.5*r.leftPadding>h?E+" taskTextOutsideLeft taskTextOutside"+D+" "+M:E+" taskTextOutsideRight taskTextOutside"+D+" "+M+" width-"+C:E+" taskText taskText"+D+" "+M+" width-"+C}),it().securityLevel==="sandbox"){let u;u=kt("#i"+e);const y=u.nodes()[0].contentDocument;n.filter(function(Y){return W[Y.id]!==void 0}).each(function(Y){var C=y.querySelector("#"+Y.id),E=y.querySelector("#"+Y.id+"-text");const D=C.parentNode;var M=y.createElement("a");M.setAttribute("xlink:href",W[Y.id]),M.setAttribute("target","_top"),D.appendChild(M),M.appendChild(C),M.appendChild(E)})}}function G(m,_,x,T,a,f,h,c){if(h.length===0&&c.length===0)return;let k,n;for(const{startTime:C,endTime:E}of f)(k===void 0||C<k)&&(k=C),(n===void 0||E>n)&&(n=E);if(!k||!n)return;if(P(n).diff(P(k),"year")>5){vt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const W=i.db.getDateFormat(),d=[];let u=null,y=P(k);for(;y.valueOf()<=n;)i.db.isInvalidDate(y,W,h,c)?u?u.end=y:u={start:y,end:y}:u&&(d.push(u),u=null),y=y.add(1,"d");I.append("g").selectAll("rect").data(d).enter().append("rect").attr("id",function(C){return"exclude-"+C.start.format("YYYY-MM-DD")}).attr("x",function(C){return b(C.start)+x}).attr("y",r.gridLineStartPadding).attr("width",function(C){const E=C.end.add(1,"day");return b(E)-b(C.start)}).attr("height",a-_-r.gridLineStartPadding).attr("transform-origin",function(C,E){return(b(C.start)+x+.5*(b(C.end)-b(C.start))).toString()+"px "+(E*m+.5*a).toString()+"px"}).attr("class","exclude-range")}function j(m,_,x,T){let a=xe(b).tickSize(-T+_+r.gridLineStartPadding).tickFormat(Vt(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const h=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(h!==null){const c=h[1],k=h[2],n=i.db.getWeekday()||r.weekday;switch(k){case"millisecond":a.ticks(Gt.every(c));break;case"second":a.ticks(Ht.every(c));break;case"minute":a.ticks(Rt.every(c));break;case"hour":a.ticks(Nt.every(c));break;case"day":a.ticks(Bt.every(c));break;case"week":a.ticks(jt[n].every(c));break;case"month":a.ticks(zt.every(c));break}}if(I.append("g").attr("class","grid").attr("transform","translate("+m+", "+(T-50)+")").call(a).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let c=we(b).tickSize(-T+_+r.gridLineStartPadding).tickFormat(Vt(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(h!==null){const k=h[1],n=h[2],W=i.db.getWeekday()||r.weekday;switch(n){case"millisecond":c.ticks(Gt.every(k));break;case"second":c.ticks(Ht.every(k));break;case"minute":c.ticks(Rt.every(k));break;case"hour":c.ticks(Nt.every(k));break;case"day":c.ticks(Bt.every(k));break;case"week":c.ticks(jt[W].every(k));break;case"month":c.ticks(zt.every(k));break}}I.append("g").attr("class","grid").attr("transform","translate("+m+", "+_+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function Q(m,_){let x=0;const T=Object.keys(F).map(a=>[a,F[a]]);I.append("g").selectAll("text").data(T).enter().append(function(a){const f=a[0].split(_e.lineBreakRegex),h=-(f.length-1)/2,c=v.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("dy",h+"em");for(const[k,n]of f.entries()){const W=v.createElementNS("http://www.w3.org/2000/svg","tspan");W.setAttribute("alignment-baseline","central"),W.setAttribute("x","10"),k>0&&W.setAttribute("dy","1em"),W.textContent=n,c.appendChild(W)}return c}).attr("x",10).attr("y",function(a,f){if(f>0)for(let h=0;h<f;h++)return x+=T[f-1][1],a[1]*m/2+x*m+_;else return a[1]*m/2+_}).attr("font-size",r.sectionFontSize).attr("class",function(a){for(const[f,h]of S.entries())if(a[0]===h)return"sectionTitle sectionTitle"+f%r.numberSectionStyles;return"sectionTitle"})}function J(m,_,x,T){const a=i.db.getTodayMarker();if(a==="off")return;const f=I.append("g").attr("class","today"),h=new Date,c=f.append("line");c.attr("x1",b(h)+m).attr("x2",b(h)+m).attr("y1",r.titleTopMargin).attr("y2",T-r.titleTopMargin).attr("class","today"),a!==""&&c.attr("style",a.replace(/,/g,";"))}function K(m){const _={},x=[];for(let T=0,a=m.length;T<a;++T)Object.prototype.hasOwnProperty.call(_,m[T])||(_[m[T]]=!0,x.push(m[T]));return x}},Vs={setConf:Ws,draw:Ps},zs=t=>`
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
