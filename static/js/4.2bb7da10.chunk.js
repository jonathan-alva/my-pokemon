/*! For license information please see 4.2bb7da10.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-pokemon"]=this["webpackJsonpmy-pokemon"]||[]).push([[4],{528:function(e,t,a){"use strict";var n=a(161),o=a(162),s=a(164),i=a(163),r=a(165),l=a(1),c=a.n(l),m=(a(530),a(527),function(e){function t(e){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).call(this,e))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={color:this.props.colorTitle,textAlign:this.props.textAlign,position:this.props.position,bottom:this.props.bottom,left:this.props.left,fontSize:this.props.fontSizeTitle+"rem"};return c.a.createElement("p",{className:"title_start title_end",style:e},this.props.title_start,c.a.createElement("span",{id:"x_pokemon",className:"title_middle"},this.props.title_middle),this.props.title_end)}}]),t}(c.a.Component));t.a=m},529:function(e,t,a){"use strict";var n=a(161),o=a(162),s=a(164),i=a(163),r=a(165),l=a(1),c=a.n(l),m=(a(531),a(527),function(e){function t(e){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).call(this,e))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={color:this.props.description_text_color,textAlign:this.props.description_text_align,fontWeight:this.props.font_weight,fontSize:this.props.fontSize,marginTop:this.props.description_margin_top+"%",marginBottom:this.props.description_margin_bottom+"%",paddingRight:this.props.description_padding_right+"%",paddingLeft:this.props.description_padding_left+"%"};return c.a.createElement("p",{className:"description",style:e},this.props.description_text)}}]),t}(c.a.Component));t.a=m},530:function(e,t,a){},531:function(e,t,a){},532:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===s)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},533:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n,o=a(58),s=a.n(o);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var r="object"===typeof window&&window.Element||function(){};s.a.oneOfType([s.a.string,s.a.func,function(e,t,a){if(!(e[t]instanceof r))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},s.a.shape({current:s.a.any})]);var l=s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func}),s.a.arrayOf(s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement},534:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))},537:function(e,t,a){e.exports=a.p+"static/media/arrow-left.f38d2588.svg"},538:function(e,t,a){e.exports=a.p+"static/media/arrow-right.cdc19058.svg"},554:function(e,t,a){},555:function(e,t,a){"use strict";var n=a(14),o=a(29),s=a(1),i=a.n(s),r=a(58),l=a.n(r),c=a(532),m=a.n(c),p=a(533),d={children:l.a.node,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,size:l.a.string,tag:p.b,listTag:p.b,"aria-label":l.a.string},u=function(e){var t,a=e.className,s=e.listClassName,r=e.cssModule,l=e.size,c=e.tag,d=e.listTag,u=e["aria-label"],h=Object(o.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(p.a)(m()(a),r),b=Object(p.a)(m()(s,"pagination",((t={})["pagination-"+l]=!!l,t)),r);return i.a.createElement(c,{className:f,"aria-label":u},i.a.createElement(d,Object(n.a)({},h,{className:b})))};u.propTypes=d,u.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=u},556:function(e,t,a){"use strict";var n=a(14),o=a(29),s=a(1),i=a.n(s),r=a(58),l=a.n(r),c=a(532),m=a.n(c),p=a(533),d={active:l.a.bool,children:l.a.node,className:l.a.string,cssModule:l.a.object,disabled:l.a.bool,tag:p.b},u=function(e){var t=e.active,a=e.className,s=e.cssModule,r=e.disabled,l=e.tag,c=Object(o.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(p.a)(m()(a,"page-item",{active:t,disabled:r}),s);return i.a.createElement(l,Object(n.a)({},c,{className:d}))};u.propTypes=d,u.defaultProps={tag:"li"},t.a=u},557:function(e,t,a){"use strict";var n=a(14),o=a(29),s=a(1),i=a.n(s),r=a(58),l=a.n(r),c=a(532),m=a.n(c),p=a(533),d={"aria-label":l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,next:l.a.bool,previous:l.a.bool,first:l.a.bool,last:l.a.bool,tag:p.b},u=function(e){var t,a=e.className,s=e.cssModule,r=e.next,l=e.previous,c=e.first,d=e.last,u=e.tag,h=Object(o.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=Object(p.a)(m()(a,"page-link"),s);l?t="Previous":r?t="Next":c?t="First":d&&(t="Last");var b,v=e["aria-label"]||t;l?b="\u2039":r?b="\u203a":c?b="\xab":d&&(b="\xbb");var g=e.children;return g&&Array.isArray(g)&&0===g.length&&(g=null),h.href||"a"!==u||(u="button"),(l||r||c||d)&&(g=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},g||b),i.a.createElement("span",{className:"sr-only",key:"sr"},v)]),i.a.createElement(u,Object(n.a)({},h,{className:f,"aria-label":v}),g)};u.propTypes=d,u.defaultProps={tag:"a"},t.a=u},559:function(e,t,a){"use strict";var n=a(14),o=a(29);var s=a(43),i=a(1),r=a.n(i),l=a(58),c=a.n(l),m=a(532),p=a.n(m),d=a(533),u={active:c.a.bool,"aria-label":c.a.string,block:c.a.bool,color:c.a.string,disabled:c.a.bool,outline:c.a.bool,tag:d.b,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),onClick:c.a.func,size:c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,close:c.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,i=e.className,l=e.close,c=e.cssModule,m=e.color,u=e.outline,h=e.size,f=e.tag,b=e.innerRef,v=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof v.children&&(v.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(u?"-outline":"")+"-"+m,_=Object(d.a)(p()(i,{close:l},l||"btn",l||g,!!h&&"btn-"+h,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),c);v.href&&"button"===f&&(f="a");var k=l?"Close":null;return r.a.createElement(f,Object(n.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:_,ref:b,onClick:this.onClick,"aria-label":a||k}))},t}(r.a.Component);h.propTypes=u,h.defaultProps={color:"secondary",tag:"button"};t.a=h},562:function(e,t,a){"use strict";a.r(t);var n=a(111),o=a.n(n),s=a(534),i=a(65),r=a(166),l=a(161),c=a(162),m=a(164),p=a(163),d=a(169),u=a(165),h=a(1),f=a.n(h),b=a(559),v=a(555),g=a(556),_=a(557),k=(a(554),a(167)),E=a(168),y=a(528),w=a(529),N=a(63),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={pokemon_data:{pokemon_id:"",front_default:"",pokemon_name:"",pokemon_height:"",pokemon_width:"",abilities:[],moves:[],stats:[],types:[],abilities_data:[],moves_data:[],stats_data:[]},pokemon_species_data:{color:[],growth_rate:[],base_happiness:""},pokemon_count:0,isLoad:!1,currentPage:0,pageSize:15,pagesCountMoves:0,prevDetail:"",nextDetail:"",prevId:"",nextId:"",prevUrl:"",nextUrl:""},a.handleCatchButton=a.handleCatchButton.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.getInitalData(),t=this.props.match.params.id,N.a.getPokemonOwned().then((function(e){var n=0;e.map((function(e){t===e.pokemon_id&&n++})),a.setState({pokemon_count:n})})),e.next=5,N.a.getPokemonData(t).then((function(e){var n=Object(i.a)({},a.state.pokemon_data);n.front_default=e.sprites.front_default,n.pokemon_name=e.name.charAt(0).toUpperCase()+e.name.slice(1),n.pokemon_height=e.height,n.pokemon_width=e.width,n.abilities=e.abilities,n.moves=e.moves,n.stats=e.stats,n.types=e.types,n.pokemon_id=t,a.setState({pokemon_data:n,pagesCountMoves:Math.ceil(e.moves.length/a.state.pageSize)},(function(){var e=Object(s.a)(a.state.pokemon_data.abilities),t=Object(s.a)(a.state.pokemon_data.moves),n=Object(s.a)(a.state.pokemon_data.stats),o=[],i=[],r=[];e.map((function(e){var t=e.ability.url.split("/")[6],n=[];N.a.getAbilityData(t).then((function(e){n.short_effect=e.effect_entries[0].short_effect,e.names.map((function(e){"en"===e.language.name&&(n.name=e.name)})),o=[].concat(Object(s.a)(o),[n]),a.setState({abilities_data:o})}))})),t.map((function(e){var t=e.move.url.split("/")[6],n=[];N.a.getMoveData(t).then((function(e){n.pp=e.pp,e.names.map((function(e){"en"===e.language.name&&(n.name=e.name)})),i=[].concat(Object(s.a)(i),[n]),a.setState({moves_data:i})}))})),n.map((function(e){var t=e.stat.url.split("/")[6],n=[];n.base_stat=e.base_stat,N.a.getStatData(t).then((function(e){e.names.map((function(e){"en"===e.language.name&&(n.name=e.name)})),r=[].concat(Object(s.a)(r),[n]),a.setState({stats_data:r})}))}))}))}));case 5:return e.next=7,N.a.getPokemonSpeciesData(t).then((function(e){N.a.getPokemonSpecies().then((function(e){var n=parseInt(t)+1,o=parseInt(t)-1;1===t?N.a.getPokemonData(n).then((function(e){a.setState({nextDetail:e.sprites.front_default,nextUrl:n,nextId:"#"+n})})):(t===e.count||N.a.getPokemonData(n).then((function(e){a.setState({nextDetail:e.sprites.front_default,nextUrl:n,nextId:"#"+n})})),N.a.getPokemonData(o).then((function(e){a.setState({prevDetail:e.sprites.front_default,prevUrl:o,prevId:"#"+o})})))}));var n=Object(i.a)({},a.state.pokemon_species_data),o=e.color.name;"black"===o?(n.color="#303943",n.textColor="white"):"blue"===o?(n.color="#58abf6",n.textColor="white"):"brown"===o?(n.color="#CA8179",n.textColor="white"):"gray"===o?(n.color="#F5F5F5",n.textColor="#818181"):"green"===o?(n.color="#2CDAB1",n.textColor="white"):"pink"===o?(n.color="#FFB6C1",n.textColor="#818181"):"purple"===o?(n.color="#9F5BBA",n.textColor="white"):"red"===o?(n.color="#F7786B",n.textColor="white"):"white"===o?(n.color="white",n.textColor="#818181"):"yellow"===o&&(n.color="#FFCE4B",n.textColor="white"),n.growth_rate=e.growth_rate,n.base_happiness=e.base_happiness,a.setState({pokemon_species_data:n}),a.setState({isLoad:!0})}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e,t){e.preventDefault(),this.setState({currentPage:t})}},{key:"handleCatchButton",value:function(){var e=this,t=Math.random()>=.5;if(window.confirm("Success Rate: 50%. Continue ?"))if(t){var a=prompt("Success !! Enter Pokemon Nickname : ",""),n={pokemon_id:this.state.pokemon_data.pokemon_id,nickname:a};N.a.postPokemon(n.pokemon_id,n.nickname).then((function(t){console.log(t),"200"===t.status&&(e.setState({pokemon_count:parseInt(e.state.pokemon_count)+1}),alert("Congratulation! ".concat(a," join your team.")))}))}else alert("Failed to catch Pokemon.")}},{key:"render",value:function(){var e=this,t=this.state.currentPage;if(!0===this.state.isLoad&&void 0!==this.state.abilities_data&&void 0!==this.state.moves_data&&void 0!==this.state.stats_data){var n=0;return this.state.stats_data.map((function(e){e.base_stat>n&&(n=e.base_stat)})),f.a.createElement("div",null,f.a.createElement("div",{className:"container-fluid",style:{backgroundColor:"#2c2c2c",paddingLeft:"0",paddingRight:"0"}},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{id:"pokemon_details_image",className:"col-lg-6 col-md-6 col-sm-12 col-12 p-5 mt-2",style:{backgroundColor:this.state.pokemon_species_data.color}},f.a.createElement("img",{src:"".concat(this.state.pokemon_data.front_default),style:{objectFit:"cover",width:"100%",height:"100%"}})),f.a.createElement("div",{id:"pokemon_details_description",className:"col-lg-6 col-md-6 col-sm-12 col-12 p-5"},f.a.createElement(y.a,{title_start:this.state.pokemon_data.pokemon_name,colorTitle:"#e95e1e"}),f.a.createElement(w.a,{description_text:"#".concat(this.state.pokemon_data.pokemon_id),description_text_color:"#818181",fontSize:"25px"}),f.a.createElement("div",{className:"row mb-4"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"row"},this.state.pokemon_data.types.map((function(t,a){return f.a.createElement(h.Fragment,{key:a},f.a.createElement("div",{className:"col-5 rounded text-center",style:{backgroundColor:e.state.pokemon_species_data.color,color:e.state.pokemon_species_data.textColor}},t.type.name.charAt(0).toUpperCase()+t.type.name.slice(1)),f.a.createElement("div",{className:"offset-1"}))}))))),f.a.createElement("div",null,f.a.createElement("h4",{style:{color:"white"}},"Base Stat"),f.a.createElement("hr",{className:"separator"}),this.state.stats_data.map((function(e,t){return f.a.createElement("div",{className:"row",key:t},f.a.createElement("div",{className:"col"},f.a.createElement("p",{className:"fix-line-height-text",style:{color:"white"}},e.name)),f.a.createElement("div",{className:"col"},f.a.createElement("div",{className:"progress"},f.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":e.base_stat,"aria-valuemin":"0","aria-valuemax":n,style:{width:"".concat(e.base_stat/n*100,"%")}},e.base_stat))))}))),f.a.createElement("div",{className:"mt-2"},f.a.createElement("h4",{style:{color:"white"}},"Other Info"),f.a.createElement("hr",{className:"separator"}),void 0!==this.state.pokemon_data.pokemon_height?f.a.createElement("div",{style:{color:"white"}},"Height - ",this.state.pokemon_data.pokemon_height):f.a.createElement("div",null)),f.a.createElement("div",{style:{color:"white"},className:"mb-3"},"Base Happiness - ",this.state.pokemon_species_data.base_happiness),f.a.createElement("div",null,void 0!==this.state.pokemon_data.pokemon_width?f.a.createElement("div",null,"Width - ",this.state.pokemon_data.pokemon_width):f.a.createElement("div",null)),f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col"},f.a.createElement(b.a,{className:"mb-3",onClick:this.handleCatchButton,style:{backgroundColor:"#e95e1e",marginLeft:"0",paddingBottom:"3",color:"#f5f6f8",borderColor:"transparent"}},"Catch Pokemon"),f.a.createElement("h5",{style:{color:"white"}},f.a.createElement("span",{style:{color:"#e95e1e"}},this.state.pokemon_count)," Pokemon Owned")))))),f.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12",style:{backgroundColor:"#ebebeb"}},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-12 second_section"},f.a.createElement(y.a,{title_start:"Abilities",fontSizeTitle:"2"}),f.a.createElement("ul",{className:"main_list"},this.state.abilities_data.map((function(e,t){return f.a.createElement("li",{key:t},f.a.createElement("span",{style:{fontWeight:"bold"}},e.name)," - ",e.short_effect,".")})))),f.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-12 second_section"},f.a.createElement(y.a,{title_start:"Moves",fontSizeTitle:"2"}),f.a.createElement("ul",{className:"main_list"},this.state.moves_data.slice(t*this.state.pageSize,(t+1)*this.state.pageSize).map((function(e,t){return f.a.createElement("li",{key:t},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col"},f.a.createElement("span",{style:{fontWeight:"bold"}},e.name)),f.a.createElement("div",{className:"col"},f.a.createElement("span",null,"Charge : ",e.pp))))}))),f.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12 mt-5",style:{overflowX:"auto"}},f.a.createElement(v.a,{"aria-label":"Page navigation example",style:{width:"fit-content",marginLeft:"auto",marginRight:"auto"}},f.a.createElement("img",{src:a(537),alt:"arrow-left"}),f.a.createElement(g.a,{disabled:t<=0},f.a.createElement(_.a,{onClick:function(a){return e.handleClick(a,t-1)},previous:!0,href:"#",style:{opacity:"0",right:"95%"}})),Object(s.a)(Array(this.state.pagesCountMoves)).map((function(a,n){return f.a.createElement(g.a,{active:n===t,key:n},f.a.createElement(_.a,{onClick:function(t){return e.handleClick(t,n)},href:"#"},n+1))})),f.a.createElement(g.a,{disabled:t>=this.state.pagesCountMoves-1},f.a.createElement(_.a,{onClick:function(a){return e.handleClick(a,t+1)},next:!0,href:"#",style:{opacity:"0",left:"95%"}})),f.a.createElement("img",{src:a(538)})))))),f.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 p-5"},f.a.createElement("div",{className:"w-10 float-left"},f.a.createElement("div",{id:"prevDetail"},""!=this.state.prevUrl?f.a.createElement("a",{href:"/my-pokemon"+"/detail/".concat(this.state.prevUrl)},f.a.createElement("div",null,f.a.createElement("img",{src:"".concat(this.state.prevDetail),style:{width:"100%",height:"100%"}}),f.a.createElement("p",{className:"text-center"},this.state.prevId))):f.a.createElement("div",null))),f.a.createElement("div",{className:"w-10 float-right"},f.a.createElement("div",{id:"nextDetail"},""!==this.state.nextUrl?f.a.createElement("a",{href:"/my-pokemon"+"/detail/".concat(this.state.nextUrl)},f.a.createElement("div",null,f.a.createElement("img",{src:"".concat(this.state.nextDetail),style:{width:"100%",height:"100%"},alt:"Next-Detail"}),f.a.createElement("p",{className:"text-center"},this.state.nextId))):f.a.createElement("div",null)))))))}return!1}}]),t}(h.Component);t.default=Object(k.b)((function(e){return e}),{getInitalData:E.b})(C)}}]);
//# sourceMappingURL=4.2bb7da10.chunk.js.map