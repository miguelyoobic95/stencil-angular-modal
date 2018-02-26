/*! Built with http://stenciljs.com */
mycomponent.loadBundle("wbbcgnfd",["exports"],function(t){var e=window.mycomponent.h,o=function(){function t(){this.primaryButtonText="Confirm",this.secondaryButtonText="Cancel",this.hasHeader=!0,this.hasFooter=!1}return t.prototype.handlePrimaryClick=function(t){t&&this.onPrimaryButtonClicked.emit(!0)},t.prototype.close=function(){var t=this;this.el.classList.add("out"),setTimeout(function(){t.onClose.emit(!0),t.el.classList.remove("out")},400)},t.prototype.componentDidLoad=function(){this.content&&this.el.querySelector("div.modal-body").appendChild(this.content)},t.prototype.componentDidUpdate=function(){this.content&&this.el.querySelector("div.modal-body").appendChild(this.content)},t.prototype.render=function(){var t=this;return e("div",{class:"outer-container"},this.hasHeader?e("div",{class:"modal-header","attr-layout":"row","attr-layout-align":"space-between"},e("div",{class:"inner-header"},this.titleIcon?e("span",{class:"icon"},e("i",{class:this.titleIcon})):null,e("span",{class:"modal-title"},this.title)),e("span",{class:"close-icon",onClick:function(){return t.close()}},e("i",{class:"yo-close"}))):null,e("div",{class:"modal-body","attr-layout":"row"},e("slot",{name:"modal-content"})),this.hasFooter?e("div",{class:"modal-footer","attr-layout":"row"},this.footerText?e("div",{class:"footer-text"},e("span",null,this.footerText)):null,e("div",{class:"footer-buttons","attr-layout":"row","attr-layout-align":"end center"},e("div",{class:"secondary-button"},e("yoo-button",{class:"stable",onClick:function(){return t.close()},title:this.secondaryButtonText})),e("div",{class:"primary-button"},e("yoo-button",{class:"accent",onClick:function(e){return t.handlePrimaryClick(e)},title:this.primaryButtonText})))):null)},Object.defineProperty(t,"is",{get:function(){return"yoo-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},content:{type:"Any",attr:"content"},cssClass:{type:String,attr:"css-class"},el:{elementRef:!0},footerText:{type:String,attr:"footer-text"},hasFooter:{type:Boolean,attr:"has-footer"},hasHeader:{type:Boolean,attr:"has-header"},primaryButtonText:{type:String,attr:"primary-button-text"},secondaryButtonText:{type:String,attr:"secondary-button-text"},title:{type:String,attr:"title"},titleIcon:{type:String,attr:"title-icon"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onPrimaryButtonClicked",method:"onPrimaryButtonClicked",bubbles:!0,cancelable:!0,composed:!0},{name:"onClose",method:"onClose",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{position:absolute;z-index:2000;top:25%;right:25%;-webkit-animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards;animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards}:host .outer-container{border:1px solid var(--grey-10,#e9e8f3);background:var(--light,#fff);width:37.5rem;border-radius:.3125rem}:host .outer-container .modal-header{padding:1.5625rem;height:4.0625rem;-webkit-border-top-right-radius:.3125rem;border-top-right-radius:.3125rem;-webkit-border-top-left-radius:.3125rem;border-top-left-radius:.3125rem;background-clip:padding-box;border-bottom:1px solid var(--grey-20,#d2d0e7)}:host .outer-container .modal-header .modal-title{font-size:1rem;font-weight:700}:host .outer-container .modal-header .icon{padding:.5rem}:host .outer-container .modal-header .close-icon{cursor:pointer}:host .outer-container .modal-body{padding:.5rem 1.5625rem;min-height:10.9375rem}:host .outer-container .modal-footer{padding:1.5625rem;height:4.0625rem;border-top:1px solid var(--grey-20,#d2d0e7);align-items:center}:host .outer-container .modal-footer .footer-buttons{flex:1 1 33%}:host .outer-container .modal-footer .footer-buttons .primary-button,:host .outer-container .modal-footer .footer-buttons .secondary-button{padding:.5rem}:host(.out){-webkit-animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards;animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards}\@keyframes scaleUp{0%{transform:scale(.8) translateY(1000px);opacity:0}100%{transform:scale(1) translateY(0);opacity:1}}\@keyframes scaleDown{0%{transform:scale(1) translateY(0);opacity:1}100%{transform:scale(.8) translateY(1000px);opacity:0}}\@keyframes scaleFromRight{0%{transform:scale(.8) translateX(1000px);opacity:0}100%{transform:scale(1) translateX(0);opacity:1}}:host(.drawer){top:0;right:0;height:100%;width:33.33%;-webkit-animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards;animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards}:host(.drawer) .outer-container{border-radius:0;height:100%;width:100%}:host(.drawer) .outer-container .modal-header{border-radius:0;width:100%;position:absolute}:host(.drawer) .outer-container .modal-body{padding-top:5.0625rem}:host(.drawer) .outer-container .modal-footer{width:100%;position:absolute;bottom:0}:host(.drawer) .outer-container .modal-header{flex-direction:row-reverse}:host(.fullscreen){top:0;right:0;height:100%;width:100%}:host(.fullscreen) .outer-container{border-radius:0;height:100%;width:100%}:host(.fullscreen) .outer-container .modal-header{border-radius:0;width:100%;position:absolute}:host(.fullscreen) .outer-container .modal-body{padding-top:5.0625rem}:host(.fullscreen) .outer-container .modal-footer{width:100%;position:absolute;bottom:0}:host(.accent) .outer-container{color:#3a3569;border:none}:host(.accent) .outer-container .modal-header{background-color:var(--accent-20,#d2e4fe);color:var(--accent,#1c76fc);border-bottom-color:var(--accent,#1c76fc)}:host(.danger) .outer-container{color:#3a3569;border:none}:host(.danger) .outer-container .modal-header{background-color:var(--danger-20,#fce2e5);color:var(--danger,#ef6e7f);border-bottom-color:var(--danger,#ef6e7f)}:host(.success) .outer-container{color:#3a3569;border:none}:host(.success) .outer-container .modal-header{background-color:var(--success-20,#c5fdfa);color:var(--success-110,#1abd9c);border-bottom-color:var(--success-110,#1abd9c)}:host(.info) .outer-container{color:#3a3569;border:none}:host(.info) .outer-container .modal-header{background-color:var(--info-20,#e1dfff);color:var(--info,#6a61ff);border-bottom-color:var(--info,#6a61ff)}:host(.warning) .outer-container{color:#3a3569;border:none}:host(.warning) .outer-container .modal-header{background-color:var(--warning-20,#fcf4d8);color:var(--warning,#f2c83a);border-bottom-color:var(--warning,#f2c83a)}:host(.stable) .outer-container{color:#3a3569;border:none}:host(.stable) .outer-container .modal-header{background-color:var(--grey-20,#d2d0e7);color:var(--grey-100,#3a3569);border-bottom-color:var(--grey-100,#3a3569)}"},enumerable:!0,configurable:!0}),t}(),n=function(){function t(){this.modal=document.createElement("yoo-modal"),this.isDisplaying=!1}return t.prototype.childClosed=function(){this.el.classList.add("out"),this.close()},t.prototype.show=function(){this.isDisplaying=!0,this.el.querySelector("div").insertAdjacentElement("afterend",this.modal)},t.prototype.close=function(){this.el.querySelector("yoo-modal").remove(),this.isDisplaying=!1},t.prototype.populateModal=function(t){this.modal=t},t.prototype.generateModal=function(t){var e=document.createElement("yoo-modal");e=function(t,e){return t.title=e.title,t.titleIcon=e.titleIcon,t.hasFooter=e.hasFooter,t.footerText=e.footerText,t.hasHeader=e.hasHeader,t.primaryButtonText=e.primaryButtonText,t.secondaryButtonText=e.secondaryButtonText,t.className+=e.cssClass,t.content=e.content,t}(e,t),this.modal=e},t.prototype.render=function(){var t=this;return e("div",{onClick:function(){return t.close()},class:this.isDisplaying?"placeholder":""})},Object.defineProperty(t,"is",{get:function(){return"yoo-modal-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},el:{elementRef:!0},generateModal:{method:!0},isDisplaying:{state:!0},modal:{state:!0},populateModal:{method:!0},show:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host .placeholder{z-index:1000;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards;animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards}:host(.out){-webkit-animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards;animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards}\@keyframes fadeIn{0%{background:0 0}100%{background:rgba(58,67,97,.5)}}\@keyframes fadeOut{0%{background:rgba(58,67,97,.5)}100%{background:0 0}}"},enumerable:!0,configurable:!0}),t}();t.YooModal=o,t.YooModalController=n,Object.defineProperty(t,"__esModule",{value:!0})});