(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),i=n(7),a=n.n(i),c=(n(13),n(14),n(2)),o=n(3),u=n(5),l=n(4),h=n(0),j=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{className:"square",onClick:this.props.onClick,style:{backgroundColor:this.props.isHighlight?"red":"white"},children:this.props.value})}}]),n}(r.a.Component),b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"renderSquare",value:function(t){var e=this;return Object(h.jsx)(j,{value:this.props.squares[t],onClick:function(){return e.props.onClick(t)},isHighlight:-1!==this.props.highlight.indexOf(t)})}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{children:[0,1,2].map((function(e){return Object(h.jsx)("div",{className:"board-row",children:Array(3).fill(0).map((function(n,s){return t.renderSquare(3*e+s)}))})}))})}}]),n}(r.a.Component),d=n(8);function p(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var s=Object(d.a)(e[n],3),r=s[0],i=s[1],a=s[2];if(t[r]&&t[r]===t[i]&&t[r]===t[a])return{winner:t[r],line:e[n]}}return null}var f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={history:[{squares:Array(9).fill(null),position:null}],stepNumber:0,xIsNext:!0,line:[],desc:!0},s}return Object(o.a)(n,[{key:"handleClick",value:function(t){var e=this.state.history.slice(0,this.state.stepNumber+1),n=e[e.length-1].squares.slice();p(n)||n[t]||(n[t]=this.state.xIsNext?"X":"O",this.setState({history:e.concat([{squares:n,position:[Math.floor(t/3)+1,t%3+1]}]),stepNumber:e.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(t){this.setState({stepNumber:t,xIsNext:t%2===0})}},{key:"handleDesc",value:function(){this.setState({desc:!this.state.desc,history:this.state.history.reverse(),stepNumber:this.state.history.length-this.state.stepNumber-1})}},{key:"handleRestart",value:function(){this.setState({history:[{squares:Array(9).fill(null),position:null}],stepNumber:0})}},{key:"render",value:function(){var t,e=this,n=this.state.history,s=n[this.state.stepNumber],r=p(s.squares),i=[];r?(t=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:"Winner: "+r.winner}),Object(h.jsx)("button",{onClick:function(){return e.handleRestart()},children:"Restart"})]}),i=r.line):t=-1===s.squares.indexOf(null)?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:"Draw!  "}),Object(h.jsx)("button",{onClick:function(){return e.handleRestart()},children:"Restart"})]}):"Next player: "+(this.state.xIsNext?"X":"O");var a=n.map((function(t,n){var s=t.position?"Go to move #"+n+" ("+t.position.toString()+")":"Go to game start";return Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return e.jumpTo(n)},style:{fontWeight:n===e.state.stepNumber?"bold":"normal"},children:s})},n)}));return Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(b,{highlight:i,squares:s.squares,onClick:function(t){return e.handleClick(t)}})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{onClick:function(){return e.handleDesc()},children:this.state.desc?"\u2193":"\u2191"})]}),Object(h.jsx)("ol",{children:a})]})]})}}]),n}(r.a.Component);var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),r(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.7f034424.chunk.js.map