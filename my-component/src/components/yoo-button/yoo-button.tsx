import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'yoo-button',
    styleUrl: 'yoo-button.scss',
    scoped: true
})
export class YooButtonComponent {

    @Prop() title: string;
    @Prop() disabled : boolean = false;
    @Prop() isLoading: boolean;
    @Prop() icon: string;    

    @Event() onClick: EventEmitter<boolean>;

    click() {
        this.onClick.emit(true);
    }
    getDefaultContainer() {
        return (
            <button class="container" onClick={() => this.click()}>
                <div class="value">
                    {this.icon ? <span class="icon"><i class={this.icon}></i></span> : null}
                    {this.title}
                </div>
            </button>
        );
    }

    getLoadingContainer() {
        return (
            <div class="container" onClick={() => this.click()}>
                <span class="value"><img src="assets/loader/loading.svg" /></span>
            </div>
        );
    }

    getDisabledContainer() {
        return (
            <button class="container disabled" disabled>
                <div class="value">
                    {this.icon ? <span class="icon"><i class={this.icon}></i></span> : null}
                    {this.title}
                    <slot></slot>
                </div>
            </button>
        );
    }
    render() {
        return (
            (this.isLoading ?  this.getLoadingContainer() : (this.disabled ? this.getDisabledContainer() : this.getDefaultContainer() ))
        );
    }

}
