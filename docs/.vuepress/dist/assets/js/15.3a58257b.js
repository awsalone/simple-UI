(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{329:function(t,o,e){},374:function(t,o,e){"use strict";var i=e(329);e.n(i).a},397:function(t,o,e){"use strict";e.r(o);var i={name:"g-toolTips",props:{placement:{type:String,default:"top",validator:function(t){return!("top"!==t&&"bottom"!==t&&"left"!==t&&"right"!==t)}},content:{type:String,default:"tips"},effect:{default:"black",validator:function(t){return!("white"!==t&&"black"!==t)}}},data:function(){return{show:!1,position:{top:0,left:0},bgcColor:{"--bgcColor":"#303133"},fontCol:{"--fontCol":"#fff"}}},watch:{show:function(){var t=this.$refs.trigger.children[0]?this.$refs.trigger.children[0]:this.$refs.trigger,o=this.$refs.popover;this.$refs.arrow;switch(this.placement){case"top":this.position.left=t.offsetLeft-o.offsetWidth/2+t.offsetWidth/2,this.position.top=t.offsetTop-o.offsetHeight-5;break;case"bottom":this.position.left=t.offsetLeft-o.offsetWidth/2+t.offsetWidth/2,this.position.top=t.offsetTop+t.offsetHeight+5;break;case"left":this.position.left=t.offsetLeft-o.offsetWidth-5,this.position.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2;break;case"right":this.position.left=t.offsetLeft+t.offsetWidth+5,this.position.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2}o.style.left=this.position.left+"px",o.style.top=this.position.top+"px"}},mounted:function(){var t=this,o=this.$refs.trigger;o.addEventListener("mouseenter",(function(){t.show=!0,t.changeColor()})),o.addEventListener("mouseleave",(function(){t.show=!1,t.changeColor()}))},methods:{changeColor:function(){"white"===this.effect?(this.bgcColor={"--bgcColor":"#fff"},this.fontCol={"--fontCol":"#303133"}):(this.bgcColor={"--bgcColor":"#303133"},this.fontCol={"--fontCol":"#fff"})}}},s=(e(374),e(41)),f=Object(s.a)(i,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticStyle:{position:"relative"}},[e("span",{ref:"trigger"},[t._t("default")],2),t._v(" "),e("div",{ref:"popover",staticClass:"tooltip",class:{visiable:t.show}},[e("div",{ref:"arrow",staticClass:"tooltip-arrow"}),t._v(" "),e("div",{staticClass:"tooltip-inner",style:[t.bgcColor,t.fontCol]},[t._t("content",[t._v(t._s(t.content))])],2)])])])}),[],!1,null,null,null);o.default=f.exports}}]);