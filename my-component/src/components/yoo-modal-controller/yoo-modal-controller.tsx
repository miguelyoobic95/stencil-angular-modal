import { Component, Element, State, Method, Listen } from '@stencil/core';
import { ModalEntry, setModalProps } from '../yoo-modal/yoo-modal';

@Component({
    tag: 'yoo-modal-controller',
    styleUrl: 'yoo-modal-controller.scss',
    scoped: true
})
export class YooModalControllerComponent {

    @Element() el: HTMLElement;

    @State() modal: HTMLElement = document.createElement('yoo-modal');
    @State() isDisplaying: boolean = false;
    
    @Listen('onClose')
    childClosed() {
        this.el.classList.add('out');
        // setTimeout(() => {this.isDisplaying = false; }, 300);
        this.close();
    }

    @Method()
    show() {
        this.isDisplaying = true;
        this.el.querySelector('div').insertAdjacentElement('afterend', this.modal);
    }

    @Method()
    close() {
        this.el.querySelector('yoo-modal').remove();
        this.isDisplaying = false;        
    }

    @Method()
    populateModal(modal: HTMLElement) {
        this.modal = modal;
    }

    @Method()
    generateModal(props: ModalEntry) {
        let m = document.createElement('yoo-modal');
        m = setModalProps(m, props);
        this.modal = m;
    }

    render() {
        return (
            <div onClick={() => this.close()}class={this.isDisplaying ? 'placeholder' : ''}></div>
        );

    }
}
