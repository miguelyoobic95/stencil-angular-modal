import { Component, Method, Element, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'yoo-modal',
    styleUrl: 'yoo-modal.scss',
    scoped: true
})
export class YooModalComponent {

    @Element() el: HTMLElement;

    @Prop() title: string;
    @Prop() titleIcon: string;    
    @Prop() content: HTMLElement;
    @Prop() primaryButtonText: string = 'Confirm';
    @Prop() secondaryButtonText: string = 'Cancel';
    @Prop() hasHeader: boolean = true;
    @Prop() hasFooter: boolean = false;
    @Prop() footerText: string;
    @Prop() cssClass: string;

    @Event() onPrimaryButtonClicked: EventEmitter<boolean>;    
    @Event() onClose: EventEmitter<boolean>;

    handlePrimaryClick(event) {
        if (event) {
            this.onPrimaryButtonClicked.emit(true);
        }
    }

    @Method()
    close() {
        this.el.classList.add('out');
        // timeout is .1s lower than animation time
        setTimeout(() => { 
            this.onClose.emit(true);
            this.el.classList.remove('out');
        }, 400);
    }

    componentDidLoad() {
        if (this.content) {
            this.el.querySelector('div.modal-body').appendChild(this.content);
        }
    }
    
    componentDidUpdate() {
        if (this.content) {
            this.el.querySelector('div.modal-body').appendChild(this.content);
        }
    }

    render() {
        return ( 
            <div class="outer-container">
                {this.hasHeader ?
                    <div class="modal-header" attr-layout="row" attr-layout-align="space-between">
                        <div class="inner-header">
                            {this.titleIcon ? <span class="icon"><i class={this.titleIcon}></i></span> : null }
                            <span class="modal-title">{this.title}</span> 
                        </div>
                        <span class="close-icon" onClick={() => this.close()}><i class="yo-close"></i></span> 
                    </div> 
                : null }
                <div class="modal-body" attr-layout= "row">
                    <slot name="modal-content"/>
                </div>
                {this.hasFooter ? 
                    <div class="modal-footer" attr-layout="row">
                        {this.footerText ? <div class="footer-text"><span>{this.footerText}</span></div> : null}
                        <div class="footer-buttons" attr-layout="row" attr-layout-align="end center">
                            <div class="secondary-button"><yoo-button class="stable" onClick={() => this.close()} title={this.secondaryButtonText}></yoo-button></div>
                            <div class="primary-button"><yoo-button class="accent" onClick={(event: UIEvent) => this.handlePrimaryClick(event)} title={this.primaryButtonText}></yoo-button></div>
                        </div>
                    </div> 
                : null}
            </div>
        );
    }
}

export interface ModalEntry {
    title?: string;
    titleIcon?: string;
    hasHeader?: boolean;
    hasFooter?: boolean;
    footerText?: string;
    content?: HTMLElement;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    cssClass?: string;
}

export function setModalProps(modal: any, props: ModalEntry) {
    modal.title = props.title;
    modal.titleIcon = props.titleIcon;    
    modal.hasFooter = props.hasFooter;
    modal.footerText = props.footerText;
    modal.hasHeader = props.hasHeader;
    modal.primaryButtonText = props.primaryButtonText;
    modal.secondaryButtonText = props.secondaryButtonText;
    modal.className += props.cssClass;
    modal.content = props.content;
    return modal;
}