(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(3),r=n(5),i=n(4),s=n(6),h=n(1),u=n(0),l=n.n(u),c=n(8),d=n.n(c),m=(n(16),[["In every walk with nature one receives far more than he seeks.","John Muir"],["The most beautiful gift of nature is that it gives one pleasure to look around and try to comprehend what we see.","Albert Einstein"],["Going to the mountains is going home.","John Muir"],["Over every mountain there is a path, although it may not be seen from the valley.","Theodore Roethke"],["There are always flowers for those who want to see them.","Henri Matisse"],["Nature does not hurry, yet everything is accomplished.","Lao Tzu"],["I felt my lungs inflate with the onrush of scenery\u2014air, mountains, trees, people. I thought, \u2018This is what it is to be happy.\u2019","Sylvia Plath"],["Adopt the pace of nature: her secret is patience.","Ralph Waldo Emerson"],["Should you shield the canyons from the windstorms you would never see the true beauty of their carvings.","Elisabeth K\xfcbler-Ross"],["Nature is not a place to visit. It is home.","Gary Snyder"],["In all things of nature there is something of the marvelous.","Aristotle"],["Instructions for living a life: Pay attention. Be astonished. Tell about it.","Mary Oliver"],["We do not see nature with our eyes, but with our understandings and our hearts.","William Hazlett"],["Nature gives to every time and season some beauties of its own.","Charles Dickens"]]),p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={randomIndex:Math.floor(Math.random()*m.length)},n.changeQuote=n.changeQuote.bind(Object(h.a)(Object(h.a)(n))),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"changeQuote",value:function(){this.setState({randomIndex:Math.floor(Math.random()*m.length)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container",id:"quote-box"},l.a.createElement(f,{randomIndex:this.state.randomIndex,changeQuote:this.changeQuote}))}}]),t}(l.a.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=m[this.props.randomIndex][0],t=m[this.props.randomIndex][1],n="https://twitter.com/intent/tweet?text="+encodeURIComponent(e)+" - "+encodeURIComponent(t);return l.a.createElement("div",null,l.a.createElement("div",{className:"quote"},l.a.createElement("blockquote",{id:"text"},l.a.createElement("p",null,e)),l.a.createElement("br",null),l.a.createElement("cite",{id:"author"},t)),l.a.createElement("div",{className:"button"},l.a.createElement("button",{id:"new-quote",onClick:this.props.changeQuote},"Get A New Quote"),l.a.createElement("a",{id:"tweet-quote",target:"_blank",rel:"noopener noreferrer",href:n},"Tweet Quote")))}}]),t}(l.a.Component);d.a.render(l.a.createElement(p,null),document.getElementById("root"))},16:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.551ea681.chunk.js.map