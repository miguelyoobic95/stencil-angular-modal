/*! Built with http://stenciljs.com */
const{h:t}=window.mycomponent;class e{constructor(){this.primaryButtonText="Confirm",this.secondaryButtonText="Cancel",this.hasHeader=!0,this.hasFooter=!1}handlePrimaryClick(t){t&&this.onPrimaryButtonClicked.emit(!0)}close(){this.el.classList.add("out"),setTimeout(()=>{this.onClose.emit(!0),this.el.classList.remove("out")},400)}componentDidLoad(){this.content&&this.el.querySelector("div.modal-body").appendChild(this.content)}componentDidUpdate(){this.content&&this.el.querySelector("div.modal-body").appendChild(this.content)}render(){return t("div",{class:"outer-container"},this.hasHeader?t("div",{class:"modal-header","attr-layout":"row","attr-layout-align":"space-between"},t("div",{class:"inner-header"},this.titleIcon?t("span",{class:"icon"},t("i",{class:this.titleIcon})):null,t("span",{class:"modal-title"},this.title)),t("span",{class:"close-icon",onClick:()=>this.close()},t("i",{class:"yo-close"}))):null,t("div",{class:"modal-body","attr-layout":"row"},t("slot",{name:"modal-content"})),this.hasFooter?t("div",{class:"modal-footer","attr-layout":"row"},this.footerText?t("div",{class:"footer-text"},t("span",null,this.footerText)):null,t("div",{class:"footer-buttons","attr-layout":"row","attr-layout-align":"end center"},t("div",{class:"secondary-button"},t("yoo-button",{class:"stable",onClick:()=>this.close(),title:this.secondaryButtonText})),t("div",{class:"primary-button"},t("yoo-button",{class:"accent",onClick:t=>this.handlePrimaryClick(t),title:this.primaryButtonText})))):null)}static get is(){return"yoo-modal"}static get encapsulation(){return"scoped"}static get properties(){return{close:{method:!0},content:{type:"Any",attr:"content"},cssClass:{type:String,attr:"css-class"},el:{elementRef:!0},footerText:{type:String,attr:"footer-text"},hasFooter:{type:Boolean,attr:"has-footer"},hasHeader:{type:Boolean,attr:"has-header"},primaryButtonText:{type:String,attr:"primary-button-text"},secondaryButtonText:{type:String,attr:"secondary-button-text"},title:{type:String,attr:"title"},titleIcon:{type:String,attr:"title-icon"}}}static get events(){return[{name:"onPrimaryButtonClicked",method:"onPrimaryButtonClicked",bubbles:!0,cancelable:!0,composed:!0},{name:"onClose",method:"onClose",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{position:absolute;z-index:2000;top:25%;right:25%;-webkit-animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards;animation:scaleUp .5s cubic-bezier(.165,.84,.44,1) forwards}:host .outer-container{border:1px solid var(--grey-10,#e9e8f3);background:var(--light,#fff);width:37.5rem;border-radius:.3125rem}:host .outer-container .modal-header{padding:1.5625rem;height:4.0625rem;-webkit-border-top-right-radius:.3125rem;border-top-right-radius:.3125rem;-webkit-border-top-left-radius:.3125rem;border-top-left-radius:.3125rem;background-clip:padding-box;border-bottom:1px solid var(--grey-20,#d2d0e7)}:host .outer-container .modal-header .modal-title{font-size:1rem;font-weight:700}:host .outer-container .modal-header .icon{padding:.5rem}:host .outer-container .modal-header .close-icon{cursor:pointer}:host .outer-container .modal-body{padding:.5rem 1.5625rem;min-height:10.9375rem}:host .outer-container .modal-footer{padding:1.5625rem;height:4.0625rem;border-top:1px solid var(--grey-20,#d2d0e7);align-items:center}:host .outer-container .modal-footer .footer-buttons{flex:1 1 33%}:host .outer-container .modal-footer .footer-buttons .primary-button,:host .outer-container .modal-footer .footer-buttons .secondary-button{padding:.5rem}:host(.out){-webkit-animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards;animation:scaleDown .5s cubic-bezier(.165,.84,.44,1) forwards}\@keyframes scaleUp{0%{transform:scale(.8) translateY(1000px);opacity:0}100%{transform:scale(1) translateY(0);opacity:1}}\@keyframes scaleDown{0%{transform:scale(1) translateY(0);opacity:1}100%{transform:scale(.8) translateY(1000px);opacity:0}}\@keyframes scaleFromRight{0%{transform:scale(.8) translateX(1000px);opacity:0}100%{transform:scale(1) translateX(0);opacity:1}}:host(.drawer){top:0;right:0;height:100%;width:33.33%;-webkit-animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards;animation:scaleFromRight .5s cubic-bezier(.165,.84,.44,1) forwards}:host(.drawer) .outer-container{border-radius:0;height:100%;width:100%}:host(.drawer) .outer-container .modal-header{border-radius:0;width:100%;position:absolute}:host(.drawer) .outer-container .modal-body{padding-top:5.0625rem}:host(.drawer) .outer-container .modal-footer{width:100%;position:absolute;bottom:0}:host(.drawer) .outer-container .modal-header{flex-direction:row-reverse}:host(.fullscreen){top:0;right:0;height:100%;width:100%}:host(.fullscreen) .outer-container{border-radius:0;height:100%;width:100%}:host(.fullscreen) .outer-container .modal-header{border-radius:0;width:100%;position:absolute}:host(.fullscreen) .outer-container .modal-body{padding-top:5.0625rem}:host(.fullscreen) .outer-container .modal-footer{width:100%;position:absolute;bottom:0}:host(.accent) .outer-container{color:#3a3569;border:none}:host(.accent) .outer-container .modal-header{background-color:var(--accent-20,#d2e4fe);color:var(--accent,#1c76fc);border-bottom-color:var(--accent,#1c76fc)}:host(.danger) .outer-container{color:#3a3569;border:none}:host(.danger) .outer-container .modal-header{background-color:var(--danger-20,#fce2e5);color:var(--danger,#ef6e7f);border-bottom-color:var(--danger,#ef6e7f)}:host(.success) .outer-container{color:#3a3569;border:none}:host(.success) .outer-container .modal-header{background-color:var(--success-20,#c5fdfa);color:var(--success-110,#1abd9c);border-bottom-color:var(--success-110,#1abd9c)}:host(.info) .outer-container{color:#3a3569;border:none}:host(.info) .outer-container .modal-header{background-color:var(--info-20,#e1dfff);color:var(--info,#6a61ff);border-bottom-color:var(--info,#6a61ff)}:host(.warning) .outer-container{color:#3a3569;border:none}:host(.warning) .outer-container .modal-header{background-color:var(--warning-20,#fcf4d8);color:var(--warning,#f2c83a);border-bottom-color:var(--warning,#f2c83a)}:host(.stable) .outer-container{color:#3a3569;border:none}:host(.stable) .outer-container .modal-header{background-color:var(--grey-20,#d2d0e7);color:var(--grey-100,#3a3569);border-bottom-color:var(--grey-100,#3a3569)}"}}class o{constructor(){this.modal=document.createElement("yoo-modal"),this.isDisplaying=!1}childClosed(){this.el.classList.add("out"),this.close()}show(){this.isDisplaying=!0,this.el.querySelector("div").insertAdjacentElement("afterend",this.modal)}close(){this.el.querySelector("yoo-modal").remove(),this.isDisplaying=!1}populateModal(t){this.modal=t}generateModal(t){let e=document.createElement("yoo-modal");e=function(t,e){return t.title=e.title,t.titleIcon=e.titleIcon,t.hasFooter=e.hasFooter,t.footerText=e.footerText,t.hasHeader=e.hasHeader,t.primaryButtonText=e.primaryButtonText,t.secondaryButtonText=e.secondaryButtonText,t.className+=e.cssClass,t.content=e.content,t}(e,t),this.modal=e}render(){return t("div",{onClick:()=>this.close(),class:this.isDisplaying?"placeholder":""})}static get is(){return"yoo-modal-controller"}static get encapsulation(){return"scoped"}static get properties(){return{close:{method:!0},el:{elementRef:!0},generateModal:{method:!0},isDisplaying:{state:!0},modal:{state:!0},populateModal:{method:!0},show:{method:!0}}}static get style(){return":host .placeholder{z-index:1000;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards;animation:fadeIn .5s cubic-bezier(.165,.84,.44,1) forwards}:host(.out){-webkit-animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards;-moz-animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards;-o-animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards;animation:fadeOut .5s cubic-bezier(.165,.84,.44,1) forwards}\@keyframes fadeIn{0%{background:0 0}100%{background:rgba(58,67,97,.5)}}\@keyframes fadeOut{0%{background:rgba(58,67,97,.5)}100%{background:0 0}}"}}export{e as YooModal,o as YooModalController};