/*! Built with http://stenciljs.com */
mycomponent.loadBundle("9v5fzmi3",["exports"],function(e){var t=window.mycomponent.h,n=function(){function e(){this.disabled=!1}return e.prototype.click=function(){this.onClick.emit(!0)},e.prototype.getDefaultContainer=function(){var e=this;return t("button",{class:"container",onClick:function(){return e.click()}},t("div",{class:"value"},this.icon?t("span",{class:"icon"},t("i",{class:this.icon})):null,this.title))},e.prototype.getLoadingContainer=function(){var e=this;return t("div",{class:"container",onClick:function(){return e.click()}},t("span",{class:"value"},t("img",{src:"assets/loader/loading.svg"})))},e.prototype.getDisabledContainer=function(){return t("button",{class:"container disabled",disabled:!0},t("div",{class:"value"},this.icon?t("span",{class:"icon"},t("i",{class:this.icon})):null,this.title,t("slot",null)))},e.prototype.render=function(){return this.isLoading?this.getLoadingContainer():this.disabled?this.getDisabledContainer():this.getDefaultContainer()},Object.defineProperty(e,"is",{get:function(){return"yoo-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},icon:{type:String,attr:"icon"},isLoading:{type:Boolean,attr:"is-loading"},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onClick",method:"onClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-yoo-button-host]   .container[data-yoo-button]{display:inline-flex;justify-content:center;padding:.5rem 1rem;border-radius:5px;max-width:15rem;cursor:pointer;transition:all .3s;border:1px solid var(--grey-20,#d2d0e7)}[data-yoo-button-host]   .container[data-yoo-button]:hover{box-shadow:0 3px 6px 0 rgba(58,67,97,.2);transform:translateY(-2px);background:var(--grey-05,#f4f3f9)}[data-yoo-button-host]   .container[data-yoo-button]:active, [data-yoo-button-host]   .container[data-yoo-button]:focus{outline:0!important}[data-yoo-button-host]   .container.disabled[data-yoo-button]{pointer-events:none;opacity:.4}[data-yoo-button-host]   .container[data-yoo-button]   .icon[data-yoo-button]{font-size:1rem;padding-right:1rem;padding-left:.5rem}[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{font-size:1rem;line-height:1.5;text-align:center}[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]   img[data-yoo-button]{width:1rem}.round[data-yoo-button-host]   .container[data-yoo-button]{border-radius:2rem}.block[data-yoo-button-host]   .container[data-yoo-button]{display:block;width:100%;max-width:100%}.icon-only[data-yoo-button-host]   .container[data-yoo-button]{width:2.625rem}.icon-only[data-yoo-button-host]   .container[data-yoo-button]   .icon[data-yoo-button]{padding-left:0;padding-right:0}.small[data-yoo-button-host]   .container[data-yoo-button]{padding:.375rem 1rem}.small[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{font-size:.75rem;line-height:1.5;text-align:center}.accent[data-yoo-button-host]   .container[data-yoo-button]{background:var(--accent,#1c76fc);border:1px solid var(--accent,#1c76fc)}.accent[data-yoo-button-host]   .container[data-yoo-button]:hover{background:var(--accent-110,#3059df)}.accent[data-yoo-button-host]   .container[data-yoo-button]:active{background:var(--accent-120,#2a4fc8)}.accent[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.stable[data-yoo-button-host]   .container[data-yoo-button]{background:var(--grey-10,#e9e8f3);border:1px solid var(--grey-20,#d2d0e7)}.stable[data-yoo-button-host]   .container[data-yoo-button]:hover{background:var(--grey-20,#d2d0e7)}.stable[data-yoo-button-host]   .container[data-yoo-button]:active{background:var(--grey-40,#a6a1d0)}.stable[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--grey-100,#3a3569)}.link[data-yoo-button-host]   .container[data-yoo-button]{background:var(--transparent,transparent);border:1px solid var(--transparent,transparent)}.link[data-yoo-button-host]   .container[data-yoo-button]:hover{background:var(--accent-05,#f4f8ff)}.link[data-yoo-button-host]   .container[data-yoo-button]:active{background:var(--accent-10,#e8f1ff)}.link[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--accent,#1c76fc);fill:var(--accent,#1c76fc)}.link-transparent[data-yoo-button-host]   .container[data-yoo-button]{background:var(--transparent,transparent);border:1px solid var(--transparent,transparent);color:var(--grey-40,#a6a1d0);fill:var(--grey-40,#a6a1d0)}.link-transparent[data-yoo-button-host]   .container[data-yoo-button]:hover{color:var(--accent-110,#3059df);background:var(--transparent,transparent);box-shadow:none;transform:translateY(0)}.link-transparent[data-yoo-button-host]   .container[data-yoo-button]:active{background:var(--transparent,transparent);color:var(--accent-120,#2a4fc8)}.danger[data-yoo-button-host]   .container[data-yoo-button]{background:var(--danger,#ef6e7f);border:1px solid var(--danger,#ef6e7f)}.danger[data-yoo-button-host]   .container[data-yoo-button]:hover{background:var(--danger-110,#f45a5a)}.danger[data-yoo-button-host]   .container[data-yoo-button]:active{background:var(--danger-120,#f44646)}.danger[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.success[data-yoo-button-host]   .container[data-yoo-button]{background:var(--success,#07ccc0);border:1px solid var(--success,#07ccc0)}.success[data-yoo-button-host]   .container[data-yoo-button]:hover{background:var(--success-110,#1abd9c)}.success[data-yoo-button-host]   .container[data-yoo-button]:active{background:var(--success-120,#01a584)}.success[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.info[data-yoo-button-host]   .container[data-yoo-button]{background:var(--info,#6a61ff);border:1px solid var(--info,#6a61ff)}.info[data-yoo-button-host]   .container[data-yoo-button]:hover{background:var(--info-110,#7165f2)}.info[data-yoo-button-host]   .container[data-yoo-button]:active{background:var(--info-120,#5c4df9)}.info[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.gradient-accent[data-yoo-button-host]   .container[data-yoo-button]{border:1px solid var(--accent,#1c76fc);background:var(--gradient-accent,linear-gradient(90deg,#1c76fc 0,#d6e7ff 160.99%))}.gradient-accent[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.gradient-info[data-yoo-button-host]   .container[data-yoo-button]{border:1px solid var(--info,#6a61ff);background:var(--gradient-info,linear-gradient(264deg,#f564b6,#6f3cfe))}.gradient-info[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.gradient-grey[data-yoo-button-host]   .container[data-yoo-button]{border:1px solid var(--grey,);background:var(--gradient-grey,linear-gradient(90deg,#3a3569 0,#4334a3 102.47%))}.gradient-grey[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.gradient-danger[data-yoo-button-host]   .container[data-yoo-button]{border:1px solid var(--danger,#ef6e7f);background:var(--gradient-danger,linear-gradient(264deg,#febd3c,#f76c6c))}.gradient-danger[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.gradient-warning[data-yoo-button-host]   .container[data-yoo-button]{border:1px solid var(--warning,#f2c83a);background:var(--gradient-warning,linear-gradient(90deg,#f2c83a 0,#ffe385 160.99%))}.gradient-warning[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}.gradient-success[data-yoo-button-host]   .container[data-yoo-button]{border:1px solid var(--success,#07ccc0);background:var(--gradient-success,linear-gradient(90deg,#07ccc0 0,#87fff8 160.99%))}.gradient-success[data-yoo-button-host]   .container[data-yoo-button]   .value[data-yoo-button]{color:var(--light,#fff);fill:var(--light,#fff)}"},enumerable:!0,configurable:!0}),e}();e.YooButton=n,Object.defineProperty(e,"__esModule",{value:!0})});